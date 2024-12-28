import React from 'react';
import '../App.css';
import FeatureCard from '../components/FeatureCard';

const AboutPage: React.FC = () => {
  const features = [
    {
      title: 'Faith-Based Gameplay',
      description: 'Our games are designed to promote spiritual growth and biblical knowledge through interactive experiences.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Community Building',
      description: 'We create platforms for players to connect, share insights, and grow together in faith.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Engaging Challenges',
      description: 'Enjoy puzzles, quests, and challenges that enhance learning and spiritual engagement.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <>
      <section className="bg-shadowGray text-snowWhite py-16 px-8 text-center mt-24">
        <h1 className="text-4xl md:text-6xl font-bold text-vibrantOrange mb-6">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-deepBluePurple max-w-4xl mx-auto mb-12 font-vt323">
          Welcome to Kingdom Games, where faith and gaming unite. Our mission is to create
          engaging, biblically-inspired games that foster spiritual growth and learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
