// import React, { useEffect, useRef, useState } from 'react';
// import { motion } from "framer-motion";

// import { Link } from 'react-router-dom';


// export default function Aboutus() {
//   const [visible, setVisible] = useState(false);
//   const ref = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setVisible(true);
//       },
//       { threshold: 0.2 }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);


//   const points = [
//     {
//       title: "Learning That Feels Like an Adventure",
//       desc:
//         "Our lessons aren’t quiet worksheets — they’re missions, songs, puzzles, and tiny victories. Kids explore sounds as if they’re unlocking magical worlds.",
//     },
//     {
//       title: "Personalized & Group Learning Options",
//       desc:
//         "Every child learns in their own rhythm. Choose 1:1 attention or small, social group pods — both equally warm and engaging.",
//     },
//     {
//       title: "Educators Who Inspire, Not Just Instruct",
//       desc:
//         "Our teachers are storytellers, cheerleaders, and gentle guides. They create safe spaces where children feel seen, heard, and celebrated.",
//     },
//     {
//       title: "Confidence at Every Step",
//       desc:
//         "We spotlight every milestone — no matter how small. The smile when they read a word for the first time? That’s our favourite moment too.",
//     },
//     {
//       title: "Parents as Partners",
//       desc:
//         "You’re always in the loop through progress updates, at-home tips, and open communication. It truly takes a village — and we’re part of yours.",
//     },
//   ];


//   const container = {
//     hidden: {},
//     show: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };
  
//   const fadeUp = {
//     hidden: { opacity: 0, y: 40 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };



//   const caregivers = [
//     {
//       name: "David Brook",
//       role: "Lead Caregiver",
//       desc: "David brings over 15 years of experience in early childhood education and is committed to nurturing a love for learning in every child.",
//       img: "/public/person.jpg",
//       bg: "bg-[#FFF3D6]",
//     },
//     {
//       name: "Michael Turn",
//       role: "Infant Specialist",
//       desc: "Specializing in infant care, Michael ensures that our youngest learners receive attentive, compassionate care in a safe environment.",
//       img: "/public/person.jpg",
//       bg: "bg-[#DDEEFF]",
//     },
//     {
//       name: "Ethan Harris",
//       role: "Program Lead",
//       desc: "Ethan leads the toddler program with a focus on developmental activities that foster curiosity and creativity.",
//       img: "/public/person.jpg",
//       bg: "bg-[#F1E8FA]",
//     },
//     {
//       name: "Aaron Clark",
//       role: "Safety Officer",
//       desc: "Aaron ensures that all safety protocols are strictly followed, creating a secure environment for children and staff.",
//       img: "/public/person.jpg",
//       bg: "bg-[#FFE7DA]",
//     },
//   ];

//   return (
//     <>
//     <section
//       ref={ref}
//       className="relative overflow-hidden bg-[rgb(245,221,112)] py-20 px-8 md:px-16 rounded-b-4xl"
//       style={{
//         // margin: "40px 20px",
//         minHeight: "500px",
//       }}
//     >

//       {/* White Box Background */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             backgroundImage: `
//               linear-gradient(rgba(255,255,255,0.25) 2px, transparent 1px),
//               linear-gradient(90deg, rgba(255,255,255,0.25) 2px, transparent 1px)
//             `,
//             backgroundSize: "60px 60px",
//             opacity: 0.4,
//           }}
//         />

//       {/* Decorative Elements */}

//       {/* UFO - Top Left */}
//       <div
//         className="absolute"
//         style={{
//           top: "18%",
//           left: "12%",
//           opacity: visible ? 1 : 0,
//           transform: visible ? "scale(1)" : "scale(0)",
//           transition: "all 0.6s ease 0.2s",
//         }}
//       >
//         <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
//           <ellipse cx="30" cy="30" rx="28" ry="8" fill="#4ECDC4" opacity="0.3"/>
//           <ellipse cx="30" cy="20" rx="20" ry="12" fill="#95E1D3"/>
//           <ellipse cx="30" cy="15" rx="15" ry="8" fill="#4ECDC4"/>
//           <circle cx="20" cy="18" r="2" fill="#2C3E50" opacity="0.4"/>
//           <circle cx="30" cy="18" r="2" fill="#2C3E50" opacity="0.4"/>
//           <circle cx="40" cy="18" r="2" fill="#2C3E50" opacity="0.4"/>
//         </svg>
//       </div>

//       {/* Star - Top Left */}
//       <div
//         className="absolute text-3xl"
//         style={{
//           top: "12%",
//           left: "18%",
//           opacity: visible ? 1 : 0,
//           transform: visible ? "rotate(0deg)" : "rotate(-45deg)",
//           transition: "all 0.5s ease 0.3s",
//         }}
//       >
//         ⭐
//       </div>

//       {/* Pink Sparkle - Top Center */}
//       <div
//         className="absolute text-3xl"
//         style={{
//           top: "8%",
//           left: "48%",
//           opacity: visible ? 1 : 0,
//           transform: visible ? "scale(1)" : "scale(0)",
//           transition: "all 0.5s ease 0.4s",
//         }}
//       >
//         ✨
//       </div>

//       {/* Small Sparkle - Top Left of About */}
//       <div
//         className="absolute text-xl"
//         style={{
//           top: "6%",
//           left: "28%",
//           opacity: visible ? 1 : 0,
//           transition: "all 0.5s ease 0.5s",
//         }}
//       >
//         ✦
//       </div>

