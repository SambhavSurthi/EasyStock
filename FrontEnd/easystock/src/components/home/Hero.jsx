import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Common styles
const commonStyles = {
  header: "py-4 md:py-6",
  container: "px-4 mx-auto sm:px-6 lg:px-8",
  flexCenter: "flex items-center justify-between",
  logo: "w-auto h-14",
  menuButton: "text-gray-900",
  menuIcon: "w-7 h-7",
  navLink:
    "text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2",
  signUpButton:
    "inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  sectionTitle: "px-6 text-lg text-gray-600 font-inter",
  sectionHeading:
    "mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj",
  gradientText: "relative inline-flex sm:inline",
  gradientBackground:
    "bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0",
  callToActionButton:
    "inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
  demoButton:
    "inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900",
  textMuted: "mt-8 text-base text-gray-500 font-inter",
  imageContainer: "relative mx-auto",
  image: "transform scale-110",
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

// Smooth scrolling function
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Hero() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50">
      {/* Header */}
      <motion.header
        initial="hidden"
        whileInView="visible"
        variants={stagger}
        viewport={{ once: true }}
        className={commonStyles.header}
      >
        <div className={commonStyles.container}>
          <div className={commonStyles.flexCenter}>
            <motion.div variants={fadeInUp} className="flex-shrink-0">
              <Link
                to="/"
                title="Home"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className={commonStyles.logo}
                  src="./Logo-removebg.png"
                  alt="Logo"
                />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex lg:hidden">
              <button
                type="button"
                className={commonStyles.menuButton}
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FiX className={commonStyles.menuIcon} />
                ) : (
                  <FiMenu className={commonStyles.menuIcon} />
                )}
              </button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16"
            >
              <Link
                to="/"
                title="Home"
                className={commonStyles.navLink}
                onClick={() => scrollToSection("hero")}
              >
                Home
              </Link>
              <Link
                to="/"
                title="About Us"
                className={commonStyles.navLink}
                onClick={() => scrollToSection("about")}
              >
                About Us
              </Link>
              <Link
                to="/"
                title="faq"
                className={commonStyles.navLink}
                onClick={() => scrollToSection("faq")}
              >
                FAQ
              </Link>
              <Link
                to="/"
                title="Contact Us"
                className={commonStyles.navLink}
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10"
            >
              <Link
                to="/signin"
                title="Customer Login"
                className={commonStyles.navLink}
              >
                Login
              </Link>
              <Link
                to="/signup"
                title="Sign Up"
                className={commonStyles.signUpButton}
                role="button"
              >
                Sign up
              </Link>
            </motion.div>
          </div>

          {expanded && (
            <motion.nav
              initial="hidden"
              whileInView="visible"
              variants={stagger}
              viewport={{ once: true }}
              className="px-1 py-8"
            >
              <div className="grid gap-y-7">
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/"
                    title="Home"
                    className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    onClick={() => scrollToSection("hero")}
                  >
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/"
                    title="About Us"
                    className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    onClick={() => scrollToSection("about")}
                  >
                    About Us
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/"
                    title="faq"
                    className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    onClick={() => scrollToSection("faq")}
                  >
                    FAQ
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/"
                    title="Contact Us"
                    className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Us
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/signin"
                    title="Customer Login"
                    className={`${commonStyles.navLink} flex items-center p-3 -m-3 rounded-xl hover:bg-gray-50`}
                  >
                    Login
                  </Link>
                </motion.div>
                <motion.div variants={fadeInUp}>
                  <Link
                    to="/signup"
                    title="Sign Up"
                    className={commonStyles.signUpButton}
                    role="button"
                  >
                    Sign up
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="hero" className="pt-12 bg-gray-50 sm:pt-16">
        <div className={commonStyles.container}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeInUp}
              className={commonStyles.sectionTitle}
            >
              "Effortless Inventory Management, Smarter Business Growth"
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`${commonStyles.sectionHeading} mt-5`}
            >
              "Simplify Inventory, Maximize Efficiency – with
              <span className={commonStyles.gradientText}>
                <span className={commonStyles.gradientBackground}></span>
                <span className="relative"> EasyStock!</span>
              </span>
              "
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9"
            >
              <Link
                to="/signup"
                title="Get more customers"
                className={commonStyles.callToActionButton}
                role="button"
              >
                Get Started
              </Link>

              <Link
                to="/"
                title="Know About Us"
                className={commonStyles.demoButton}
                role="button"
                onClick={() => scrollToSection("about")}
              >
                Know About Us
              </Link>
            </motion.div>

            <motion.p variants={fadeInUp} className={commonStyles.textMuted}>
              {/* 60 Days free trial · No credit card required */}
            </motion.p>
          </motion.div>
        </div>

        <div className="pb-12 bg-white">
          <div className="relative">
            <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={scaleIn}
              viewport={{ once: true }}
              className={commonStyles.imageContainer}
            >
              <div className="lg:max-w-6xl lg:mx-auto">
                <img
                  className={commonStyles.image}
                  src="https://www.auraui.com/memeimage/dashboard.png"
                  alt="Illustration"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;