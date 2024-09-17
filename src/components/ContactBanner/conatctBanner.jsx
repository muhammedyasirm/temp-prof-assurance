import React from "react";

const ContactBanner = () => {
  return (
    <>
      <div className="w-full flex justify-center bg-[#1C1C1C]">
        <div className="max-w-[35%] md-down:max-w-[100%] text-center flex flex-col items-center py-14">
          <h2 className="text-white text-[4.5rem] leading-[4.5rem] md-down:text-[2.5rem] font-bold font-barlow">
            Contact Us
          </h2>
          <img
          src="/banner-logo2.png"
          alt="Banner Logo"
          className="w-[30%] py-4 flex justify-center lg-down:w-[40%] object-fill z-10"
        />
          <p className="mt-4 text-[2.2rem] md-down:text-[1.6rem] leading-8 font-montserrat text-white">
            Since 2014, we’ve enhanced profits and secured{" "}
            <span className="text-primary-orange font-bold">revenue</span>{" "}
            through telecom fraud management and
            <span className="text-primary-blue font-bold">
              {" "}
              revenue assurance
            </span>
            , partnering with leading operators across{" "}
            <span className="text-primary-green font-bold">
              Africa and Asia.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactBanner;
