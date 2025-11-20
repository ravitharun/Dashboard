import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 tracking-wide cursor-pointer">
        TaskManager
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">

        <Link
          to="/dashboard"
          className="text-gray-700 text-lg font-medium cursor-pointer hover:text-blue-600 transition"
        >
          Dashboard
        </Link>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
          Logout
        </button>

      </div>

      {/* Mobile Hamburger Icon */}
      <button
        className="md:hidden text-3xl text-gray-700"
        onClick={() => setOpenMenu(!openMenu)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden transition-all duration-300">

          <Link
            to="/dashboard"
            className="text-gray-700 text-lg font-medium hover:text-blue-600 transition"
            onClick={() => setOpenMenu(false)}
          >
            Dashboard
          </Link>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => setOpenMenu(false)}
          >
            Logout
          </button>

        </div>
      )}
    </nav>
  );
}

export default Navbar;
