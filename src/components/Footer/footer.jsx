import React from 'react';
import { LogoFacebook, LogoTwitter, LogoLinkedin, LogoMedium, LogoInstagram } from '@carbon/icons-react';

const Footer = () => {
  return (
    <div
      className="w-full h-auto bg-cover bg-center text-white py-16 px-8 bg-[#141414]"
      style={{ backgroundImage: `url('/footer-bg.png')` }} // Ensure the background image path is correct
    >

      {/* Top Section */}
      <div className="bg-transparent rounded-md py-8 lg-down:py-4 px-20 md-down:px-4 flex justify-between items-center">
        <div className='md-down:max-w-[14rem]'>
          <h3 className="text-2xl md:text-3xl font-bold lg-down:mb-2">Ready for a next project?</h3>
          <p className="text-lg lg-down:mb-4">Let's get started!</p>
        </div>
        <button className="bg-primary-orange text-sm text-white px-8 md-down:px-2 py-3 rounded font-bold hover:bg-gray-800 transition duration-300">
          Contact us
        </button>
      </div>

      {/* Footer Links Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
        <div>
          <img
            src="/profit-assurance-logo.png"
            alt="Logo"
            className="h-12 w-auto"
          />
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Customers</h4>
          <ul>
            <li><a href="case-study" className="hover:underline">Buyer</a></li>
            <li><a href="case-study" className="hover:underline">Supplier</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li><a href="case-study" className="hover:underline">About us</a></li>
            <li><a href="case-study" className="hover:underline">Careers</a></li>
            <li><a href="case-study" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Further Information</h4>
          <ul>
            <li><a href="case-study" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="case-study" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center space-x-6 py-4">
        <a href="case-study"><LogoFacebook size={24}/></a>
        <a href="case-study"><LogoTwitter size={24} /></a>
        <a href="case-study"><LogoLinkedin size={24} /></a>
        <a href="case-study"><LogoMedium size={24} /></a>
        <a href="case-study"><LogoInstagram size={24} /></a>
      </div>
    </div>
  );
};

export default Footer;
