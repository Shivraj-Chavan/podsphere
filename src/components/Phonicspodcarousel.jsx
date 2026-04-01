// import { useState, useCallback, useEffect } from "react";

// // ── 5 pod card images (in carousel order) ──────────────────────────────────
// // Order matches reference: Fruit Pod, Bloom Pod, Seed Pod (center), Sprout Pod, Bud Pod
// const CARDS = [
//   {
//     id: "fruit",
//     src: "/yellowphonics.png",  // Fruit Pod  (orange)
//     label: "Fruit Pod",
//   },
//   {
//     id: "bloom",
//     src: "/orangephonics.png",  // Bloom Pod  (red)
//     label: "Bloom Pod",
//   },
//   {
//     id: "seed",
//     src: "/bluephonics.png",  // Seed Pod   (blue)
//     label: "Seed Pod",
//   },
//   {
//     id: "sprout",
//     src: "/pinkphonics.png",  // Sprout Pod (purple)
//     label: "Sprout Pod",
//   },
//   {
//     id: "bud",
//     src: "/greenphonics.png",  // Bud Pod    (green)
//     label: "Bud Pod",
//   },
// ];

// const TOTAL = CARDS.length;

// /* ── per-slot visual config (5 positions: far-left … far-right) ── */
// //  pos 0 = far left,  pos 2 = center,  pos 4 = far right
// const SLOT = [
//     // far-left
//     { x: "-100%", scale: 0.72, zIndex: 5, opacity: 1, rotate: "-0deg" },
  
//     // left
//     { x: "-76%", scale: 0.82, zIndex: 5, opacity: 1, rotate: "-0deg" },
  
//     // center (Seed Pod)
//     { x: "0%", scale: 1.0, zIndex: 5, opacity: 1, rotate: "0deg" },
  
//     // right
//     { x: "76%", scale: 0.82, zIndex: 2, opacity: 1, rotate: "0deg" },
  
//     // far-right
//     { x: "100%", scale: 0.72, zIndex: 1, opacity: 1, rotate: "0deg" },
//   ];
  

// /* given current activeIndex, return the slot index (0-4) for card i */
// function slotOf(cardIdx, activeIdx) {
//   const diff = ((cardIdx - activeIdx) % TOTAL + TOTAL) % TOTAL;
//   // Map diff 0→center(2), 1→right1(3), 2→right2(4), TOTAL-1→left1(1), TOTAL-2→left2(0)
//   if (diff === 0)           return 2;
//   if (diff === 1)           return 3;
//   if (diff === 2)           return 4;
//   if (diff === TOTAL - 1)   return 1;
//   if (diff === TOTAL - 2)   return 0;
//   return -1; // hidden
// }

// export default function Phonicspodcarousel() {
//   const [active, setActive] = useState(2); // start with Seed Pod (index 2) centered
//   const [dir, setDir] = useState(0);
  

//   const go = useCallback((delta) => {
//     setDir(delta);
//     setActive((prev) => ((prev + delta) % TOTAL + TOTAL) % TOTAL);
//   }, []);

  
//   useEffect(() => {
//     const autoScroll = setInterval(() => {
//       go(1);
//     }, 2000); 
  
//     return () => clearInterval(autoScroll);
//   }, [go]);


//   return (
//     <section style={{
//       background: "#ffffff",
//       minHeight: "100vh",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       justifyContent: "center",
//       // padding: "48px 16px 64px",
//       fontFamily: " 'Poppins'",
//       position: "relative",
//     }}>
//       <img src="./Line_11.png" alt="" className="absolute right-0 top-50 z-50 h-[800px]" />
//       <img src="./Line.png" alt="" className="absolute left-0 z-50 h-[850px]" />
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700;900&display=swap');
//         .pod-card {
//           will-change: transform, opacity;
//           cursor: pointer;
//           user-select: none;
//         }
//         .pod-card img {
//           display: block;
//           width: 100%;
//           height: 100%;
//           border-radius: 28px;
//         }
//         .nav-btn {
//           width: 40px; height: 40px;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer;
//           font-size: 18px;
//           transition: box-shadow 0.2s, border-color 0.2s;
//           flex-shrink: 0;
//         }
//         .nav-btn:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.16); border-color: #3B82F6;}
//         .dot { transition: all 0.3s ease; cursor: pointer; border-radius: 99px; }
//       `}</style>

//       {/* ── TITLE ── */}
//       <h1 style={{
//         fontSize: "clamp(26px, 4vw, 46px)",
//         fontWeight: 900,
//         letterSpacing: "-0.5px",      
//         margin: "0 0 48px",
//         textAlign: "center",
//         lineHeight: 1.2,
//         marginTop: "25px",
//       }}>
//         <span style={{ color: "#CF455E" }}>Explore Our </span>
//         <span style={{ color: "#1f2937" }}>Phonics Pods</span>
//       </h1>

