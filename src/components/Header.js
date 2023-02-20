import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import "./Header.css";
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";
const Header = ({ colorTheme, setColorTheme }) => {
    const dispatch = useDispatch();
    const switchTheme = () => {
        const newTheme = colorTheme === "dark" ? "light" : "dark";
        setColorTheme(newTheme);
    };
    return (_jsxs("div", { className: "header", children: [_jsx("h1", { children: "T O D O" }), _jsx("div", { className: "toggle_mode", children: colorTheme == "dark" ? (_jsx("button", { onClick: switchTheme, children: _jsx("img", { src: iconSun, alt: "lightmode" }) })) : (_jsx("button", { onClick: switchTheme, children: _jsx("img", { src: iconMoon, alt: "darkmode" }) })) })] }));
};
export default Header;
