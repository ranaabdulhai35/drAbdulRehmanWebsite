import React from 'react'
import { BotoxCard } from '../data/allImpData'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function Botoxcards() {
useEffect(()=>{
Aos.init({duration: 1000})
} , [] )

  return (
    

    <div className='mb-[100px] mt-8 ' >

        <div className='flex items-center justify-center   ' >
          <div>
        <h2   
        
        data-aos='fade-down'
        
        ><span className=' text-black typoBotoxtextH' >Features</span> <span className='typoBotoxtextH text-theme1' >Services</span> </h2>
        <div className='grid grid-cols-1  gap-y-[50px] gap-x-[50px]  justify-items-center mt-5  md:grid-cols-2  xl:grid-cols-3' >

        {BotoxCard.map((curr ,i , all)=> {
            return <div 
             data-aos='fade-right'
            
            className='relative cursor-pointer hover:overflow-hidden rounded-xl ' > <img src={curr.img} alt={curr.txt} className='rounded-xl hover:scale-110  ' />  
            <div 
             
            className='absolute  BotoxCard left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-[#016a704d] w-[100%] h-[100%]  rounded-lg   z-[3]' ></div>
            <div  
            
             

            className='absolute z-[5] text-white text-center text-lg left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 '  >{curr.txt.toUpperCase()}</div>
            
            </div>
        })}
</div>
        </div>
       
        </div>
        <div 
         data-aos='fade-up'
        className='flex justify-center' ><button className='text-theme1 w-52 h-12 border-theme1 bg-transparent mt-4  border-2 rounded-md ' >View More</button></div>
    </div>
  )
}

export default Botoxcards