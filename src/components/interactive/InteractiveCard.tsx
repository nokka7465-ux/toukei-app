type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function InteractiveCard({ title, description, children }: Props) {
  return (
    <article className="paper rounded-lg p-5 md:p-6">
      <header className="mb-4 pb-3 border-b border-[var(--page-border)]">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        {description && (
          <p className="text-xs text-[var(--muted-strong)] leading-relaxed">
            {description}
          </p>
        )}
      </header>
      {children}
    </article>
  );
}