//       {/* Watermelon - Top Right */}
//       <div
//         className="absolute"
//         style={{
//           top: "15%",
//           right: "10%",
//           opacity: visible ? 1 : 0,
//           transform: visible ? "rotate(0deg)" : "rotate(45deg)",
//           transition: "all 0.6s ease 0.3s",
//         }}
//       >
//         <svg width="70" height="50" viewBox="0 0 70 50" fill="none">
//           <path
//             d="M10,45 Q35,10 60,45 Z"
//             fill="#FF6B6B"
//             stroke="#C92A2A"
//             strokeWidth="2"
//           />
//           <path
//             d="M15,42 Q35,15 55,42"
//             fill="#FFA8A8"
//             stroke="none"
//           />
//           <ellipse cx="25" cy="35" rx="2" ry="3" fill="#2C3E50"/>
//           <ellipse cx="35" cy="28" rx="2" ry="3" fill="#2C3E50"/>
//           <ellipse cx="45" cy="35" rx="2" ry="3" fill="#2C3E50"/>
//         </svg>
//       </div>

//       {/* Colorful Creature - Bottom Right */}
//       <div
//         className="absolute"
//         style={{
//           bottom: "20%",
//           right: "8%",
//           opacity: visible ? 1 : 0,
//           transform: visible ? "translateY(0)" : "translateY(30px)",
//           transition: "all 0.6s ease 0.5s",
//         }}
//       >
//         <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
//           {/* Body */}
//           <ellipse cx="50" cy="30" rx="45" ry="25" fill="#FF6B9D"/>
//           {/* Stripes */}
//           <rect x="20" y="20" width="8" height="20" fill="#9D4EDD" rx="4"/>
//           <rect x="36" y="20" width="8" height="20" fill="#9D4EDD" rx="4"/>
//           <rect x="52" y="20" width="8" height="20" fill="#9D4EDD" rx="4"/>
//           <rect x="68" y="20" width="8" height="20" fill="#9D4EDD" rx="4"/>
//           {/* Eyes */}
//           <circle cx="30" cy="25" r="6" fill="white"/>
//           <circle cx="70" cy="25" r="6" fill="white"/>
//           <circle cx="32" cy="25" r="4" fill="#2C3E50"/>
//           <circle cx="72" cy="25" r="4" fill="#2C3E50"/>
//           {/* Legs */}
//           <rect x="15" y="48" width="6" height="10" fill="#FF6B9D" rx="3"/>
//           <rect x="35" y="48" width="6" height="10" fill="#FF6B9D" rx="3"/>
//           <rect x="55" y="48" width="6" height="10" fill="#FF6B9D" rx="3"/>
//           <rect x="75" y="48" width="6" height="10" fill="#FF6B9D" rx="3"/>
//           {/* Antennae */}
//           <line x1="35" y1="8" x2="35" y2="15" stroke="#9D4EDD" strokeWidth="3" strokeLinecap="round"/>
//           <circle cx="35" cy="6" r="4" fill="#FFD93D"/>
//           <line x1="65" y1="8" x2="65" y2="15" stroke="#9D4EDD" strokeWidth="3" strokeLinecap="round"/>
//           <circle cx="65" cy="6" r="4" fill="#FFD93D"/>
//         </svg>
//       </div>

//       {/* Star - Bottom Left */}
//       <div
//         className="absolute text-2xl"
//         style={{
//           bottom: "15%",
//           left: "8%",
//           opacity: visible ? 1 : 0,
//           transform: visible ? "rotate(0deg)" : "rotate(45deg)",
//           transition: "all 0.5s ease 0.6s",
//         }}
//       >
//         🌟
//       </div>

//       {/* Container */}
//       <div className="relative max-w-7xl mx-auto">
//         {/* Left Side - Text Content */}
//         <div
//           className="absolute"
//           style={{
//             top: "80%",
//             left: "5%",
//             transform: "translateY(-50%)",
//             maxWidth: "300px",
//             opacity: visible ? 1 : 0,
//             transition: "all 0.7s ease",
//           }}
//         >
//           <p
//             className="text-gray-700 mb-6 justify-end"
//             style={{
//               fontSize: "16px",
//               lineHeight: "1.6",
//               fontFamily: "'Poppins', sans-serif",
//             }}
//           >
//             At Podsphere, we believe learning is not a race, it's a beautiful journey
//             <br />
            
//           </p>
//           <button
//             className="px-8 py-3 ms-35 rounded-full font-semibold text-white transition-all hover:scale-105 active:scale-95"
//             style={{
//               background: "linear-gradient(135deg, #FF6B9D 0%, #C44569 100%)",
//               boxShadow: "0 4px 15px rgba(255, 107, 157, 0.4)",
//               fontFamily: "'Poppins', sans-serif",
//               fontSize: "14px",
//               letterSpacing: "0.5px",
//             }}
//           >
//             CONTACT US
//           </button>
//         </div>

//         {/* Center - "About" Text & Jumping Girl with Starburst */}
//         <div className="flex items-center justify-center relative" style={{ minHeight: "500px" }}>
//           {/* Starburst Background */}
//           <div
//            className="absolute"
//            style={{
//              top: "50%",
//              left: "50%",
//              transform: "translate(-50%, -50%)",
//              opacity: visible ? 1 : 0,
//              transition: "opacity 0.8s ease 0.2s",
//            }}
//           >
//               <div className="rotate-continuous">

