import React from "react";
import PropTypes from "prop-types";
import "./Spinner.css";

export const Spinner = ({
  variant = "dots",
  size = "medium",
  color = "primary",
}) => {
  return (
    <div
      className={`fs-spinner fs-spinner--${variant} fs-spinner--${size} fs-spinner--${color} fs-m4`}
    >
      {variant === "dots" ? (
        <>
          <div className="fs-spinner__dot"></div>
          <div className="fs-spinner__dot"></div>
          <div className="fs-spinner__dot"></div>
        </>
      ) : (
        <div className="fs-spinner__circle"></div>
      )}
    </div>
  );
};

Spinner.propTypes = {
  variant: PropTypes.oneOf(["dots", "circle"]).isRequired,
  size: PropTypes.oneOf(["medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
};

Spinner.defaultProps = {
  size: "medium",
  color: "primary",
};
