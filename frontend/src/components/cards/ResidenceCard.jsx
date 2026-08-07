import React from 'react';

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
          <svg 
            className="w-5 h-5 text-[#2D1E18]" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-[#2D1E18] font-bold text-lg">
            {location}
          </span>
        </div>

        {/* Features: Rooms & Area */}
        <div className="flex items-center gap-6 mb-6 text-[#5C4D46]">
          {/* Rooms */}
          <div className="flex items-center gap-2">
            {/* Bed/Room Icon */}
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-sm font-semibold">{rooms} Rooms</span>
          </div>

          {/* Area */}
          <div className="flex items-center gap-2">
            {/* Ruler/Area Icon */}
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
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