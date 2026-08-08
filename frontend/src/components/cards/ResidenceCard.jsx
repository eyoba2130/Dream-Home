import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { MdOutlineBedroomChild } from "react-icons/md";




export default function ResidenceCard({ image, location, rooms, area, price }) {
  return (
    <div className="bg-[#E2D1C3] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
      
      {/* 1. Image Section */}
      <div className="h-64 w-full overflow-hidden">
        <img 
          src={image} 
          alt={location} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        
        {/* Location with Pin Icon */}
        <div className="flex items-center gap-2 mb-4">
          {/* Location Pin Icon */}
          <FaLocationDot className="text-[#2D1E18] w-5 h-5" />
          <span className="text-[#2D1E18] font-bold text-lg">
            {location}
          </span>
        </div>

        {/* Features: Rooms & Area */}
        <div className="flex items-center gap-6 mb-6 text-[#5C4D46]">
          {/* Rooms */}
          <div className="flex items-center gap-2">
            {/* Bed/Room Icon */}
            <CiHome className="w-5 h-5" />
            <span className="text-sm font-semibold">{rooms} Rooms</span>
          </div>

          {/* Area */}
          <div className="flex items-center gap-2">
            {/* Ruler/Area Icon */}
            <MdOutlineBedroomChild className="w-5 h-5" />
            <span className="text-sm font-semibold">{area} sq ft</span>
          </div>
        </div>

        {/* Footer: Sign up Button & Price */}
        <div className="flex items-center justify-between mt-auto">
          <button className="bg-[#2D1E18] hover:bg-[#422D24] text-white px-5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition-colors duration-200">
            Sign up
          </button>
          <span className="text-[#2D1E18] font-extrabold text-xl">
            {price}
          </span>
        </div>

      </div>
    </div>
  );
}