import React from "react";

function Shimmer() {
  return (
    <div className="animate-pulse w-72 h-60 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
      <div className="h-3/5 w-full bg-gray-300 dark:bg-gray-700"></div>
      <div className="p-2 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}

export default Shimmer;
