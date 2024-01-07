import React from "react";
import styles from "./menu.module.scss";

const Menu = ({ icon, title, active }) => {
  return (
    <div className={`${styles.menuItem} ${active && styles.active}`}>
      <img src={icon} alt="Home logo" />
      <span>{title}</span>
    </div>
  );
};

export default Menu;
