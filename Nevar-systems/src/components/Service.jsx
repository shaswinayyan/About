import React, { useEffect, useRef, useState } from "react";
import video1 from "../assets/ourServices/video1.mp4";
import video2 from "../assets/ourServices/video2.mp4";
import video3 from "../assets/ourServices/video3.mp4";
import video4 from "../assets/ourServices/video4.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// const videos = [video1, video2, video3, video4];
const videos = [
  { content: video1, title: "Aerial Archaeological Survey" },
  { content: video2, title: "Aerial Mapping" },
  { content: video3, title: "Aerial Inspection" },
  { content: video4, title: "Virutal Reality" },
];

const Services = () => {
  const [currVideo, setCurrVideo] = useState(0);

  // useGSAP(() => {
  //   gsap.from("#video-title", {
  //     opacity: 1,
  //     duration: 1000,
  //   });
  // }, [currVideo]);

  const elements = document.querySelectorAll(".vid");

  // useEffect(()=>{
  //   elements.forEach((element) => {
  //       element.addEventListener('mouseover',(e) => {
  //         elements.forEach(el,() => {
  //           if(el == e.target){
  //               el.classList.add("blur")
  //           }
  //         })
  //       })
  //         element.addEventListener('mouseout',(e) => {
  //          element.classList.remove("blur")
  //       })
  //   })
  // })

  return (
    <>
      <div className="h-screen flex justify-evenly items-center flex-col bg-slate-900">
        <h1 className="text-white font-bold text-5xl">OUR SERVICES</h1>
        <div className="grid grid-cols-3 grid-rows-3 gap-4 text-3xl w-[80vw] h-[65vh] md:h-[75vh] md:w-[75vw] grid-container">
          <div className="relative bg-white flex flex-col items-center md:justify-center rounded-lg col-span-3 row-span-2 md:col-span-2 md:row-span-3 overflow-hidden">
            <video
              id="videoElement"
              autoPlay
              muted
              src={videos[currVideo].content}
            ></video>
            <div className="absolute w-full bottom-0 bg-gradient-to-t from-slate-600 to-slate-400 shadow-xl md:flex justify-center items-center md:flex-grow hidden md:py-4">
              <h2
                id="video-title"
                className="text-xl md:text-2xl lg:text-3xl font-bold text-white/80"
              >
                {videos[currVideo].title.toUpperCase()}
              </h2>
            </div>
          </div>
          <div
            onMouseOver={() => {
              setCurrVideo(1);
            }}
            onMouseLeave={() => {
              setCurrVideo(0);
            }}
            className="bg-white flex items-center justify-center rounded-lg overflow-hidden duration-300 vid"
          >
            <video muted>
              <source type="video/mp4" src={videos[1].content}></source>
            </video>
          </div>
          <div
            onMouseOver={() => {
              setCurrVideo(2);
            }}
            onMouseLeave={() => {
              setCurrVideo(0);
            }}
            className="bg-white flex items-center justify-center rounded-lg overflow-hidden duration-300 vid"
          >
            <video muted>
              <source type="video/mp4" src={videos[2].content}></source>
            </video>
          </div>
          <div
            onMouseOver={() => {
              setCurrVideo(3);
            }}
            onMouseLeave={() => {
              setCurrVideo(0);
            }}
            className="bg-white flex items-center justify-center rounded-lg overflow-hidden duration-300 vid"
          >
            <video muted>
              <source type="video/mp4" src={videos[3].content}></source>
            </video>
          </div>

          {/* <div onMouseOver={() => setCurrVideo(1)} onMouseLeave={() => setCurrVideo(0)} className="bg-red-300 flex items-center justify-center rounded-lg col-span-2 row-span-3">
              <video preload="auto" autoPlay><source type="video/mp4" src={videos[currVideo]}></source></video>
            </div>
            <div  onClick={() => setCurrVideo(1) } onMouseLeave={() => setCurrVideo(0)} className="bg-red-300 flex items-center justify-center rounded-lg overflow-hidden">
              <video><source type="video/mp4" src={videos[1]}></source></video>
            </div>
            <div onMouseOver={() => setCurrVideo(2) } onMouseLeave={() => setCurrVideo(0)} className="bg-red-300 flex items-center justify-center rounded-lg overflow-hidden">
              <video><source type="video/mp4" src={videos[2]}></source></video>
            </div>
            <div onMouseOver={() => setCurrVideo(3) } onMouseLeave={() => setCurrVideo(0)} className="bg-red-300 flex items-center justify-center rounded-lg overflow-hidden">
              <video><source type="video/mp4" src={videos[3]}></source></video>  
            </div> */}

          {/* {videos.map((video, index) => (
            <div
              onClick={() => setState(index)}
              className={`bg-red-300 flex items-center justify-center rounded-lg overflow-hidden ${
                index === state && (index == 0 || index === 1)
                  ? "col-span-2 row-span-3"
                  : ""
              } ${
                index === state && (index === 2 || index === 3)
                  ? ` col-span-2 row-span-3`
                  : ""
              }`}
            >
              <video  ref={videoRef} > <source src={video}></source> </video>
            </div>
          ))} */}
        </div>
      </div>
    </>
  );
};

export default Services;
