import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Stats() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <div data-aos='fade-up' 
    
        data-aos-anchor-placement="center-bottom"
    className=" flex items-center justify-center" >

    
    <div class=" xl:w-[1400px] font-DMSans statsTypography h-[410px] ">
      <h2
        style={{ fontSize: "36px", fontWeight:'500' }}
        className="text-center text-xl text-theme1 mt-20 mb-20"
      >
        Our Results in Numbers{" "}
      </h2>
      <div class="grid grid-cols-2 lg:gap-52  md:grid-cols-4">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl  text-[#007E85] xl:text-6xl">
            99<span className="opacity-55">%</span>
          </h6>
          <p class="text-sm font-Bold tracking-widest  text-gray-800 uppercase lg:text-base">
            customer setisfaction
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl text-[#007E85]  xl:text-6xl">
            15<span className="opacity-55">k</span>
          </h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Online patients
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl text-[#007E85] xl:text-6xl">
            12<span className="opacity-55">k</span>
          </h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            patient Recovered
          </p>
        </div>
        <div class="text-center">
          <h6 class="text-4xl font-bold lg:text-5xl text-[#007E85] xl:text-6xl">
            20<span className="opacity-55">%</span>
          </h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            company groth
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Stats;
