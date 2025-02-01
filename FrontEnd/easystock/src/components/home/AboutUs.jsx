import React from "react";
import { FaTasks, FaCloud, FaChartLine, FaBell, FaBox, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

// Common styles
const commonStyles = {
  section: "py-12 bg-white sm:py-16 lg:py-20",
  container: "px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
  headingContainer: "max-w-xl mx-auto text-center xl:max-w-3xl",
  heading: "text-3xl mt-14 font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj",
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

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const AboutUs = () => {
  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.container}>
        {/* About Us Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className={commonStyles.headingContainer}
        >
          <motion.h2 variants={fadeInUp} className={commonStyles.heading}>
            About EasyStock – Revolutionizing Inventory Management
          </motion.h2>
          <motion.p variants={fadeInUp} className={commonStyles.description}>
            EasyStock is a cutting-edge inventory management platform that
            streamlines the way businesses track and manage stock, suppliers, and
            deliveries. With powerful analytics, intuitive user interfaces, and
            seamless integration, we empower businesses to optimize their
            operations, boost efficiency, and make informed decisions.
          </motion.p>
        </motion.div>

        {/* Gradient Overlay */}
        <div className={commonStyles.relativeWrapper}>
          <div
            className={commonStyles.overlay}
            style={{
              background:
                "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
            }}
          ></div>

          {/* Features Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={stagger}
            viewport={{ once: true }}
            className={commonStyles.textContainer}
          >
            <motion.div variants={fadeInUp} className={commonStyles.textBox}>
              <FaTasks className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>Efficient</p>
                <p>Inventory Management</p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className={`${commonStyles.textBox} mt-6 sm:mt-0`}
            >
              <FaCloud className={commonStyles.textMain} />
              <div className={commonStyles.textSub}>
                <p>Cloud-Based</p>
                <p>Data Storage</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose EasyStock Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className={commonStyles.headingContainer}
        >
          <motion.h2 variants={fadeInUp} className={commonStyles.heading}>
            Why Choose EasyStock for Your Business?
          </motion.h2>
          <motion.p variants={fadeInUp} className={commonStyles.description}>
            EasyStock is designed to make inventory management seamless and
            hassle-free. Our platform offers robust features that can help your
            business grow by improving operational efficiency and reducing costs.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={stagger}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Feature 1: Real-Time Stock Tracking */}
          <motion.div
            variants={fadeInUp}
            className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaBox className="w-10 h-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Real-Time Stock Tracking
            </h3>
            <p className="mt-2 text-gray-600">
              Monitor your inventory in real-time and avoid stockouts or
              overstocking.
            </p>
          </motion.div>

          {/* Feature 2: Advanced Analytics */}
          <motion.div
            variants={fadeInUp}
            className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaChartLine className="w-10 h-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Advanced Analytics
            </h3>
            <p className="mt-2 text-gray-600">
              Gain insights into sales trends, profits, and losses with detailed
              reports.
            </p>
          </motion.div>

          {/* Feature 3: Low Stock Alerts */}
          <motion.div
            variants={fadeInUp}
            className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaBell className="w-10 h-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Low Stock Alerts
            </h3>
            <p className="mt-2 text-gray-600">
              Get notified when stock levels are low to ensure timely restocking.
            </p>
          </motion.div>

          {/* Feature 4: Stock Predictions */}
          <motion.div
            variants={fadeInUp}
            className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaTasks className="w-10 h-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Stock Predictions
            </h3>
            <p className="mt-2 text-gray-600">
              Predict future stock needs based on sales trends and seasonal
              demand.
            </p>
          </motion.div>

          {/* Feature 5: Supplier Management */}
          <motion.div
            variants={fadeInUp}
            className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaUsers className="w-10 h-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Supplier Management
            </h3>
            <p className="mt-2 text-gray-600">
              Easily manage suppliers and track supply history for better
              decision-making.
            </p>
          </motion.div>

          {/* Feature 6: Delivery Tracking */}
          <motion.div
            variants={fadeInUp}
            className="p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <FaCloud className="w-10 h-10 text-blue-600" />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">
              Delivery Tracking
            </h3>
            <p className="mt-2 text-gray-600">
              Track deliveries in real-time and update order statuses seamlessly.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;