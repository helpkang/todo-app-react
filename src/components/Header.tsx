import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";
import { toggleTheme } from "../store/theme-slice";

const Header = ({switchTheme, colorTheme}) => {

    const dispatch = useDispatch();

    // useEffect(() => {
    //    setMode(theme);
    //    console.log(theme.value)
    // }, [theme, mode]);

    return (
        <div className="header">
            <h1>T O D O</h1>
            <div className="toggle_mode">
                {colorTheme == "dark" ? (
                    <button
                       
                    onClick={switchTheme}
                    >
                        <img src={iconSun} alt="lightmode" />
                    </button>
                ) : (
                    <button
                  
                        onClick={switchTheme}
                    >
                        <img src={iconMoon} alt="darkmode" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
