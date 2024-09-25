import React, { useState } from "react";
import "./Accordion.css"; // Asegúrate de que este nombre sea correcto
import { AiOutlineDown } from "react-icons/ai";
import PropTypes from "prop-types";

export const Accordion = ({ variant = "light", children, ...props }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={`fs-accordion fs-accordion--${variant}`}>
      <div className="fs-accordion--header" onClick={handleShow} {...props}>
        <p className="fs--body">Accordion</p>
        <AiOutlineDown
          className={`fs-accordion--icon ${
            show ? "fs-accordion--icon__rotate" : ""
          }`}
        />
      </div>
      <div
        className={`fs--accordion-body ${
          show ? "fs--accordion-body__show" : ""
        }`}
      >
        <p className="fs--body">
          {children ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "}
        </p>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  variant: PropTypes.oneOf(["light", "inverse"]),
  children: PropTypes.node.isRequired,
};
