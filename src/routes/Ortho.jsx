import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/footer.jsx";
import OrthoFindDoctor from "../components/OrthoFindDoctor.jsx";
import OrthoHero from "../components/OrthoHero.jsx";
import SearchBar from "../components/SearchBar.jsx";
import RatingCard from "../components/RatingCard.jsx";
import {  ratingData } from "../data/allImpData.js";
import EquipmentsCard from "../components/EquipmentsCard.jsx";
import Doctor2 from "../components/Doctor2.jsx";
import BetweenText from "../components/BetweenText.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import WhatsAppFloatingIcon from "../components/WhatsAppFloatingIcon.jsx";
function OrthoRoute() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <div className="h-screen w-full">
      <div className="pt-[24px] px-65t">
        <Navbar style='pb-6' />
        <WhatsAppFloatingIcon phoneNumber={'03244574564'} message={`I there I have visited your website I'm interested in getting more information about it`} />
      </div>
      {/* ? */}
      <div 
      data-aos='fade-right'
      className="h-[733px] ortho1 max-md:p-4 justify-center flex items-center ">



        <div className="flex justify-start  items-center  lg:w-[1400px] ">

        <div className="max-xl:pl-6">
          <h2 className="text-5xl font-latoB  text-white font-extrabold">
            Bringing individualized <br />
            <span className="text-[#007E85] ">Healthcare</span>
          </h2>
          <br />
          <button className="bg-[#007E85] max-sm:m-2  h-[51px]  w-[210px] text-white rounded-lg border-2 border-[#007E85] font-LexendTara Ortho1stbtn ">
            {" "}
            Appointments
          </button>
          <button className="bg-transparent text-white text-xl  sm:ml-3 h-[51px]  w-[210px] text-[20px]  leading-6  tracking-tighter   border-2 rounded-lg font-LexendTara ">
            Learn More
          </button>
        </div>
        </div>



      </div>
      {/* p-6 */}
      <div className="p-6">
        {/* /  2nd doctor component  / */}
        <Doctor2/>
       
        <EquipmentsCard />
        <OrthoFindDoctor />
        
        <OrthoHero />
        <BetweenText Heading='What Our Customer Say'
        paragraph='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              aliquid at rem quibusdam! Quis distinctio iure corporis iste'
              
              animation='fade-down'
              
              />
      
        <div className="flex justify-center items-center">
          <div className="grid xl:grid-cols-3 gap-x-8     justify-items-center  w-[1240px] md:grid-cols-2 lg:grid-cols-3 mt-7  gap-y-20 ">
            {ratingData.map((data) => (
              <RatingCard
                key={data.name}
                avatar={data.avatar}
                name={data.name}
                title={data.title}
                review={data.review}
                rating={data.rating}
              />
            ))}
          </div>
        </div>
        <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default OrthoRoute;
