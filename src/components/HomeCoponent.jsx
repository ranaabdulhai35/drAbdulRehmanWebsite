import React, { useEffect } from "react";
import d1 from '../assets/d1.png'
import Aos from "aos";
import "aos/dist/aos.css";
import vectorBg from "../assets/Vector.svg";
import Aftar from "./Aftar";
import "./styles/styles.css";

function HomeCoponent() {
  useEffect(()=>{
    Aos.init({duration: 1000});
  }, [])
  return (
    <>
      <div className="flex  flex-col mt-20 justify-center mb-[100px] items-center">
        <div className="flex lg:flex-row flex-col-reverse  w-[100%] max-w-[1380px] items-center justify-between  main-box gap-[2rem]">
          <div  data-aos="fade-right" className="max-w-[657px]">
            <h3 className="font font-semibold size40">
              Providing Quality{" "}
              <span className="text-[#007E85]">Healthcare</span> for A
              <br /> <span className="text-green-600">Brighter </span>
              and <span className="text-green-600">Healthy </span>
              future
            </h3>
            <div style={{ marginTop: "30px" }} className="w-[587] text-sm">
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
                medical care to our patients and their families. Our experienced
                team of medical professionals, cutting-edge technology, and
                compassionate approach make us a leader in the healthcare
                industry.
              </p>
            </div>
            <div style={{ marginTop: "30px" }}>
              <h4 className="font-semibold text-lg">Dr. Abubakar Siddique</h4>
              <p className="text-sm">
                <strong>Qualifications:</strong>
                <br />
                MBBS (Pb), FCPS (Neurology), CRCP (DOW)
                <br />
                Stroke and Vascular Neurology Fellowship (USA)
                <br />
                Interventional and Diagnostic Neuroradiology Fellowship (USA)
                <br />
                Neurocritical Care Fellowship (USA)
                <br />
                Epilepsy Mini Fellowship (USA)
              </p>
              <p className="text-sm" style={{ marginTop: "10px" }}>
                <strong>Professional Memberships:</strong>
                <br />
                Member, American Academy of Neurology
                <br />
                Member, European Society of Minimally Invasive Neurological
                Therapy (ESMINT)
                <br />
                Member, Society of Vascular and Interventional Neurology (SVIN)
              </p>
              <p className="text-sm" style={{ marginTop: "10px" }}>
                <strong>Experience:</strong>
                <br />
                Consultant Interventional Neurologist
                <br />
                Ex-Assistant Professor & Head of Neurology Dept., SIMS/Services
                Hospital LHR
              </p>
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
          </div>
{/* aos */}
          <div  data-aos='fade-up' className="  flex justify-center relative flex-row ">
            <div className="z-[11] translate-y-[60%]">
              <Aftar />
            </div>
            <div className="relative sm:min-w-[526px] sm:min-h-[626px]  sm:h-[526px] sm:w-[520px] z-0  " >
              <img
              
                src={vectorBg}
                className=""
                alt=""
              />
              <div className="absolute z-10 -translate-x-1/2 translate-y-1/2 -top-1/2 left-1/2 w-[70%]" >
              <img className=" " src={d1} alt="" />

              </div>
            </div>
          
            <div 

                data-aos='fade-right'

              style={{ borderRadius: 10, alignItems: "center" }}
              className="text-[#000000] Lato absolute max-sm:right-0 max-sm:top-5  right-[55px] top-[60px] p-2 hover:scale-105 z-[12] bg-white rounded-sm"
            >
              <span
                style={{ fontWeight: "bolder", fontSize: 22, color: "#007E85" }}
              >
                24/7
              </span>
              services
            </div>
          </div>
        </div>

        {/* 2ndcompo */}
      </div>
    </>
  );
}

export default HomeCoponent;
