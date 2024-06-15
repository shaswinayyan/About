import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";

const NavLeft = () => {
  useGSAP(() => {
    gsap.to(".stagger-element", {
      x: 25,
      duration: 1.5,
      stagger: {
        amount: 0.5,
        axis: "x",
      },

      opacity: "100%",
      ease: "back",
    });
  }, []);

  return (
    <div className="w-[300px] py-10 justify-around flex-col absolute left-0 bg-black/75 h-screen top-0 flex  items-center text-white bg-opacity-75">
      <div className="bg-zinc-900 absolute w-full h-screen z-10 opacity-50 blur-[3px]"></div>
      <div className="stagger-element opacity-0 -ml-5 z-20">Home</div>
      <div className="stagger-element opacity-0 -ml-5 z-20">About us</div>
      <div className="stagger-element opacity-0 -ml-5 z-20">Service</div>
      <div className="stagger-element opacity-0 -ml-5 z-20">Review</div>
      <div className="stagger-element opacity-0 -ml-5 z-20">Our Clients</div>
      <div className="stagger-element opacity-0 -ml-5 z-20">Contact us</div>
    </div>
  );
};

export default NavLeft;
