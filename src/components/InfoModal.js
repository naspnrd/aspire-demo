import React from "react";
import Modal from "./Modal.js";

const InfoModal = ({ showModal, onConfirm }) => {
  return (
    <Modal showModal={showModal}>
      <p>You must have atleast one card</p>
      <button onClick={onConfirm}>Ok</button>
    </Modal>
  );
};

export default InfoModal;
