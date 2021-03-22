import { FC } from "react";
import styles from "../styles/card.module.css";

interface Props {
  theme?: string;
}

export const Card: FC<Props> = ({ theme, children }) => {
  return (
    <div className={theme === "dark" ? styles.cardDark : styles.card}>
      {children}
    </div>
  );
};

export default Card;
