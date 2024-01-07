import React from "react";
import cardGroup from "../assets/card-group.svg";
import transactionGroup from "../assets/transaction-group.svg";
import next from "../assets/next.svg";
import flights from "../assets/flights.svg";
import megaphone from "../assets/megaphone.svg";
import fileStorage from "../assets/file-storage.svg";
import debitCard from "../assets/business-and-finance.svg";
import downArrow from "../assets/down-arrow.svg";
import upArrow from "../assets/up-arrow.svg";
import styles from "./rightContainer.module.scss";

const CardContainer = ({
  icon,
  title,
  iconAltName,
  sideIcon,
  sideIconAltName,
  borderBottomNone,
  style,
}) => {
  return (
    <div
      className={`${styles.cardContainer} ${
        borderBottomNone && styles.borderBottomNone
      }`}
      style={{ ...style }}
    >
      <div className={styles.header}>
        <img src={icon} alt={iconAltName}></img>
        <span>{title}</span>
      </div>
      <img src={sideIcon} alt={sideIconAltName} />
    </div>
  );
};

const TransactionHistoryContainer = ({
  leftIcon,
  leftAltName,
  rightIcon,
  rightAltName,
  transactionName,
  transactionDate,
  statusIcon,
  statusAltName,
  statusName,
  amount,
  isActive,
}) => {
  return (
    <div className={styles.transactionHistory}>
      <div className={styles.description}>
        <div className={styles.icon}>
          <img src={leftIcon} alt={leftAltName} />
        </div>
        <div className={styles.header}>
          <span className={styles.title}>{transactionName}</span>
          <span className={styles.subtitle}>{transactionDate}</span>
          <div className={styles.iconContainer}>
            <img src={statusIcon} alt={statusAltName} />
            <span>{statusName}</span>
          </div>
        </div>
      </div>
      <div className={styles.sideNavigate}>
        <span className={`${isActive && styles.successText}`}>{amount}</span>
        <img src={rightIcon} alt={rightAltName} />
      </div>
    </div>
  );
};

const RightContainer = () => {
  const transactionHistory = [
    {
      id: 0,
      leftIcon: fileStorage,
      leftAltName: "file storage",
      transactionName: "Hamleys",
      transactionDate: "20 May 2020",
      statusIcon: debitCard,
      statusAltName: "Debit Card",
      statusName: "Charged to debit card",
      amount: "+ S$ 150",
      rightIcon: next,
      rightAltName: "next",
      isActive: true,
    },
    {
      id: 1,
      leftIcon: flights,
      leftAltName: "flights",
      transactionName: "Hamleys",
      transactionDate: "20 May 2020",
      statusIcon: debitCard,
      statusAltName: "Debit Card",
      statusName: "Refund on debit card",
      amount: "+ S$ 150",
      rightIcon: next,
      rightAltName: "next",
    },
    {
      id: 2,
      leftIcon: megaphone,
      leftAltName: "mega phone",
      transactionName: "Hamleys",
      transactionDate: "20 May 2020",
      statusIcon: debitCard,
      statusAltName: "Debit Card",
      statusName: "Refund on debit card",
      amount: "+ S$ 150",
      rightIcon: next,
      rightAltName: "next",
    },
    {
      id: 3,
      leftIcon: fileStorage,
      leftAltName: "file storage",
      transactionName: "Hamleys",
      transactionDate: "20 May 2020",
      statusIcon: debitCard,
      statusAltName: "Debit Card",
      statusName: "Refund on debit card",
      amount: "+ S$ 150",
      rightIcon: next,
      rightAltName: "next",
    },
  ];
  return (
    <div className={styles.rightContainer}>
      <CardContainer
        icon={cardGroup}
        title={"Card Details"}
        iconAltName={"Card Details"}
        sideIcon={downArrow}
        sideIconAltName={"Down Arrow"}
      />
      <CardContainer
        icon={transactionGroup}
        title={"Recent transactions"}
        iconAltName={"Recent transactions"}
        sideIcon={upArrow}
        sideIconAltName={"Up Arrow"}
        style={{ marginTop: "24px" }}
        borderBottomNone
      />
      <div className={styles.transactionContainer}>
        {transactionHistory.map((item) => (
          <TransactionHistoryContainer
            key={item.id}
            leftIcon={item.leftIcon}
            leftAltName={item.leftAltName}
            transactionName={item.transactionName}
            transactionDate={item.transactionDate}
            statusIcon={item.statusIcon}
            statusAltName={item.statusAltName}
            statusName={item.statusName}
            amount={item.amount}
            rightIcon={item.rightIcon}
            rightAltName={item.rightAltName}
            isActive={item.isActive}
          />
        ))}
      </div>
      <div className={styles.bottomContainer}>
        <span>View all card transactions</span>
      </div>
    </div>
  );
};

export default RightContainer;
