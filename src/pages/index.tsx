import * as React from "react";
import { useState } from "react";
import Greeting from "../components/Greeting";
import GreetingHooks from "../components/GreetingHooks";
import styles from "../styles/Home.module.css";

const hooks = () => {
  const [titleClass, setTitleClass] = useState<string>("Name Surname");
  const [titleHooks, setTitleHooks] = useState<string>("Name Surname");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span>{`Class: ${titleClass}`}</span> <br />
        <span>{`Hooks: ${titleHooks}`}</span>
      </div>
      <Greeting setTitle={setTitleClass} />
      <GreetingHooks setTitle={setTitleHooks} />
    </div>
  );
};

export default hooks;
