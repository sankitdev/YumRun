import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.theme === "dark";
    if (theme) {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const darkMode = document.documentElement.classList.contains("dark");
    localStorage.theme = darkMode ? "dark" : "light";
    setIsDarkMode(darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-10 right-10 rounded-full p-2 border-2 border-white-500 dark:text-white"
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
export default DarkModeToggle;
