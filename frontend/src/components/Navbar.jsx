import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import { IoIosLogOut } from "react-icons/io";
import { IoShieldOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Navbar({ role, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(); 
    navigate("/"); 
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarCont}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Campus Lost & Found" className={styles.logo} />
        </div>

        <div className={styles.list}>
          <div className={styles.state}>
            <IoShieldOutline />
            <span>
              {role === "authority" ? "Authority" : "Student"}
            </span>
          </div>

          <div
            className={styles.logout}
            onClick={handleLogout}
            role="button"
          >
            <IoIosLogOut />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
