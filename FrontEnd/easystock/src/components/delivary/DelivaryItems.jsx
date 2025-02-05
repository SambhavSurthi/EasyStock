import React from "react";

const DelivaryItems = () => {
  return (
    <div className="flex flex-col justify-start items-center min-h-screen">
      <div className="w-full lg:w-[90%] h-auto mt-5 mx-4 sm:mx-10 bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 rounded-2xl">
        {/* Left Section - Order Details */}
        <div className="left text-lg grid grid-cols-2 gap-y-4 w-full max-w-md">
          <h1 className="col-span-2 text-center text-xl font-semibold">
            Order Details
          </h1>

          <h1 className="font-semibold">Order Id:</h1>
          <p>1234</p>

          <label htmlFor="ExpectedData" className="font-semibold">
            Expected Delivery By:
          </label>
          <p>25/02/2025</p>

          <label htmlFor="DelivaryStatus" className="font-semibold">
            Delivery Status:
          </label>
          <select
            name="DelivaryStatus"
            id="DelivaryStatus"
            className="w-full rounded-lg border border-gray-900 text-gray-700 px-2 py-1"
          >
            <option value="">Please select</option>
            <option value="NotDelivared">Not Delivered</option>
            <option value="OnTheWay">On The Way</option>
            <option value="Delivared">Delivered</option>
          </select>
        </div>

        {/* Middle Section - Address Details */}
        <div className="middle">
          <h1 className="text-center text-xl font-semibold">Address Details</h1>
          <div className="grid grid-cols-2 gap-y-2 mt-4">
            <h3 className="font-semibold">
              Flat, House no., Building, Company, Apartment:
            </h3>
            <p className="text-sm">
              Sai Chalapathi Boys Hostel, Opp Aditya Elite
            </p>

            <h3 className="font-semibold">Area, Street, Sector, Village:</h3>
            <p className="text-sm">KL University Road, Vaddeshwaram</p>

            <h3 className="font-semibold">Landmark:</h3>
            <p className="text-sm">KL University Road</p>

            <h3 className="font-semibold">Town/City:</h3>
            <p className="text-sm">Vijayawada</p>

            <h3 className="font-semibold">State:</h3>
            <p className="text-sm">Andhra Pradesh</p>

            <h3 className="font-semibold">Pincode:</h3>
            <p className="text-sm">522502</p>
          </div>
        </div>

        {/* Right Section - Customer Details */}
        <div className="right">
          <h1 className="text-center text-xl font-semibold">
            Customer Details
          </h1>

          <div className="grid grid-cols-2 gap-y-2 mt-4">
            <h3 className="font-semibold">Customer Name:</h3>
            <p className="text-sm">Sambhav Surthi</p>

            <h3 className="font-semibold">Customer Phone Number:</h3>
            <p className="text-sm">6304749943</p>

            <h3 className="font-semibold">Payment Options:</h3>
            <p className="text-sm">Cash On Delivery</p>

            <h3 className="font-semibold">Amount to be Collected:</h3>
            <p className="text-sm">958/- INR</p>

            {/* Amount Collected Section - Align Radio Buttons to Right */}
            <h3 className="font-semibold">Amount Collected:</h3>

            <div className="col-span-1 flex justify-start space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="amountcollection"
                  value="Yes"
                  id="amountcollectedYes"
                />
                <span>Yes</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="amountcollection"
                  value="No"
                  id="amountcollectedNo"
                  
                />
                <span>No</span>
              </label>
            </div>

            {/* Input for "If Not Delivered" */}
            <h3 className="font-semibold col-span-2">
              <label htmlFor="notdelivared">If Not Delivered:</label>
            </h3>
            <input
              className="border rounded w-full p-1 col-span-2"
              type="text"
              name="notdelivared"
              id="notdelivared"
              placeholder="Enter reason"
            />
          </div>

          {/* Submit Button Positioned Outside the Grid */}
          <div className="mt-4 flex justify-center">
            <input
              className="border w-fit px-3 py-2 bg-blue-500 rounded text-white cursor-pointer hover:bg-blue-600"
              type="submit"
              value="Update Delivary Status"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelivaryItems;
