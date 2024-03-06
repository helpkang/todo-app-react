import { createContext } from "react";
import { ThemeType } from "./hooks/useTheme";

// 기본값으로는 null을 넣어준다.
export const ThemeContext = createContext({theme:"light", toggle:()=>{}, setTheme:(theme:ThemeType)=>{}});
