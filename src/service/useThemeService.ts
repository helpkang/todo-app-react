import { useEffect } from "react";
import { useThemeContextRepository } from "../repository/useThemeContextRepository";

export function useThemeService() {
  const { theme, toggle } = useThemeContextRepository();
  return { theme, toggle };
}
