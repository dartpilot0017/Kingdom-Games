import React from 'react';

const WhatWeOfferSection: React.FC = () => {
  const offerings = [
    {
      title: 'Interactive Gameplay',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: 'https://via.placeholder.com/80',
    },
    {
      title: 'Biblical Lessons',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'https://via.placeholder.com/80',
    },
    {
      title: 'Community Growth',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      icon: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <section className="bg-shadowGray py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-vibrantOrange text-center mb-12">
        What We Offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {offerings.map((offer, index) => (
          <div
            key={index}
            className="text-center bg-vibrantOrange bg-opacity-[0.87] text-deepBluePurple p-6 rounded-lg shadow-lg hover:bg-vibrantOrange hover:text-snowWhite transition duration-300"
          >
            <img src={offer.icon} alt={offer.title} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
