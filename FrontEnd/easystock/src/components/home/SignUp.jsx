import React from 'react';
import { FaCheckCircle, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use react-router-dom Link
import { motion } from 'framer-motion'; // For animations

const commonStyles = {
  inputIcon: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
  input: "block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600",
  button: "inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80",
  link: "font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const SignUp = () => {
  return (
    <section className="bg-white min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* Left side image and info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8"
        >
          <div className="absolute inset-0">
            <img
              className="object-cover object-top w-full h-full"
              src="./SignUp.jpg" // Update image path
              alt="EasyStock Overview"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <motion.h3
                variants={fadeInUp}
                className="text-4xl font-bold text-white"
              >
                Join EasyStock and take control of your inventory
              </motion.h3>
              <motion.ul
                variants={stagger}
                className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4"
              >
                {[
                  "Real-Time Stock Tracking",
                  "Unlimited Product Listings",
                  "Secure Cloud Storage",
                  "Advanced Reporting & Analytics",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-center space-x-3"
                  >
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <FaCheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-lg font-medium text-white">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>

        {/* Right side sign-up form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24"
        >
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            {/* Logo */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center mb-8"
            >
              <Link to="/">
                <img
                  src="./Logo-removebg.png" // Replace with your logo path
                  alt="EasyStock Logo"
                  className="w-32 h-auto" // Adjust size as needed
                />
              </Link>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold leading-tight text-black sm:text-4xl"
            >
              Sign up to EasyStock
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-2 text-base text-gray-600"
            >
              Already have an account?{" "}
              <Link to="/signin" className={commonStyles.link}>
                Sign in
              </Link>
            </motion.p>

            <motion.form
              variants={stagger}
              action="#"
              method="POST"
              className="mt-8 space-y-5"
            >
              {/* Full Name Field */}
              <motion.div variants={fadeInUp}>
                <label className="text-base font-medium text-gray-900">
                  Full Name
                </label>
                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                  <div className={commonStyles.inputIcon}>
                    <FaUser className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={commonStyles.input}
                  />
                </div>
              </motion.div>

              {/* Email Field */}
              <motion.div variants={fadeInUp}>
                <label className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                  <div className={commonStyles.inputIcon}>
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={commonStyles.input}
                  />
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div variants={fadeInUp}>
                <label className="text-base font-medium text-gray-900">
                  Password
                </label>
                <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                  <div className={commonStyles.inputIcon}>
                    <FaLock className="w-5 h-5" />
                  </div>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className={commonStyles.input}
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeInUp}>
                <button type="submit" className={commonStyles.button}>
                  Sign up
                </button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SignUp;