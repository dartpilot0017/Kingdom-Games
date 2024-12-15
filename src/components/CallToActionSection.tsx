import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <section className="bg-shadowGray text-center py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-snowWhite">
        Join the <span className="text-vibrantOrange">Kingdom Games</span> Community
      </h2>
      <p className="text-lg md:text-xl text-deepBluePurple mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
      </p>
      <button className="mt-8 px-6 py-3 bg-vibrantOrange text-snowWhite font-bold text-lg rounded hover:bg-deepBluePurple transition duration-300">
        Sign Up Now
      </button>
    </section>
  );
};

export default CallToActionSection;
