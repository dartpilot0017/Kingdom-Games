import React from 'react';
import '../App.css'; // Import Tailwind CSS
import HeroSection from '../components/HeroSection';
import FeaturedGamesSection from '../components/FeaturedGamesSection';
import CallToActionSection from '../components/CallToActionSection';
import LatestNewsSection from '../components/LatestNewsSection';
import WhatWeOfferSection from '../components/WhatWeOfferSection';

const HomePage: React.FC = () => {
    return (
        <>
        <HeroSection />
        <FeaturedGamesSection />
        <WhatWeOfferSection />
        <LatestNewsSection />
        <CallToActionSection />
        </>
    );
};
export default HomePage;
