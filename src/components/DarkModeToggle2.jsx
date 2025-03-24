import './DarkModeToggleStyles.css'
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";

function DarkModeToggle2() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log("Current theme:", theme);

    return (
        <button onClick={toggleTheme} className="theme" >
            {theme === 'dark' ? (<MdOutlineLightMode className='sun-icon' />) : (<MdDarkMode className='moon-icon' />)}
        </button >
    )
};

export default DarkModeToggle2;