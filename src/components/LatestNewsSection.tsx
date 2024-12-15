import React from 'react';

const LatestNewsSection: React.FC = () => {
  const news = [
    {
      title: 'Exciting Update 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Exciting Update 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Exciting Update 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <section className="bg-shadowGray py-16 font-russo">
            <h2 className="text-3xl md:text-5xl font-medium text-snowWhite text-center mb-12">
        Latest News
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {news.map((item, index) => (
          <div
          key={index}
          className="text-center font-russo font-normal bg-deepBluePurple bg-opacity-[0.87] text-snowWhite p-6 rounded-lg shadow-lg hover:scale-x-105 hover:scale-y-105 transition duration-300"
        >
            <img src={item.image} alt={item.title} className=" h-[250px] w-screen object-cover rounded mb-4" />
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNewsSection;
