import React from 'react'
import heroimg from '../assets/image placeholder.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function hero() {
    useEffect(()=>{
        Aos.init({duration: 1000});
      }, [])
  return (
    <div className='flex items-center mb-[50px] justify-center' ><div class="relative flex flex-col items-center xl:min-w-[1200px] md:max-w-[1400px]    lg:flex-row sm:px-6 ">
    <div class="flex items-center py-5 md:w-1/2 md:pb-20 xl:pt-10 xl:pr-10">
        <div data-aos='fade-right'
        data-aos-anchor-placement="center-bottom"
        class="text-left">
            <h2
                class="text-4xl font-extrabold leading-10 tracking-tight text-[#007E85] sm:text-5xl sm:leading-none md:text-5xl">
                You have lots of reasons to choose us      
            </h2>
            <p class="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            </p>
            <div class="mt-5 gap-6 sm:flex md:mt-8">
               <button className='w-[173px] h-[66px] rounded-[40px] text-white  bg-theme1  ' >Get Started</button>
               <button className='w-[173px] h-[66px] rounded-[40px] text-theme1 hover:text-white bg-white hover:bg-theme1 duration-500  ' >Talk to sales</button>
                    
            </div>
        </div>
    </div>
    <div data-aos='fade-down'
    data-aos-anchor-placement="center-bottom"
    class="flex items-center  lg:w-1/2  lg:pt-10 lg:pl-10">
        <div class="relative w-full p-3 rounded  ">
            <div class="rounded-lg bg-white text-black w-full">
                <img src={heroimg} />
            </div>
        </div>
    </div>
</div></div>
  )
}

export default hero