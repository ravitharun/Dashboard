import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
  const [fullName, setFullName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const SignupUser = async () => {
    console.log('hi ')
    if (!fullName || !userEmail || !userPassword || !confirmPassword) {
      alert("Fill all required fields");
      return;
    }

    if (userPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const newUser = {
      name: fullName,
      email: userEmail,
      password: userPassword,
    };
    console.log(newUser,'newUser')

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", newUser);

      console.log("Signup Success:", response.data);
      alert("Signup Successful!");

    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong or user already exists");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Create a password"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Confirm Password</label>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Re-enter your password"
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={SignupUser}
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login">
            <span className="text-blue-600 font-medium cursor-pointer hover:underline">
              Login
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;
