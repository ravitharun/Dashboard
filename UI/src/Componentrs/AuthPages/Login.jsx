import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const Login = async () => {
    if (!userEmail || !userPassword) {
      alert("Fill the required fields");
      return;
    }

    // const userData = {
    //   email: userEmail,
    //   password: userPassword,
    // };
    console.log('userData', {
      email: userEmail, password: userPassword
    })

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: userEmail, password: userPassword
      });

      console.log("Login Success :", response.data);
      alert("Login Successful!");

    } catch (error) {
      console.error("Login Error:", error);
      alert("Invalid Credentials or Server Issue.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            required
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
            required
            onChange={(e) => setUserPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition"
          onClick={Login}
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?
          <Link to="/Signup">
            <span className="text-blue-600 font-medium cursor-pointer hover:underline ml-1">
              Sign up
            </span>
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
