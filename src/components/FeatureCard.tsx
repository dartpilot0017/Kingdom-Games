import React from 'react';

interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
    return (
        <div className="text-center font-russo font-normal bg-deepBluePurple bg-opacity-[0.87] text-snowWhite p-6 rounded-lg shadow-lg hover:scale-x-105 hover:scale-y-105 transition duration-300"
        >
            <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default FeatureCard;
