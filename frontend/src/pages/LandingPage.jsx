import React, { useState } from "react";
import styles from "../styles/LandingPage.module.css";
import { PiWarningCircleThin } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function LandingPage({ setRole }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const AUTHORITY_PASSWORD = "admin123";

  const handleAuthorityLogin = () => {
    if (password === AUTHORITY_PASSWORD) {
      setRole("authority");
      navigate("/items");
    } else {
      alert("Incorrect authority password");
    }
  };

  const handleStudentLogin = () => {
    setRole("student");
    navigate("/items");
  };

  return (
    <div className={styles.landingCont}>
      <div className={styles.logo}>
        <img
          className={styles.logopng}
          src="/src/assets/logo.png"
          alt="Campus Lost and Found"
        />
      </div>

      <div className={styles.title}>Campus Lost and Find</div>
      <div className={styles.subtitle}>
        Helping you find your lost items on campus
      </div>

      <div className={styles.loginBox}>
        <form className={styles.authorityForm}
          onSubmit={(e) => {
            e.preventDefault();
            handleAuthorityLogin();
          }}
        >
          <h3>Authority</h3>

          <input
            type="password"
            placeholder="Enter Password"
            className={styles.inputField}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className={styles.loginButton}
          >
            Login
          </button>
        </form>

        <p className={styles.Or}>OR</p>

        {/* Student Login */}
        <h3>Student</h3>
        <div className={styles.studentinfo}>
          <PiWarningCircleThin />
          <span>
            Students can browse lost items without signing in
          </span>
        </div>

        <button
          className={styles.studentButton}
          onClick={handleStudentLogin}
        >
          Continue as Student
        </button>
      </div>

      <p className={styles.footer}>
        © 2024 Campus Lost &amp; Found. All rights reserved.
      </p>
    </div>
  );
}
