import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkModeToggle from "./src/Components/ToggleDark";
import Body from "./src/Components/Body";
import NavBar from "./src/Components/NavBar";

const App = () => {
  return (
    <div className="min-h-full bg-slate-300 dark:bg-black">
      <NavBar />
      <Body />
      <DarkModeToggle />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