//               <svg xmlns="http://www.w3.org/2000/svg" width="341" height="340" fill="none"><path fill="#fff" d="M128.874 5.161a1 1 0 0 1 1.625-.4l29.922 27.832a1 1 0 0 0 1.454-.098L187.792.899a1 1 0 0 1 1.664.18l18.598 36.387a1 1 0 0 0 1.401.406l35.16-20.826a1 1 0 0 1 1.502.737l5.032 40.554a1 1 0 0 0 1.177.86l40.162-7.544a1 1 0 0 1 1.16 1.206l-9.143 39.83a1 1 0 0 0 .812 1.21l40.322 6.647a1 1 0 0 1 .676 1.53l-22.213 34.301a1 1 0 0 0 .349 1.415l35.616 20.037a1 1 0 0 1 .112 1.67l-32.605 24.634a1 1 0 0 0-.156 1.449l26.615 31.01a1 1 0 0 1-.465 1.607l-39.065 11.998a1 1 0 0 0-.642 1.308l14.404 38.243a1 1 0 0 1-.987 1.351l-40.812-2.087a1 1 0 0 0-1.051 1.01l.456 40.863a1 1 0 0 1-1.39.932l-37.637-15.92a1 1 0 0 0-1.333.589l-13.548 38.555a1 1 0 0 1-1.624.4l-29.922-27.832a1 1 0 0 0-1.455.098l-25.917 31.596a1 1 0 0 1-1.663-.179l-18.599-36.388a1 1 0 0 0-1.4-.405l-35.16 20.826a1 1 0 0 1-1.502-.738l-5.032-40.554a1 1 0 0 0-1.177-.86l-40.163 7.545a1 1 0 0 1-1.16-1.207l9.143-39.83a1 1 0 0 0-.812-1.21l-40.32-6.647a1 1 0 0 1-.677-1.53l22.214-34.301a1 1 0 0 0-.35-1.415L.772 182.373a1 1 0 0 1-.113-1.669l32.606-24.635a1 1 0 0 0 .156-1.449L6.805 123.61a1 1 0 0 1 .465-1.607l39.064-11.998a1 1 0 0 0 .643-1.308L32.573 70.454a1 1 0 0 1 .986-1.35l40.813 2.086a1 1 0 0 0 1.05-1.01l-.455-40.863a1 1 0 0 1 1.39-.932l37.636 15.92a1 1 0 0 0 1.333-.59l13.548-38.554Z"/></svg> 

//               </div>

//           </div>

//           {/* Jumping Girl Image */}
//           <img
//             src='/jumpgirl.png'
//             alt="Jumping girl"
//             className="relative z-10"
//             style={{
//               width: "280px",
//               height: "auto",
//               objectFit: "contain",
//               opacity: visible ? 1 : 0,
//               transform: visible ? "scale(1) translateY(0)" : "scale(0.8) translateY(20px)",
//               transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
//             }}
//           />

//           {/* "About" Text - Top Left of Center */}
//           <h2
//             className="absolute font-black text-gray-800"
//             style={{
//               fontSize: "clamp(60px, 8vw, 90px)",
//               top: "8%",
//               left: "17%",
//               fontFamily: "'Poppins', sans-serif",
//               letterSpacing: "-2px",
//               transform: "rotate(0deg)",
//               textShadow: "3px 3px 0px rgba(0,0,0,0.05)",
//               opacity: visible ? 1 : 0,
//               transition: "all 0.7s ease 0.1s",
//             }}
//           >
//             About
//           </h2>

//           {/* "Jolly" Text - Right Side */}
//           <h2
//   className="absolute font-black text-gray-800 pointer-events-none"
//   style={{
//     fontSize: "clamp(70px, 6vw, 120px)",
//     top: "50%",
//     left: "80%",
//     transform: visible
//       ? "translate(-50%, -50%) rotate(0deg)"
//       : "translate(-50%, -50%) rotate(0deg) scale(0.95)",
//     fontFamily: "'Poppins', sans-serif",
//     letterSpacing: "-3px",
//     textShadow: "4px 4px 0px rgba(0,0,0,0.06)",
//     opacity: visible ? 1 : 0,
//     transition: "all 0.8s ease 0.2s",
//     whiteSpace: "nowrap",
//   }}
// >
//   Podsphere
// </h2>

//         </div>
//       </div>

//       {/* Floating animation for decorative elements */}
//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-10px); }
//         }
//       `}</style>
//     </section>


//   <section className="relative bg-white py-24 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

//         {/* ================= LEFT CONTENT ================= */}
//         <div className="relative z-10">
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#1F3A5F] leading-tight">
//             Where Every Sound <br />
//             Begins a Story
//           </h2>

//           <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
//             <strong>Podsphere</strong> was created with one simple belief — when
//             children experience learning with joy, they grow with confidence.
//           </p>

//           <p className="mt-4 text-gray-600 leading-relaxed max-w-xl">
//             We are building a story-driven phonics universe where children don’t
//             just memorise sounds — they live them, explore them, and understand
//             them. Every lesson is designed to spark curiosity, nurture creativity,
//             and lay strong foundations that support lifelong learning.
//           </p>

