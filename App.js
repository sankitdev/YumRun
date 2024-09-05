import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkModeToggle from "./src/Components/ToggleDark";
import Body from "./src/Components/Body";
import NavBar from "./src/Components/NavBar";
import Footer from "./src/Components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 dark:bg-black ">
      <NavBar />
      <Body />
      <DarkModeToggle />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
