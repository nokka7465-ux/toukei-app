"use client";

import { useEffect, useRef, useState } from "react";

const PARAM_KEY = "s";

/** Base64URL エンコード(UTF-8 安全) */
function b64urlEncode(text: string): string {
  // encodeURIComponent → escape して latin-1 化 → btoa
  const utf8 = unescape(encodeURIComponent(text));
  const b64 = btoa(utf8);
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function b64urlDecode(b64url: string): string {
  const b64 =
    b64url.replace(/-/g, "+").replace(/_/g, "/") +
    "===".slice(0, (4 - (b64url.length % 4)) % 4);
  const utf8 = atob(b64);
  return decodeURIComponent(escape(utf8));
}

/**
 * ツール状態を URL クエリ ?s=<base64url(JSON)> と同期する hook。
 * - 初期マウント時に URL を読んで既定状態とマージ(部分指定 OK)
 * - state 変更時に URL を replaceState で書き換え(履歴汚染なし)
 * - getShareUrl() で完全な共有 URL を取得
 */
export function useToolUrlState<T extends object>(
  defaultState: T,
): {
  state: T;
  setState: (updater: T | ((prev: T) => T)) => void;
  getShareUrl: () => string;
} {
  const [state, setStateRaw] = useState<T>(defaultState);
  const hydratedRef = useRef(false);

  // 初期化: URL から復元
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hydratedRef.current) return;
    hydratedRef.current = true;
    try {
      const url = new URL(window.location.href);
      const raw = url.searchParams.get(PARAM_KEY);
      if (!raw) return;
      const decoded = b64urlDecode(raw);
      const parsed = JSON.parse(decoded);
      if (parsed && typeof parsed === "object") {
        setStateRaw((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // 不正な URL パラメータは無視
    }
  }, []);

  // state 変更時 URL を書き換え
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!hydratedRef.current) return;
    try {
      const url = new URL(window.location.href);
      const encoded = b64urlEncode(JSON.stringify(state));
      url.searchParams.set(PARAM_KEY, encoded);
      window.history.replaceState(null, "", url.toString());
    } catch {
      // ignore
    }
  }, [state]);

  const getShareUrl = (): string => {
    if (typeof window === "undefined") return "";
    try {
      const url = new URL(window.location.href);
      const encoded = b64urlEncode(JSON.stringify(state));
      url.searchParams.set(PARAM_KEY, encoded);
      return url.toString();
    } catch {
      return typeof window !== "undefined" ? window.location.href : "";
    }
  };

  return { state, setState: setStateRaw, getShareUrl };
}