//           <p className="mt-4 text-gray-700 font-medium">
//             Because early learning isn’t just preparation. <br />
//             <span className="font-bold text-gray-900">It’s possibility.</span>
//           </p>

//           <button
//   className="
//     mt-6 md:mt-7
//     inline-flex items-center justify-center
//     px-5 py-2.5
//     sm:px-6 sm:py-3
//     rounded-full
//     bg-[#FF7A3D]
//     text-white
//     text-sm sm:text-base
//     font-semibold
//     shadow-md
//     hover:bg-[#ff6a28]
//     transform
//     hover:scale-95
//     transition-all duration-200
//     w-full sm:w-auto
//   "
// >
//   Contact Us
// </button>
//         </div>

//         {/* ================= RIGHT IMAGES ================= */}
//         <div className="relative flex justify-center items-center">

//   {/* ================= MAIN BLOB IMAGE ================= */}
//   <div className="w-[420px] h-[520px] overflow-hidden shadow-2xl 
// rounded-[10%_10%_10%_10%/10%_10%_10%_10%]">
//   <img
//     src="/playroom1.jpg"
//     className="w-full h-full object-cover"
//   />
// </div>

//   {/* ================= TOP RIGHT SMALL IMAGE ================= */}
//   <div
//     className="absolute -top-6 right-[-40px] overflow-hidden shadow-lg rounded-[20%_20%_20%_20%/40%_30%_50%_30%]"
//     style={{
//       width: "170px",
//       height: "130px",
//       // rounded:"[50%_50%_40%_60%/60%_40%_60%_40%]"
//     }}
//   >
//     <img
//       src="/playroom2.jpg"
//       alt="Kids playing"
//       className="w-full h-full object-cover"
//     />
//   </div>

  

//   {/* ================= BOTTOM RIGHT SMALL IMAGE ================= */}
//   <div
//     className="absolute bottom-[-30px] right-[-20px] overflow-hidden shadow-lg"
//     style={{
//       width: "220px",
//       height: "160px",
//       clipPath:
//         "path('M30,10 Q60,0 90,10 L180,5 Q210,15 215,40 L220,90 Q225,130 190,145 L80,155 Q40,160 20,135 L10,90 Q0,50 15,30 Q20,15 30,10 Z')",
//     }}
//   >
//     <img
//       src="/playroom3.jpg"
//       alt="Creative play"
//       className="w-full h-full object-cover"
//     />
//   </div>

// </div>

//       </div>

//       {/* ================= DECORATIVE SVGs ================= */}
//       <svg
//         className="absolute top-24 left-12 w-12 text-purple-400"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path d="M12 2l2.5 6L21 10l-6.5 2L12 18l-2.5-6L3 10l6.5-2z" />
//       </svg>

//       <svg
//         className="absolute bottom-20 left-1/2 w-14 text-blue-400"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
//       </svg>

//       <svg
//         className="absolute top-59 right-24 w-16 text-orange-400"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//       >
//         <path d="M2 22l20-10L2 2v20z" />
//       </svg>
//     </section>


//     <section className="bg-white py-10">
//       <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[180px_1fr] gap-10 items-start">

//         {/* ================= SUN ICON ================= */}
//         <div className="flex justify-center md:justify-start">
//           <div className="relative w-36 h-36">

//             {/* Orbit Circle */}
//             <div className="absolute inset-0 rounded-full bg-[#E6F6F7]" />

//             {/* Rotating Half Orbit */}
//             <div className="absolute inset-0  origin-center">

//               {/* Sun positioned on edge */}
//               <div className="absolute top-0 left-1/3 animate-half-orbit">
//                 <svg
//                   width="110"
//                   height="104"
//                   viewBox="0 0 100 100"
//                   fill="none"
//                 >
//                   {/* Rays */}
//                   {[...Array(12)].map((_, i) => (
//                     <line
//                       key={i}
//                       x1="50"
//                       y1="2"
//                       x2="50"
//                       y2="14"
//                       stroke="#FACC15"
//                       strokeWidth="4"
//                       transform={`rotate(${i * 30} 50 50)`}
//                     />
//                   ))}

//                   {/* Sun Body */}
//                   <circle cx="50" cy="50" r="26" fill="#FDE047" />

//                   {/* Face */}
//                   <circle cx="43" cy="48" r="2.5" fill="#1F2937" />
//                   <circle cx="57" cy="48" r="2.5" fill="#1F2937" />
//                   <path
//                     d="M45 56 Q50 60 55 56"
//                     stroke="#1F2937"
//                     strokeWidth="2"
//                     fill="none"
//                     strokeLinecap="round"
//                   />
//                 </svg>
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* ================= TEXT CONTENT ================= */}
//         <div>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
//             At Podsphere, We Inspire Children <br />
//             With Joyful Play.
//           </h2>

//           <p className="mt-4 text-gray-600 max-w-2xl leading-relaxed">
//             Join us to create a celebration your child will cherish—from themed
//             parties to magical decorations, we proudly bring dreams to life.
//           </p>

//           <div className="mt-5">
//             <h4 className="text-lg font-semibold text-gray-800 mb-2">
//               Our Vision
//             </h4>
//             <p className="text-gray-600 max-w-2xl leading-relaxed">
//               We exist to nurture confident readers by making phonics playful,
//               meaningful, and memorable.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>



