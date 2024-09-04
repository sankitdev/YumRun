import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkModeToggle from "./src/Components/ToggleDark";

const App = () => {
  return (
    <div className="w-full h-screen dark:bg-black">
      <DarkModeToggle />
      <h1 className="dark:text-white">Hello there</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
