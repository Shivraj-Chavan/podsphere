// import React, { useEffect, useRef, useState } from 'react';

// const QuoteSection = () => {
//   const [visible, setVisible] = useState(false);
//   const [rocketX, setRocketX] = useState(-120);
//   const sectionRef = useRef(null);
//   const animRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setVisible(true);
//         launchRocket();
//       }
//     }, { threshold: 0.3 });
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => {
//       observer.disconnect();
//       if (animRef.current) cancelAnimationFrame(animRef.current);
//     };
//   }, []);

//   const launchRocket = () => {
//     let x = -120;
//     const animate = () => {
//       x += 3.5;
//       setRocketX(x);
//       if (x < window.innerWidth + 200) {
//         animRef.current = requestAnimationFrame(animate);
//       } else {
//         // Reset and loop
//         setTimeout(launchRocket, 2000);
//       }
//     };
//     animRef.current = requestAnimationFrame(animate);
//   };

//   return (
// <section className="w-full min-h-[480px] bg-[#3b3b3b] py-20 px-8 relative ">
//   <div className="w-full">
//     <p
//       className="text-white leading-relaxed max-w-none"
//       style={{
//         fontFamily: "'Poppins', sans-serif",
//         fontSize: "50px",
//         fontWeight: 500,
//         lineHeight: 1.7,
//       }}
//     >
//       “An interactive learning{" "}
//       <span
//         className="px-3 py-1 rounded-full text-black font-semibold"
//         style={{ backgroundColor: "#FDBA2D" }}
//       >
//         environment
//       </span>{" "}
//       not only make lessons fun, it helps students to flourish. It enhances
//       their{" "}
//       <span style={{ color: "#A3E635", fontWeight: 700 }}>
//         creativity
//       </span>{" "}
//       and{" "}
//       <span style={{ color: "#EC4899", fontWeight: 700 }}>
//         motivates
//       </span>{" "}
//       them to{" "}
//       <span className="font-semibold text-white">
//         communicate and engage
//       </span>{" "}
//       in learning which boosts their growth.”
//     </p>
//   </div>

//   {/* <img
//     src="/rocket.png"
//     alt=""
//     className="absolute -top-18 z-99 right-14 w-36 pointer-events-none"
//   /> */}
// </section>


//   );
// };

// export default QuoteSection;



import React from "react";
import { FaBookOpen, FaHeart, FaPenNib, FaQuoteLeft, FaStar } from "react-icons/fa";

const QuoteSection = () => {
  return (
    <section className="relative w-full bg-[#3b3b3b] py-16 md:py-20 lg:py-24 px-4 sm:px-6 flex justify-center">

       {/* Floating Icons */}
       <img
        src="/icons/robot.png"
        alt="gift"
        className="absolute left-20 -top-10 w-30 opacity-90 animate-floatSlow pointer-events-none"
      />

      <img
        src="/icons/paint.png"
        alt="book"
        className="absolute right-20 bottom-8 w-28 opacity-90 animate-float pointer-events-none"
      />

      <div className="max-w-8xl text-center">
        <p
          className="text-white 
          text-lg 
          sm:text-xl 
          md:text-2xl 
          lg:text-3xl 
          xl:text-[38px] 
          leading-relaxed 
          font-medium"
          style={{ fontFamily: "'Poppins'" }}
        >
          “At Podsphere, we focus on building essential early-learning skills that help children grow with confidence. Through joyful experiences, meaningful activities, and guided exploration, we nurture young minds to think boldly, create freely, and learn with curiosity. Podsphere lays the broad foundation every learner needs.
          At Podsphere, we focus on building essential early-learning skills that help children grow with confidence. Through joyful experiences, meaningful activities, and guided exploration, we nurture young minds to think boldly, create freely, and learn with curiosity. Podsphere lays the broad foundation every learner needs.
          .”
        </p>
      </div>

    </section>
  );
};

export default QuoteSection;