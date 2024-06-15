import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import clientLogo1 from "../assets/clientLogos/logo1.png";
import clientLogo2 from "../assets/clientLogos/logo2.png";
import clientLogo3 from "../assets/clientLogos/logo3.png";
import clientLogo4 from "../assets/clientLogos/logo4.png";
import clientLogo5 from "../assets/clientLogos/logo5.png";
import clientLogo6 from "../assets/clientLogos/logo6.png";
import clientLogo7 from "../assets/clientLogos/logo7.png";
import clientLogo8 from "../assets/clientLogos/logo8.png";
import clientLogo9 from "../assets/clientLogos/logo9.png";
import clientLogo10 from "../assets/clientLogos/logo10.png";
import clientLogo11 from "../assets/clientLogos/logo11.png";
import clientLogo12 from "../assets/clientLogos/logo12.png";
import clientLogo13 from "../assets/clientLogos/logo13.png";
import clientLogo14 from "../assets/clientLogos/logo14.png";
import clientLogo15 from "../assets/clientLogos/logo15.png";
import clientLogo16 from "../assets/clientLogos/logo16.jpeg";

import partnerLogo1 from "../assets/partners/logo1.png";
import partnerLogo2 from "../assets/partners/logo2.png";
import partnerLogo3 from "../assets/partners/logo3.png";
import partnerLogo4 from "../assets/partners/logo4.png";

