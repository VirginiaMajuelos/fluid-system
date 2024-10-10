import PropTypes from "prop-types";
import "./Modal.css";

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;
  return (
    <div className="fs-modal-overlay" onClick={onClose}>
      <div className="fs-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="fs-modal-close" onClick={onClose}>
          &times;
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

Modal.PropTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.bool,
  children: PropTypes.node.isRequired,
}