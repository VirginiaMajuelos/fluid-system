import React from "react";
import PropTypes from "prop-types";
import "./button.css";

export const Button = ({
  primary = false,
  backgroundColor = null,
  size = "medium",
  variant = "secondary",
  onClick = undefined,
  children,
  ...props
}) => {
  const mode = variant
    ? `fs-button--${variant}`
    : primary
    ? "fs-button--primary"
    : "fs-button--secondary";

  return (
    <button
      type="button"
      className={["fs-button", `fs-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "mosaic",
  ]),
  onClick: PropTypes.func,
};
