export type ThemeType = "light" | "dark";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeTypeState = {
  theme: ThemeType;
  toggle: () => void;
  setTheme: (theme: ThemeType) => void;
};

export const useThemeContextRepository = create(
  persist<ThemeTypeState>(
    (set) => ({
      theme: "dark",
      toggle: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
      setTheme: (theme: ThemeType) => set(() => ({ theme })),
    }),
    {
      name: "useTodoRepository",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
