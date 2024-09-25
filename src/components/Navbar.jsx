

import React from "react";
import Logo from "../assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/styles.css";

function Navbar({ style }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();
  const location = useLocation(); 
  const [showMenu, setShowMenu] = useState(false);

  const linksCss = `flex items-center flex-col xl:flex-row max-sm:p-0 p-6 xl:right-10 ${
    showMenu
      ? " max-xl:bg-white rounded-lg h-[50vh] z-30 text-center top-0 justify-center items-center right-0 max-xl:min-w-[100vw]"
      : " sm:hidden max-sm:hidden xl:flex max-xl:flex "
  }`;

  const nav = `w-[100%] xl:max-w-[1400px] flex flex-col justify-between xl:flex-row rounded-md z-20 ${style} ${showMenu ? "px-0" : "px-6"} `;
  const h1 =
    "tabs letterSpacing mx-4 hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85] transition duration-500 cursor-pointer focus:text-[#007E85] focus:border-b-2";

  // fx
  function goToWhatsapp ( ){
    window.open(`https://wa.me/03244574564?text=${encodeURIComponent(`I there I have visited your website I'm interested in getting more information about it`)}`, '_blank');
//  0324 4574564

  }
  function goToEmail() {
    window.location.href = `mailto:info@healthcare.com?subject=${encodeURIComponent("Inquiry about Healthcare Services")}&body=${encodeURIComponent("Hi there, I have visited your website and I'm interested in getting more information about your services.")}`;
  }
  function goToOrtho() {
    navigate("/ortho");
  }

  function goToBotox() {
    navigate("/botox");
  }

  function goToLocation() {
    navigate("/location");
  }
  function goToHomeServices() {
    navigate("/HomeServices");
  }
// console.log(location.pathname)
  return (
    <div data-aos="fade-down" className="nav flex xl:justify-center w-[100%]">
      <nav className={nav}>
        <div
          className="flex flex-row cursor-pointer mb-4 items-center md:mb-0 m mxl:mr-16"
          onClick={() => {
            navigate("/");
          }}
        >
          <img className="" src={Logo} alt="daf" />
          <p className="letterSpacing text-[#007E85] text-2xl font-semibold">Health</p>
          <p className="letterSpacing text-green-600 tracking-wider text-2xl font-semibold">
            care
          </p>
        </div>

        <div className={linksCss}>
          <h1
            className={`${h1} ${location.pathname === "/" ? "active" : ""} mb-2Y md:mb-0`}
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </h1>
          <h1 className={`${h1} ${location.pathname === "/ortho" ? "active" : ""}`} onClick={goToOrtho}>
          Orthotics<span className={"text-theme1 "}>&</span>Equipments
          </h1>
          <h1 className={`${h1} ${location.pathname === "/botox" ? "active" : ""}`} onClick={goToBotox}>
            Botox
          </h1>
          {/* <h1 className={h1}>Equipments</h1> */}
          <h1 className={`${h1} ${location.pathname === "/location" ? "active" : ""}`} onClick={goToLocation}>
            Locations
          </h1>
          <h1 className={`${h1} ${location.pathname === "/HomeServices" ? "active" : ""}`} onClick={goToHomeServices} >HomeServices</h1>
          <button className="bg-theme1 text-white w-[181px] h-[50px] rounded-[10px] hover:bg-transparent hover:text-theme1 hover:border-theme1 border-2 delay-75 duration-500 " onClick={goToEmail} >Contact Us</button>
        </div>
        <span
          onClick={() => setShowMenu((showMenu) => !showMenu)}
          className=" xl:hidden max-xl:absolute max-sm:right-0 right-[24px] z-40 bg-gradient-to-r from-[#007E85] to-[#6EAB36] text-white cursor-pointer p-2 rounded-lg "
        >
          Menu
        </span>
      </nav>
    </div>
  );
}

export default Navbar;
