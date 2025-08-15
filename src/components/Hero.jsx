import React from "react";
import Abstract from "../assets/Abstract.png";
import DivButton from "./DivButton";
const Hero = ({ title = "", subTitle = "" }) => {
  return (
    <section className="relative flex flex-col md:flex-row w-full max-w-[1820px] h-auto md:h-[485px] mt-[50px] md:mt-[230px] mx-auto rounded-[12px] border-2 border-[#262626] px-6 md:px-[120px] py-[50px] md:py-[150px] gap-[20px] md:gap-[50px] bg-white shadow-[4px_4px_0_3px_#1E1E1E] overflow-hidden">
      {/* Top-left image */}
      <img
        src={Abstract}
        alt="Abstract design"
        className="absolute top-0 left-0 w-[200px] h-auto"
      />

      <div className="w-full max-w-[765px]  ">
       <DivButton title={title} />
        <h3 className="mt-4 text-2xl md:text-5xl font-bold Raleway text-[#262626]">
    {subTitle}
  </h3>
      </div>

      <div className="text-left md:text-1xl  w-[765px] h-[180px] flex flex-col justify-center items-center ">
         Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.
      </div>

      
    </section>
  );
};

export default Hero;
