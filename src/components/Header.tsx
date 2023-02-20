import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css";
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";

type colorThemeProp = {
    colorTheme: string
    setColorTheme: (arg0: string) => {}
}

 
const Header = ({colorTheme, setColorTheme}: colorThemeProp) => {
    const dispatch = useDispatch();

    const switchTheme = () => {
        const newTheme = colorTheme === "dark" ? "light" : "dark";
        setColorTheme(newTheme);
    };


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
