// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// const Hero = () => {
//   const [visible, setVisible] = useState(false);
//   const [rocketPos, setRocketPos] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     setVisible(true);
//     const interval = setInterval(() => {
//       setRocketPos(p => (p + 1) % 20);
//     }, 80);
//     return () => clearInterval(interval);
//   }, []);


//   return (

//     <div
//     className="w-[1,728px] h-[650px] relative "
//     style={{
//       background:
//         "linear-gradient(45deg, #7B2FF7 0%, #B620E0 35%, #FA6400 70%, #32C5FF 100%)",
//     }}
//   >

//    {/* ================= HERO ================= */}
// <section className="relative w-full  pt-20">

// {/* Background split */}
// <div className="absolute inset-0">
//   <div className="h-2/2 "  style={{
//       background:
//         "linear-gradient(45deg, #7B2FF7 0%, #B620E0 35%, #FA6400 70%, #32C5FF 100%)",
//     }} />
//   <div className="h-1/2 bg-white" />
// </div>

// <div className="relative max-w-7xl mx-auto px-6 py-7 grid md:grid-cols-2 gap-10 items-center">
  
//   {/* LEFT CONTENT */}
//   <div className="relative">
//     <h1 className="text-white hero-heading leading-tight text-4xl md:text-[3.6rem] mb-6">
//       “Where Every <br /> Sound Begins a Story.”
//     </h1>

//     <p className="text-white/90 text-base md:text-xl max-w-lg mb-8">
//       A story-driven phonics universe where children learn sounds,
//       build words, and fall in love with reading — {""} <br/>
//       <span className="italic font-bold">
//         one joyful step at a time.
//       </span>
//     </p>

//     <button className="bg-yellow-500 hover:bg-yellow-300 text-purple-900 font-semibold px-4 py-2 rounded-lg shadow-lg transition-all">
//       Book a Free Demo
//     </button>


//   </div>

//   {/* RIGHT IMAGE */}
//   <div className="flex justify-center md:justify-end">
//     <img
//       src="/herophone.png"
//       alt="Phonics Pods App"
//       className="w-[420px] lg:w-[560px] drop-shadow-2xl"
//     />
//   </div>

// </div>
//         {/* Bottom section text */}
//         <div className="relative bg-white text-center pb-14 pt-24 px-6">
//           <p className="max-w-3xl mx-auto text-gray-600 text-lg">
//             A story-driven phonics universe where children learn sounds, build
//             words and fall in love with reading — one joyful step at a time.
//           </p>

//           <h2 className="mt-6 text-3xl font-bold text-red-500 tracking-wide">
//             PODSPHERE JOURNEY
//           </h2>
//         </div>
//         <img
//                 src="/rocket.png"
//                 alt="Rocket"
//                 className=" absolute z-1 top-[60%] left-[10%] drop-shadow-2xl w-60"
//               />
// </section>

//   </div>
// );
// };


// export default Hero;



'use client';

import React, { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);
  return (
    <div id="hero" className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/public/video/Cut-Final.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-10">

        {/* Logo Text */}
        <h1 className="text-white text-5xl md:text-6xl font-bold">
          PodSphere
        </h1>

        {/* Horizontal Line */}
        <div className="w-64 h-[1px] bg-white my-6"></div>

        {/* Tagline */}
        <p className="text-white text-lg md:text-2xl max-w-2xl">
          Where Every Sound Begins a Story
        </p>

        {/* Button */}
        <button
          onClick={() => setOpen(true)}
          className="demo-btn mt-8 font-semibold px-8 py-4 rounded-full cursor-pointer"
        >
           <span className="btn-text ">
          <span>Book a Free Demo</span>
          <span>Book a Free Demo</span>
          </span>
        </button>

        {/* Popup */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 mt-10">

          {/* Modal */}
          <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl w-[420px] p-8 relative">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Book a Free Demo
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl bg-white/80 outline-none"
              />

              <input
                type="text"
                placeholder="Child Name"
                className="w-full p-3 rounded-xl bg-white/80 outline-none"
              />

              <input
                type="number"
                placeholder="Age of the Child (Years)"
                className="w-full p-3 rounded-xl bg-white/80 outline-none"
              />

              <input
                type="tel"
                placeholder="Phone / WhatsApp Number"
                className="w-full p-3 rounded-xl bg-white/80 outline-none"
              />

              <input
                type="email"
                placeholder="Email ID"
                className="w-full p-3 rounded-xl bg-white/80 outline-none"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 rounded-xl bg-white/80 outline-none"
              />

              <button
                type="submit"
                className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
              >
                Submit
              </button>

            </form>
          </div>
        </div>
      )}

      </div>

      {/* <img
                 src="/rocket.png"
                 alt="Rocket"
                 className=" absolute z-1 top-[90%] left-[10%] drop-shadow-2xl w-60"
              /> */}
      
    </div>
  );
}