import React from 'react';
import '../App.css'; // Import Tailwind CSS
import FeatureCard from '../components/FeatureCard';

const GamesPage: React.FC = () => {
  const games = [
    {
      title: 'Faith Quest',
      description: 'Embark on a journey to discover biblical truths.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Kingdom Defender',
      description: 'Defend your faith and battle spiritual challenges.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Bible Explorer',
      description: 'Explore the Bible through interactive quests.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <>
      <section className="bg-shadowGray text-snowWhite py-16 px-8 mt-24">
        <h1 className="text-4xl md:text-6xl font-bold text-vibrantOrange text-center mb-12">
          Our Games
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <FeatureCard
              key={index}
              image={game.image}
              title={game.title}
              description={game.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default GamesPage;
