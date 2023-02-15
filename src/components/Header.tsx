import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";
import { toggleTheme } from "../store/theme-slice";

const Header = () => {
    const [mode, setMode] = useState('dark');
    const theme = useSelector((state) => state.theme);
    const dispatch = useDispatch();

    useEffect(() => {
       setMode(theme);
       console.log(theme.value)
    }, [theme, mode]);

    return (
        <div className="header">
            <h1>T O D O</h1>
            <div className="toggle_mode">
                {mode == "dark" ? (
                    <button
                        onClick={() => {
                            dispatch(toggleTheme({ value: "light" }));
                        }}
                    >
                        <img src={iconSun} alt="lightmode" />
                    </button>
                ) : (
                    <button
                        onClick={() => {
                            dispatch(toggleTheme({ value: "dark" }));
                        }}
                    >
                        <img src={iconMoon} alt="darkmode" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
