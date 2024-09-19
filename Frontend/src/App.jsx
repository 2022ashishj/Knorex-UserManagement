import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import SignUpForm from "./components/SignUpForm";
import DeleteUserPopup from "./components/DeleteUserPopup";
import { UserPlus, FileDown } from "lucide-react";

function App() {
  const [users, setUsers] = useState([]);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://usermanagement1-y074.onrender.com/api/users"
    );
    const data = await response.json();
    setUsers(data);
  };

  const handleSignUp = async (userData) => {
    const response = await fetch(
      "https://usermanagement1-y074.onrender.com/api/users",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );
    if (response.ok) {
      fetchUsers();
      setShowSignUpForm(false);
    }
  };

  const handleDelete = async () => {
    const response = await fetch(
      `https://usermanagement1-y074.onrender.com/api/users/${selectedUserId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      fetchUsers();
      setShowDeletePopup(false);
    }
  };

  const handleExport = async () => {
    const response = await fetch(
      "https://usermanagement1-y074.onrender.com/api/users/export",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedUsers }),
      }
    );
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "users.csv";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-gray-800 border-b-4 border-blue-500 pb-2 inline-block">
          User Management
        </h1>
        <UserTable
          users={users}
          onDelete={(id) => {
            setSelectedUserId(id);
            setShowDeletePopup(true);
          }}
          onSelect={setSelectedUsers}
        />
        <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
          <button
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center"
            onClick={() => setShowSignUpForm(true)}
          >
            <UserPlus className="mr-2" size={18} />
            SIGN UP
          </button>
          <button
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center"
            onClick={handleExport}
            disabled={selectedUsers.length === 0}
          >
            <FileDown className="mr-2" size={18} />
            EXPORT
          </button>
        </div>
        {showSignUpForm && (
          <SignUpForm
            onSubmit={handleSignUp}
            onClose={() => setShowSignUpForm(false)}
          />
        )}
        {showDeletePopup && (
          <DeleteUserPopup
            onConfirm={handleDelete}
            onCancel={() => setShowDeletePopup(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App;
