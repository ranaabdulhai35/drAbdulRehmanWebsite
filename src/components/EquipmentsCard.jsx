
import React from 'react';
import { Equipments } from '../data/allImpData';
import { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
function EquipmentsCards() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    
    <div>
      <div  

      
      className='flex items-center mb-[100px]  justify-center'>
        <div className='w'  >
          <h2   data-aos='fade-down'
                  data-aos-anchor-placement="center-bottom" className='  font-latoB font-bold mb-6'>
            <span 
                  className=' text-4xl text-theme1   font-bold '>Equipments</span>
          </h2>
          <div className='grid grid-cols-1 gap-7w, gap-y-[22px] gap-x-[24px]  justify-items-center mt-5  md:grid-cols-2  xl:grid-cols-3'>
            {Equipments.map((curr, i) => (
              <div key={i} 
              data-aos='fade-right'
              data-aos-anchor-placement="center-bottom" className='relative cursor-pointer hover:overflow-hidden rounded-xl'>
                <img src={curr.img} alt={curr.disp} className='rounded-xl brightness-50	  w-[350px] h-[400px]  hover:scale-110' />
                <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-[#016a704d] w-[100%] h-[100%] rounded-lg z-[3]'></div>
                <div className='absolute z-[5] text-white text-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2'>
                  {curr.disp.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EquipmentsCards;
