import React from "react";
import "./modal.scss";

const Modal = ({ showModal, children }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default Modal;
