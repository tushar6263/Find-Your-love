'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <nav className="bg-pink-50">
      <div className="flex items-center justify-between mx-auto p-4">

        {/* Logo */}
        <div href ='/' className="logo opacity-30">
          <Image  src="/images/Logo.png" width={62} height={52} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-9 font-medium">
          <li>
            <Link href="/Homepage" className="text-black hover:text-pink-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Features" className="text-black hover:text-pink-600">
              Features
            </Link>
          </li>
          <li>
            <Link href="#community" className="text-black hover:text-pink-600">
              Community
            </Link>
          </li>
          <li>
            <Link href="#blog" className="text-black hover:text-pink-600">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#pages" className="text-black hover:text-pink-600">
              Pages
            </Link>
          </li>
          <li>
            <Link href="#contact" className="text-black hover:text-pink-600">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center space-x-9">
          <Link href="/SignIn" className="hover:text-pink-600">
            SignIn
          </Link>
          <span className="hover:text-pink-600">Help</span>
          <Link href="/Register">
            <button className="text-white bg-rose-500 rounded-xl px-4 py-2 font-bold">
              Register
            </button>
          </Link>
        </div>

      </div>
    </nav>
  );
}
