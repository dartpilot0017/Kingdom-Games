import React, { useState } from 'react';
import logo from '../assets/kingdomGames.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  const navItem = [
    { name: 'Home', link: '/' },
    { name: 'Games', link: '/games' },
    { name: 'About Us', link: '/about' },
    { name: 'Contact', link: '/contact' },
    // { name: 'Login', link: '/login' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-shadowGray text-snowWhite py-4 fixed top-0 w-full flex z-50 border-b border-snowWhite border-opacity-[0.08]">
      <div className="flex justify-between items-center px-8 w-full">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="max-h-[4.5rem] w-auto"
          />
        </div>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-snowWhite hover:text-vibrantOrange focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Navigation Links */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:flex space-x-4 font-mono absolute md:static top-full left-0 w-full md:w-auto bg-shadowGray md:bg-transparent p-4 md:p-0`}
        >
          <ul className="md:flex md:space-x-4 space-y-4 md:space-y-0 text-center md:text-left">
            {navItem.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="block md:inline-block hover:text-vibrantOrange transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
