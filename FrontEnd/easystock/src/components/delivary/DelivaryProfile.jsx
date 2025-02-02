import React from "react";

const DelivaryProfile = () => {
  return (
    <div>
      <div class="p-8">
        <div class="p-8 bg-gray-100 shadow mt-24">
          <div class="grid grid-cols-1 md:grid-cols-3">
            <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0"></div>
            <div class="relative">
              <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-24 w-24"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="mt-32 text-center border-b pb-12">
            <h1 class="text-4xl font-medium text-gray-700">Suraj Kumar</h1>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Section - Personal Details */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-700">
                    Personal Details
                  </h2>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">Employee ID:</span> 1502D
                    </p>
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">Phone No:</span>{" "}
                      6304749943
                    </p>
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">Address:</span>{" "}
                      Vijayawada, Andhra Pradesh
                    </p>
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">Joining Date:</span>{" "}
                      05/05/2024
                    </p>
                  </div>
                </div>

                {/* Right Section - Delivery Stats */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-700">
                    Delivery Stats
                  </h2>
                  <div className="space-y-2">
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">
                        Items Delivered Successfully:
                      </span>{" "}
                      520
                    </p>
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">
                        Items Not Delivered:
                      </span>{" "}
                      20
                    </p>
                    <p className="text-lg text-gray-600">
                      <span className="font-semibold">Success Rate:</span> 96.3%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="/delivary/editdelivaryprofile" className="bg-red-600 p-2 rounded text-white px-5" >Edit</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelivaryProfile;
