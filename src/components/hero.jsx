'use client';

import React, { useState } from "react";
import CONFIG from "../constance";
import axios from "axios";
import DemoModal from "./demoModal";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [demoData, setDemoData] = useState({
    name: "",
    childName: "",
    age: "",
    phone: "",
    email: "",
    country: "",
    pincode: ""
  });
  
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoError, setDemoError] = useState(false);

  const isValidPincode = demoData.pincode.length === 6;

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
          country: "",
          pincode: ""
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

        <DemoModal open={open} onClose={() => setOpen(false)} />

      </div>

      {/* <img
                 src="/rocket.png"
                 alt="Rocket"
                 className=" absolute z-1 top-[90%] left-[10%] drop-shadow-2xl w-60"
              /> */}
      
    </div>
  );
}