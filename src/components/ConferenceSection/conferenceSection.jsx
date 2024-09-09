import React from 'react';

const ConferenceSection = () => {
  return (
    <div className=" w-full h-[60vh] bg-[#141414] text-white flex items-center justify-between">
      {/* Left Section: Image */}
      <div className="w-1/2 h-full">
        <img
          src="/conference-bg1.png" // Replace with the correct path to your image in the public folder
          alt="Conference"
          className="h-full w-[75%] object-fill"
        />
      </div>

      {/* Right Section: Title, Description, and Button */}
      <div className="w-1/2 p-12">
        <h2 className="text-4xl font-bold mb-4">CONFERENCE</h2>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. 
          Risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
        <button className="bg-primary-orange text-white px-6 py-3 text-lg rounded hover:bg-opacity-80 transition duration-300">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ConferenceSection;
