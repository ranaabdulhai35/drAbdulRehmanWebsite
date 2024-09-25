import React, { useEffect } from 'react'
import StrkeVitimans from '../assets/BotoxVitimans.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

function StrokeVitimans() {
    useEffect(() => {
Aos.init({duration: 1000})

    }, [])
  return (
    <div  className='flex  justify-center mt-6 '>
        <div className='lg:w-[1140px]' >

        <div data-aos='fade-down' className='text-centerl' >
            <h1  className='font-poppins mb-4 lg:w-[45ch] text-4xl font-semibold leading-10 text-left ' >Stroke <span className='text-theme1 ' >victims</span> to access Botox on PBS for lower limb <span className='text-theme1' >spasticity</span>
            </h1>
            <p className='text-lg font-sm leading-5 text-left font-poppins text-[#474747]y  ' >STROKE patients and those who have suffered traumatic brain or spinal cord injuries will save thousands of dollars for Botox through the Pharmaceutical Benefits Scheme, to treat involuntary muscle movements, or spasticity, in their lower limbs.</p>
        </div>
        <div 
        data-aos='fade-up'
        >
            
            <img className='md:h-[671px] mt-3' src={StrkeVitimans} alt="" />
        </div>

        </div>
    </div>
  )
}

export default StrokeVitimans