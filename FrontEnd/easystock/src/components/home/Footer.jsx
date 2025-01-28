import React from "react";
import { FiTwitter, FiFacebook, FiInstagram, FiGithub } from "react-icons/fi";

const Footer = () => {
  const iconStyles =
    "flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-blue-600 hover:bg-blue-600 hover:border-blue-600 focus:border-blue-600";

  const linkClasses =
    "text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80 cursor-pointer";

  return (
    <section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
          {/* Company */}
          <div>
            <p className="text-base text-gray-500">Company</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "#", text: "About" },
                { href: "#", text: "Contact" },
                { href: "#", text: "Home" },
                { href: "#", text: "Login" },
                { href: "#", text: "Sign Up" },
                { href: "#", text: "Admin" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-base text-gray-500">Help</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "#", text: "Customer Support" },
                { href: "#", text: "Delivery Details" },
                { href: "#", text: "Terms & Conditions" },
                { href: "#", text: "Privacy Policy" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-base text-gray-500">Resources</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "#", text: "Free eBooks" },
                { href: "#", text: "Development Tutorial" },
                { href: "#", text: "How to - Blog" },
                { href: "#", text: "YouTube Playlist" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra Links */}
          <div>
            <p className="text-base text-gray-500">Extra Links</p>
            <ul className="mt-8 space-y-4">
              {[
                { href: "#", text: "Customer Support" },
                { href: "#", text: "Delivery Details" },
                { href: "#", text: "Terms & Conditions" },
                { href: "#", text: "Privacy Policy" },
              ].map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={linkClasses}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between">
          <img
            className="h-8 w-auto md:order-1"
            src="./Logo-Light.png"
            alt="Aura UI Logo"
          />

          <ul className="flex items-center space-x-3 md:order-3">
            {[
              {
                icon: <FiTwitter className="w-4 h-4" />,
                href: "https://twitter.com",
              },
              {
                icon: <FiFacebook className="w-4 h-4" />,
                href: "https://facebook.com",
              },
              {
                icon: <FiInstagram className="w-4 h-4" />,
                href: "https://instagram.com",
              },
              {
                icon: <FiGithub className="w-4 h-4" />,
                href: "https://github.com",
              },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <div className={iconStyles}>{item.icon}</div>
                </a>
              </li>
            ))}
          </ul>

          <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">
            © Copyright 2024, All Rights Reserved by EasyStock
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
