import * as React from "react";
import Greeting from "../components/Greeting";
import styles from "../styles/Home.module.css";

const hooks = () => {
  return (
    <div className={styles.container}>
      <Greeting />
    </div>
  );
};

export default hooks;
