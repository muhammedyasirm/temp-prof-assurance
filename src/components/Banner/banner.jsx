import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-between text-white min-h-screen xl-down:min-h-[80vh]">
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover z-0"
        src="/banner-bg-video1.mp4"
        autoPlay
        loop
        muted
      ></video>
      
        <img
          src="/banner-logo2.png"
          alt="Banner Logo"
          className="w-[30%] lg-down:w-[40%] object-fill z-10 xl-down:hidden"
        />

      {/* Right Side: Text and Content */}
      <div className=" p-10 flex flex-col w-[40%] xl-down:w-full text-left justify-center z-10">
        <h1 className="text-[5rem] md-down:text-[4rem] font-bold font-barlow">BIG TEXT</h1>
        <p className="mt-4 text-[2.2rem] md-down:[1.8rem] leading-8 font-montserrat">
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
