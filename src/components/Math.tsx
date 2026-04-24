import katex from "katex";

type Props = {
  tex: string;
  block?: boolean;
};

export function Math({ tex, block = false }: Props) {
  const html = katex.renderToString(tex, {
    displayMode: block,
    throwOnError: false,
    output: "html",
  });
  if (block) {
    return (
      <div
        className="my-2 overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
