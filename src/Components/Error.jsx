import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="bg-red-500 dark:bg-red-600 text-white dark:text-gray-100 p-6 rounded-lg shadow-lg
        transform transition-all duration-300 ease-in-out hover:scale-105 animate-bounce"
      >
        <svg
          className="w-12 h-12 mx-auto mb-4 animate-pulse"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M5.22 10.22l1.42 1.42m6.36-6.36l1.42 1.42m6.36 6.36l1.42 1.42M5.22 10.22l1.42-1.42m0 6.36l1.42-1.42m6.36-6.36l1.42-1.42m0 6.36l1.42-1.42M12 2v2m0 16v2m7.07-7.07l2 2m-18-18l2 2"
          />
        </svg>
        <h2 className="text-xl font-semibold text-center">Error</h2>
        <p className="text-center mt-2">
          {err.status} -{err.data}
        </p>
      </div>
    </div>
  );
};

export default Error;
