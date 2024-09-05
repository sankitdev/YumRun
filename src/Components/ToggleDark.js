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
    <div className="fixed bottom-4 right-4 w-16 h-8 hover:scale-105 transition-all duration-300 ease-in-out">
      <input
        type="checkbox"
        id="toggle"
        className="hidden"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <label
        htmlFor="toggle"
        className="flex items-center cursor-pointer w-full h-full"
      >
        <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded-full relative transition-all duration-300 ease-in-out border-2 border-black dark:border-white ">
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center transform ${
              isDarkMode ? "translate-x-8" : "translate-x-0"
            } transition-transform duration-300 ease-in-out`}
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" fill="currentColor" />
              </svg>
            )}
          </div>
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
              isDarkMode ? "opacity-0" : "opacity-100"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M17.36 17.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M17.36 6.64l1.42-1.42" />
            </svg>
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full bg-blue-900 dark:bg-gray-800 rounded-full ${
              isDarkMode ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300 ease-in-out`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white absolute top-1 left-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="6" r="1" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white absolute top-3 left-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="6" cy="18" r="1" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-white absolute bottom-2 right-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="16" cy="18" r="1" />
            </svg>
          </div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
