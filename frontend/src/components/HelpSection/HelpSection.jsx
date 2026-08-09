import React from 'react';

export default function HelpSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="bg-[#FDF8F4] py-16 px-4 flex items-center justify-center font-sans">
      <div className="max-w-[700px] w-full flex flex-col items-center text-center">
        
        {/* Headings */}
        <h2 className="text-3xl md:text-[40px] font-extrabold text-[#2D1E17] leading-tight mb-8">
          Do You Have Any Questions?<br />Get Help From Us
        </h2>

        {/* Feature Options List */}
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 mb-10 text-[#2D1E17]">
          {/* Option 1: Live Chat */}
          <div className="flex items-center gap-2.5">
            {/* 26x26 Badge Icon */}
            <svg 
              className="w-[26px] h-[26px] text-[#2D1E17]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 11 11 13 15 9" />
            </svg>
            <span className="text-[15px] font-bold">Chat live with our support team</span>
          </div>

          {/* Option 2: Browse FAQ */}
          <div className="flex items-center gap-2.5">
            {/* 26x26 Badge Icon */}
            <svg 
              className="w-[26px] h-[26px] text-[#2D1E17]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 11 11 13 15 9" />
            </svg>
            <span className="text-[15px] font-bold">Browse our FAQ</span>
          </div>
        </div>

        {/* Contact/Email Form */}
        <form 
          onSubmit={handleSubmit} 
          className="flex flex-col sm:flex-row items-stretch gap-4 w-full justify-center"
        >
          {/* Email Input Field container (approx 505px width on desktop) */}
          <div className="relative flex items-center w-full sm:max-w-[505px] h-[58px] bg-[#E5D3C8] rounded-lg px-4">
            {/* 24x24 Envelope Icon */}
            <svg 
              className="w-6 h-6 text-[#2D1E17] absolute left-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              required
              className="w-full h-full pl-9 bg-transparent border-none text-[#2D1E17] placeholder-[#5A4E46]/70 focus:outline-none text-[15px] font-medium"
            />
          </div>

          {/* Submit Button (approx 156px width on desktop) */}
          <button 
            type="submit" 
            className="w-full sm:w-[156px] h-[58px] bg-[#2D1E17] text-white font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all text-[15px]"
          >
            Submit
          </button>
        </form>

      </div>
    </section>
  );
}