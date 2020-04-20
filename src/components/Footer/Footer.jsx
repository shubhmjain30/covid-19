import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <footer className="ml-auto">
        <p>© 2020 Covid-19 Tracker. All rights reserved. </p>
        <p>
          Made by &nbsp;
          <a
            href="https://shubhmjain30.github.io/shubhm-portfolio/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Shubham Jain
          </a>
          .
        </p>
      </footer>
    </div>
  );
};
export default Footer;
