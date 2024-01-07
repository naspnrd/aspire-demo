import React, { useState } from "react";
import plus from "../assets/plus.svg";
import ContentContainer from "./ContentContainer";
import styles from "./mainContainer.module.scss";
import {
  generateUniqueCards,
  getCardDetailsList,
  updateCardDetailsList,
} from "../utils";
import ModalForm from "./FormModal";
import ConfirmModal from "./ConfirmModal";
import InfoModal from "./InfoModal";

const MainContainer = () => {
  const [userCardDetails, setUserCardDetails] = useState(getCardDetailsList());
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [disable, setDisable] = useState([]);
  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmationModal, setIsConfirmationModal] = useState(false);
  const [isInfoModal, setIsInfoModal] = useState(false);
  const [active, setActive] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear any previous error when the user types
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (formData.firstName.trim() === "") {
      errors.firstName = "First Name is required";
    }
    if (formData.lastName.trim() === "") {
      errors.lastName = "Last Name is required";
    }

    // If there are errors, update the state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // If no errors, submit the form and close the modal
      console.log(formData);
      handleCloseModal();
      const userCardDetail = {
        ...formData,
        ...generateUniqueCards(),
      };
      setUserCardDetails((oldData) => [userCardDetail, ...oldData]);
      updateCardDetailsList([userCardDetail, ...getCardDetailsList()]);
    }
  };

  const handleDeleteCard = (index) => {
    if (index === 4) {
      const cardDetailsList = getCardDetailsList();
      if (cardDetailsList.length === 1) {
        setIsInfoModal(true);
        return;
      }
      setIsConfirmationModal(true);
    } else if (index === 0) {
      const searchIndex = disable.findIndex((item) => item === active);
      if (searchIndex >= 0) {
        const newDisableArray = disable
          .slice(0, searchIndex)
          .concat(disable.slice(searchIndex + 1));
        setDisable(newDisableArray);
      } else {
        setDisable((prev) => [...prev, active]);
      }
    }
  };

  const deleteConfirmation = () => {
    const currentCardDetails = getCardDetailsList();
    const newArray = [
      ...currentCardDetails.slice(0, active),
      ...currentCardDetails.slice(active + 1),
    ];
    setUserCardDetails(newArray);
    updateCardDetailsList(newArray);
    setIsConfirmationModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <span className={styles.title}>Account balance</span>
        <div className={styles.actionContainer}>
          <div className={styles.amountContainer}>
            <div className={styles.currency}>
              <span className={styles.currencyIcon}>S$</span>
            </div>
            <span>3,000</span>
          </div>
          <div className={styles.buttonContainer} onClick={handleOpenModal}>
            <img src={plus} alt="add new" />
            <span>New Card</span>
          </div>
        </div>
      </div>
      <ContentContainer
        activeItem={active}
        setActiveItem={(index) => setActive(index)}
        userCardDetails={userCardDetails}
        handleDeleteCard={handleDeleteCard}
        disable={disable}
      />
      <ModalForm
        showModal={isModalOpen}
        closeModal={handleCloseModal}
        formData={formData}
        formErrors={formErrors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <ConfirmModal
        showModal={isConfirmationModal}
        onConfirm={() => deleteConfirmation()}
        onCancel={() => setIsConfirmationModal(false)}
      />
      <InfoModal
        showModal={isInfoModal}
        onConfirm={() => setIsInfoModal(false)}
      />
    </div>
  );
};

export default MainContainer;
