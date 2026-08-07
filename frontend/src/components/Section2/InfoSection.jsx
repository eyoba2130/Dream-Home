import React from 'react';
import image2 from '../../assets/Images/image2.jpg';
export default function InfoSection() {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Image Section */}
        <div className="w-full">
          <img 
            src={image2}
            alt="Modern house with swimming pool" 
            className="w-full h-auto object-cover rounded-[2rem]"
          />
        </div>

        {/*  (Content) */}
        <div className="flex flex-col space-y-6 lg:space-y-8">
          
          {/*  (Heading) */}
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold text-[#2D1E18] leading-tight">
            We Help You To Find <br className="hidden md:inline" /> Your Dream Home
          </h2>
          
          <p className="text-[#604E47] text-sm md:text-base leading-relaxed max-w-xl font-medium">
            From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
          </p>

          <div className="grid grid-cols-3 gap-2 pt-4 md:pt-6">
            
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#2D1E18]">8K+</div>
              <div className="text-xs md:text-sm text-[#604E47] font-semibold mt-1">
                Houses Available
              </div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#2D1E18]">6K+</div>
              <div className="text-xs md:text-sm text-[#604E47] font-semibold mt-1">
                Houses Sold
              </div>
            </div>
            
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-[#2D1E18]">2K+</div>
              <div className="text-xs md:text-sm text-[#604E47] font-semibold mt-1">
                Trusted Agents
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}