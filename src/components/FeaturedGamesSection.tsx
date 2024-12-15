import React from 'react';

const FeaturedGamesSection: React.FC = () => {
  const games = [
    {
      title: 'Faith Quest',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Kingdom Defender',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Bible Explorer',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <section className="bg-shadowGray py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-vibrantOrange text-center mb-12">
        Featured Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-snowWhite text-deepBluePurple p-6 rounded-lg shadow-lg hover:bg-deepBluePurple hover:text-snowWhite transition duration-300"
          >
            <img src={game.image} alt={game.title} className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-4">{game.title}</h3>
            <p>{game.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGamesSection;
