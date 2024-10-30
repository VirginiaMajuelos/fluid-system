// Modal.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@components/Atoms/Button/Button"; // Importa tu botón existente
import "./Modal.css"; // Solo si tienes estilos específicos para el modal

export const Modal = ({ triggerId, buttonText, variant, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button variant={variant} data-fs-id={triggerId} onClick={toggleModal}>
        {buttonText}
      </Button>
      {isOpen && (
        <div className="fs-modal-overlay" onClick={toggleModal}>
          <div
            className="fs-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="fs-modal-close" onClick={toggleModal}>
              &times;
            </button>
            <div>{children}</div>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  triggerId: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "mosaic",
  ]).isRequired,
  children: PropTypes.node.isRequired,
};
