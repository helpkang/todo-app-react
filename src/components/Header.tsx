import React, { useState } from "react";
import "./Header.css";
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";
const Header = () => {
    const [darkmode, setDarkmode] = useState(true);


    
    return (
        <div className="header">
            <h1>T O D O</h1>
            <div className="toggle_mode">
                {darkmode ? (
                    <button>
                        <img src={iconSun} alt="lightmode" />
                    </button>
                ) : (
                    <button>
                        <img src={iconMoon} alt="darkmode" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
