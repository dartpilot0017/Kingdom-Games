import logo from '../assets/kingdomGames.png';

const Header = () => {
  return (
    <header className="bg-shadowGray text-snowWhite p-4 fixed top-0 w-full z-50 border-b border-snowWhite border-opacity-[0.08]">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
      <div className='flex items-center'>
        <img 
          src={logo}
          alt="Logo" 
          className="max-h-[4.5rem] w-auto" // Restrict height and maintain aspect ratio
        />
        {/* <h1 className="font-epBoxi text-xl">KingdomGames</h1> */}
        </div>
        <nav>
          <ul className="flex space-x-4 font-mono">
            <li className="hover:text-vibrantOrange">Home</li>
            <li className="hover:text-vibrantOrange">Games</li>
            <li className="hover:text-vibrantOrange">About Us</li>
            <li className="hover:text-vibrantOrange">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
