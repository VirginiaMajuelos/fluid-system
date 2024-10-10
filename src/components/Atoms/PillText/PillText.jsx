import PropTypes from "prop-types";
import "./PillText.css";

export const PillText = ({ status, children }) => {
  const bgColor = {
    primary: "#ffa294",
    secondary: "#a3a3f9",
    tertiary: "#545fe7",
  };

  const textColor = {
    dark: "#151321",
    light: "#f4f4f4",
  };

  return (
    <span
      className={`fs-text fs-text--${status}`}
      style={{
        backgroundColor: bgColor[status],
        color: textColor.light,
      }}
    >
      {children}
    </span>
  );
};

PillText.propTypes = {
  status: PropTypes.oneOf(["primary", "secondary", "tertiary"]).isRequired,
  children: PropTypes.node.isRequired,
};
