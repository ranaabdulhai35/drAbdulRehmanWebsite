
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function BetweenText({Heading , paragraph , animation}) {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <div data-aos={animation}
    data-aos-anchor-placement="center-bottom" className="text-center font-DMSans pt-[116px] pb-[50px]">
    
    <h2 className="text-4xl leading-[46px]  text-[#007E85] font-bold">
      {Heading}
    </h2>
    <div className="flex justify-center items-center ">
      <p className="w-[613px] mt-[16px] text-[#555555] text-lg leading-[25px] ">
        {paragraph}
      </p>
    </div>
  </div>
  )
}

export default BetweenText