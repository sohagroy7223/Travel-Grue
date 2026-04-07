import React from "react";
import { IoSearch } from "react-icons/io5";

const Hero = () => {
  return (
    <div
      className="md:relative md:h-96 w-full  p-4 bg-cover bg-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/hF6dRbqf/Group-13-1-1.png)",
      }}
    >
      {/* Dark + Blur Overlay */}
      <div className="md:absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="md:relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-6xl font-bold mb-4">
          Explore Your Travel
        </h1>
        <p className="max-w-2xl mb-8 text-gray-200">
          Dolor sit amet consectetur. Nullam suspendisse vitae ultricies dolor
          adipiscing. In et odio enim ac quis sapien urna eu phasellus.
        </p>

        {/* Search Box */}
        <div className="bg-white/40 backdrop-blur-md p-2 rounded-xl flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Where go"
            className="px-4 py-2 bg-base-100 rounded-md outline-none text-black"
          />

          <input
            type="text"
            placeholder="When"
            className="px-4 py-2 rounded-md bg-base-100 outline-none text-black"
          />

          <select className="px-4 py-2 bg-base-100  rounded-md text-black">
            <option>Select Type</option>
            <option>Hill</option>
            <option>waterfall</option>
            <option>Somudro</option>
          </select>

          <button className="bg-primary flex items-center gap-2 text-white px-6 py-2 rounded-md">
            <IoSearch size={20}></IoSearch>
            <h2>Find Now</h2>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
