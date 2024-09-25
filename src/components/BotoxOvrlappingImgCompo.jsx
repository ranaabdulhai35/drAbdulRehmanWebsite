import React from "react";
import Botox2 from "../assets/Botox2.png";
import { useEffect } from "react";
import Aos from "aos";
function BotoxOvrlappingImgCompo() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div
      style={{ borderRadius: 20 }}
      className="flex justify-center mb-[100px] bg-white items-center"
    >
      <div className="flex  max-md:flex-col-reverse justify-between lg:w-[1170px]  items-center h-[528px] ">
        <div data-aos="fade-up-right" className="  ">
          <img className="" src={Botox2} alt="overlapping img" />
        </div>
        <div
          data-aos="fade-up"
          className=" max-md:text-center t flex  flex-col justify-center "
        >
          <h3 className=" md:w-[40ch] lg:w-[20ch] mb-2  md:text-xl lg:text-3xl lg:customStyleBotoxCompoHead ">
            Ask your doctor if they have BOTOX® samples available
          </h3>
          <p data-aos="fade-up" className="text-sm text-centeer w-[40ch]">
            *Only your physician can determine if BOTOX® is appropriate for you.
            Sample availability may vary by provider or location.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BotoxOvrlappingImgCompo;
