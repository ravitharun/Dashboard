import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    const [UserLogin, setUserlogin] = useState({Email:"",Passowrd:""})
    const Login = async () => {
        if (!UserLogin.Email || !UserLogin.Passowrd) {
            alert("Fill the required feilds")


        }
        else {
            const UserLoginData = {
                Email: UserLogin.Email,
                passowrd: UserLogin.passowrd
            }
            console.log("UserLoginData : ", UserLoginData)
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
                    Login
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        required
                        onChange={(e) => setUserlogin.Email(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        required
                        onChange={(e) => setUserlogin.Passowrd(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter your password"
                    />
                </div>

                {/* Login Button */}
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-lg font-medium hover:bg-blue-700 transition" onClick={Login}>
                    Login
                </button>

                {/* Signup Link */}
                <p className="text-center text-gray-600 mt-4">
                    Don’t have an account
                    <Link to="/Signup">
                        <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                            Sign up
                        </span>
                    </Link>
                </p>

            </div>
        </div>

    )
}

export default Login
