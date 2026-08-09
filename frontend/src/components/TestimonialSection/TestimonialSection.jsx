import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';

import image1 from '../../assets/Images/image4.jpg';
import image2 from '../../assets/Images/image5.jpg';
import image3 from '../../assets/Images/image6.jpg';
import image4 from '../../assets/Images/image7.jpg';
import image5 from '../../assets/Images/image8.jpg';
import image6 from '../../assets/Images/image9.jpg';




const testimonialsData = [
  {
    id: 1,
    roomImage: image1,
    avatar: image4,
    name: "Sarah Nguyen",
    location: "San Francisco",
    rating: "5.0",
    text: "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
  },
  {
    id: 2,
    roomImage: image2,
    avatar: image5,
    name: "Michael Rodriguez",
    location: "San Diego",
    rating: "4.5",
    text: "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!"
  },
  {
    id: 3,
    roomImage: image3,
    avatar: image6,
    name: "Emily Johnson",
    location: "Los Angeles",
    rating: "5.0",
    text: "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!"
  }
];

export default function Testimonials() {
  return (
    <section className="bg-[#FDF8F4] py-16 px-4 min-h-screen flex items-center justify-center font-sans">
      <div className="max-w-[1140px] w-full flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-[40px] font-extrabold text-[#2D1E17] leading-tight text-center mb-12">
          What People Say<br />About Dwello
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-10">
          {testimonialsData.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-[#E5D3C8] rounded-[20px] overflow-hidden flex flex-col shadow-sm transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="w-full h-[200px] overflow-hidden">
                <img 
                  src={testimonial.roomImage} 
                  alt="Interior Room" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* User Row info */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-[0.95rem] font-bold text-[#2D1E17]">
                        {testimonial.name}
                      </h3>
                      <span className="text-xs font-semibold text-[#5A4E46]">
                        {testimonial.location}
                      </span>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="bg-white px-2 py-1 rounded-[4px] text-xs font-bold flex items-center gap-1 text-[#2D1E17]">
                    <span className="text-[#FFB800] text-sm">★</span>
                    {testimonial.rating}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-[0.85rem] leading-relaxed text-[#5A4E46] font-medium">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 justify-center">
          <button 
            aria-label="Previous slide" 
            className="bg-[#2D1E17] text-white w-11 h-11 rounded-full flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button 
            aria-label="Next slide" 
            className="bg-[#2D1E17] text-white w-11 h-11 rounded-full flex items-center justify-center hover:opacity-90 active:scale-95 transition-all"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}