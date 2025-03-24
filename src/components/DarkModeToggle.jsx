import { useState, useEffect } from "react";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import "./DarkModeToggleStyles.css"

function DarkModeToggle() {
    // Load dark mode preference from localStorage
    const [isDarkModeOn, setIsDarkModeOn] = useState(
        localStorage.getItem("theme") === "dark"
    );

    // Toggle function
    function handleDarkMode() {
        setIsDarkModeOn((prev) => !prev);
    }

    // Apply dark mode class & store preference
    useEffect(() => {
        if (isDarkModeOn) {
            document.body.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkModeOn]);

    return (
        <button onClick={handleDarkMode} className="theme" >
            {isDarkModeOn ? (
                <MdOutlineLightMode size={35} style={{ color: "#fff" }} />
            ) : (
                <MdDarkMode size={35} style={{ color: "#000" }} />
            )}
        </button>
    );
}

export default DarkModeToggle;
