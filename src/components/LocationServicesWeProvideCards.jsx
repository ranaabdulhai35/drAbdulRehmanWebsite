import React, { useEffect } from 'react'
import { serviceWeProvide } from '../data/allImpData'
import Aos  from 'aos'
import 'aos/dist/aos.css'

function LocationServicesWeProvideCards() {
    useEffect(()=>{
        Aos.init({
            duration: 1000,
            
            })
    } ,[])
  return (
    <div className='flex items-center flex-col mt-20 justify-center'  >
<h2 className='text-4xl font-semibold leading-10 text-left font-poppins' >Services We provide</h2>
    <div className='grid grid-cols-1 xl:grid-cols-2 w-auto xl:w-[1150px] 2xl:w-[1350px]  items-cenjr justify-items-center' >
        {serviceWeProvide.map((curr ,ind , arr)=> {
            return <div >
                    <div className='bg-transparent flex flex-col md:w-[650px] p-6 gap-4' >
                        <img 
                        data-aos='fade-down'
                        className='w-[650px] h-[485px] rounded-lg' src={curr.img} alt={curr.name} />
                        <h2 
                        
                        data-aos='fade-right'
                        className='text-3xl font-semibold leading-10 text-left font-poppins' >{curr.name}</h2>
                        <p  
                        data-aos='fade-up'
                        className='text-2xl font-medium leading-10 text-left font-poppins' >{curr.text}</p>

                    </div>

            </div>
        })}
    </div>
    </div>
  )
}

export default LocationServicesWeProvideCards