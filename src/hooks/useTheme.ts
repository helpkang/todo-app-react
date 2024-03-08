import { useState, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';

const bgLight: string = "hsl(0, 0%, 98%)";
const bgDark: string = "hsl(235, 21%, 11%)";

export type ThemeType = "light" | "dark";

function useTheme() {
  
  const  [theme, setTheme] = useLocalStorage<ThemeType>('theme', 'dark');

  useEffect(() => {
    doBodyColor(theme);
  }, [theme]);


  const toggle = () => {
    const toggle = theme === "dark" ? "light" : "dark";
    setTheme(toggle);
  };

  const doBodyColor =(color: string)=> {
    theme === "light"
      ? (document.body.style.backgroundColor = bgLight)
      : (document.body.style.backgroundColor = bgDark);
  }
  return { theme, toggle, setTheme };
}

export default useTheme;