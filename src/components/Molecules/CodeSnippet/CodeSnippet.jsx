import React, { useState } from "react";
import PropTypes from "prop-types";
import "./CodeSnippet.css";

export const CodeSnippet = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  return (
    <div className="fs-code">
      <code className="fs-footnote">{code}</code>
      <button className="copy-button" onClick={handleCopy}>
        {copySuccess ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

CodeSnippet.propTypes = {
  code: PropTypes.string,
};
