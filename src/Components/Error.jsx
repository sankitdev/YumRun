import React from "react";
import { useRouteError,Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="bg-orange-400 dark:bg-orange-500 dark:text-gray-900 p-8 rounded-lg shadow-lg
        transform transition-all duration-300 ease-in-out hover:scale-105"
      >
        <div className="text-6xl text-center animate-bounce">🍔</div>
        <h2 className="text-2xl font-semibold text-center mt-4">Oops! Something went wrong</h2>
        <p className="text-center mt-2">Looks like we're out of ingredients! ({err.status} - {err.data})</p>
        <div className="text-center mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-300">
            <Link to="/">Go back to the menu</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