//       {/* ── CAROUSEL TRACK ── */}
//       <div style={{
//         position: "relative",
//         width: "100%",
//         maxWidth:" 2000px",
//         margin: "0 auto",
//         height: 500,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}>
//         {CARDS.map((card, i) => {
//           const slot = slotOf(i, active);
//           if (slot === -1) return null;
//           const s = SLOT[slot];
//           const isCenter = slot === 2;
//           return (
//             <div
//               key={card.id} 
//               className="pod-card"
//               onClick={() => !isCenter && setActive(i)}
//               style={{
//                 position: "absolute",
//                 width: isCenter ? 280 : 260,
//                 height: isCenter ? 500 : 500,
//                 borderRadius: 28,
//                 overflow: "hidden",
//                 transform: `translateX(${s.x}) scale(${s.scale}) rotate(${s.rotate})`,
//                 zIndex: s.zIndex,
//                 opacity: s.opacity,
//                 transition: "all 0.5s cubic-bezier(.21,1.02,.73,1)",
//               }}              
//             >
//               <img src={card.src} alt={card.label} draggable={false} />
//             </div>
//           );
//         })}
//       </div>

//       {/* ── NAVIGATION ROW ── */}
//       <div style={{
//         display: "flex",
//         alignItems: "center",
//         gap: 20,
//         marginTop: 32,
//       }}>
//         {/* Prev button */}
//         <button className="nav-btn" onClick={() => go(-1)} aria-label="Previous">
//           ←
//         </button>

//         {/* Dots */}
//         <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
//           {CARDS.map((_, i) => (
//             <div
//               key={i}
//               className="dot"
//               onClick={() => setActive(i)}
//               style={{
//                 width: i === active ? 28 : 10,
//                 height: 10,
//                 background: i === active ? "#3B82F6" : "#d1d5db",
//               }}
//             />
//           ))}
//         </div>

//         {/* Next button */}
//         <button className="nav-btn" onClick={() => go(1)} aria-label="Next">
//           →
//         </button>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";

const pods = [
  {
    title: "Seed Pod",
    image: "/pods/Girl.png",
    descTitle: "Where sounds turn into first words",
    desc: "Builds phonics awareness and confidence through sounds, letters, and simple reading.",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Sprout Pod",
    image: "/pods/sproudpodpink.png",
    descTitle: "Growing readers, one word at a time",
    desc: "Strengthens blending, spelling, and sentence reading through guided practice.",
    color: "from-pink-500 to-pink-700",
  },
  {
    title: "Bud Pod",
    image: "/pods/girlblue.png",
    descTitle: "Decoding words with confidence",
    desc: "Introduces phonics rules and patterns to help children read independently.",
    color: "from-green-500 to-green-700",
  },
  {
    title: "Bloom Pod",
    image: "/pods/bloompodred.png",
    descTitle: "Fluency begins to blossom",
    desc: "Advances reading skills with complex words, rules, and deeper comprehension.",
    color: "from-red-500 to-red-700",
  },
  {
    title: "Fruit Pod",
    image: "/pods/fruitpodorange.png",
    descTitle: "From reader to master",
    desc: "A focused crash course that refines fluency, accuracy, and complete phonics mastery.",
    color: "from-orange-400 to-orange-600",
  },
];

export default function Pods() {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-hidden bg-white py-10 px-4 pb-20">
      
      {/* Background Shapes */}
      {/* RIGHT  */}
      <video
  src="/video/loop2.webm"
  autoPlay
  loop
  muted
  playsInline
  className="
    absolute pointer-events-none z-0 rotate-[-15deg] opacity-95
    
    /* Mobile */
    w-[650px] bottom-[-60px] right-[-80px] scale-[1.2]
    
    /* Desktop (unchanged) */
    sm:w-[700px] sm:top-[320px] sm:bottom-auto sm:right-[-220px] sm:scale-100
  "
/>

  
{/* LEFT */}
<video
  src="/video/loop3.webm"
  autoPlay
  loop
  muted
  playsInline
  className="
   hidden sm:block  absolute pointer-events-none opacity-90 rotate-[-5deg]
    
 /* Mobile */
 w-[850px] top-[-2px] left-[-120px] scale-[1.3]
    
    /* Desktop */
  sm:w-[650px] sm:top-[-50px] sm:left-[-150px] sm:scale-[1.5]
  "
/>

      {/* Heading */}
      <h2 className="text-center text-5xl font-bold mb-15">
        Explore Our <span className="text-pink-600">Phonics Pods</span>
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid gap-6
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-5">

        {pods.map((pod, index) => (
          <div
            key={index}
            className={`rounded-xl text-white p-5 flex flex-col items-center text-center z-2 
            bg-gradient-to-b ${pod.color}
            transform transition duration-300 hover:scale-105 shadow-lg`}
          >

            {/* Title */}
            <h2 className="text-2xl font-bold mb-3">
              {pod.title}
            </h2>

            {/* Image */}
            <div className="w-full mb-4">
              <img
                src={pod.image}
                alt={pod.title}
                className="w-full h-48 sm:h-32 object-cover rounded-lg"
              />
            </div>

            {/* Text */}
            <h4 className="font-bold text-md mb-2 leading-tight">
              {pod.descTitle}
            </h4>

            <p className="text-sm opacity-90 mb-4">
              {pod.desc}
            </p>

            {/* Button */}
            <button
  onClick={() => navigate("/phonicsPods")}
  className="bg-white text-black cursor-pointer text-xs font-bold py-2 px-6 rounded-full mt-auto hover:bg-gray-100"
>
  EXPLORE
</button>

          </div>
        ))}
      </div>
    </div>
  );
}