//     <section className="py-5 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="relative bg-[#FFF176] rounded-[48px] px-14 py-20 overflow-hidden">

//           {/* Grid Background */}
//           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.35)_1px,transparent_1px)] bg-[size:60px_60px]" />

//           {/* Header */}
//           <div className="relative z-10 text-center max-w-2xl mx-auto">
//             <p className="text-xs font-semibold tracking-widest text-gray-600 mb-3">
//               WHY CHOOSE US?
//             </p>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-[#2D2D2D] leading-tight">
//               Where Creativity Meets <br />
//               Precision Seamlessly
//             </h2>
//           </div>

//           {/* Content */}
//           <div className="relative z-10 mt-16 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

//             {/* LEFT LIST */}
//             <div className="space-y-6">
//               {points.map((item, i) => (
//                 <div key={i} className="flex gap-4">
//                   <div className="w-8 h-6 flex items-center justify-center rounded-full bg-pink-500 text-white text-sm font-bold">
//                     ✓
//                   </div>
//                   <div>
//                     <h4 className="font-bold text-gray-900">
//                       {item.title}
//                     </h4>
//                     <p className="text-sm text-gray-700 leading-relaxed mt-1">
//                       {item.desc}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* RIGHT IMAGE */}
//             <div className="relative flex justify-center">
//               <div className="relative">
//                 <img
//                   src="/playroom4.jpg" 
//                   alt="Child celebration"
//                   className="w-[400px] h-[400px] object-cover"
//                   style={{
//                     clipPath:
//                       "polygon(50% 0%, 61% 8%, 75% 5%, 78% 18%, 95% 25%, 86% 40%, 100% 50%, 86% 60%, 95% 75%, 78% 82%, 75% 95%, 61% 92%, 50% 100%, 39% 92%, 25% 95%, 22% 82%, 5% 75%, 14% 60%, 0% 50%, 14% 40%, 5% 25%, 22% 18%, 25% 5%, 39% 8%)",
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//           {/* */}

//           {/* Cute UFO */}
// <div className="absolute bottom-3 left-1/2 -rotate-8">
// <svg
//   width="180"
//   height="150"
//   viewBox="0 0 80 50"
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
// >
//   <path
//     d="M28 18C28 10 34 5 40 5C46 5 52 10 52 18"
//     fill="#8FE3D6"
//     stroke="#2D2D2D"
//     stroke-width="2"
//     stroke-linecap="round"
//   />

//   <ellipse
//     cx="40"
//     cy="25"
//     rx="28"
//     ry="10"
//     fill="#FFF176"
//     stroke="#2D2D2D"
//     stroke-width="2"
//   />

//   <circle cx="34" cy="25" r="2" fill="#2D2D2D" />
//   <circle cx="46" cy="25" r="2" fill="#2D2D2D" />

//   <line
//     x1="28"
//     y1="35"
//     x2="26"
//     y2="42"
//     stroke="#2D2D2D"
//     stroke-width="2"
//     stroke-linecap="round"
//   />
//   <line
//     x1="52"
//     y1="35"
//     x2="54"
//     y2="42"
//     stroke="#2D2D2D"
//     stroke-width="2"
//     stroke-linecap="round"
//   />
// </svg>

// </div>
//         </div>
//       </div>
//     </section>



//     <section className="bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

//           {/* ================= LEFT COLUMN ================= */}
//           <div>
//             <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4">
//               OUR VALUES
//             </p>

//             <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
//               Discover Fun At <br /> Joily Today
//             </h2>

//             <p className="mt-6 text-gray-600 max-w-md leading-relaxed">
//               Experience the perfect blend of fun and creativity with our
//               personalized party planning services.
//             </p>

//             {/* Card 02 (PILL) */}
//             <div className="mt-10 bg-[#FFDDE4] rounded-[999px] px-14 py-8 max-w-xl">
//             <div className="flex items-start gap-10">

//               {/* Number */}
//               <span className="text-6xl font-extrabold text-[#F4A7B9] leading-none">
//                 02
//               </span>

//               {/* Text Content */}
//               <div>
//                 <h4 className="text-2xl font-bold text-gray-900 mb-3">
//                   Inclusivity
//                 </h4>
//                 <p className="text-gray-700 leading-relaxed">
//                   We design inclusive activities that support diverse needs,
//                   ensuring every child can participate and enjoy the fun.
//                 </p>
//               </div>

//             </div>
//           </div>

//           </div>

//           {/* ================= RIGHT COLUMN ================= */}
//           <div className="relative">

//             {/* Card 01 */}
//             <div className="bg-[#E6F4F2] rounded-[32px] p-10 max-w-lg ml-auto mt-10">
//               <span className="absolute top-15 right-10 text-6xl font-extrabold text-[#9BCDC3]">
//                 01
//               </span>
//               <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                 Creativity
//               </h4>
//               <p className="text-gray-700 leading-relaxed">
//                 We believe in imagination and create parties sparking creativity
//                 and wonder in children.
//               </p>
//             </div>

