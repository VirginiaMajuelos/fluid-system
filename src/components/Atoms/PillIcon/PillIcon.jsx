import React from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck, AiOutlineWarning } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import "./PillIcon.css";

export const PillIcon = ({
  status,
  shape,
  showIcon,
  backgroundColor,
  fontColor,
}) => {
  const renderIcon = () => {
    switch (status) {
      case "correct":
        return <AiOutlineCheck />;
      case "warning":
        return <AiOutlineWarning />;
      case "alert":
        return <MdOutlineCancel />;
      default:
        return null;
    }
  };

  const pillIconStyle = {
    backgroundColor: backgroundColor || "transparent",
    color: fontColor || "inherit",
  };

  const bgColor = {
    correct: "#15be77",
    warning: "#ffa100",
    alert: "#ff005c",
  };

  return (
    <span
      className={`fs-icon fs-icon--${status} fs-icon--${shape}`}
      style={{
        ...pillIconStyle,
        backgroundColor: bgColor[status],
        color: fontColor,
      }}
    >
      {showIcon && (shape === "circle" || shape === "square") && renderIcon()}
    </span>
  );
};

PillIcon.propTypes = {
  status: PropTypes.oneOf(["correct", "warning", "alert"]).isRequired,
  shape: PropTypes.oneOf(["circle", "square"]).isRequired,
  showIcon: PropTypes.bool,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};
