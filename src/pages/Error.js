import React from "react";

const ErrorComponent = () => {
  return (
    <div
      class="bg-red-100 border text-center border-red-400 text-red-600 p-2 rounded relative"
      role="alert"
    >
      <span class="block sm:inline">Opps!!! Something Went Wrong.</span>
    </div>
  );
};

export default ErrorComponent;
