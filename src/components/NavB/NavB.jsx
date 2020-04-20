import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styles from "./NavB.module.css";
import CoronaImage from "../../images/corona1.png";

const NavB = () => {
  return (
    <div className={styles.container}>
      <Navbar collapseOnSelect expand="md" className={styles.Nav}>
        <Navbar.Brand className="ml-0" href="/">
          <img src={CoronaImage} width="40" height="40" alt="COVID-19" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/precaution">Precautions</Nav.Link>
            <Nav.Link href="/mythbusters">Myth Busters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavB;
