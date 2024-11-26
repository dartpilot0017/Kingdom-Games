import React from "react";
import { motion } from "framer-motion";

const games = [
  { 
    title: 'Game 1',
    description: 'Morbi cursus maximus massa. Integer quam lacus, tempor vel ligula sed, lobortis interdum erat. Donec blandit mi imperdiet lorem lacinia venenatis. Maecenas nibh nulla, gravida non sem quis, tempor vestibulum sapien. Pellentesque arcu quam, porttitor in rhoncus quis, mattis non felis. Aenean tincidunt non purus a hendrerit. Ut sodales, velit ut blandit euismod, orci turpis fringilla magna, ac convallis odio turpis vel metus.',
    src: 'https://images.unsplash.com/photo-1533237264985-ee62f6d342bb?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    title: 'Game 2',
    description: 'Phasellus quis arcu semper, eleifend libero quis, fringilla nisl. Sed tempor mi vel arcu fermentum consequat. Maecenas ante felis, efficitur a neque non, tristique sagittis libero. Cras in hendrerit tellus. Etiam id orci vehicula, tincidunt sapien a, eleifend elit. Nam sapien purus, dapibus in sodales ac, ullamcorper at risus. Suspendisse dolor metus, ullamcorper quis elit vitae, gravida laoreet lorem.',
    src: 'https://images.unsplash.com/photo-1533236897111-3e94666b2edf?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    title: 'Game 3',
    description: 'Aliquam mattis, metus quis rhoncus imperdiet, nibh metus imperdiet mauris, sed congue lorem lacus a leo. Aliquam vitae egestas tortor. Vivamus sed ante malesuada, efficitur arcu vitae, gravida metus. Suspendisse sed turpis et turpis mattis egestas id sed mi. Aliquam pulvinar, felis id sagittis posuere, odio massa pulvinar orci, sed venenatis massa ipsum eu elit. In in nulla malesuada, placerat orci et, consequat turpis. Suspendisse eleifend urna in dignissim hendrerit.',
    src: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=1478&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  { 
    title: 'Game 4',
    description: 'Vestibulum in ipsum iaculis, hendrerit ligula ac, fringilla libero. Nulla sit amet ante a mauris mattis tincidunt. Sed vel volutpat nulla, non fringilla lacus. Vestibulum facilisis hendrerit venenatis. Pellentesque risus libero, maximus id sodales non, congue fringilla risus. Aliquam erat volutpat. Aenean metus mi, tempor dictum suscipit nec, facilisis id ligula. Nullam interdum tempor est et sollicitudin. Duis ultricies risus et est gravida, in congue sem vestibulum.',
    src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  // { title: 'Game 1', description: 'A thrilling quest.' },
  // { title: 'Game 3', description: 'A kingdom to conquer.' },
  // { title: 'Game 1', description: 'A kingdom to conquer.' },
  // { title: 'Game 2', description: 'An epic adventure.' },
  // { title: 'Game 3', description: 'A thrilling quest.' },
];

// const GameImages = ({game, index}) => {
//   const imageSrc = require(`../assets/games/game-${index}.jpg`);
// }

const GameShowcase = () => {
  return (
    // <section className="bg-lightIvory py-16 text-charcoalBlack" id="games">
    //   <h3 className="text-center text-3xl font-bold" data-aos="fade-right">
    //     Our Games
    //   </h3>
    //   <div className="grid gap-6 md:grid-cols-3 px-8 mt-8">
    //     {games.map((game, index) => (
    //       <div
    //         key={index}
    //         className="bg-royalBlue text-goldenYellow p-6 rounded shadow-lg hover:bg-lightSkyBlue hover:text-charcoalBlack"
    //       >
    //         <h4 className="text-xl font-bold">{game.title}</h4>
    //         <p className="mt-2">{game.description}</p>
    //       </div>
    //     ))}
    //   </div>
    // </section> 

<section className="bg-shadowGray py-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
  {games.map((game, index) => (
    <div
      key={index}
      className="bg-vibrantOrange text-snowWhite rounded-lg hover:shadow-md hover:shadow-snowWhite transform hover:scale-105 transition-all overflow-hidden"
    >
      <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 1.5 }}
      >
        <img src={game.src} alt={game.title} className="w-full h-64 object-cover" />
      </motion.div>
      <div className="p-4">
      <h3 className="font-epBoxi text-lg">{game.title}</h3>
      <p className="mt-2 text-sm text-left">{game.description}</p>
      </div>
    </div>
  ))}
</div>
</section>

  );
};

export default GameShowcase;
