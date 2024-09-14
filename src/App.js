import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import DarkModeToggle from "./Components/ToggleDark";
import Body from "./Components/Home/Body";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./Components/Search";
import Error from "./Components/Error";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/MenuSection/RestaurantMenu";
import Cart from "./Components/Cart"
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-slate-800 dark:text-white ">
     <Provider store={store}>
     <NavBar />
      <Outlet />
      <DarkModeToggle />
      <Footer />
     </Provider>
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
        path:"/cart",
        element:<Cart/>
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<StrictMode><RouterProvider router={appRouter}/></StrictMode> );
