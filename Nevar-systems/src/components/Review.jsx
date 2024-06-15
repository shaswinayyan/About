import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Review = () => {
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
      <div className="absolute right-0 top-[40%] -rotate-90 text-9xl font-extrabold -mr-[180px]">
        REVIEW
      </div>
      <div className="flex items-center gap-[125px]">
        <div className="relative">
          <div className="absolute min-w-[200px] min-h-[200px] bottom-0 rounded-full bg-gray-600 -ml-[75px] -mb-[75px]"></div>
          <div className="min-w-[600px] min-h-[400px] rounded-2xl bg-gray-400"></div>
        </div>
        <div className="relative -ml-[40px]">
          <div className="absolute min-w-[200px] min-h-[200px] bottom-0 rounded-full bg-gray-600 -ml-[75px] -mb-[75px]"></div>
          <div className="min-w-[600px] min-h-[400px] rounded-2xl bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Review;
