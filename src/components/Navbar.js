import React from "react";
import styles from "./navbar.module.scss";
import aspireLogo from "../assets/aspire-logo.svg";
import Home from "../assets/Home.svg";
import Menu from "./Menu";

const Navbar = () => {
  const menuItems = [
    { id: 0, icon: Home, title: "Home" },
    { id: 1, icon: Home, title: "Cards", active: true },
    { id: 2, icon: Home, title: "Payments" },
    { id: 3, icon: Home, title: "Credit" },
    { id: 4, icon: Home, title: "Profile" },
  ];

  return (
    <nav className={styles.container}>
      <div className={styles.header}>
        <img src={aspireLogo} alt="aspire logo" />
        <span>
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </span>
      </div>
      <div>
        {menuItems.map((item) => (
          <Menu
            key={item.id}
            icon={item.icon}
            title={item.title}
            active={item.active}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
