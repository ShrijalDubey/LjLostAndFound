import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import { IoIosLogOut } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarCont}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Lj logo" className={styles.logo} />
        </div>

        <div className={styles.list}>
          <div className={styles.state}>
            <IoShieldOutline />
            <span>Authority</span>
          </div>

          <div className={styles.logout}>
            <IoIosLogOut />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
