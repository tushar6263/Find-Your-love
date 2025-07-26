'use client'
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdFileUpload } from "react-icons/md";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-rose-400 mb-6">
          Register
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={handleChange}
            required
          />

          <div className="flex gap-2">
            <select className="border border-gray-300 p-2 rounded-md">
              <option value="+1">🇺🇸 +1</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
            <input
              type="text"
              name="phone"
              placeholder="10-digit Number"
              className="flex-1 p-2 border border-gray-300 rounded-md"
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded-md pr-10"
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full p-2 border border-gray-300 rounded-md pr-10"
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer text-gray-400"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <label className="w-full cursor-pointer border border-rose-300 flex items-center justify-center gap-2 py-2 rounded-md text-rose-400 hover:bg-rose-50">
            <MdFileUpload className="text-xl" />
            <span>Upload ID</span>
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className="w-full bg-rose-400 text-white py-2 rounded-md hover:bg-rose-500 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-rose-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
