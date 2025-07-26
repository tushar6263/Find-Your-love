'use client'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800  ">
      {/* Download App Section */}
<section className="bg-pink-50 py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Text Content */}
    <div>
      <h2 className="text-xl font-semibold text-gray-700">Download App Our Soulsync</h2>
      <h3 className="text-3xl font-bold text-blue-900 mt-2 mb-4">Easy Connect to Everyone</h3>
      <p className="text-gray-600 text-sm mb-6 max-w-md">
        All it take is 30 seconds to download. Fast, Simple & Delightful.
        Meet genius people near you. Find meaningful connection effortless.
        Your perfect match is just a click away.
      </p>

      {/* App Store Buttons */}
      <div className="flex items-center space-x-4">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src="/Images/App-Store.png" alt="App Store" width={140} height={50} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image src="/Images/Play-Store.png" alt="Google Play" width={140} height={50} />
        </a>
      </div>
    </div>

    {/* Mobile Image */}
    <div className="relative">
      <Image
        src="/Images/Mobile.png"
        alt="Mobile App"
        width={300}
        height={700}
        className="mx-auto"
      />
    </div>
  </div>
</section>
      {/* Top contact info */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 px-6 pb-6 mt-3 border-b">
        <div className="flex items-center gap-2">
          <FaPhoneAlt className="text-rose-400" />
          <span>+91 123456789</span>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-rose-400" />
          <span>soulsync@example.com</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-rose-400" />
          <span>Beverley, New York 224 USA</span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
        {/* Logo and description */}
        <div>
          <div className="mb-2">
            <img
              src="/Images/logo.png"
              alt="SoulSync Logo"
              className="h-10 mb-2"
            />
            <h1 className="text-lg font-bold">SoulSync</h1>
          </div>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur. Auctor eget bibendum
            facilisis libero etiam sed donec aliquam sed. Risus tortor a
            malesuada in tortor.
          </p>
        </div>

        {/* Recent News */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Our Recent News</h2>
          <ul className="space-y-2">
            {[1, 2, 3].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <img
                  src="/Images/User.png"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">Samantha Lee</p>
                  <p className="text-xs text-gray-500">{i === 1 ? "Active" : `${i} Hours Ago`}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Our Newsletter Signup</h2>
          <p className="text-sm text-gray-600 mb-3">
            By Subscribing to our mailing list you will always be update with the latest news from us.
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border border-rose-200 rounded-md p-2 mb-3 focus:outline-none"
          />
          <button className="w-full bg-rose-400 text-white py-2 rounded-md hover:bg-rose-500 transition">
            Send Message
          </button>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="text-center text-xs text-gray-500 py-4 bg-rose-50">
        Copyright © 2024 Soulsync Dating App All rights reserved.
      </div>
    </footer>
  );
}
