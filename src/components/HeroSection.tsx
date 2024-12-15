import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-shadowGray text-center py-16 h-screen place-content-center">
      <h1 className="text-4xl md:text-6xl font-bold text-snowWhite font-pressStart">
        Welcome to <span className="text-vibrantOrange font-russo">Kingdom Games</span>
      </h1>
      <p className="text-lg md:text-2xl text-deepBluePurple mt-4 font-vt323">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
      </p>
      <button className="mt-8 px-6 py-3 bg-vibrantOrange text-snowWhite font-bold text-lg rounded hover:bg-deepBluePurple transition duration-300 font-mono">
        Explore Now
      </button>
    </section>
  );
};

export default HeroSection;
