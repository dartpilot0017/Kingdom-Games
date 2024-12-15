import React from 'react';
import game1 from  '../assets/games/game-0.jpg';
import game2 from  '../assets/games/game-1.jpg';
import game3 from  '../assets/games/game-2.jpg';
// import game4 from  '../assets/games/game-3.jpg';

const WhatWeOfferSection: React.FC = () => {
  const offerings = [
    {
      title: 'Interactive Gameplay',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: game1,
    },
    {
      title: 'Biblical Lessons',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: game2
    },
    {
      title: 'Community Growth',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      icon: game3
    },
  ];

  return (
    <section className="bg-shadowGray py-16 font-russo">
      <h2 className="text-3xl md:text-5xl font-medium text-snowWhite text-center mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {offerings.map((offer, index) => (
          <div
            key={index}
            className="text-center font-russo font-normal bg-deepBluePurple bg-opacity-[0.87] text-snowWhite p-6 rounded-lg shadow-lg hover:scale-x-105 hover:scale-y-105 transition duration-300"
          >
            <img src={offer.icon} alt={offer.title} className="object-cover rounded mb-4 h-[250px] w-screen" />
            <h3 className="text-xl font-medium mb-4">{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
