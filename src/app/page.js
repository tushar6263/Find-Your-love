'use client';

import Image from "next/image";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function Home() {
  const pathname = usePathname();

  // Define the paths where navbar should be hidden
  const hideNavbarOn = ['/Register', '/SignIn'];

  return (
    <>
      <Navbar/>
      <main className="font-sans">
          <section className="bg-pink-50 py-10 px-5 text-center md:text-left">
              <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <div>
                  <h1 className="text-7xl font-bold text-blue-900 leading-tight">
                    New <br />
                    Unforgettable <br />
                    <span className="text-blue-900">dating.</span>
                  </h1>
                  <p className="mt-4 text-gray-600 text-xl" >
                    Still looking for your significant other? Loven is the place for you! </p>
                    <p className=" text-gray-600 text-xl" >Join us now to meet single men and women worldwide.
                  </p>
                </div>
                <div className="mb-6 md:mb-0">
                  <Image
                    src="/Couple.png" // Place your image in public/images
                    alt="Couple"
                    width={350}
                    height={350}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </section>
      
            {/* How It Works Section */}
            <section className="text-center py-12 px-4">
              <p className="text-pink-500 font-semibold text-xl">How Does It Work</p>
              <h2 className="text-3xl font-bold text-gray-800 mt-2">Step to Find Your Soul Mate</h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {/* Card 1 */}
                <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition">
                  <Image src="/Images/Create-a-profile.png" alt="Profile" width={80} height={80} className="mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Create A Profile</h3>
                  <p className="text-sm text-gray-600">
                    Learn from them and try to make it to this board, this will for sure boost your visibility and increase your chances to find you loved one.
                  </p>
                </div>
      
                {/* Card 2 */}
                <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition">
                  <Image src="/Images/Find-matches.png" alt="Match" width={50} height={50} className="mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Find Matches</h3>
                  <p className="text-sm text-gray-600">
                    Learn from them and try to make it to this board, this will for sure boost your visibility and increase your chances to find you loved one.
                  </p>
                </div>
      
                {/* Card 3 */}
                <div className="p-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition">
                  <Image src="/images/Start-dating.png" alt="Dating" width={80} height={80} className="mx-auto mb-4" />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">Start Dating</h3>
                  <p className="text-sm text-gray-600">
                    Learn from them and try to make it to this board, this will for sure boost your visibility and increase your chances to find you loved one.
                  </p>
                </div>
              </div>
            </section>
      
          
      
      {/* Top Members */}
      <section className="bg-pink-50 py-12 px-4 text-center">
        <p className="text-pink-500 font-semibold text-xl">Top Members</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Soulsync Top Members</h2>
      
        <div className="mt-10 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Angel Hopkins', location: 'Canada', age: 28, image : '/Images/groom.png' },
            { name: 'Angel Hopkins', location: 'Canada', age: 28, image: '/Images/Bride.png' },
            { name: 'Texst Eleckting', location: 'Canada', age: 30, image: '/Images/groom.png' },
            { name: 'Gyan-Baffour', location: 'Canada', age: 32, image: '/Images/Bride.png' },
            { name: 'Andrea Guido', location: 'Canada', age: 29, image: '/Images/groom.png' },
            { name: 'Crystal Ford', location: 'Canada', age: 31, image: '/Images/Bride.png' },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg w-40 p-3 hover:shadow-xl transition">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="rounded-lg object-cover"
              />
              <h3 className="text-sm font-semibold mt-2">{member.name}</h3>
              <p className="text-xs text-gray-500">{member.location}, {member.age}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-14 px-4 bg-white text-center">
        <p className="text-pink-500 font-semibold  text-xl">Testimonials</p>
        <h2 className="text-3xl font-bold text-gray-800 mt-2">Listen What are saying Our Customers</h2>
      
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          {/* Testimonial Text */}
          <div className="max-w-md text-left">
            <p className="text-4xl text-pink-400 mb-4">“</p>
            <h3 className="text-xl font-semibold text-gray-800">
              Pooja Suryanvanshi <span className="text-sm text-gray-500">(Designer)</span>
            </h3>
            <p className="mt-2 text-0.5xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Orci morbi vitae egestas placerat praesent eget
              morbi. Nunc quam integer sagittis nisi molestie. Eget nibh egestas eu massa nulla erat
              gravida. Id elit libero viverra cras pharetra nullam a vel enim.
            </p>
          </div>
      
          {/* Testimonial Image */}
          <div>
            <Image
              src="/Images/Bride.png"
              alt="Testimonial"
              width={300}
              height={300}
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </section>
      
      
         {/* Why Choose Soulsync */}
        <section className="bg-pink-50 py-12 px-4 md:px-20 text-center">
            <h2 className="text-pink-500 font-semibold  text-xl">Our Website</h2>
            <h1 className="text-3xl font-bold text-gray-800 mt-2">Why Choose Soulsync</h1>
      
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 text-left">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Simple to Use</h3>
                  <p className="text-gray-600">Soulsync is very easy to use: just choose your and your partner’s gender, age, and location — and you're all set!</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Cool Community</h3>
                  <p className="text-gray-600">Besides being a dating service, we have a supportive and understanding community that’s always ready to help.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">Smart Matching</h3>
                  <p className="text-gray-600">Our matching system is based on geolocation and interests. It helps you find the best people to meet or spend time with.</p>
                </div>
              </div>
      
              <div className="relative">
                <Image
                  src="/Images/groom.png" // replace with your image in /public
                  alt="Happy couple"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                
              </div>
            </div>
          </section>
        
      
      {/* Stories From The Hearts */}
      <section className="bg-white py-16 px-4 text-center">
        <p className="text-pink-500 font-semibold">Love in Faith Success Stories</p>
        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-10">Stories From The Hearts</h2>
      
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Image Post Formate",
              desc: "Love stories that blossom through connection. Discover true bonding experiences shared from real users.",
              image: "/Images/Start-dating.png"
            },
            {
              title: "Couple Of Month",
              desc: "Featured couple who found each other and experienced love, understanding, and companionship.",
              image: "/Images/Start-dating.png"
            },
            {
              title: "Media For Blog Article",
              desc: "Explore deep and inspiring love stories captured through real-life blog articles and media.",
              image: "/Images/Start-dating.png"
            }
          ].map((story, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
              <Image
                src={story.image}
                alt={story.title}
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-4">{story.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{story.desc}</p>
              <button className="mt-4 px-4 py-2 bg-pink-500 text-white text-sm rounded hover:bg-pink-600 transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      </section>
      
          </main>
      <Footer/>
    </>
  );
}