//             {/* Card 03 */}
//             <div className="bg-[#ECEBFA] rounded-[32px] p-10 max-w-lg ml-auto mt-1 translate-y-16">
//               <span className="absolute top-8 right-10 text-6xl font-extrabold text-[#B8B4E6]">
//                 03
//               </span>
//               <h4 className="text-2xl font-bold text-gray-900 mb-4">
//                 Quality
//               </h4>
//               <p className="text-gray-700 leading-relaxed">
//                 We create exceptional experiences always with quality materials,
//                 engaging activities, and a thoughtful approach.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>
//     </section>




//     <section className="bg-white">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

//           {/* ================= LEFT COLUMN ================= */}
//           <div className="space-y-10">

// {/* Card 04 */}
// <div className="bg-[#FFECC2] rounded-[28px] p-10">
//   <div className="flex gap-10 items-start">

//     {/* Number */}
//     <span className="text-5xl font-extrabold text-[#F5C77A] leading-none">
//       04
//     </span>

//     {/* Content */}
//     <div>
//       <h4 className="text-2xl font-bold text-gray-900 mb-3">
//         Safety
//       </h4>
//       <p className="text-gray-700 leading-relaxed max-w-md">
//         We prioritize the well-being of every child by creating a
//         secure, supervised, and carefully planned environment.
//       </p>
//     </div>

//   </div>
// </div>

// {/* Card 06 */}
// <div className="bg-[#FFD6A0] rounded-[28px] p-10">
//   <div className="flex gap-10 items-start">

//     {/* Number */}
//     <span className="text-5xl font-extrabold text-[#F0B66E] leading-none">
//       06
//     </span>

//     {/* Content */}
//     <div>
//       <h4 className="text-2xl font-bold text-gray-900 mb-3">
//         Great Moments
//       </h4>
//       <p className="text-gray-700 leading-relaxed max-w-md">
//         Our aim is to turn ordinary parties into extraordinary moments
//         that will be cherished for years to come.
//       </p>
//     </div>

//   </div>
// </div>

// </div>


//           {/* ================= RIGHT COLUMN ================= */}
//           <div className="space-y-10">

//             {/* Card 05 (Pill Shape) */}
//             <div className="bg-[#D9F2C7] rounded-[999px] px-14 py-12 relative max-w-xl ml-auto">
//               <span className="absolute top-6 right-20 text-5xl font-extrabold text-[#8ECFA8]">
//                 05
//               </span>
//               <h4 className="text-2xl font-bold text-gray-900 mb-3">
//                 Joy and Fun
//               </h4>
//               <p className="text-gray-700 leading-relaxed max-w-md">
//                 Our goal is to create joyous experiences that leave children
//                 smiling from ear to ear.
//               </p>
//             </div>

//             {/* CTA CARD */}
//             <div className="flex justify-center mt-5">
//             <button
//               className="
//                 bg-[#FF6B6B]
//                 text-white
//                 font-semibold
//                 px-10
//                 py-3
//                 rounded-full
//                 hover:bg-[#ff5252]
//                 transition
//                 shadow-md mt-8              "
//             >
//               Contact Us
//             </button>
//           </div>

//           </div>
//         </div>
//       </div>
//     </section>



//     <section className="bg-[#F2FAFF] py-12 mt-5">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ===== Header ===== */}
//         <div className="text-center max-w-2xl mx-auto mb-16">
//           <p className="text-xs font-semibold tracking-widest text-orange-400 mb-3">
//             OUR CAREGIVERS
//           </p>

//           <h2 className="text-4xl md:text-5xl font-extrabold text-[#163A5F] mb-4">
//             Our Dedicated Caregivers
//           </h2>

//           <p className="text-gray-600 leading-relaxed">
//             At Kiddie Daycare, our highly experienced team of caregivers is
//             passionate about providing the best care for your children.
//           </p>
//         </div>

//         {/* ===== Cards Grid ===== */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {caregivers.map((person, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-[28px] p-6 flex items-center gap-6 shadow-sm"
//             >
//               {/* Image */}
//               <div
//                 className={`w-24 h-24 rounded-2xl flex items-center justify-center ${person.bg}`}
//               >
//                 <img
//                   src={person.img}
//                   alt={person.name}
//                   className="w-20 h-20 object-cover rounded-xl"
//                 />
//               </div>

//               {/* Content */}
//               <div>
//                 <div className="flex items-center gap-3 mb-2">
//                   <h4 className="text-lg font-bold text-[#163A5F]">
//                     {person.name}
//                   </h4>
//                   <span className="text-gray-300">|</span>
//                   <p className="text-sm text-blue-500 font-medium">
//                     {person.role}
//                   </p>
//                 </div>

//                 <p className="text-sm text-gray-600 leading-relaxed max-w-md">
//                   {person.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>

//   </>
//   )
// }







