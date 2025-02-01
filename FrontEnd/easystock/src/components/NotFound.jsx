import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Use `next/link` if you're using Next.js

// Animation for floating effect
const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Floating Illustration */}
      <motion.div
        animate={floatingAnimation}
        className="max-w-md mx-auto text-center"
      >
        <img
          className="w-full h-56"
          src="./NotFound.png" // Replace with your 404 illustration
          alt="404 Illustration"
        />
      </motion.div>

      {/* Content */}
      <div className="text-center mt-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 font-pj">
          404
        </h1>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-600 font-pj">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-base sm:text-lg text-gray-500 font-pj">
          It might have been moved or deleted.
        </p>

        {/* Back to Home Button */}
        <div className="mt-8">
          <Link
            to="/" // Use `href` instead of `to` if using Next.js
            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 border border-transparent rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;