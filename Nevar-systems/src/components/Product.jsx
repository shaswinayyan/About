import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Product = () => {
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
      className="text-gray-400 flex-col flex relative select-none gap-10 w-full h-screen items-center justify-center text-3xl opacity-50"
    >
      <div className="absolute left-0 top-[30%] -rotate-90 text-9xl font-extrabold -ml-[180px]">
        ABOUT
      </div>
      <div className="flex items-center gap-10">
        <div className="min-w-[300px] min-h-[300px] rounded-full bg-gray-400"></div>
        <div className="flex flex-col gap-5">
          <div className="min-w-[600px] min-h-[25px] rounded-xl bg-gray-400"></div>
          <div className="min-w-[600px] min-h-[25px] rounded-xl bg-gray-400"></div>
          <div className="min-w-[600px] min-h-[25px] rounded-xl bg-gray-400"></div>
          <div className="min-w-[600px] min-h-[25px] rounded-xl bg-gray-400"></div>
        </div>
      </div>
      <div className="min-w-[75vw] min-h-[300px] bg-gray-400 rounded-3xl"></div>
    </div>
  );
};

export default Product;
