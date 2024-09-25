
import React from 'react'
import Logo from '../assets/Logo.png';
import { useEffect } from 'react';
import Facebook from '../data/Facebook.png'
import YouTube from '../data/YouTube.png'
import Twitter from '../data/Twitter.png'
import Linkedin from '../data/LinkedIn.png'
import Instagram from '../data/Instagram.png'
import Aos from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])

  return (
    <div  data-aos='fade-up'
    // data-aos-anchor-placement="bottom-bottom"
     className='h-[454px] max-md:h-auto  font-DMSans bg-theme1'>
      <div className='flex justify-center items-center' >
        {/* // */}
        <div className='w-[1200px] mt-[100px]  flex max-lg:flex-col max-lg:justify-center max-lg:items-center justify-between items-start ' > 
         <div>
                <div 
                
                data-aos='fade-right'
                
                
                className="text-white max-lg:mb-3 text-start">
           
                        <span className="text-3xl flex items-center font-bold">  <img className="-bottom-5 aspect-square h-14 w-14" src={Logo} alt="daf" /> Healthcare</span>
                       
                       
                     <div className=' max-lg:w-[32ch] ' >Copyright © 2022 BRIX Templates | All Rights Reserved </div>
               </div>
      </div>

      {/* //  // */}
      <div 
      
      
      
      className='text-white flex max-md:flex-col h-min gap-[104px] ' >

         
        <div 
        data-aos='fade-down'
        
        >
          <span className='footerheading ' >Products</span>
          <ul>
            <li className='lis mt-[40px]' >Features</li>
            <li className='lis' >Pricing</li>
            <li  className='lis' >Case studies</li>
            <li className='lis' >Reviews</li>
            <li   className='lis' >Updates</li>
          </ul>
        </div>

        <div
        data-aos='fade-up'
        >
          <span className='footerheading' >Company</span>
          <ul>
          <li  className='lis mt-[40px]' >About</li>
          <li className='lis' >Contact us</li>
          <li className='lis' >Carrers</li>
          <li className='lis' >Culture</li>
          <li  className='lis' >Blog</li>
          </ul>
          
          </div>


        <div
        
        data-aos='fade-down'
        >
          <span className='footerheading' >Support</span>
          <ul className='' >
            <li className='lis mt-[40px]' >Getting Started</li>
            <li className='lis' >Help Center</li>
            <li className='lis' >Server Status</li>
            <li className='lis' >Report a Bug </li>
            <li className='lis' >Chat Support</li>
          </ul>
        </div>


        <div 
        
        data-aos='fade-up'
        
        >
          <span className='footerheading' >Follow us</span>
          <ul>
            <li className='lis mt-[40px]' ><span> <img className='inline' src={Facebook} alt="" /></span> Facebook </li>
            <li className='lis' ><span> <img className='inline h-6 w-6 ' src={Twitter} alt="" /> </span> Twiter </li>
            <li className='lis' ><span> <img className='inline h-6 w-6' src={Instagram} alt="" /> </span> Instagram </li>
            <li className='lis' ><span> <img className='inline h-6 w-6' src={Linkedin} alt="" /> </span> Linkedin  </li>
            <li className='lis' ><span> <img className='inline h-6 w-6' src={YouTube} alt="" /> </span> YouTube </li>
          </ul>
        </div>
        
        
        </div>
        </div>
      </div>
    </div>
  )
}
