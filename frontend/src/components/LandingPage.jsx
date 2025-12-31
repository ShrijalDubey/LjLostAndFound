import React from 'react'
import styles from "../styles/LandingPage.module.css";
import { PiWarningCircleThin } from "react-icons/pi";

export default function LandingPage() {
  return (
    <div className={styles.landingCont}>
      <div className={styles.logo}><img className={styles.logopng} src='src\assets\logo.png'/></div>
        <div className={styles.title}>Campus Lost and Find</div>
        <div className={styles.subtitle}>Helping you find your lost items on campus</div>
        <div className={styles.loginBox}>
            <h3>Authority</h3>
            <input type="password" placeholder="Enter Password" className={styles.inputField} />
            <button className={styles.loginButton}>Login</button>
            <p className={styles.Or}>Or</p>
            <h3>Student</h3>
            <div className={styles.studentinfo}>
               <PiWarningCircleThin /> Students can browse lost items without signing in
            </div>
            <button className={styles.studentButton}>Continue as Student</button>
        </div>
        <div>
          <p className={styles.footer}>© 2024 Campus Lost & Found. All rights reserved.</p>
        </div>
    </div>
  )
}
