  import React from "react";
 import { useEffect } from "react";
 import Aos from "aos";
import "aos/dist/aos.css";
  function OrthoFindDoctor() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    }, [])
    return (
      <div 
      data-aos='fade-down'
      className="flex justify-center mb-[100px] ">
        <div className=" max-w-[1240px]  flex justify-evenly bg-white max-lg:p-5 lg:max-h-[200px] lg:min-h-[192px] rounded-lg lg:min-w-[1240px] ">
          <div className="  ">
            <div className="w-[237px] h-[46px] ">
              <h3 className="font-sans text-3xl mt-6 font-DMSans font-bold text-center   ">
                Find A Doctor
              </h3>
            </div>
            <div className="flex max-lg:flex-col  gap-14 mt-6 ">
              <input
                type="text"
                className=" justify-center flex min-h-[66px] min-w-[296px] rounded-md border-theme1 border-[1px]  "
                placeholder="Name"
                style={{paddingLeft:30}}
              />
              <input
                type="text"
                className="min-h-[66px] min-w-[296px] rounded-md border-theme1 border-[1px] "
                placeholder="speciality"
                style={{paddingLeft:30}}

              />
              
{/* /Switch/ */}
              <label className="flex justify-center items-center">
              <span className="ms-3 text-md font-medium text-gray-900 dark:text-gray-400" style={{marginRight:10}}>
                  Available
                </span>
                <div  className="w-[63px] h-[32px] border-[1px]  border-theme1 rounded-3xl items-center cursor-pointer relative" >

              <input type="checkbox" className="sr-only peer" />
              <span className="w-2/5 h-4/5 bg-slate-200  peer-checked:bg-theme1 peer-checked:left-8 absolute top-1 left-1 rounded-full transition-all duration-1000" >

              </span>
                </div>
              </label>

              {/* / switch / */}
              <button className="h-[66px] bg-theme1 text-white min-w-[201px] leading-relaxed rounded-md ">
                {" "}
                Search
              </button>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    );
  }

  export default OrthoFindDoctor;
