import React from "react";

import PropTypes from "prop-types";

import "./button.css";

/** Primary UI component for user interaction */
export const Button = ({
  primary,
  backgroundColor,
  size,
  children,
  variant,
  ...props
}) => {
  const mode = variant
    ? `fs-button--${variant}` // Si hay un variant, lo usa
    : primary
    ? "fs-button--primary" // Si no hay variant pero primary es true, usa primary
    : "fs-button--secondary"; // Si no hay variant ni primary, usa secondary

  return (
    <button
      type="button"
      className={["fs-button", `fs-button--${size}`, mode].join(" ")}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: PropTypes.bool,
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Button contents */
  // label: PropTypes.string.isRequired,

  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "mosaic",
  ]),
  /** Optional click handler */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  variant: "secondary",
  onClick: undefined,
};
