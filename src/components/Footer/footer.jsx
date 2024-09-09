import React from 'react';

const Footer = () => {
  return (
    <div
      className="w-full h-auto bg-cover bg-center text-white py-16 px-8 bg-[#141414]"
      style={{ backgroundImage: `url('/footer-bg.png')` }} // Ensure the background image path is correct
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column: Logo and Contact Info */}
        <div>
          <img
            src="/profit-assurance-logo.png" // Ensure this logo image path is correct
            alt="Profit Assurance Technology"
            className="mb-6 w-48"
          />
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">📞</span> +971508925068
            </li>
            <li className="flex items-center">
              <span className="mr-2">📧</span> ProaiTechno@gmail.com
            </li>
            <li className="flex items-center">
              <span className="mr-2">🏢</span> Deira - Office 305, AL DURRAH4
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Facebook">
              <img src="/facebook-icon.png" alt="Facebook" className="w-8" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src="/linkedin-icon.png" alt="LinkedIn" className="w-8" />
            </a>
          </div>
        </div>

        {/* Center Column: Text Content */}
        <div className="text-center w-[40%] sm-down:w-full">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>

        {/* Right Column: Text Content */}
        <div className="text-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
