import React from "react";

const Banner = () => {
  return (
    <div className="relative flex min-h-screen xl-down:min-h-[70vh] justify-between text-white ">
      {/* Video Background */}
      <video
        className="absolute w-full h-full object-cover z-0"
        src="/HeaderBg.mp4"
        autoPlay
        loop
        muted
      ></video>

        <img
          src="/headerLogo.png"
          alt="Banner Logo"
          className="w-[35%] object-contain z-10 xl-down:hidden object-bottom"
        />

      <div className=" pr-16 md-down:p-5 flex flex-col w-[40%] xl-down:w-full text-left justify-center z-10">
        <h1 className="text-[2.4rem] leading-[2.3rem] md:text-[2.5rem] md:leading-[2.5rem] xl:text-[4.5rem] xl:leading-[4.5rem] 2xl:text-[5.5rem] 2xl:leading-[5.5rem] font-bold font-barlow">
          Profit Assurance
        </h1>
        <p className="mt-4 text-[2.2rem] md-down:text-[1.4rem] leading-8 font-montserrat">
          Since 2014, we’ve enhanced profits and secured{" "}
          <span className="text-primary-orange font-bold">revenue</span> through
          telecom fraud management and
          <span className="text-primary-blue font-bold">
            {" "}
            revenue assurance
          </span>
          , partnering with leading operators across{" "}
          <span className="text-primary-green font-bold">Africa and Asia.</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
