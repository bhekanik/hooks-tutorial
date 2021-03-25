import { FC } from "react";
import styles from "../styles/card.module.css";

interface Props {
  theme?: string;
  desc?: string;
}

export const Card: FC<Props> = ({ theme, desc, children }) => {
  return (
    <div className={theme === "dark" ? styles.cardDark : styles.card}>
      {desc && <span className={styles.desc}>{desc}</span>}
      {children}
    </div>
  );
};

export default Card;
