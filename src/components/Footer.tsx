import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-shadowGray text-center py-6">
      <p className="text-snowWhite text-sm">
        © 2024 Kingdom Games. All rights reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <a
          href="#"
          className="text-snowWhite hover:text-vibrantOrange transition duration-300"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="#"
          className="text-snowWhite hover:text-vibrantOrange transition duration-300"
          aria-label="Twitter"
        >
          <FaXTwitter size={24} />
        </a>
        <a
          href="#"
          className="text-snowWhite hover:text-vibrantOrange transition duration-300"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
