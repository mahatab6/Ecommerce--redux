import React from "react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      {/* Error Code */}
      <h1 className="text-7xl font-extrabold text-blue-600">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-black">
        Oops! Page not found
      </h2>
      <p className="mt-2 text-gray-600 text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
    </div>
  );
}
