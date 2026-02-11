import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock = ({ code, language = "bash" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-code rounded-t-lg border border-border/50 border-b-0">
        <span className="text-xs font-mono text-muted-foreground">{language}</span>
        <Button
          size="sm"
          variant="ghost"
          className="h-7 px-2 text-muted-foreground hover:text-foreground hover:bg-secondary"
          onClick={handleCopy}
        >
          {copied ? (
            <><Check className="h-3.5 w-3.5 text-success mr-1" /> Copiado</>
          ) : (
            <><Copy className="h-3.5 w-3.5 mr-1" /> Copiar</>
          )}
        </Button>
      </div>
      <div className="bg-code text-code-foreground rounded-b-lg p-4 overflow-x-auto border border-border/50 border-t-0">
        <code className="text-sm font-mono whitespace-pre">{code}</code>
      </div>
    </div>
  );
};
