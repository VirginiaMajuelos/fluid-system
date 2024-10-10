import React, { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineDown } from "react-icons/ai";
import "./Accordion.css"; 

export const Accordion = ({ variant = "light", children, ...props }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={`fs-accordion fs-accordion--${variant}`}>
      <div className="fs-accordion--header" onClick={handleShow} {...props}>
        <p className="fs-body">Accordion</p>
        <AiOutlineDown
          className={`fs-accordion--icon ${
            show ? "fs-accordion--icon__rotate" : ""
          }`}
        />
      </div>
      <div
        className={`fs-accordion-body ${show ? "fs-accordion-body__show" : ""}`}
      >
        <p className="fs-body">
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
