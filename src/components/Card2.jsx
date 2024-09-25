
import React from 'react';
import Twitter from '../assets/Twitter.png';
import Facebook from '../assets/Facebook.png';
import Instagram from '../assets/Instagram.png';
import Linkedin from '../assets/Linkedin.png';
import { AllImpinfo2 } from '../data/allImpData';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Card2() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
  <div className='w-[100%] items-center justify-center flex' >

  
    <div className="grid grid-cols-1 gap-7 gap-y-2 justify-items-center mt-5  md:grid-cols-2  xl:grid-cols-3 ">
      {AllImpinfo2.map((info) => (
        <div key={info.id} data-aos='fade-up'
        data-aos-anchor-placement="center-bottom" className="max-w-sm font-DMSans  relative bg-white border w-card h-card border-gray-200 rounded-[28px]  shadow ">
          {/* Profile Image */}
          <img
            className="w-40 mb-7 h-40 my-[40px] rounded-full mx-auto"
            src={info.img}
            alt="Profile Picture"
          />

          {/* Profile Details */}
          <div className="text-center  mt-5">
            <a href="#" className="   text-2xl font-bold hover:text-indigo-600 text-theme1 leading-[38px]  transition duration-500 ease-in-out">
              {info.profileName}
            </a>
            <div className='font-bold leading-5 tracking-[10%] text-xl'  >info..</div>
          </div>
          

          {/* Description */}
          <div className='flex justify-center' >


          <p className="mt-[15px] w-[324px] text-md text-center   text-gray-900">
            {info.description}
          </p>
          </div>

          {/* Social Links */}
          <div className="flex mt-4 w-[192px] h-[36px] absolute left-1/2  gap-4 -translate-x-1/2 bottom-7 justify-center ">
            <span className="w-9m m- h-9m">
              <a href="#0">
                <img src={Facebook} alt="" />
              </a>
            </span>
            <span className="w-9m h-9m m-">
              <a href="#0">
                <img src={Twitter} alt="" />
              </a>
            </span>
            <span className="w-9m h-9m m-">
              <a href="#0">
                <img src={Instagram} alt="" />
              </a>
            </span>
            <span className="w-9m h-9m m-">
              <a href="#0">
                <img src={Linkedin} alt="" />
              </a>
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Card2;