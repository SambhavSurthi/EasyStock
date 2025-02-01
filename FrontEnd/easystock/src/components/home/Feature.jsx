import React from "react";
import { FaTasks, FaCloud } from "react-icons/fa";

// Common styles
const commonStyles = {
  section: "py-12 bg-white sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headingContainer: "max-w-xl mx-auto text-center xl:max-w-3xl",
  heading: "text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj",
  description:
    "max-w-xl mx-auto mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj",
  relativeWrapper: "relative mt-8 sm:mt-16 md:max-w-md md:mx-auto",
  overlay:
    "absolute inset-0 w-full h-full max-w-lg rotate-180 opacity-30 blur-lg filter",
  textContainer:
    "flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-16",
  textBox: "flex items-center",
  textMain: "text-4xl font-medium text-gray-900 font-pj",
  textSub: "ml-5 text-sm text-gray-900 font-pj",
  imageContainer: "max-w-4xl mx-auto mt-10 sm:mt-16",
  image: "w-full rounded-sm",
};

const Feature = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        <div className={commonStyles.headingContainer}>
          <h2 className={commonStyles.heading}>
            About EasyStock – Revolutionizing Inventory Management
          </h2>
          <p className={commonStyles.description}>
            EasyStock is a cutting-edge inventory management platform that
            streamlines the way businesses track and manage stock, suppliers, and
            deliveries. With powerful analytics, intuitive user interfaces, and
            seamless integration, we empower businesses to optimize their
            operations, boost efficiency, and make informed decisions.
          </p>
        </div>

        <div className={commonStyles.relativeWrapper}>
          <div
            className={commonStyles.overlay}
            style={{
              background:
                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            }}
          ></div>

          <div className={commonStyles.textContainer}>
            <div className={commonStyles.textBox}>
              <FaTasks className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>Efficient</p>
                <p>Inventory Management</p>
              </div>
            </div>

            <div className={`${commonStyles.textBox} mt-6 sm:mt-0`}>
              <FaCloud className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>Efficient</p>
                <p>Data Storage</p>
              </div>
            </div>
          </div>
        </div>

        <div className={commonStyles.imageContainer}>
        </div>

        <div className={commonStyles.headingContainer}>
          <h2 className={commonStyles.heading}>
            Why Choose EasyStock for Your Business?
          </h2>
          <p className={commonStyles.description}>
            EasyStock is designed to make inventory management seamless and
            hassle-free. Our platform offers robust features that can help your
            business grow by improving operational efficiency and reducing costs.
          </p>
        </div>

        <div className={commonStyles.textContainer}>
          <div className={commonStyles.textBox}>
            <FaTasks className={commonStyles.textMain} />
            <div className={commonStyles.textSub}>
              <p>Real-Time</p>
              <p>Stock Tracking</p>
            </div>
          </div>

          <div className={`${commonStyles.textBox} mt-6 sm:mt-0`}>
            <FaCloud className={commonStyles.textMain} />
            <div className={commonStyles.textSub}>
              <p>Advanced</p>
              <p>Analytics & Reporting</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Feature;
