import React from "react";
import { Trash2, UserPlus, FileDown, X } from "lucide-react";

function UserTable({ users, onDelete, onSelect }) {
  return (
    <div className="overflow-x-auto shadow-xl rounded-xl bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-800">
          <tr>
            <th
              scope="col"
              className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider"
            >
              Select
            </th>
            <th
              scope="col"
              className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-2 sm:px-4 md:px-6 py-2 sm:py-3 text-left text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr
              key={user._id}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 whitespace-nowrap">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-600 rounded focus:ring-blue-400 transition duration-150 ease-in-out"
                  onChange={(e) => {
                    if (e.target.checked) {
                      onSelect((prev) => [...prev, user._id]);
                    } else {
                      onSelect((prev) => prev.filter((id) => id !== user._id));
                    }
                  }}
                />
              </td>
              <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-8 w-8 sm:h-10 sm:w-10">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {user.firstName.charAt(0)}
                      {user.lastName.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-2 sm:ml-4">
                    <div className="text-xs sm:text-sm font-medium text-gray-900">
                      {user.firstName} {user.lastName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 whitespace-nowrap">
                <div className="text-xs sm:text-sm text-gray-900">
                  {user.email}
                </div>
              </td>
              <td className="px-2 sm:px-4 md:px-6 py-2 sm:py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  className="text-red-600 hover:text-red-900 transition duration-150 ease-in-out"
                  onClick={() => onDelete(user._id)}
                >
                  <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
