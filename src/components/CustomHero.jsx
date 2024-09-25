import React from "react";
import { useState } from "react";

function CustomHero({ img, heading, paragraph, invert, button }) {
  // const [imgType , setImgType] =  useState(false)
  let stylesForInvert = `flex  ${
    invert
      ? "flex-row max-lg:flex-col "
      : "flex-row-reverse max-lg:flex-col-reverse"
  } lg:w-[990px] gap-8 flex-row  justify-between xl:min-w-[1140px] xl:max-w-[1150px]`;
  return (
    <div>
      <div className="flex justify-center items-center  font-poppins  md:w-[100%] mt-14 ">
        <div className={stylesForInvert}>
          <div className="flex max-sm:p-4 items-center justify-center ">
            <div
              data-aos="fade-right"
              data-aos-anchor-placement="center-bottom max-md:w-auto md:w-[570px] "
              className=""
            >
              <h3
                className="font md: w-[570px] max-md:w-auto w-auto0 font-semibold md:customStyleBotoxCompoHead "
                
                style={{
                  fontSize: "28px",
                }}
              >
                {heading}
              </h3>
              `
              <div style={{ marginTop: "30px" }} className="w-[587]  text-sm">
                <p className=" max-md:w-auto md:w-[500px] text-sm font-poppins w-[40ch] text-black  ">
                  {paragraph}
                </p>
              </div>
              {button && (
                <button
                  style={{
                    width: "252px",
                    height: "51px",
                    borderRadius: "8px",
                    marginTop: "60px",
                    fontFamily: "LT",
                  }}
                  className="bg-[#007E85] max-sm:mb-6 max-lg:mb-8 text-white letterSpacing "
                >
                  {button}
                </button>
              )}
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            className="flex justify-center items-center lg:min-h-[330px]"
          >
            <img
              className="mb-6 max-md:w-auto md:w-[570px] max-md:mx-6"
              src={img}
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomHero;
