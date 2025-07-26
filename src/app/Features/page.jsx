'use client';
import Image from 'next/image';
import Link from 'next/link';
import { members } from '../../../lib/members';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Members() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-pink-50 py-10 px-6">
      {/* Breadcrumb & Header */}
      <div className="text-center mb-4">
        <span className="text-2xl font-semibold text-center">Home - Members</span>
      </div>
      <h1 className="text-2xl font-semibold text-center">Soulsync Dating Members</h1>
      <div className="w-12 h-1 mx-auto my-2 bg-pink-400 rounded-full"></div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {['Male', 'Female', 'India'].map((filter, index) => (
          <select
            key={index}
            className="px-4 py-2 rounded border border-gray-300 text-sm bg-white"
          >
            <option>{filter}</option>
          </select>
        ))}
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded border border-gray-300 text-sm bg-white"
        />
        <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 text-sm">
          Search
        </button>
      </div>

      {/* Top control */}
      <div className="flex justify-between items-center mt-10 mb-4 px-2 text-sm text-gray-700">
        <div>
          <span className="font-medium">All Members</span> · <span>+100</span>
        </div>
        <div>
          <label className="mr-2">Sort by:</label>
          <select className="border border-gray-300 rounded px-2 py-1">
            <option>Last Active</option>
            <option>Newest</option>
            <option>Name A-Z</option>
          </select>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {members.map((member, index) => (
          <Link
            key={index}
            href={`/member/${member.slug}`}
            className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm hover:shadow-md transition"
          >
            <div className="w-full h-40 relative rounded overflow-hidden mb-2">
              <Image
                src={member.img}
                layout="fill"
                objectFit="cover"
                alt={member.name}
              />
            </div>
            <div className="text-sm font-semibold text-gray-800">{member.name}</div>
            <div className="text-xs text-gray-500">{member.city}, {member.age}</div>
          </Link>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}