const Client = () => {
  const ClientLogos = [
    { img: clientLogo1, index: 0 },
    { img: clientLogo2, index: 1 },
    { img: clientLogo3, index: 2 },
    { img: clientLogo4, index: 3 },
    { img: clientLogo5, index: 4 },
    { img: clientLogo6, index: 5 },
    { img: clientLogo7, index: 6 },
    { img: clientLogo8, index: 7 },
    { img: clientLogo9, index: 8 },
    { img: clientLogo10, index: 9 },
    { img: clientLogo11, index: 10 },
    { img: clientLogo12, index: 11 },
    { img: clientLogo13, index: 12 },
    { img: clientLogo14, index: 13 },
    { img: clientLogo15, index: 14 },
    { img: clientLogo16, index: 15 },
  ];

  const partnerLogos = [partnerLogo1, partnerLogo2, partnerLogo3, partnerLogo4];
  const wrapperRef = useRef();
  const clientLogoRef = useRef(null);
  const [statsInView, setStatsInView] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  //play and pause client scroll animation on hover

  // useEffect(() => {
  //   wrapperRef.current.addEventListener("mouseover", (e) => {
  //     t1.pause();
  //     t2.pause();
  //   });
  //   wrapperRef.current.addEventListener("mouseout", (e) => {
  //     t1.play();
  //     t2.play();
  //   });

  // }, []);

  useEffect(() => {
    // const totalWidth = 96 * ClientLogos.length;
    const totalWidth = clientLogoRef.current.offsetWidth * ClientLogos.length;
    console.log("width of a logo", clientLogoRef.current.offsetWidth);
    console.log("total width of scroll bar", totalWidth);

    gsap.to("#clientScroll", {
      x: -totalWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
  }),
    [];

  const t1 = gsap.timeline();
  const t2 = gsap.timeline();

  useGSAP(() => {
    t1.to(wrapperRef.current, {
      rotate: "360deg",
      duration: 60,
      repeat: -1,
      ease: "none",
    });
    t2.to(".img", {
      rotate: "-=360deg",
      duration: 60,
      repeat: -1,
      ease: "none",
    });
    gsap.from("#clients-title", {
      opacity: 0,
      x: -500,
      duration: 1,
      scrollTrigger: {
        trigger: "#clients-title",
        start: "top bottom",
      },
    });
    gsap.to(".stats", {
      scrollTrigger: {
        trigger: ".stats",
        start: "top bottom",
        end: "bottom top",
        onToggle: ({ isActive }) => setStatsInView(true),
      },
    });
    gsap.from(".partners", {
      y: 200,
      duration: 1.2,
      stagger: 0.2,
      filter: "blur(8px)",
      scrollTrigger: {
        trigger: "#partners-title",
        start: "top bottom",
      },
    });
    gsap.from("#partners-title", {
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#partners-title",
        start: "top bottom",
      },
    });
  }, []);

  return (
    <div className="w-full flex h-screen justify-center bg-gradient-to-tr from-slate-900 cvia-slate-900  to-slate-900 overflow-hidden select-none">
      {/* our clients */}
      <div className="hidden xl:flex relative items-center w-[45vw] h-full">
        {/* outer wrapper */}
        <div className="hidden xl:flex justify-center items-center relative h-[45vw] w-[45vw] -translate-x-80">
          <h1
            id="clients-title"
            className="absolute px-1 translate-x-[90%] text-3xl w-20 text-white font-semibold"
          >
            OUR CLIENTS
          </h1>
          <div
            ref={wrapperRef}
            className="wrapper flex  items-center relative h-full w-full"
            style={{
              boxShadow: "inset 0 0 0 15vh #D3D3D3",
              borderRadius: "50%",
            }}
          >
            {ClientLogos.map((item) => {
              return (
                <div
                  style={{
                    transform: `rotate(calc(360deg/${ClientLogos.length} *${item.index}))`,
                    transformOrigin: "22.5vw",
                  }}
                  key={item.index}
                  className=" absolute z-10 top-[50%]  bottom-[50%] left-0 w-28 flex justify-center items-center"
                >
                  <img
                    style={{
                      transform: `rotate(calc(360deg/-${ClientLogos.length} *${item.index}))`,
                    }}
                    src={item.img}
                    className={`img w-24 p-1`}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* stats and partners*/}
      <div className="flex h-full flex-col xl:justify-evenly justify-around p-8">
        {/* stats */}
        <div className="mt-6 flex justify-evenly text-white text-3xl md:text-4xl xl:text-5xl stats">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-blue-300">
              {statsInView && (
                <CountUp start={0} end={55} duration={4}></CountUp>
              )}
              +
            </h1>
            <h1 className=""> Clients</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-blue-300">
              {statsInView && (
                <CountUp start={0} end={8000} duration={3.2}></CountUp>
              )}
              +
            </h1>
            <h1 className=""> sqkm</h1>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-blue-300">
              {statsInView && (
                <CountUp start={0} end={70} duration={4}></CountUp>
              )}
              +
            </h1>
            <h1 className=""> Projects</h1>
          </div>
        </div>

        {/* partners    */}
        <div className="flex flex-col mt-16 items-center justify-center">
          <h1
            id="partners-title"
            className="xl:text-4xl text-3xl font-sans text-white md:font-semibold"
          >
            OUR PARTNERS
          </h1>
          {/* partners logo wrapper */}
          <div className="xl:mt-12 mt-6 grid grid-cols-4  bg-slate-300/80 gap-6 p-3 lg:p-6 rounded-lg overflow-hidden mx-8 shadow-[0px_0px_10px_rgba(0,0,0,0.38)_inset]">
            {partnerLogos.map((logo, index) => {
              return (
                <div key={index} className="partners">
                  <img className="md:w-40 md:px-2" src={logo}></img>
                </div>
              );
            })}
          </div>
        </div>

        {/* clients logo scroll */}
        <div className="flex flex-col gap-6 mt-8 w-screen items-center justify-center xl:hidden px-2">
          <h1 className="text-3xl  text-white md:font-semibold">OUR CLIENTS</h1>
          <div className="bg-slate-200/80 py-2 md:py-4 w-screen flex-wrap overflow-hidden">
            <div id="clientScroll" className="flex">
              {ClientLogos.map((item, index) => {
                return (
                  <img
                    ref={clientLogoRef}
                    key={index}
                    src={item.img}
                    className="w-24 px-2 object-contain"
                    id="clientImage"
                  ></img>
                );
              })}
              {ClientLogos.map((item, index) => {
                return (
                  <img
                    key={index + 15}
                    src={item.img}
                    className="w-24 px-2 object-contain"
                  ></img>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
