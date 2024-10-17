"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ListUpload() {
  const [formData, setFormData] = useState({
    propertyType: "",
    location: "",
    price: "",
    postalCode: "",
    region: "",
    city: "",
    width: "",
    amount: "",
    description: "",
    image: null,
  });

  const router = useRouter();

  const [preview, setPreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const integerFields = ["postalCode", "width", "amount", "price"];

    if (integerFields.includes(name)) {
      setFormData({
        ...formData,
        [name]: parseInt(value, 10) || "",
      });
    } else if (name === "image") {
      const file = e.target.files[0];
      setFormData({
        ...formData,
        [name]: file,
      });

      const imagePreviewUrl = URL.createObjectURL(file);
      setPreview(imagePreviewUrl);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    try {
      const response = await fetch("/api/createList", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error during form submission:", error);
    }

    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">
        ლისტინგის დამატება
      </h1>
      <form onSubmit={handleSubmit}>
        <h3 className="my-4 text-xl">გარიგების ტიპი</h3>
        <div className="flex items-center space-x-8">
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

        <h1 className="mt-10 text-xl">მდებარეობა</h1>

        <div className="grid grid-cols-2 gap-6 mt-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              მისამართი
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              საფოსტო ინდექსი
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              რეგიონი
            </label>
            <input
              type="text"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ქალაქი
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        <h1 className="mt-10 text-xl">ბინის დეტალები</h1>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ფასი
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
              min="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ფართობი
            </label>
            <input
              type="decimal"
              name="width"
              value={formData.width}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
              min="0"
            />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              საძინებელი რაოდენობა
            </label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
              step="1"
              min="0"
            />
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            აღწერა
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            ატვირთეთ სურათი *
          </label>
          <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-md">
            {preview ? (
              <img
                src={preview}
                alt="Selected"
                className="object-cover w-full h-full rounded-md"
              />
            ) : (
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8h14a2 2 0 012 2v28a2 2 0 01-2 2H6a2 2 0 01-2-2V10a2 2 0 012-2h14M16 20l4 4m0 0l4-4m-4 4V4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                  >
                    <span>Choose a file</span>
                    <input
                      id="file-upload"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            )}
          </div>
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
