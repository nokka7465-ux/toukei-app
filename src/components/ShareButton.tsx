type Props = {
  url: string;
  text: string;
  hashtags?: string[];
  via?: string;
};

export function ShareButton({ url, text, hashtags, via }: Props) {
  const params = new URLSearchParams({
    url,
    text,
  });
  if (hashtags && hashtags.length > 0) {
    params.set("hashtags", hashtags.join(","));
  }
  if (via) {
    params.set("via", via);
  }
  const intentUrl = `https://twitter.com/intent/tweet?${params.toString()}`;

  return (
    <a
      href={intentUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-[var(--page-border-strong)] rounded text-xs ui-sans hover:bg-[var(--background)]"
    >
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
      X でシェア
    </a>
  );
}
