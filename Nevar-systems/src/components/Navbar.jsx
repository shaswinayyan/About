import React from "react";
import { Logo } from "../assets";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 z-[100] top-0 w-full py-2 flex justify-between px-5">
      <div>
        <img src={Logo} alt="" width={100} />
      </div>
      <div className="my-2 bg-slate-400 bg-opacity-25 text-white border border-black flex items-center gap-10 px-5 rounded-full backdrop-blur-xl shadow-2xl shadow-black">
        <div>About</div>
        <div>Product</div>
        <div>Service</div>
        <div>Blog</div>
      </div>
      <div className="my-2 bg-slate-400 bg-opacity-25 text-white border border-black flex items-center gap-10 px-5 rounded-full backdrop-blur-xl shadow-2xl shadow-black">
        contact Us
      </div>
    </div>
  );
};

export default Navbar;
