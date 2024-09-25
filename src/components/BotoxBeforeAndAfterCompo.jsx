import React from 'react'
import BotoxBeforeAndAfterImg from '../assets/Botox after and before.png'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
function BotoxBeforeAndAfterCompo() {
  useEffect(()=>{
Aos.init({duration : 1000})
  }  ,[])
  return (
    <div  className='' >
        <div className='' >

        </div>
        <div className='flex justify-center items-center' >
            <div> 
            <div className='flex justify-center item-center flex-col' >
            <h3  
             data-aos='fade-right'
            className='typoBotoxtextH'>
                Before <span className='text-theme1' >And</span> After
            </h3>
            <p  
            
             data-aos='fade-right'
            
            className='my-[30px]'>Familiarize yourself with the works of our masters. All procedures are performed by experienced masters of our clinic.</p>
        </div>
                <img
                 data-aos='fade-down'
                className='w-[1150px] md:h-[647px] rounded-md' src={BotoxBeforeAndAfterImg} alt="BotoxBeforeAndAfterImg" />
            </div>
        </div>
    </div>
  )
}
export default BotoxBeforeAndAfterCompo