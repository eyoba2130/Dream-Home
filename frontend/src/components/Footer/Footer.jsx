import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#E5D3C8] text-[#2D1E17] py-16 px-6 md:px-12 lg:px-20 font-sans">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Logo & Slogan (Spans 4 columns on desktop) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Custom Logo Markup */}
            <div className="flex flex-col mb-6">
              {/* Top horizontal accent line */}
              <div className="w-7 h-[3px] bg-[#2D1E17] mb-[2px]"></div>
              <span className="text-2xl font-extrabold tracking-tight leading-none">
                Dwello
              </span>
            </div>
            
            {/* Slogan */}
            <p className="text-[15px] font-bold leading-relaxed max-w-[240px]">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </div>

          {/* Column 2: About (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[16px] font-extrabold mb-5">About</h4>
            <ul className="flex flex-col gap-3.5 text-[15px] font-bold">
              <li>
                <a href="#story" className="hover:opacity-80 transition-opacity">Our Story</a>
              </li>
              <li>
                <a href="#careers" className="hover:opacity-80 transition-opacity">Careers</a>
              </li>
              <li>
                <a href="#team" className="hover:opacity-80 transition-opacity">Our Team</a>
              </li>
              <li>
                <a href="#resources" className="hover:opacity-80 transition-opacity">Resources</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[16px] font-extrabold mb-5">Support</h4>
            <ul className="flex flex-col gap-3.5 text-[15px] font-bold">
              <li>
                <a href="#faq" className="hover:opacity-80 transition-opacity">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-80 transition-opacity">Contact Us</a>
              </li>
              <li>
                <a href="#help" className="hover:opacity-80 transition-opacity">Help Center</a>
              </li>
              <li>
                <a href="#terms" className="hover:opacity-80 transition-opacity">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Find Us (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[16px] font-extrabold mb-5">Find Us</h4>
            <ul className="flex flex-col gap-3.5 text-[15px] font-bold">
              <li>
                <a href="#events" className="hover:opacity-80 transition-opacity">Events</a>
              </li>
              <li>
                <a href="#locations" className="hover:opacity-80 transition-opacity">Locations</a>
              </li>
              <li>
                <a href="#newsletter" className="hover:opacity-80 transition-opacity">Newsletter</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Social Media Links (Spans 2 columns on desktop) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="text-[16px] font-extrabold mb-5">Our Social</h4>
            <ul className="flex flex-col gap-3.5 text-[15px] font-bold">
              {/* Instagram */}
              <li>
                <a href="#instagram" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 text-[#2D1E17]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              
              {/* Facebook */}
              <li>
                <a href="#facebook" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 text-[#2D1E17]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>

              {/* Twitter / X */}
              <li>
                <a href="#twitter" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                  <svg className="w-5 h-5 text-[#2D1E17]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4l11.73 16h4.27L8.27 4H4z" />
                    <path d="M20 4L4 20" />
                  </svg>
                  <span>Twitter (x)</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}