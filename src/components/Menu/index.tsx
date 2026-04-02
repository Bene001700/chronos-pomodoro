import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvaliableThemes = "light" | "dark";

export function Menu() {
  const [theme, setTheme] = useState(() => {
    const storedTheme =
      localStorage.getItem("theme") !== null
        ? (localStorage.getItem("theme") as AvaliableThemes)
        : "dark";
    return storedTheme;
  });

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", nextTheme);
      return nextTheme;
    });
  }

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a href="#" className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a href="#" className={styles.menuLink}>
        <HistoryIcon />
      </a>
      <a href="#" className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a href="#" className={styles.menuLink} onClick={handleThemeChange}>
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
