import "./Header.css";
import iconMoon from "../assets/iconMoon.svg";
import iconSun from "../assets/iconSun.svg";
import { useThemeService } from "../hooks/service/useThemeService";



const Header = () => {
  const { theme, toggle} = useThemeService();
  return (
    <div className="header">
      <h1>T O D O</h1>
      <div className="toggle_mode">
        <button onClick={toggle}>
          {theme == "dark" ? (
            <img src={iconSun} alt="lightmode" />
          ) : (
            <img src={iconMoon} alt="darkmode" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
