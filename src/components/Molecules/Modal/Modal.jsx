// Modal.js
import React from "react";
import "./Modal.css";

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null; // No mostrar el modal si `show` es falso
  return (
    <div className="fs--modal-overlay" onClick={onClose}>
      <div className="fs--modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="fs--modal-close" onClick={onClose}>
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
