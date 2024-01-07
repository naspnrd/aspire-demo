import React from "react";
import Modal from "./Modal.js";
import styles from "./confirmModal.module.scss";

const ConfirmModal = ({ showModal, onConfirm, onCancel }) => {
  return (
    <Modal showModal={showModal}>
      <p>Are you sure you want to Cancel this card?</p>
      <div className={styles.decisionContainer}>
        <button className={styles.btn} onClick={onCancel}>
          <span>NO</span>
        </button>
        <button className={styles.btn} onClick={onConfirm}>
          <span className={styles.textColor}>YES</span>
        </button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
