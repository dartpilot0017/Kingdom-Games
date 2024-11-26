import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxZoom = 150; // Max percentage for zoom
      const baseSize = 100; // Base size as percentage
      const zoomAmount = Math.min(baseSize + scrollPosition * 0.1, maxZoom); // Calculate zoom
      const parallaxSection = document.querySelector('.parallax-image') as HTMLElement;
      if (parallaxSection) {
        parallaxSection.style.backgroundSize = `${zoomAmount}%`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);
  return (
    //   <section className="bg-lightIvory text-center py-20">
    //     <h2 className="text-charcoalBlack text-4xl font-bold">
    //       Welcome to <span className="text-goldenYellow">KingdomGames</span>
    //     </h2>
    //     <p className="text-lg mt-4">
    //       Explore our royal selection of thrilling games!
    //     </p>
    //     <button className="mt-6 px-6 py-2 bg-lightSkyBlue text-charcoalBlack font-semibold rounded hover:bg-charcoalBlack hover:text-lightSkyBlue">
    //       Start Playing
    //     </button>
    //   </section>
    <div className="relative">
      {/* Hero Section */}
      {/* <section
        className="h-screen parallax-image flex flex-col justify-center items-center bg-cover bg-center filter blur-sm"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?t=st=1732498664~exp=1732502264~hmac=edac9d76b3ec5eb2b7da526c9611bb252e458441d800bc826b3a857db17406a3&w=740)",
        }}
      >
      <section
        className="h-screen bg-cover bg-center parallax-image"
        style={{
          backgroundImage: "url(https://img.freepik.com/free-vector/dark-hexagonal-background-with-gradient-color_79603-1409.jpg?t=st=1732498664~exp=1732502264~hmac=edac9d76b3ec5eb2b7da526c9611bb252e458441d800bc826b3a857db17406a3&w=740)",
        }}
      >
        <div className="h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-center text-lightIvory">
          <h1 className="text-5xl font-bold" data-aos="fade-up">
            Welcome to <span className="text-goldenYellow">Kingdom Games</span>
          </h1>
          <p className="mt-4 text-xl" data-aos="fade-up" data-aos-delay="200">
            Embark on a journey of faith, creativity, and adventure.
          </p>
          <button
            className="mt-6 px-6 py-2 bg-lightSkyBlue text-charcoalBlack font-semibold rounded hover:bg-charcoalBlack hover:text-lightSkyBlue"
            data-aos="zoom-in"
          >
            Learn More
          </button>
        </div>
      </section> */}

      <section className="w-full h-screen flex justify-center items-center relative">
        {/* <section className="bg-gradient-to-r from-snowWhite to-shadowGray text-center text-snowWhite py-20"> */}
        {/* <section className="bg-gradient-to-r from-vibrantOrange to-deepBluePurple text-center text-snowWhite py-20"> */}
        <div className="hero-bg parallax-image" />
        <div className="z-10 w-4/5 p-8 rounded text-center">
          <h1 className="text-4xl font-epBoxi text-snowWhite">Empowering the Knowledge of the Kingdom</h1>
          <p className="text-1xl font-poppins text-snowWhite">
            Aenean rhoncus lacus ac risus maximus, a luctus augue dapibus. Donec sit amet dignissim purus. Donec posuere lorem felis, at auctor ex dapibus et. Morbi eleifend pellentesque laoreet. Sed quis venenatis ex. Aliquam nec pharetra diam, pulvinar elementum justo. Quisque volutpat sem vitae arcu lacinia eleifend. Suspendisse potenti. Curabitur et felis at est finibus dictum et ut ante. Cras ut nibh eget tellus faucibus rhoncus.
          </p>
          <button className="mt-8 bg-vibrantOrange text-snowWhite px-6 py-2 rounded-full hover:bg-deepBluePurple">
            Get Started
          </button>
        </div>
      </section>


      {/* <section id='home' className="w-full h-screen flex justify-center items-center relative">
                Blurred Background
                <div className="hero-bg parallax-image"></div>

                Content
                <div className="z-10 bg-black bg-opacity-50 p-8 rounded text-center">
                    <h1 className="text-5xl font-bold text-lightIvory">
                        Welcome to <span className="text-goldenYellow">Kingdom Games</span>
                    </h1>
                    <p className="mt-4 text-xl text-lightIvory">
                        Embark on a journey of faith, creativity, and adventure.
                    </p>
                    <button className="mt-6 px-6 py-2 bg-lightSkyBlue text-charcoalBlack font-semibold rounded hover:bg-charcoalBlack hover:text-lightSkyBlue">
                        Learn More
                    </button>
                </div>
            </section> */}


      {/* Other Sections */}
      {/* <section className="bg-lightIvory py-16 text-charcoalBlack" id="games">
                <h2 className="text-center text-3xl font-bold" data-aos="fade-right">
                    Our Games
                </h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                    Add game showcase cards
                </div>
            </section> */}
    </div>
  );
};

export default Hero;
