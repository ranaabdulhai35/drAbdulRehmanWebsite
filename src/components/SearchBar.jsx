import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <div  className='font-DMSans'  >
      <h2 
      
      // animation
      data-aos='fade-down'
    // data-aos-anchor-placement="center-bottom"

      
      className='text-[28px] text-[#333333] text-center font-bold  mt-[112px]  mb-0 SearchBar '>Subscribe our newslatter</h2>
      
      <div className="flex flex-1 items-center justify-center p-6 pt-0 ">
    <div className=" max-w-lg">
        <form 
        //animation
        data-aos='fade-right'
    data-aos-anchor-placement="center-bottom"
        //
        className="mt-5 flex items-center justify-center max-md:flex-wrap">
            <input style={{paddingLeft:24}}  id="q" name="q" 
            className="inline md:w-[420px] md:h-[55px] rounded-3xl border max-md:w-[288px] border-gray-300  bg-white py-2 pl-3 pr-3
             leading-5 placeholder-gray-500 focus:border-[#007E85] focus:placeholder-gray-400 focus:outline-none focus:ring-[#007E85] 
             sm:text-sm" 
             placeholder="Enter your Text" 
             type="search" 
             value={searchTerm} 
             onChange={(e)=> setSearchTerm(e.target.value)} />
            
            <button 
            
            //animation
             data-aos='fade-up'
            
            type="submit" 
            className="mt-3 md:h-[55px] md:w-[116px] inline-flex max-sm:w-[288px] items-center justify-center rounded-3xl border border-transparent bg-[#007E85] 
             px-4 py-2 font-medium text-white shadow-sm hover:bg-[#007E85] focus:outline-none focus:ring-[#007E85]  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Subscribe</button>
        </form>
    </div>
</div></div>
  )
}

export default SearchBar