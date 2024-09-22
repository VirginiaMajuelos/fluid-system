// CodeSnippet.js
import React, { useState } from "react";
import "./CodeSnippet.css"; // Puedes crear un archivo CSS para estilizarlo

const CodeSnippet = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  // Función para copiar el texto al portapapeles
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500); // Mensaje de éxito por 2 segundos
  };

  return (
    <div className="fs--code">
      <code className="fs--footnote">{code}</code>
      <button className="copy-button" onClick={handleCopy}>
        {copySuccess ? "Copied!" : "Copy"}
      </button>
      {/* {copySuccess && <p className="copy-success">Copied!</p>} */}
    </div>
  );
};

export default CodeSnippet;
