/* Service Worker for 統計ロードマップ.
 * Strategy:
 *   - HTML pages: network-first, fall back to cache, then to /offline.
 *   - Static assets (Next.js _next/static): cache-first (immutable hashes).
 *   - Other GET requests: stale-while-revalidate.
 *   - All non-GET passes through untouched.
 */

const VERSION = "v3";
const HTML_CACHE = `toukei-html-${VERSION}`;
const STATIC_CACHE = `toukei-static-${VERSION}`;
const RUNTIME_CACHE = `toukei-runtime-${VERSION}`;
const OFFLINE_URL = "/offline";

const PRECACHE_URLS = ["/", OFFLINE_URL, "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(HTML_CACHE);
      // Best effort precache; ignore failures so install doesn't break.
      await Promise.all(
        PRECACHE_URLS.map((u) =>
          cache.add(new Request(u, { cache: "reload" })).catch(() => {}),
        ),
      );
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter(
            (k) => ![HTML_CACHE, STATIC_CACHE, RUNTIME_CACHE].includes(k),
          )
          .map((k) => caches.delete(k)),
      );
      await self.clients.claim();
    })(),
  );
});

function isHtmlRequest(request) {
  if (request.mode === "navigate") return true;
  const accept = request.headers.get("accept") || "";
  return accept.includes("text/html");
}

function isStaticAsset(url) {
  return (
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/icons/") ||
    url.pathname === "/manifest.webmanifest" ||
    /\.(?:js|css|woff2?|ttf|otf|svg|png|jpg|jpeg|gif|webp|ico)$/.test(
      url.pathname,
    )
  );
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  // Skip GA / OG image generation; they should always go to network.
  if (url.pathname.startsWith("/og/")) return;
  if (url.pathname.startsWith("/api/")) return;

  if (isHtmlRequest(request)) {
    event.respondWith(networkFirstHtml(request));
    return;
  }
  if (isStaticAsset(url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }
  event.respondWith(staleWhileRevalidate(request, RUNTIME_CACHE));
});

async function networkFirstHtml(request) {
  const cache = await caches.open(HTML_CACHE);
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch {
    const cached = await cache.match(request);
    if (cached) return cached;
    const offline = await cache.match(OFFLINE_URL);
    if (offline) return offline;
    return new Response("Offline", {
      status: 503,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
}

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  if (cached) return cached;
  try {
    const fresh = await fetch(request);
    if (fresh && fresh.ok) {
      cache.put(request, fresh.clone());
    }
    return fresh;
  } catch {
    return new Response("", { status: 504 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => undefined);
  return cached || (await network) || new Response("", { status: 504 });
}

// Allow the page to ask for a forced update.
self.addEventListener("message", (event) => {
  if (event.data === "skip-waiting") self.skipWaiting();
});
