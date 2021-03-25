import * as React from "react";
import Greeting from "../components/Greeting";
import GreetingHooks from "../components/GreetingHooks";
import styles from "../styles/Home.module.css";

const hooks = () => {
  return (
    <div className={styles.container}>
      <Greeting />
      <GreetingHooks />
    </div>
  );
};

export default hooks;
