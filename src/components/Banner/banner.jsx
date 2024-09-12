import React from "react";

const Banner = () => {
  return (
    <div className="relative flex items-center min-h-screen xl-down:min-h-[80vh] justify-between text-white ">
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
      <div className=" p-10 md-down:p-5 flex flex-col w-[40%] xl-down:w-full text-left justify-center z-10">
        <h1 className="text-[4.5rem] leading-[3.8rem] md-down:text-[4rem] font-bold font-barlow">Profit Assurance</h1>
        <p className="mt-4 text-[2.2rem] md-down:[1.8rem] leading-8 font-montserrat">
          Maximizing profits and protecting{" "}
          <span className="text-primary-orange font-bold">revenue streams</span> since 2014. We specialize in 
          <span className="text-primary-blue font-bold"> {" "}telecom fraud management and revenue assurance</span> , 
          partnering with leading operators across Africa and Asia to enhance{" "}
          <span className="text-primary-green font-bold">financial performance and reduce risks.</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
