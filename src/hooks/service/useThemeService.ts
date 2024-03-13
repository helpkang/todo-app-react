import { useEffect } from "react";
import {
  ThemeType,
  useThemeContextStoreRepository,
} from "../repository/useThemeContextStoreRepository";

export function useThemeService(init = false) {
  const { theme, toggle } = useThemeContextStoreRepository();
  if (init) {
    initEffect(theme);
  }
  return { theme, toggle };
}

function initEffect(theme: ThemeType) {
  useEffect(() => {
    const bgLight: string = "hsl(0, 0%, 98%)";
    const bgDark: string = "hsl(235, 21%, 11%)";
    theme === "light"
      ? (document.body.style.backgroundColor = bgLight)
      : (document.body.style.backgroundColor = bgDark);
  }, [theme]);
}
