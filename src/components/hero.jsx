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
import CONFIG from "../constance";
import axios from "axios";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [demoData, setDemoData] = useState({
    name: "",
    childName: "",
    age: "",
    phone: "",
    email: "",
    country: ""
  });
  
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoError, setDemoError] = useState(false);

  const handleDemoSubmit = async (e) => {
    e.preventDefault();
  
    if (!demoData.name || !demoData.phone || !demoData.email) {
      setDemoError(true);
      return;
    }
  
    try {
      setDemoLoading(true);
      setDemoError(false);
  
      const res = await axios.post(
        `${CONFIG.API_BASE_URL}/contact`,
        {
          ...demoData,
          formType: "demo" 
        }
      )
  
      if (res.data?.success) {
        setDemoSuccess(true);
        setDemoData({
          name: "",
          childName: "",
          age: "",
          phone: "",
          email: "",
          country: ""
        });
      } else {
        throw new Error("Failed");
      }
  
    } catch (err) {
      console.error(err);
      setDemoError(true);
    } finally {
      setDemoLoading(false);
  }
};

const handleDemoChange = (e) => {
  const { name, value } = e.target;
  setDemoData((prev) => ({
    ...prev,
    [name]: value
  }));
};

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
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 sm:pb-10 pb-20">

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
      {/* {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 mt-10">

          <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl w-[420px] p-8 relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6 text-center">
              Book a Free Demo
            </h2>

          

<form onSubmit={handleDemoSubmit} className="space-y-4">

<input
  type="text"
  name="name"
  value={demoData.name}
  onChange={handleDemoChange}
  placeholder="Your Name"
  className="w-full p-3 rounded-xl bg-white/80 outline-none"
/>

<input
  type="text"
  name="childName"
  value={demoData.childName}
  onChange={handleDemoChange}
  placeholder="Child Name"
  className="w-full p-3 rounded-xl bg-white/80 outline-none"
/>

<input
  type="number"
  name="age"
  value={demoData.age}
  onChange={handleDemoChange}
  placeholder="Age of the Child (Years)"
  className="w-full p-3 rounded-xl bg-white/80 outline-none"
/>

<input
  type="tel"
  name="phone"
  value={demoData.phone}
  onChange={handleDemoChange}
  placeholder="Phone / WhatsApp Number"
  className="w-full p-3 rounded-xl bg-white/80 outline-none"
/>

<input
  type="email"
  name="email"
  value={demoData.email}
  onChange={handleDemoChange}
  placeholder="Email ID"
  className="w-full p-3 rounded-xl bg-white/80 outline-none"
/>

<input
  type="text"
  name="country"
  value={demoData.country}
  onChange={handleDemoChange}
  placeholder="Country"
  className="w-full p-3 rounded-xl bg-white/80 outline-none"
/>

{demoError && (
  <p className="text-red-500 text-sm text-center">
    Please fill required fields
  </p>
)}

{demoSuccess && (
  <p className="text-green-600 text-sm text-center">
    Demo booked successfully 🎉
  </p>
)}

<button
  type="submit"
  disabled={demoLoading}
  className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
>
  {demoLoading ? "Submitting..." : "Submit"}
</button>
</form>
          </div>
        </div>
      )} */}



{open && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 ">

    {/* Modal */}
    <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl w-[420px] p-8 relative">

      {/* Close Button */}
      <button
        onClick={() => { setOpen(false); setDemoSuccess(false); }}
        className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"
      >
        ✕
      </button>

      {demoSuccess ? (
        /* ── SUCCESS STATE ── */
        <div className="flex flex-col items-center justify-center py-6 gap-4">
          {/* Animated checkmark circle */}
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
            <svg
              className="w-10 h-10 text-green-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 className="text-2xl font-bold text-gray-400 text-center">
            Demo Booked! 
          </h3>

          <p className="text-gray-600 text-center text-sm leading-relaxed">
            Your free demo has been successfully booked.<br />
            We'll reach out to you shortly!
          </p>

          <button
            onClick={() => { setOpen(false); setDemoSuccess(false); }}
            className="mt-2 px-8 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer text-sm font-medium"
          >
            Close
          </button>
        </div>

      ) : (
        /* ── FORM STATE ── */
        <>
          <h2 className="text-2xl font-bold mb-6 text-center">
            Book a Free Demo
          </h2>

          <form onSubmit={handleDemoSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              value={demoData.name}
              onChange={handleDemoChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-xl bg-white/80 outline-none"
            />

            <input
              type="text"
              name="childName"
              value={demoData.childName}
              onChange={handleDemoChange}
              placeholder="Child Name"
              className="w-full p-3 rounded-xl bg-white/80 outline-none"
            />

            <input
              type="number"
              name="age"
              value={demoData.age}
              onChange={handleDemoChange}
              placeholder="Age of the Child (Years)"
              className="w-full p-3 rounded-xl bg-white/80 outline-none"
            />

            <input
              type="tel"
              name="phone"
              value={demoData.phone}
              onChange={handleDemoChange}
              placeholder="Phone / WhatsApp Number"
              className="w-full p-3 rounded-xl bg-white/80 outline-none"
            />

            <input
              type="email"
              name="email"
              value={demoData.email}
              onChange={handleDemoChange}
              placeholder="Email ID"
              className="w-full p-3 rounded-xl bg-white/80 outline-none"
            />

            <input
              type="text"
              name="country"
              value={demoData.country}
              onChange={handleDemoChange}
              placeholder="Country"
              className="w-full p-3 rounded-xl bg-white/80 outline-none"
            />

            {demoError && (
              <p className="text-red-500 text-sm text-center">
                Please fill required fields
              </p>
            )}

            <button
              type="submit"
              disabled={demoLoading}
              className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              {demoLoading ? "Submitting..." : "Submit"}
            </button>

          </form>
        </>
      )}

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