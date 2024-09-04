import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkModeToggle from "./src/Components/ToggleDark";
import Body from "./src/Components/Body";
import Header from "./src/Components/Header";

const App = () => {
  return (
    <div className="w-full h-screen dark:bg-black">
      <Header />
      <Body />
      <DarkModeToggle />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
