import React from 'react'
import homehealth from '../assets/home-health 1.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function LocatiionHomeHealth() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: 'ease-in-sin',
            delay: 100,
            });
            }, []);
  return (
    <div className=' flex justify-center h-fit max-sm:p-6 ' >
        <div className='flex max-lg:flex-col-reverse max-lg:gap-6 justify-between max-lg:items-center  2xl:w-[1350px] flex-row gap-3 xl:w-[1150px]' >
                <div   className='md:w-1/2 justify-center    flex-col flex' > 
                    {/* text */}
                    <h2 
                    data-aos='fade-down'
                    className='text-4xl font-semibold leading-10 max-lg:w-[100%] text-left font-poppins'  >We are available all over  
                       <span  className='text-theme1' > Lahore</span> 
                    </h2>
                    <p data-aos='fade-right' className='text-xl font-medium leading-10 text-left font-poppins' >When the need for elderly care emerges, it's often urgent. To ensure your loved one receives prompt and proper care, we've streamlined the process into three manageable steps:</p>
                    <button 
                    data-aos='fade-up'
                    className='text-xl mt-8 max-md:text-center font-medium leading-10 border-theme1 font-poppins max-md:w-auto w-[427px] h-[74px] rounded-lg border-2 bg-transparent ' >Call 0324 4574564</button>
                </div>
                <div
                data-aos='fade-down'
                >
                    
                    {/* image */}
                    <img src={homehealth}/>
                </div>

        </div>

    </div>
  )
}

export default LocatiionHomeHealth