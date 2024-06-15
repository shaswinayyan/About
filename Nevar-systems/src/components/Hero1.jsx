import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { Drone } from "../assets";

const Hero1 = () => {
  useGSAP(() => {
    gsap.to("#hero-text", {
      y: -150,
      opacity: "100%",
      duration: 1.5,
    });

    gsap.to("#drone", {
      y: 250,
      opacity: "100%",
      ease: "bounce",
      duration: 3,
      delay: 0.5,
    });

    gsap.to("#slogan", {
      x: 100,
      opacity: "100%",
      duration: 3,
    });
  }, []);

  return (
    <div className="bg-slate-900  overflow-x-hidden overflow-y-hidden flex w-full min-h-screen justify-center items-center select-none backdrop-blur-xl">
      <img
        src={Drone}
        className="absolute scale-[125%] z-10 -mt-[400px] opacity-0"
        id="drone"
      />
      <div className="text-center text-[250px] font-extrabold leading-[190px]">
        <div id="hero-text" className="relative opacity-0 py-5  mt-[300px]">
          <div className="bg-gradient-to-tr bg-clip-text from-slate-500 to-slate-100 z-[-50]">
            <h1 className="text-transparent z-[0]">NEVAR</h1>
          </div>
          <div className="relative bg-gradient-to-tr bg-clip-text from-slate-500 to-slate-100 z-[50] py-5">
            <h1 className="text-transparent z-50">SYSTEM</h1>
            <h1
              id="slogan"
              className="text-xl opacity-0 mr-[200px] text-white mt-12 font-light tracking-[10px]"
            >
              See the Impossibles!
            </h1>
          </div>
        </div>
      </div>
      <div className="text-white absolute bottom-[100px] z-[100] w-full flex justify-center hidden">
        <div className="flex gap-4 rounded-full mb-5 drop-shadow-xl drop-shadow-black bg-gradient-to-tr px-4 py-2 from-slate-400 to-slate-50">
          <div className="min-w-[15px] min-h-[15px] bg-white rounded-xl"></div>
          <div className="min-w-[15px] min-h-[15px] bg-slate-900/50 rounded-xl"></div>
          <div className="min-w-[15px] min-h-[15px] bg-slate-900/50 rounded-xl"></div>
          <div className="min-w-[15px] min-h-[15px] bg-slate-900/50 rounded-xl"></div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full min-h-[150px] bg-gradient-to-t from-black to-slate-900 z-[1000000]"></div>
      <div className="absolute bottom-0 w-full min-h-[150px] bg-gradient-to-t from-black to-slate-900"></div>
    </div>
  );
};

export default Hero1;
