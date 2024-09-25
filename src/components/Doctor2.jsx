import React from 'react'
import Aftar from './Aftar'
import vectorBg from "../assets/Vector.svg";
import d2 from '../assets/d2.png'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Doctor2() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <div className=" flex  flex-col mt-20 w-auto mb-[100px] justify-center items-center">
    <div className="flex xl:flex-row-reverse flex-col-reverse w-[100%]x 2xl:w-[1380px] max-w-[1380px] items-center justify-between  main-box,m gap-[2rem]">
      <div  data-aos='fade-up'
      
        data-aos-anchor-placement="center-bottom"
      className="max-w-[657px]">
        <h3 className="font font-semibold size40">
          Providing Quality
          <span className="text-[#007E85]">Healthcare</span> for A
          <br /> <span className="text-green-600">Brighter </span>
          and <span className="text-green-600">Healthy </span>
          future
        </h3>
        <div style={{ marginTop: "30px" }} className="sm:w-[500px] text-sm">
          <p
            style={{
              fontFamily: "Lato",
              fontSize: "20px",
              color: "#474747",
              letterSpacing: "1px",
              fontWeight: "lighter",
              opacity: 0.8,
            }}
          >
            At our hospital, we are dedicated to providing exceptional
            medical care to our patients and their families. Our
            experienced team of medical professionals, cutting-edge
            technology, and compassionate approach make us a leader in the
            healthcare industry.
          </p>
          <p
            style={{
              fontFamily: "Lato",
              fontSize: "20px",
              color: "#474747",
              letterSpacing: "1px",
              fontWeight: "lighter",
              opacity: 0.8,
              marginTop: "20px",
            }}
          >
            Dr. Mukhlis ul Rehman, Doctor of Physical Therapy and
            Neuromuscular Physical Therapist, is part of our esteemed
            team. With over 4 years of experience, Dr. Rehman specializes
            in Electrotherapy, Hijama (Cupping Therapy), Pediatric
            Physical Therapy, Sports Physiotherapy, and Stroke
            Rehabilitation. He is also a member of the Pakistan Physical
            Therapy Association. His dedication to patient care and
            clinical excellence ensures our patients receive the best
            possible treatment.
          </p>
        </div>
        <button
          style={{
            width: "252px",
            height: "51px",
            borderRadius: "8px",
            marginTop: "80px",
            fontFamily: "LT",
          }}
          className="bg-[#007E85]  text-white letterSpacing "
        >
          Appointment
        </button>
      </div>

      <div  data-aos='fade-up-right'
      data-aos-anchor-placement="center-bottom"

      className="  flex justify-center relative flex-row ">
        <div className="z-[11] translate-y-[60%]">
          <Aftar />
        </div>
        <div className="relative  max-sm:w-auto sm:h-[526px]" >
        <img
          src={vectorBg}
          className="max-sm:w-auto"
          alt=""
        />
        <div className="absolute z-10 flex justify-center items-center -translate-x-1/2 translate-y-1/2 -top-1/2 left-1/2 w-[100%]" >
        <img className=" max-sm:w-auto " src={d2} alt="" />

        </div>
      </div>

        <div
          style={{ borderRadius: 10, alignItems: "center" }}
          data-aos='fade-down'
          className="text-[#000000] Lato absolute max-sm:right-0 max-sm:top-5  right-[55px] top-[60px] p-2 hover:scale-105 z-[12] bg-white rounded-sm"
        >
          <span
            style={{
              fontWeight: "bolder",
              fontSize: 22,
              color: "#007E85",
            }}
          >
            24/7
          </span>
          services
        </div>
      </div>
    </div>
  </div>
  )
}

export default Doctor2