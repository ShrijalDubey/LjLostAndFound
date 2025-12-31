import React from "react";
import styles from "../styles/Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.maincont}>
      <span className={styles.copy}>
        © 2025 LJ Lost & Found
      </span>

      <div className={styles.links}>
        <a
          className={styles.link}
          href="https://github.com/ShrijalDubey"
        >   
          <FaGithub /> GitHub
        </a>

        <a
          className={styles.link}
          href="https://www.linkedin.com/in/shrijal-dubey-1591a537b/"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </footer>
  );
}
