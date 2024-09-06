import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DarkModeToggle from "./src/Components/ToggleDark";
import Body from "./src/Components/Body";
import NavBar from "./src/Components/NavBar";
import Footer from "./src/Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./src/Components/Search";
import Error from "./src/Components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./src/Components/RestaurantMenu";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100 dark:bg-black ">
      <NavBar />
      <Outlet />
      <DarkModeToggle />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={appRouter} />);
