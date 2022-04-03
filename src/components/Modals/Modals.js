import styles from "./Modals.module.css";
import ReactDOM from "react-dom";

const Modals = ({ isVisible, onClose, children }) => {
  const portalModal = document.getElementById("modal-box");

  if (isVisible) {
    return (
      <div onClick={onClose}>
        {ReactDOM.createPortal(
          <div className={styles.overlay}>
            <div className={styles.modal}>{children}</div>
          </div>,
          portalModal
        )}
      </div>
    );
  }
};

export default Modals;
