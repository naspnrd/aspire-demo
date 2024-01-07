import React from "react";
import RemoveEye from "../assets/remove_eye.svg";
import visaLogo from "../assets/visa-logo.svg";
import aspireLogo from "../assets/white-aspire-logo.svg";
import FreezeCard from "../assets/freezeCard.svg";
import SetSpendLimit from "../assets/setSpendLimit.svg";
import ReplaceCard from "../assets/replaceCard.svg";
import GPay from "../assets/gpay.svg";
import DeactivateCard from "../assets/deactivateCard.svg";
import styles from "./leftContainer.module.scss";

const CardContainer = ({
  firstName,
  lastName,
  cardNumber,
  expirationDate,
  cvv,
  disableState,
  active,
}) => {
  return (
    <div
      className={`${styles.cardContainer} ${disableState && styles.deactive} ${
        styles.slide
      } ${active ? `${styles.active}` : ""}`}
    >
      <img className={styles.cardLogo} src={aspireLogo} alt="aspire logo" />
      <span className={styles.cardName}>{`${firstName} ${lastName}`}</span>
      <div className={styles.cardNumber}>
        {cardNumber.map((item) => `${item}  `)}
      </div>
      <div className={styles.cardInfo}>
        <span className={styles.date}>Thru: {expirationDate}</span>
        <span className={styles.cvv}>CVV: {cvv}</span>
      </div>
      <img className={styles.visaLogo} src={visaLogo} alt="visa logo" />
    </div>
  );
};

const LeftContainer = ({
  cardDetails,
  handleDelete,
  active,
  setActive,
  disableList,
}) => {
  const getCardFreezeState = () => {
    const findIndex = disableList.findIndex((item) => item === active);
    return findIndex >= 0;
  };
  const menuItems = [
    {
      id: 0,
      icon: FreezeCard,
      title: getCardFreezeState() ? "Unfreeze card" : "Freeze card",
      altName: "Freeze card",
    },
    {
      id: 1,
      icon: SetSpendLimit,
      title: "Set spend limit",
      altName: "Set spend limit",
    },
    { id: 2, icon: GPay, title: "Add to GPay", altName: "Add to Gpay" },
    {
      id: 3,
      icon: ReplaceCard,
      title: "Replace card",
      altName: "Replace card",
    },
    {
      id: 4,
      icon: DeactivateCard,
      title: "Cancel card",
      altName: "Cancel card",
    },
  ];

  return (
    <div className={styles.leftContainer}>
      <div className={styles.hideButton}>
        <img src={RemoveEye} alt="eye icon" />
        <span>Hide card number</span>
      </div>
      <>
        {cardDetails?.map((item, i) => (
          <CardContainer
            key={`${item.cvv + i}`}
            active={i === active}
            disableState={getCardFreezeState()}
            firstName={item.firstName}
            lastName={item.lastName}
            cardNumber={item.cardNumber}
            expirationDate={item.expirationDate}
            cvv={item.cvv}
          />
        ))}
        <div className={styles.bulletedNavigation}>
          {cardDetails.map((item, i) => (
            <div
              key={`${item.cvv + i}`}
              className={`${styles.dot} ${i === active ? styles.active : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </>
      <div className={styles.menuContainer}>
        {menuItems.map((item, idx) => (
          <div
            key={item.id}
            className={styles.menuItemContainer}
            onClick={() => handleDelete(idx)}
          >
            <img src={item.icon} alt={item.altName} />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftContainer;