'use client';
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { BiGroup } from "react-icons/bi";
import { FaBookOpen, FaChalkboardTeacher, FaSmile, FaUserFriends, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Aboutus () {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [isSolutions, setIsSolutions] = useState(false);
  const [isSolution, setIsSolution] = useState(false);
  const [toggleState, setToggleState] = useState({});
    const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();
 
  // const items = [
  //   "Practice that builds real reading confidence. Our lessons help children apply phonics skills while reading words, sentences, and stories.",
  //   "Connecting sounds to meaning and imagination. Children learn to read with understanding through stories, pictures, and discussions.",
  //   "A step-by-step structured learning path. Children progress through carefully designed levels that build strong literacy foundations.",
  //   "We build language, imagination, and thinking together. Our activities combine phonics with storytelling, vocabulary, and creativity.",
  // ];
  
  const solutions = [
    {
      text: "Boost reading confidence with guided phonics practice through words, sentences, and engaging stories tailored for children.",
    },
    {
      text: "Bridge sounds and meaning using imagination-driven stories, pictures, and rich discussions that deepen comprehension.",
    },
    {
      text: "Follow a structured, level-by-level path designed to progressively build strong and lasting literacy foundations.",
    },
    {
      text: "Combine phonics with storytelling, vocabulary, and creativity to nurture language, imagination, and critical thinking.",
    },
  ];

  const data = [
    {
      title: "Learning That Feels Like an Adventure",
      image:  "/icons/Learning.PNG",
      content:
        "Our lessons aren't just worksheets they're missions, songs, puzzles, and tiny victories. Kids explore sounds as if they're unlocking magical worlds.",
    },
    {
      title: "Personalized & Group Learning Options",
      image: "/icons/Personalized.PNG",
      content: "Programs designed for individual and group learning experiences.",
    },
    {
      title: "Educators Who Inspire, Not Just Instruct",
      image: "/icons/Educators.PNG",
      content: "Our educators guide children with passion and encouragement.",
    },
    {
      title: "Confidence at Every Step",
      image: "/icons/Confidence.PNG",
      content: "Children gain reading confidence through structured learning.",
    },
    {
      title: "Parents as Partners",
      content: "Parents are involved in the learning journey.",
      image: "/icons/Parents.PNG",
    },
  ];


  const items = [
    {
      problem:
        "Children learn phonics rules but struggle to apply them while reading.",
      solution:
        "Practice that builds real reading confidence. Our lessons help children apply phonics skills while reading words, sentences, and stories.",
    },
    {
      problem:
        "My child memorises words but doesn’t understand them.",
      solution:
        "Connecting sounds to meaning and imagination. Children learn to read with understanding through stories, pictures, and discussions.",
    },
    {
      problem:
        "Parents worry if their child is falling behind in reading.",
      solution:
        "A step-by-step structured learning path. Children progress through carefully designed levels that build strong literacy foundations.",
    },
    {
      problem:
        "Many programs focus only on sounds, not thinking.",
      solution:
        "We build language, imagination, and thinking together. Our activities combine phonics with storytelling, vocabulary, and creativity.",
    },
  ];

  return (
    <>
    {/* (1) Yellow section */}
    <section className="relative w-full">

  {/* Background Image */}
  <div className="w-full h-[350px] sm:h-[450px] md:h-[800px] overflow-hidden rounded-b-4xl -mt-10 md:-mt-30">
  <img
    src="about1.jpeg"
    alt="Kids Reading"
    className=" w-full h-full object-cover rounded-b-4xl  
      /* Mobile */
      object-left
       
      /* Desktop */
      md:object-[top_-100px]
    "
  />
</div>

  {/* Text Content */}
  <div className="
    absolute 

    top-60 left-4 
    -translate-y-1/2 

    md:top-140 md:left-30 md:translate-x-0 md:-translate-y-1/2 

    text-white 
    text-left 
    max-w-xs sm:max-w-md
  ">
    <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold leading-tight">
      About <br /> PodSphere
    </h2>

    <p className="mt-3 text-xs sm:text-sm md:text-lg">
      To make every child proudly say :
      <br />
      <span className="font-semibold">“I CAN READ!”</span>
    </p>

    <button
      onClick={() => setOpen(true)}
      className="relative cursor-pointer px-5 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-6 
      rounded-full text-xs sm:text-sm overflow-hidden 
      border border-gray-400 bg-white text-black shadow-md 
      hover:scale-105 transition"
    >
      <span className="relative z-10">Book a Free Demo</span>
    </button>
  </div>

  {/* Popup (unchanged) */}
  {open && (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm z-50 px-4">

      <div className="bg-white/30 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 relative">

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"
        >
          ✕
        </button>

        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center">
          Book a Free Demo
        </h2>

        <form className="space-y-3 sm:space-y-4">

          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
          <input type="text" placeholder="Child Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
          <input type="number" placeholder="Age of the Child (Years)" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
          <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
          <input type="email" placeholder="Email ID" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
          <input type="text" placeholder="Country" className="w-full p-3 rounded-xl bg-white/80 outline-none" />

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

  </section>

{/* (2) sound to stories section */}
<section className="relative bg-white py-12 md:py-20 overflow-hidden">
      
  {/* Background Curve */}
  <img
  src="/curvelines/Loop-08.png"
  alt="curve"
  className="
    absolute 
    right-[-90px] sm:right-[-150px] md:-right-50 
    top-[92%] sm:top-[55%] md:top-1 
    -translate-y-1/2 md:translate-y-0
    w-[600px] sm:w-[500px] md:w-[800px] 
    opacity-90 md:opacity-100 z-0
    pointer-events-none
  "
/>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center gap-8 md:gap-12">

    {/* Left Content */}
    <div className="text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
        From Sounds to Stories
      </h2>

      <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
        At PodSphere, we believe that reading is the doorway to a child's
        imagination, confidence, and lifelong learning. Our vision is to
        inspire children to proudly say “I can read!” by building strong
        phonics foundations that make language joyful, meaningful, and
        accessible.
      </p>

      <p className="text-sm sm:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed">
        Through thoughtfully designed, story-driven phonics experiences,
        we transform early reading into an adventure. Our programs combine
        playful learning, structured phonics instruction, and interactive
        tools to spark curiosity and nurture confidence.
      </p>

      <p className="text-sm sm:text-base text-gray-600 mb-5 md:mb-6 leading-relaxed">
        PodSphere was founded with a commitment to making early literacy
        engaging, effective, and accessible for children everywhere.
      </p>

      <button
        onClick={() => navigate("/phonicsPods")}
        className="font-bold text-black border-b-2 border-black hover:opacity-70 transition text-sm sm:text-base"
      >
        Explore our Pods
      </button>
    </div>

    {/* Right Image */}
    <div className="relative flex justify-center md:justify-center">
      <img
        src="/about3.jpeg"
        alt="girl reading"
        className="
          rounded-3xl shadow-xl relative z-10 
          w-full max-w-[420px] sm:max-w-[420px] md:w-[520px]
        "
      />
    </div>

  </div>
</section>

{/* (3) Why choose us section */}

<section className="relative bg-red-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase opacity-80 mb-2">
            WHY CHOOSE US?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
          Thoughtfully Designed. Joyfully Delivered.

          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/about2.jpeg"
              alt="kid"
              className="rounded-3xl w-[420px] h-[420px] object-cover"
            />
          </div>

          {/* Accordion */}
          <div className="border border-white/20 rounded-3xl overflow-hidden">

            {data.map((item, index) => (
              <div key={index} className="border-b border-white/20 last:border-none">

                <button
                  onClick={() =>
                    setActive(active === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >

                  <div className="flex items-center gap-4">

                    {/* Icon circle */}
                    {/* <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-900">
                      {item.image}
                    </div> */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />

                    <span className="font-medium">
                      {item.title}
                    </span>
                  </div>

                  <ChevronDown
                    className={`transition-transform ${
                      active === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {active === index && (
                  <div className="px-16 pb-5 text-sm opacity-90">
                    {item.content}
                  </div>
                )}

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>


{/* (4) challenge and solutions section */}
<section className="relative w-full py-20 px-6 bg-gray-200 overflw-hidden">

  {/* IMAGE RIGHT SIDE */}
  <div className="absolute right-20 bottom-0 w-[440px] h-[620px] overflow-hidden hidden lg:block">
  <img
    src="/HappyParent.png"
    alt="mother and child"
    className="w-full h-full object-cover object-top"
  />
</div>

  <div className="max-w-5xl">

    {/* TITLE */}
    <h2 className="text-center text-2xl font-bold text-black mb-6">
      Challenge & Solution
    </h2>

    {/* TOGGLE */}
    <div className="flex items-center justify-center gap-4 mb-10">
     
      <button
        onClick={() => setIsSolution(!isSolutions)}
        className={`w-12 h-7 flex items-center rounded-full p-1 transition ${
          isSolutions ? "bg-green-500" : "bg-red-500"
        }`}
      >
          
        <div
          className={`w-5 h-5  bg-white rounded-full shadow-md transform transition ${
            isSolutions ? "translate-x-7" : ""
          }`}
        />
        <span className="text-white text-md font-bold ms-2">
        ✕
        </span>
      </button>


       <span className="text-gray-400 font-medium">Switch the toggle to find Solution</span>

             <div className="flex items-center bg-lime-400 rounded-full w-14 h-7 pl-2 pr-1">
        <span className="text-white text-lg font-bold">
          ✓
        </span>
        <div className="ml-auto w-5 h-5 bg-white rounded-full shadow"></div>
      </div>
    </div>

    {/* LIST */}
    <div className="space-y-4 max-w-5xl ">

    {items.map((item, i) => {
  const isSolution = toggleState[i];

  return (
    <div
      key={i}
      className="flex items-center gap-6 bg-white rounded-full py-0 pr-5"
    >
      {/* TOGGLE PILL */}
      <div
  onClick={() =>
    setToggleState((prev) => ({
      ...prev,
      [i]: !prev[i],
    }))
  }
  className={`
    relative flex items-center 
    w-[55px] sm:w-[99px]
    h-[28px] sm:h-[45px]
    my-2 ml-2 rounded-full px-1
    cursor-pointer transition
    ${isSolution ? "bg-lime-400 justify-end" : "bg-red-500 justify-start"}
  `}
>

  {/* DESKTOP ICON (outside only) */}
  <span
    className={`
      hidden sm:block
      text-white text-lg font-bold absolute
      ${isSolution ? "left-3" : "right-3"}
    `}
  >
    {isSolution ? "✓" : "✕"}
  </span>

 {/* CIRCLE */}
<div className="w-[18px] h-[18px] sm:w-[32px] sm:h-[32px] bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300">
  
  {/* ICON → only mobile */}
  <span className="sm:hidden text-[10px] font-bold text-black">
    {isSolution ? "✓" : "✕"}
  </span>

</div>
   
</div>

      {/* TEXT */}
      <div className="py-1">
        <p className="text-gray-600 text-sm leading-relaxed">
          {isSolution ? item.solution : item.problem}
        </p>
      </div>
    </div>
  );
})}

</div>

  </div>

</section>
</>
  );
};
