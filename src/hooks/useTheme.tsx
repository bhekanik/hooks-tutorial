import { ChangeEvent, ComponentType, useContext } from "react";
import { ThemeContext } from "../contexts";
import styles from "../styles/useTheme.module.css";

export const useTheme = (): [ComponentType, string] => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme!(event.target.checked ? "dark" : "light");
  };

  const ThemeToggle = () => {
    return (
      <>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            checked={theme === "dark"}
            onChange={handleThemeChange}
          />
          Dark Theme
        </label>
      </>
    );
  };

  return [ThemeToggle, theme];
};
