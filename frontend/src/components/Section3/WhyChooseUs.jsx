import React from 'react';
import { PiMapPinAreaFill } from "react-icons/pi";
import { FaClipboardList } from "react-icons/fa";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";



export default function WhyChooseUs() {
  const features = [
    {
      title: "Expert Guidance",
      description: "Benefit from our team's seasoned expertise for a smooth buying experience",
      // Map Pin Icon
      icon: (
            <PiMapPinAreaFill className="h-7 w-7 text-[#2D1E18]" />
      )
    },
    {
      title: "Personalized Service",
      description: "Our services adapt to your unique needs, making your journey stress-free",
      // User with Pencil Icon
      icon: (
        
        <FaPersonBreastfeeding />
      )
    },
    {
      title: "Transparent Process",
      description: "Stay informed with our clear and honest approach to buying your home",
      // Clipboard List Icon
      icon: (
         <FaClipboardList/> 

      )
    },
    {
      title: "Exceptional Support",
      description: "Providing peace of mind with our responsive and attentive customer service",
      // Handshake Icon
      icon: (
        <FaHandshakeSimple className="h-7 w-7 text-[#2D1E18]" />
      )
    }
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Header Section */}
      <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D1E18] mb-4">
          Why Choose Us
        </h2>
        <p className="text-[#604E47] text-sm md:text-base leading-relaxed font-semibold">
          Elevating Your Home Buying Experience with Expertise, Integrity, <br className="hidden md:inline" /> and Unmatched Personalized Service
        </p>
      </div>

      {/* Cards Grid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-[#DECBC0] rounded-[1.75rem] p-7 flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow"
          >
            {/* card icon */}
            <div className="bg-[#FCF8F5] p-3 rounded-xl mb-5 flex items-center justify-center">
              {feature.icon}
            </div>

            {/* card title */}
            <h3 className="text-lg font-bold text-[#2D1E18] mb-3">
              {feature.title}
            </h3>

            {/* card description */}
            <p className="text-[#604E47] text-xs md:text-sm leading-relaxed font-medium">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}