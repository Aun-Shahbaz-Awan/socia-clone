import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
//react icons
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Hero from "./Hero";

const Navbar = () => {
  //states
  const [mobNav, setMobNav] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-Herobackground bg-cover bg-right sm:bg-center min-h-screen backbg-no-repeat font-poppins">
      <div className=" mx-auto lg:px-48 px-4 bg-black/20 min-h-screen">
        <div className="flex items-center justify-between py-4 ">
          <div className="items-end">
            <img src={Logo} className="lg:h-14 h-14" alt="logo" />
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="gap-8 text-white items-center flex">
              <div className="hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer transition-transform">
                Home
              </div>
              <div className="hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer">
                Features
              </div>
              <div className="hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer">
                About
              </div>
              <div className="hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer">
                Services
              </div>
              <div className="hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer">
                Roadmap
              </div>
              <div className="hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer">
                FAQ
              </div>
              <div className="hover:text-neonblue hover:border-b-neonblue  hover:border-b p-2 cursor-pointer">
                Team
              </div>
            </div>
          </div>
          <button className="px-5 py-2 rounded-md text-white border-2 text-sm btn ">
            Connect Wallet
          </button>
          <div className="flex lg:hidden">
            {mobNav ? (
              <RxCross2
                size={44}
                color={"#00ffff"}
                onClick={() => {
                  setMobNav(!mobNav);
                }}
              />
            ) : (
              <GiHamburgerMenu
                size={44}
                color={"#00ffff"}
                onClick={() => {
                  setMobNav(!mobNav);
                }}
              />
            )}
          </div>
        </div>
        {mobNav ? (
          <div className="absolute w-full bg-[#170B35]  ">
            <ul className="flex flex-col text-white w-full">
              <li className="py-2 px-4 hover:bg-neonblue">Home</li>
              <li className="py-2 px-4 hover:bg-neonblue">Features</li>
              <li className="py-2 px-4 hover:bg-neonblue">About</li>
              <li className="py-2 px-4 hover:bg-neonblue">Services</li>
              <li className="py-2 px-4 hover:bg-neonblue">Roadmap</li>
              <li className="py-2 px-4 hover:bg-neonblue">FAQ</li>
              <li className="py-2 px-4 hover:bg-neonblue">Team</li>
            </ul>
          </div>
        ) : null}
        {/* Hero */}
        <Hero />
      </div>
    </div>
  );
};

export default Navbar;
