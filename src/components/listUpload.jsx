"use client";

import { useState } from "react";

export default function ListUpload() {
  const [formData, setFormData] = useState({
    propertyType: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    comments: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "propertyType") {
      console.log(value === "buy" ? "იყიდება" : "ქირავდება");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        ლისტინგის დამატება
      </h1>
      <form onSubmit={handleSubmit}>
        <h3>გარიგების ტიპი</h3>
        <div className="grid grid-cols-2">
          <div className="flex items-center">
            <input
              type="radio"
              id="buy"
              name="propertyType"
              value="buy"
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label
              htmlFor="buy"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              იყიდება
            </label>
          </div>

          <div className="flex items-center">
            <input
              type="radio"
              id="rent"
              name="propertyType"
              value="rent"
              onChange={handleInputChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <label
              htmlFor="rent"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              ქირავდება
            </label>
          </div>
        </div>
        <h1 className="mt-3">მდებარეობა</h1>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ZIP
            </label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Comments
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
