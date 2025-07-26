'use client';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { members } from '../../../../lib/members';
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer';

export default function MemberProfile() {
  const { username } = useParams();

  // Find member by slug
  const data = members.find((m) => m.slug === username);

  if (!data) {
    return notFound(); // Handle 404 if user not found
  }

  return (
    <>
    <Navbar/>
      <div className="min-h-screen bg-pink-50 text-center px-4 py-8 space-y-10">
      <div className="text-gray-600">
        <span className="text-xl font-semibold">Home - {data.name}</span>
      </div>
      <h1 className="text-3xl font-semibold">Member Single Profile</h1>
      <div className="w-12 h-1 mx-auto my-2 bg-pink-400 rounded-full"></div>
        

      {/* Profile Card */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-40 h-52 relative rounded-lg overflow-hidden shadow-lg">
          <Image src={data.img} alt="Profile" fill className="object-cover" />
        </div>
        <div className="text-left">
          <h2 className="text-xl font-bold">{data.name}</h2>
          <p className="text-sm text-green-500">Active 2 Minutes Ago</p>
          <p className="text-gray-600 text-sm">📍 {data.city}</p>
        </div>
        <div className="flex gap-6 text-center">
          <div>
            <p className="text-lg font-bold">121</p>
            <p className="text-sm text-gray-600">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold">133</p>
            <p className="text-sm text-gray-600">Following</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {["Information", "Activity", "Friends", "Posts", "Media", "More"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full ${
              tab === "Information"
                ? "bg-pink-500 text-white"
                : "bg-white border border-pink-300 text-pink-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Basic Info + Filter Form */}
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
        <div className="bg-white border border-pink-200 rounded-lg p-6 w-full lg:w-1/2 text-left shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Basic Information</h2>
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <p><span className="font-semibold">Name:</span> {data.name}</p>
            <p><span className="font-semibold">Gender:</span> {data.gender}</p>
            <p><span className="font-semibold">Between Age:</span> {data.age}</p>
            <p><span className="font-semibold">Education:</span> {data.education}</p>
            <p><span className="font-semibold">Marital Status:</span> {data.maritalStatus}</p>
            <p><span className="font-semibold">Date of Birth:</span> {data.dob}</p>
            <p><span className="font-semibold">Work As:</span> {data.work}</p>
            <p><span className="font-semibold">City:</span> {data.city}</p>
          </div>
        </div>

        <div className="bg-white border border-pink-200 rounded-lg p-6 w-full lg:w-1/3 shadow-sm">
          <h2 className="text-md font-medium text-pink-600 mb-4">
            Seriously Dating With LoveM!
          </h2>
          <form className="space-y-4 text-left text-sm">
            <div>
              <label className="block mb-1 text-gray-600">I Am a</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Looking For</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white border border-pink-200 rounded-lg p-6 max-w-5xl mx-auto text-left shadow-sm">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Myself Summary</h2>
        <p className="text-sm text-gray-600 mb-2">
          Lorem ipsum dolor sit amet consectetur. Semper varius gravida gravida interdum faucibus...
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}
