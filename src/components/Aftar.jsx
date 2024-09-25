import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function Aftar() {
useEffect(()=>{
  Aos.init({
    duration: 1000
})})
  return (
    <div >
    <div data-aos='fade-down' className="flex space-x-2 max-sm:h-12 mb-1 z-[12] fixed -left-6 max-sm:w-24 max-sm:-top-7 max-sm:-left-10  w-44 p-3 items-center bg-white overflow-clip animate-out rounded-md  h-[68px] duration-200 delay-300">
    <div>
        <div className="font-semibold text-sm text-center md:text-centre">Trusted by</div>
        <div className="flex space-x-2 items-center flex-col md:flex-row">
            <div className="flex -space-x-2 overflow-hidden p-1">
                <img className="inline-block h-7 w-7 rounded-full ring-2 ring-gray-200 max-sm:h-4 hover:scale-105  max-sm:w-4 tranform duration-100" src="https://randomuser.me/api/portraits/men/51.jpg" alt="" />
                <img className="inline-block max-sm:h-4 max-sm:w-4 h-7 w-7 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/4.jpg" alt=""/>
                <img className="inline-block max-sm:h-4 h-7 w-7 max-sm:w-4 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/34.jpg" alt=""/>
                <img className="inline-block max-sm:h-4 h-7 w-7 max-sm:w-4 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/6.jpg" alt=""/>
                <img className="inline-block max-sm:h-4 h-7 w-7 max-sm:w-4 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/men/9.jpg" alt=""/>
                <img className="inline-block max-sm:h-4 h-7 w-7 max-sm:w-4 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100" src="https://randomuser.me/api/portraits/women/9.jpg" alt=""/>
                <div className=' flex items-center justify-center max-sm:h-4 h-7 w-7 max-sm:w-4 rounded-full ring-2 ring-gray-200 hover:scale-105 tranform duration-100 bg-theme1  text-center text-white text-xs  '>99+</div>
            </div>
            {/* <div>Join 5,000+ other members</div> */}
        </div>
    </div>
</div>
</div>
  )
}

export default Aftar