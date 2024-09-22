import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ size, children, ...props }) => {
  const sizeClass = size ? `fs-card--${size}` : "";

  return (
    <div className={`fs-card ${sizeClass}`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
