import React from "react";
import Modal from "./Modal.js";
import "./modalForm.scss";

const ModalForm = ({
  showModal,
  formData,
  formErrors,
  handleChange,
  handleSubmit,
  closeModal,
}) => {
  return (
    <Modal showModal={showModal}>
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <div className="error">{formErrors.firstName}</div>
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <div className="error">{formErrors.lastName}</div>
        </label>
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default ModalForm;
