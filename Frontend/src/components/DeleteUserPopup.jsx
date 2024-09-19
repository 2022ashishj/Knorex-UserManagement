import React from "react";

function DeleteUserPopup({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-2 sm:p-4">
      <div className="relative p-4 sm:p-6 md:p-8 border w-full max-w-md shadow-2xl rounded-2xl bg-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">
          Confirm Deletion
        </h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
          Are you sure you want to delete this user? This action cannot be
          undone.
        </p>
        <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
          <button
            onClick={onConfirm}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            DELETE
          </button>
          <button
            onClick={onCancel}
            className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteUserPopup;
