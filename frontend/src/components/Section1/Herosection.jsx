import React, { useState } from 'react';
import HeroImage from '../../assets/Images/HeroImage.png'; 
export default function HeroSection() {
  const [location, setLocation] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div className="min-h-screen bg-[#FDF8F5] flex flex-col justify-between relative overflow-hidden font-sans">
      
      <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-20 pb-36 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        
        <div className="flex flex-col space-y-6 max-w-lg">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#2D1E18] leading-tight">
            Find Your <br /> Dream Home
          </h1>
          <p className="text-[#604E47] text-base md:text-lg leading-relaxed">
            Explore our curated selection of exquisite properties meticulously tailored to your unique dream home vision.
          </p>
          
          {/* Sign Up Button */}
          <div className="pt-2">
            <button className="bg-[#2D1E18] text-white px-6 py-2.5 rounded-md hover:bg-[#1E1410] transition-all text-sm font-semibold tracking-wide">
              Sign up
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative w-full flex justify-center md:justify-end">
          
          <img 
            src={HeroImage} 
            alt="Modern luxury house" 
            className="w-full max-w-xl md:max-w-2xl object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Floating Filter Bar */}
      <div className="w-full max-w-5xl mx-auto px-6 pb-12 md:absolute md:bottom-6 md:left-1/2 md:transform md:-translate-x-1/2 z-20">
        <div className="bg-[#DECBC0] rounded-2xl p-5 md:p-6 shadow-lg flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* 1. Location Input */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center justify-between bg-[#FCF8F5] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-[#2D1E18] transition">
              <input 
                type="text" 
                placeholder="Location" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-transparent outline-none w-full text-[#2D1E18] placeholder-[#8A7970] font-medium"
              />
             
            </div>
          </div>

          {/* 2. Type Input */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center justify-between bg-[#FCF8F5] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-[#2D1E18] transition">
              <input 
                type="text" 
                placeholder="Type" 
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="bg-transparent outline-none w-full text-[#2D1E18] placeholder-[#8A7970] font-medium"
              />
              
            </div>
          </div>

          {/* 3. Price Range Input */}
          <div className="w-full md:w-1/4">
            <div className="flex items-center justify-between bg-[#FCF8F5] rounded-xl px-4 py-3.5 border border-transparent focus-within:border-[#2D1E18] transition">
              <input 
                type="text" 
                placeholder="Price Range" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-transparent outline-none w-full text-[#2D1E18] placeholder-[#8A7970] font-medium"
              />
          
            </div>
          </div>

          {/* Filter Sign up Button */}
          <button className="w-full md:w-auto bg-[#2D1E18] hover:bg-[#1E1410] text-white px-8 py-3.5 rounded-xl font-bold transition-all">
            Sign up
          </button>

        </div>
      </div>
    </div>
  );
}