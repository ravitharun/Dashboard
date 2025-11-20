import React from 'react'

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

  <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

    {/* Title */}
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
      Create Account
    </h2>

    {/* Name */}
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">Full Name</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your full name"
      />
    </div>

    {/* Email */}
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">Email</label>
      <input
        type="email"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Enter your email"
      />
    </div>

    {/* Password */}
    <div className="mb-4">
      <label className="block text-gray-700 mb-1">Password</label>
      <input
        type="password"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Create a password"
      />
    </div>

    {/* Confirm Password */}
    <div className="mb-6">
      <label className="block text-gray-700 mb-1">Confirm Password</label>
      <input
        type="password"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Re-enter your password"
      />
    </div>

    {/* Signup Button */}
    <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition">
      Sign Up
    </button>

    {/* Login Link */}
    <p className="text-center text-gray-600 mt-4">
      Already have an account?{" "}
      <span className="text-blue-600 font-medium cursor-pointer hover:underline">
        Login
      </span>
    </p>

  </div>
</div>

  )
}

export default Signup
