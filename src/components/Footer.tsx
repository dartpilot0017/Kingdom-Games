const Footer = () => {
    return (
      // <footer className="bg-royalBlue text-charcoalBlack py-4 text-center">
      //   <p>&copy; 2024 KingdomGames. All Rights Reserved.</p>
      //   <div className="flex justify-center gap-4 mt-2">
      //     <a
      //       href="#"
      //       className="text-goldenYellow hover:text-royalBlue"
      //     >
      //       Facebook
      //     </a>
      //     <a
      //       href="#"
      //       className="text-goldenYellow hover:text-royalBlue"
      //     >
      //       Twitter
      //     </a>
      //     <a
      //       href="#"
      //       className="text-goldenYellow hover:text-royalBlue"
      //     >
      //       Instagram
      //     </a>
      //   </div>
      // </footer>
      <footer className="bg-shadowGray text-snowWhite p-4">
  <div className="flex justify-between items-center max-w-7xl mx-auto">
    <p>© 2024 KingdomGames. All Rights Reserved.</p>
    <div className="flex space-x-4">
      <a href="#" className="hover:text-vibrantOrange">FB</a>
      <a href="#" className="hover:text-vibrantOrange">Twitter</a>
      <a href="#" className="hover:text-vibrantOrange">Instagram</a>
    </div>
  </div>
</footer>

    );
  };
  
  export default Footer;
  