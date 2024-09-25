
import React, { useState } from "react";
import { disorders } from "../data/allImpData";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const NeurologicalDisorders = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };
  useEffect(()=>{
    Aos.init({duration: 500});
  }, [])
  return ( 
    <div data-aos='fade-down' className="w-[100%] flex mb-[100px]" style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
      <div className="text-theme1  font-latoB max-w-[1380px]" >
        <h2 className="font-semibold font-latoB text-theme1 text-3xl mb-4">
          Neurological <span className="text-green-600">Disorders</span>
        </h2>
        <p className="mb-4 text-xl font-bold ">Brain, Nerves and Spine</p>
        <p className="mb-4 text-lg max-w-[1397px]">
          There are many nervous system disorders that require clinical care by
          a physician or other healthcare professional. Listed below are some,
          for which we have provided a brief overview.
        </p>
        <ul className="list-disc font-latoN pl-5">
          {disorders
            .slice(0, showAll ? disorders.length : 5)
            .map((disorder, index) => (
              <li key={index} className="mb-2 text-[#000000B2] text-base">
                {disorder}
              </li>
            ))}
        </ul>
        <button
          onClick={handleToggle}
          className="text-theme1 w-52 h-12 border-theme1 bg-transparent mt-4  border-2 rounded-md"
        >
          {showAll ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default NeurologicalDisorders;
