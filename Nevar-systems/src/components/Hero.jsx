import React, { useState } from "react";
import Hero_details from "../Data/Hero";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Hero1 from "./Hero1";

const Type2 = () => {
  const [Home, setHome] = useState(true);

  setTimeout(() => {
    setHome(false);
  }, 5000);

  return Home ? (
    <Hero1 />
  ) : (
    <div className="bg-slate-900 flex w-full min-h-screen justify-center items-center select-none backdrop-blur-xl overflow-x-clip">
      <div className="w-screen">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          interval={2500}
          transitionTime={1000}
          showStatus={false}
          autoFocus={true}
        >
          {Hero_details.map((element, index) => {
            return (
              <div
                className="relative w-screen -mt-[250px] py-[0px]"
                key={index}
              >
                <div className="text-center text-[250px] font-extrabold leading-[190px]">
                  <div
                    id="hero-text"
                    className="relative py-5 flex flex-col justify-center  mt-[300px]"
                  >
                    <div className="bg-gradient-to-tr bg-clip-text from-slate-500 to-slate-100 z-[-50]">
                      <h1 className="text-transparent z-[0] py-5">
                        {element.title}
                      </h1>
                    </div>
                    <div className="relative bg-gradient-to-tr bg-clip-text from-slate-500 to-slate-100 z-[50] py-5">
                      <h1 className="text-transparent z-50 py-">
                        {element.sub_title}
                      </h1>
                      <h1
                        id="slogan"
                        className="text-xl text-center text-white mt-12 font-light tracking-[10px]"
                      >
                        {element.motto}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="absolute bottom-0 w-full min-h-[150px] bg-gradient-to-t from-black to-slate-900"></div>
    </div>
  );
};

export default Type2;
