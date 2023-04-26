import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <h1>Time Savvy</h1>
      <nav>
        <Link to="/tasks">Tasks</Link>
        <Link to="/tasks/add">Add Task</Link>
      </nav>
    </div>
  );
};

export default NavBar;
