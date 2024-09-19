import React, { useState } from "react";
import { X } from "lucide-react";

function SignUpForm({ onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="relative p-4 sm:p-6 md:p-8 border w-full max-w-md shadow-2xl rounded-2xl bg-white">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200 ease-in-out"
            onChange={handleChange}
            required
          />
          <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              SIGN UP
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              CANCEL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
