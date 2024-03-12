import { useEffect } from "react";
import {
  ThemeType,
  useThemeContextRepository,
} from "../repository/useThemeContextRepository";

export function useThemeService(init = false) {
  const { theme, toggle } = useThemeContextRepository();
  if (init) {
    initEffect(theme);
  }
  return { theme, toggle };
}

function initEffect(theme: ThemeType) {
  useEffect(() => {
    console.log("theme change", theme);
    const bgLight: string = "hsl(0, 0%, 98%)";
    const bgDark: string = "hsl(235, 21%, 11%)";
    theme === "light"
      ? (document.body.style.backgroundColor = bgLight)
      : (document.body.style.backgroundColor = bgDark);
  }, [theme]);
}
