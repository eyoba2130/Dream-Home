import React from 'react';
import ResidenceCard from '../cards/ResidenceCard'; 
import image1 from '../../assets/Images/image1.png';
import image2 from '../../assets/Images/image2.png';
import image3 from '../../assets/Images/image3.png';

export default function PopularResidences({ residences = [] }) {

  // Props
  const defaultResidences = [
    {
      image: {image1},
      location: "San Francisco, California",
      rooms: "4 Rooms",
      area: "3,500 sq ft",
      price: "$2,500,000"
    },
    {
      image: {image2},
      location: "Beverly Hills, California",
      rooms: "3 Rooms",
      area: "1,500 sq ft",
      price: "$850,000"
    },
    {
      image: {image3},
      location: "Palo Alto, California",
      rooms: "6 Rooms",
      area: "4,000 sq ft",
      price: "$3,700,000"
    }
  ];

  //  defaultResidences
  const displayResidences = residences.length > 0 ? residences : defaultResidences;

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2D1E18]">
          Our Popular Residences
        </h2>
      </div>

      {/* cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayResidences.map((item, index) => (
          <ResidenceCard 
            key={index}
            image={item.image}
            location={item.location}
            rooms={item.rooms}
            area={item.area}
            price={item.price}
          />
        ))}
      </div>

    </section>
  );
}