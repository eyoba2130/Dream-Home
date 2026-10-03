import React from 'react';

// export default መሆኑን ያረጋግጡ
export default function TestimonialCard({ cardImage, avatar, name, location, rating, review }) {
  return (
    <div className="bg-[#DECBC0] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="h-48 md:h-52 w-full">
        <img 
          src={cardImage} 
          alt={`${name}'s home`} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex flex-col space-y-4 flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={avatar} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover border border-white"
            />
            <div className="flex flex-col text-left">
              <span className="text-[#2D1E18] font-bold text-base">{name}</span>
              <span className="text-[#604E47] text-xs font-semibold">{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-white px-2.5 py-1 rounded-md text-xs font-bold text-[#2D1E18]">
            <svg className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-[#604E47] text-sm leading-relaxed font-semibold text-left">
          {review}
        </p>
      </div>
    </div>
  );
}