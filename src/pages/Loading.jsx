import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Brand Title */}
      <h1 className="text-3xl font-extrabold text-blue-600 mb-6">E-commerce</h1>

      {/* DaisyUI Loader */}
      <span
        className="loading loading-ring loading-lg text-blue-600"
        role="status"
        aria-label="Loading"
      ></span>

      {/* Helper Text */}
      <p className="mt-4 text-gray-600 font-medium">
        Please wait, loading your dashboard...
      </p>
    </div>
  );
}
