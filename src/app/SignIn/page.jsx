'use client'
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-rose-400 mb-6">
          Login
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full border border-rose-300 p-2 rounded-md focus:outline-none focus:ring focus:ring-rose-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full border border-gray-300 p-2 rounded-md pr-10 focus:outline-none focus:ring focus:ring-rose-300"
                required
              />
              <span
                className="absolute right-3 top-2.5 text-sm text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁️
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-rose-400"
              />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-rose-400 hover:underline">
              Forget password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-2 rounded-md hover:bg-rose-500 transition"
          >
            Log In
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <div className="space-y-2">
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <FcGoogle className="mr-2 text-xl" /> Continue with Google
          </button>
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <FaFacebookF className="mr-2 text-blue-600 text-lg" /> Continue with Facebook
          </button>
          <button className="flex items-center justify-center w-full border rounded-md py-2 hover:bg-gray-100">
            <FaApple className="mr-2 text-black text-lg" /> Continue with Apple
          </button>
        </div>

        <p className="text-center text-sm mt-6">
          Don’t you have an account?{" "}
          <a href="#" className="text-rose-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
