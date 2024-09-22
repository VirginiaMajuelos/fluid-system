import React, { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Clipboard from "clipboard";
import "./CodeSnippet.css";

const CodeSnippet = ({ codeString, language }) => {
  useEffect(() => {
    const clipboard = new Clipboard(".copy-btn");
    return () => clipboard.destroy();
  }, []);

  return (
    <div className="code-snippet">
      <button className="copy-btn" data-clipboard-text={codeString}>
        Copy
      </button>
      <SyntaxHighlighter language={language} style={solarizedlight}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeSnippet;
