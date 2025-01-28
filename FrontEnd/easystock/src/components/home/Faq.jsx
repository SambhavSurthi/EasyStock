import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import { FaMinus, FaPlus } from "react-icons/fa";

const Faq = () => {
  const faqs = [
    {
      id: 1,
      question: "Q. What is EasyStock?",
      answer:
        "EasyStock is an advanced inventory management system designed to help businesses efficiently manage their stock, track sales, and predict restocking needs.",
    },
    {
      id: 2,
      question: "Q. How does EasyStock help in inventory management?",
      answer:
        "EasyStock provides real-time stock tracking, low stock alerts, sales analytics, and automated restocking predictions to ensure you never run out of products.",
    },
    {
      id: 3,
      question: "Q. Can I track sales and profits with EasyStock?",
      answer:
        "Yes, EasyStock offers detailed sales and profit analytics, including daily, weekly, and monthly reports, to help you make informed business decisions.",
    },
    {
      id: 4,
      question: "Q. Does EasyStock support multiple users and roles?",
      answer:
        "Yes, EasyStock supports three roles: Admin, Customer, and Delivery Person. Each role has specific permissions and access levels.",
    },
    {
      id: 5,
      question: "Q. How does the low stock alert work?",
      answer:
        "EasyStock automatically notifies the admin when the stock of a product falls below a predefined threshold, ensuring timely restocking.",
    },
    {
      id: 6,
      question: "Q. Can I predict stock requirements with EasyStock?",
      answer:
        "Yes, EasyStock uses advanced algorithms to predict restocking needs based on sales trends, seasonal demand, and historical data.",
    },
    {
      id: 7,
      question: "Q. How do I assign delivery personnel to orders?",
      answer:
        "Admins can assign delivery personnel to orders directly from the dashboard. Delivery personnel can then update the order status in real-time.",
    },
    {
      id: 8,
      question: "Q. Is EasyStock suitable for small businesses?",
      answer:
        "Absolutely! EasyStock is designed to scale with your business, whether you're a small startup or a large enterprise.",
    },
    {
      id: 9,
      question: "Q. Can I export data from EasyStock?",
      answer:
        "Yes, EasyStock allows you to export inventory, sales, and order data in CSV format for further analysis or record-keeping.",
    },
    {
      id: 10,
      question: "Q. How do I get started with EasyStock?",
      answer:
        "Simply sign up for an account, log in as an admin, and start adding products, suppliers, and managing your inventory!",
    },
  ];

  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20 xl:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600 lg:text-lg lg:mt-6 lg:leading-8">
            Ask everything you need to know about EasyStock and how it can help your business.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-12 overflow-hidden border border-gray-200 divide-y divide-gray-200 sm:mt-16 rounded-xl">
          {faqs.map((faq) => (
            <div key={faq.id} role="region">
              <h3>
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={activeId === faq.id}
                  className="flex items-center justify-between w-full px-6 py-5 text-lg font-semibold text-left text-gray-900 sm:p-6"
                >
                  <span>{faq.question}</span>
                  <span className="ml-4">
                    {activeId === faq.id ? (
                      <FaMinus className="w-6 h-6 text-gray-900" />
                    ) : (
                      <FaPlus className="w-6 h-6 text-gray-900" />
                    )}
                  </span>
                </button>
              </h3>
              {activeId === faq.id && (
                <div>
                  <div className="px-6 pb-6">
                    <p className="text-base text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
