import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Product = () => {
  return (
    <div className="min-h-screen relative w-full bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 min-h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <h1 className="text-3xl md:text-7xl lg:text-9xl font-bold text-center text-white relative z-20">
        About Us
      </h1>

      <div className="  w-full max-w-xl md:max-w-2xl lg:max-w-4xl h-40 relative mt-6 md:mt-10 lg:mt-14 px-4">
        {/* Gradients */}
        <div className="absolute inset-x-10 md:inset-x-20 lg:inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] blur-sm" />
        <div className="absolute inset-x-10 md:inset-x-20 lg:inset-x-40 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px" />
        <div className="absolute inset-x-40 md:inset-x-60 lg:inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] blur-sm" />
        <div className="absolute inset-x-40 md:inset-x-60 lg:inset-x-80 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />

        {/* Core component */}
        {/* <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        /> */}
        <p className="text-neutral-100 max-w-xl mx-auto my-2 text-lg md:text-xl lg:text-2xl text-center relative z-10 -mt-10 md:-mt-20 lg:mt-10 px-2">
          Nevar Systems develops cutting-edge drone solutions for complex environments. We collect geospatial data, generate insights, and empower professionals in humanitarian aid, surveying, and engineering to make faster decisions.
        </p>

        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div> */}
      </div>
    </div>
  );
};

export default Product;
