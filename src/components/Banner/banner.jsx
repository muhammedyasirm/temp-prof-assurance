import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-between bg-gray-900 text-white h-screen"
      style={{
        backgroundImage: `url('/banner-background.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Left Side: Full Height and Larger Width for the Logo */}
      <div className="w-[40%] h-full z-10">
        <img
          src="/banner-logo2.png"
          alt="Banner Logo"
          className="w-[80%] h-full object-contain"
        />
      </div>

      {/* Right Side: Text and Content */}
      <div className="w-[37%] p-10 flex flex-col text-left justify-center z-10">
        <h1 className="text-5xl font-bold font-barlow">BIG TEXT</h1>
        <p className="mt-4 text-2xl leading-loose font-montserrat">
          Lorem ipsum dolor sit amet,{" "}
          <span className="text-primary-orange font-bold">adipiscing</span> elit, sed do
          eiusmod tempor <span className="text-primary-blue font-bold">incididunt</span> ut
          labore et dolore magna aliqua. Quis ipsum suspendisse{" "}
          <span className="text-primary-green font-bold">ultrices</span> gravida. Risus commodo viverra
          maecenas accumsan lacus vel facilisis.
        </p>
      </div>
    </div>
  );
};

export default Banner;
