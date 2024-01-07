import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import styles from "./contentContainer.module.scss";

const ContentContainer = ({
  userCardDetails,
  activeItem,
  setActiveItem,
  handleDeleteCard,
  disable,
}) => {
  return (
    <div className={styles.contentContainer}>
      <LeftContainer
        active={activeItem}
        disableList={disable}
        setActive={setActiveItem}
        cardDetails={userCardDetails}
        handleDelete={handleDeleteCard}
      />
      <RightContainer />
    </div>
  );
};

export default ContentContainer;
