import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Footer = () => {
  useGSAP(() => {
    gsap.to("#about", {
      opacity: "75%",
      duration: 4,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      id="about"
      className="text-gray-400 flex-col flex relative select-none gap-10 w-full h-screen items-center justify-center text-3xl opacity-50 overflow-x-clip"
    >
      <div className="flex items-center gap-[125px]">
        <div className="relative">
          <div className="min-w-[400px] min-h-[400px] rotate-[45deg] rounded-2xl bg-gray-400"></div>
        </div>
        <div className="relative -ml-[40px] flex flex-col gap-12 justify-center items-center w-[50vw]">
          <div className="text-7xl font-extrabold">CONTACT</div>
          <div className="min-w-[80%] min-h-[300px] bg-gray-400 rounded-xl"></div>
          <div className="flex w-full justify-center gap-12">
            <div className="min-w-[50px] min-h-[50px] bg-gray-400 rounded-full"></div>
            <div className="min-w-[50px] min-h-[50px] bg-gray-400 rounded-full"></div>
            <div className="min-w-[50px] min-h-[50px] bg-gray-400 rounded-full"></div>
            <div className="min-w-[50px] min-h-[50px] bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute overflow-x-hidden bottom-0 text-xl font-bold bg-slate-600 w-full text-center text-white py-1">
        {" "}
        Developed by{" "}
        <a href="https://ptu-designclub.netlify.app/" target="_blank">
          <span className="hover:text-slate-400 cursor-pointer">
            PTU Design Club
          </span>
        </a>{" "}
      </div>
    </div>
  );
};

export default Footer;
