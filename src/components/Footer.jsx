import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`p-4 ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'}`}
    >
      <div className="container mx-auto text-center py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">About Us</h2>
          <p className="text-sm max-w-xs">
            I am the best app maker in India, providing guidance
            at a very affordable price.
          </p>
        </div>

        

        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/__akhilesh200__/" className="hover:text-gray-500" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/explore" className="hover:text-gray-500" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/akhilesh-kumar-7a6857248/" className="hover:text-gray-500" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Contact Us</h2>
          <p className="text-sm">Email: akhileshkr17122002@gmail.com</p>
          <p className="text-sm">Phone: +91 xxxxxxxxx</p>
        </div>
      </div>
      <p className="text-center text-xs mt-4">
        © 2024 AK_TODO. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
