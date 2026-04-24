import type { TextbookBlock } from "@/types/content";
import { Math } from "./Math";
import { MixedText } from "./MixedText";

function renderInline(text: string) {
  // Split on ** for simple bold, then render each part with MixedText for inline math.
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={i}>
          <MixedText text={part.slice(2, -2)} />
        </strong>
      );
    }
    return <MixedText key={i} text={part} />;
  });
}

function renderParagraphs(text: string) {
  return text.split("\n\n").map((chunk, i) => (
    <p key={i} className="leading-relaxed my-2">
      {renderInline(chunk)}
    </p>
  ));
}

export function TextbookBody({ blocks }: { blocks: TextbookBlock[] }) {
  return (
    <div className="prose-textbook">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "p":
            return (
              <p key={idx} className="leading-relaxed">
                {renderInline(block.text)}
              </p>
            );
          case "math":
            return <Math key={idx} tex={block.tex} block />;
          case "def":
            return (
              <div key={idx} className="def-box">
                <div className="def-box-title">{block.title}</div>
                <div className="leading-relaxed">{renderParagraphs(block.body)}</div>
              </div>
            );
          case "ex":
            return (
              <div key={idx} className="example-box">
                <div className="example-box-title">{block.title}</div>
                <div className="leading-relaxed">{renderParagraphs(block.body)}</div>
              </div>
            );
          case "list": {
            const Tag = block.style === "number" ? "ol" : "ul";
            const className =
              block.style === "number"
                ? "list-decimal list-outside ml-6 my-3 space-y-1"
                : "list-disc list-outside ml-6 my-3 space-y-1";
            return (
              <Tag key={idx} className={className}>
                {block.items.map((item, i) => (
                  <li key={i} className="leading-relaxed">
                    {renderInline(item)}
                  </li>
                ))}
              </Tag>
            );
          }
          case "h3":
            return (
              <h3 key={idx} className="text-lg">
                {block.text}
              </h3>
            );
          case "h4":
            return (
              <h4 key={idx} className="text-base">
                {block.text}
              </h4>
            );
        }
      })}
    </div>
  );
}
