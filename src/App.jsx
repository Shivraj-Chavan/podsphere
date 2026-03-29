import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Hero from "./components/hero";
import Phonicspodcarousel from "./components/Phonicspodcarousel";
import PhilosophySection from "./components/PhilosophySection";
import QuoteSection from "./components/Quotesection";
import TickerBanner from "./components/Tickerbanner";
import ResearchSection from "./components/Researchsection";
import SoundQuizSection from "./components/Soundquizsection";
import TestimonialsSection from "./components/Testimonialssection";
import Aboutus from "./pages/aboutus";
import Contactus from "./pages/contactus";
import Pricing from "./pages/pricing";
import Faqs from "./pages/faqs";
import TermsPrivacy from "./pages/terms";
import FreeMaterials from "./pages/freeMaterials";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PhonicsPods from "./pages/phonicsPods";
import Testimonials from "./components/Testimonals";
import Foundation from "./components/foundation";
import Careers from "./pages/careers";
import ChatBot from "./pages/chatBot";



function Home() {
  return (
    <>
      <Hero />
      <Phonicspodcarousel />
      <Foundation/>
      {/* <PhilosophySection /> */}
      <QuoteSection />
      {/* <SoundQuizSection /> */}
      <div className="w-screen bg-[#e6ded4]">
        <TickerBanner />
      </div>
      {/* <ResearchSection /> */}
      {/* <TestimonialsSection /> */}
      <Testimonials/>
    </>
  );
}

function App() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className="antialiased overflow-x-hidden">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus/>} />
        <Route path="/contactus" element={<Contactus/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/faqs" element={<Faqs/>} />
        <Route path="/terms" element={<TermsPrivacy/>} />
        <Route path="/freeMaterials" element={<FreeMaterials/>} />
        <Route path="/phonicsPods" element={<PhonicsPods/>} />
        <Route path="/careers" element={<Careers/>} />
        <Route path="/chatBot" element={<ChatBot/>} />

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;






// import { useEffect, useRef, useState } from "react";
// import {
//   motion,
//   useInView,
//   useScroll,
//   useTransform,
//   useMotionValue,
// } from "motion/react";
// import Frame3 from "./components/Frame3";

// export default function App() {
//   const containerRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({
//     x: 0,
//     y: 0,
//   });
//   const [scale, setScale] = useState(1);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     const updateScale = () => {
//       const width = window.innerWidth;
//       const designWidth = 1728;

//       // Calculate scale for smaller screens
//       if (width < designWidth) {
//         setScale(width / designWidth);
//       } else {
//         setScale(1);
//       }
//     };

//     updateScale();
//     window.addEventListener("resize", updateScale);

//     const handleMouseMove = (e) => {
//       if (window.innerWidth >= 768) {
//         setMousePosition({ x: e.clientX, y: e.clientY });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", updateScale);
//     };
//   }, []);

//   const isMobile = scale < 0.8;
//   const isTablet = scale >= 0.8 && scale < 1;

//   // Parallax transforms - adjusted for mobile
//   const yParallax1 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, isMobile ? 100 : isTablet ? 200 : 300],
//   );
//   const yParallax2 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, isMobile ? -50 : isTablet ? -100 : -200],
//   );
//   const rotate1 = useTransform(
//     scrollYProgress,
//     [0, 1],
//     [0, 360],
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full min-h-screen overflow-x-hidden"
//       style={{
//         minHeight: isMobile ? `${12000 * scale}px` : "100vh",
//       }}
//     >
//       {/* Animated Background Orbs - Reduced on mobile */}
//       {!isMobile && (
//         <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//           <motion.div
//             style={{ y: yParallax1, rotate: rotate1 }}
//             className="absolute top-[10%] left-[5%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 blur-3xl"
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             style={{ y: yParallax2 }}
//             className="absolute top-[30%] right-[10%] w-[180px] h-[180px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-3xl"
//             animate={{
//               scale: [1, 1.4, 1],
//               opacity: [0.3, 0.6, 0.3],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 1,
//             }}
//           />
//           <motion.div
//             style={{ y: yParallax1 }}
//             className="absolute bottom-[20%] left-[15%] w-[160px] h-[160px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] rounded-full bg-gradient-to-br from-pink-400/20 to-red-400/20 blur-3xl"
//             animate={{
//               scale: [1, 1.5, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 7,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 2,
//             }}
//           />
//         </div>
//       )}

//       {/* Mouse-following floating orbs - Desktop and tablet only */}
//       {!isMobile && (
//         <>
//           <motion.div
//             className="fixed w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-br from-yellow-300/25 to-orange-300/25 blur-2xl pointer-events-none z-0"
//             animate={{
//               x: mousePosition.x * 0.03,
//               y: mousePosition.y * 0.03,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 50,
//               damping: 20,
//             }}
//             style={{ top: "15%", left: "8%" }}
//           />
//           <motion.div
//             className="fixed w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[160px] lg:h-[160px] rounded-full bg-gradient-to-br from-blue-300/25 to-purple-300/25 blur-2xl pointer-events-none z-0"
//             animate={{
//               x: -mousePosition.x * 0.02,
//               y: -mousePosition.y * 0.02,
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 30,
//               damping: 20,
//             }}
//             style={{ top: "45%", right: "12%" }}
//           />
//         </>
//       )}

//       {/* Main Content with Responsive Wrapper */}
//       <div className="relative z-10 flex justify-center w-full">
//         <ResponsiveContainer
//           scale={scale}
//           isMobile={isMobile}
//           scrollYProgress={scrollYProgress}
//         >
//           <Frame3 />
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// // Responsive container component
// function ResponsiveContainer({
//   children,
//   scale,
//   isMobile,
//   scrollYProgress,
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//       className="relative"
//       style={{
//         width: "1728px",
//         transform: `scale(${scale})`,
//         transformOrigin: "top center",
//         margin: "0 auto",
//       }}
//     >
//       {/* Animation Overlays */}
//       <AnimationOverlays
//         isMobile={isMobile}
//         scrollYProgress={scrollYProgress}
//       />

//       {/* Original Frame3 Component */}
//       {children}
//     </motion.div>
//   );
// }

// // All animation overlays
// function AnimationOverlays({ isMobile, scrollYProgress }) {
//   return (
//     <>
//       <HeaderAnimation isMobile={isMobile} />
//       <HeroAnimation isMobile={isMobile} />
//       <TitleAnimation
//         isMobile={isMobile}
//         scrollYProgress={scrollYProgress}
//       />
//       <ShapesAnimation isMobile={isMobile} />
//       <CarouselAnimation isMobile={isMobile} />
//       <ProblemSolutionAnimation isMobile={isMobile} />
//       <PhoneAnimation isMobile={isMobile} />
//       <FooterAnimation isMobile={isMobile} />
//     </>
//   );
// }

// // Header with slide down animation
// function HeaderAnimation({ isMobile }) {
//   return (
//     <motion.div
//       className="absolute top-0 left-0 right-0 h-[144px] z-50 pointer-events-none"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{
//         duration: 0.8,
//         ease: "easeOut",
//         delay: 0.1,
//       }}
//     />
//   );
// }

// // Hero section with animations
// function HeroAnimation({ isMobile }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.15 });

//   return (
//     <div
//       ref={ref}
//       className="absolute inset-0 pointer-events-none"
//     >
//       {/* Hero Text Animation */}
//       <motion.div
//         className="absolute top-[250px] left-[96px] z-20 w-[600px] h-[200px]"
//         initial={{ opacity: 0, x: -50 }}
//         animate={
//           isInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -50 }
//         }
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//           delay: 0.3,
//         }}
//       />

//       {/* CTA Button with Pulse Animation */}
//       <motion.div
//         className="absolute top-[594px] left-[96px] z-20 w-[294px] h-[72px]"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={
//           isInView
//             ? { opacity: 1, scale: 1 }
//             : { opacity: 0, scale: 0.8 }
//         }
//         transition={{
//           duration: 0.6,
//           ease: "easeOut",
//           delay: 0.5,
//         }}
//       >
//         <motion.div
//           className="absolute inset-0 rounded-[8px]"
//           whileHover={{ scale: isMobile ? 1 : 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           animate={
//             !isMobile
//               ? {
//                   boxShadow: [
//                     "0 0 0 0 rgba(254, 148, 39, 0.7)",
//                     "0 0 0 15px rgba(254, 148, 39, 0)",
//                   ],
//                 }
//               : {}
//           }
//           transition={{
//             duration: 1.5,
//             repeat: Infinity,
//             ease: "easeOut",
//           }}
//         />
//       </motion.div>

//       {/* Phone Mockups with Float Animation */}
//       {!isMobile && (
//         <motion.div
//           className="absolute top-[200px] right-[150px] w-[400px] h-[600px]"
//           initial={{ opacity: 0, y: 50, rotate: -10 }}
//           animate={
//             isInView
//               ? { opacity: 1, y: 0, rotate: 0 }
//               : { opacity: 0, y: 50, rotate: -10 }
//           }
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//             delay: 0.6,
//           }}
//         >
//           <motion.div
//             animate={{
//               y: [0, -20, 0],
//               rotate: [0, 3, 0, -3, 0],
//             }}
//             transition={{
//               duration: 4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </motion.div>
//       )}
//     </div>
//   );
// }

// // Title section with scroll parallax
// function TitleAnimation({ scrollYProgress, isMobile }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.3 });
//   const yTitle = useTransform(
//     scrollYProgress,
//     [0.1, 0.3],
//     [isMobile ? 20 : 50, isMobile ? -20 : -50],
//   );

//   return (
//     <div
//       ref={ref}
//       className="absolute inset-0 pointer-events-none"
//     >
//       <motion.div
//         style={!isMobile ? { y: yTitle } : {}}
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={
//           isInView
//             ? { opacity: 1, scale: 1 }
//             : { opacity: 0, scale: 0.95 }
//         }
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="absolute top-[1500px] left-0 right-0 h-[400px]"
//       />
//     </div>
//   );
// }

// // Shapes section with staggered entrance
// function ShapesAnimation({ isMobile }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   const shapes = [
//     { top: 2123, left: 186, delay: 0 },
//     { top: 2389, left: 509, delay: 0.1 },
//     { top: 2648, left: 186, delay: 0.2 },
//     { top: 2114, left: 907, delay: 0.15 },
//     { top: 2610, left: 907, delay: 0.25 },
//     { top: 2375, left: 1279, delay: 0.3 },
//   ];

//   return (
//     <div
//       ref={ref}
//       className="absolute inset-0 pointer-events-none"
//     >
//       {shapes.map((shape, index) => (
//         <motion.div
//           key={index}
//           className="absolute"
//           style={{ top: shape.top, left: shape.left }}
//           initial={{
//             opacity: 0,
//             y: 60,
//             scale: 0.85,
//             rotate: -20,
//           }}
//           animate={
//             isInView
//               ? { opacity: 1, y: 0, scale: 1, rotate: 0 }
//               : { opacity: 0, y: 60, scale: 0.85, rotate: -20 }
//           }
//           transition={{
//             duration: 0.7,
//             ease: [0.25, 0.1, 0.25, 1],
//             delay: shape.delay,
//           }}
//         >
//           <motion.div
//             className="w-[381px] h-[388px]"
//             whileHover={
//               !isMobile
//                 ? {
//                     scale: 1.08,
//                     rotate: 5,
//                     transition: { duration: 0.3 },
//                   }
//                 : {}
//             }
//             animate={
//               !isMobile
//                 ? {
//                     y: [0, -10, 0],
//                   }
//                 : {}
//             }
//             transition={
//               !isMobile
//                 ? {
//                     duration: 3 + index * 0.5,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                     delay: index * 0.2,
//                   }
//                 : {}
//             }
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// // Carousel with slide and fade
// function CarouselAnimation({ isMobile }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (
//     <div
//       ref={ref}
//       className="absolute inset-0 pointer-events-none"
//     >
//       <motion.div
//         className="absolute top-[3426px] left-0 right-0"
//         initial={{ opacity: 0, x: -100 }}
//         animate={
//           isInView
//             ? { opacity: 1, x: 0 }
//             : { opacity: 0, x: -100 }
//         }
//         transition={{ duration: 0.9, ease: "easeOut" }}
//       >
//         {/* Carousel items with stagger */}
//         {[0, 1, 2, 3, 4].map((index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.9, y: 30 }}
//             animate={
//               isInView
//                 ? { opacity: 1, scale: 1, y: 0 }
//                 : { opacity: 0, scale: 0.9, y: 30 }
//             }
//             transition={{
//               duration: 0.6,
//               ease: "easeOut",
//               delay: 0.3 + index * 0.08,
//             }}
//             className="pointer-events-auto"
//             whileHover={
//               !isMobile
//                 ? {
//                     scale: 1.03,
//                     zIndex: 10,
//                     transition: { duration: 0.25 },
//                   }
//                 : {}
//             }
//           />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

// // Problem/Solution with flip animation
// function ProblemSolutionAnimation({ isMobile }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.15 });

//   return (
//     <div
//       ref={ref}
//       className="absolute inset-0 pointer-events-none"
//     >
//       {/* Problem Side (Left) */}
//       <motion.div
//         className="absolute top-[6376px] left-[65px] w-[800px] h-[400px]"
//         initial={{
//           opacity: 0,
//           rotateY: isMobile ? 0 : -90,
//           x: -80,
//         }}
//         animate={
//           isInView
//             ? { opacity: 1, rotateY: 0, x: 0 }
//             : {
//                 opacity: 0,
//                 rotateY: isMobile ? 0 : -90,
//                 x: -80,
//               }
//         }
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         style={{ perspective: isMobile ? "none" : 1000 }}
//       >
//         <motion.div
//           whileHover={
//             !isMobile ? { scale: 1.02, rotateY: 5 } : {}
//           }
//         />
//       </motion.div>

//       {/* Solution Side (Right) */}
//       <motion.div
//         className="absolute top-[6376px] left-[1116px] w-[600px] h-[400px]"
//         initial={{
//           opacity: 0,
//           rotateY: isMobile ? 0 : 90,
//           x: 80,
//         }}
//         animate={
//           isInView
//             ? { opacity: 1, rotateY: 0, x: 0 }
//             : { opacity: 0, rotateY: isMobile ? 0 : 90, x: 80 }
//         }
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//           delay: 0.2,
//         }}
//         style={{ perspective: isMobile ? "none" : 1000 }}
//       >
//         <motion.div
//           whileHover={
//             !isMobile ? { scale: 1.02, rotateY: -5 } : {}
//           }
//         />
//       </motion.div>
//     </div>
//   );
// }

// // Phone display section
// function PhoneAnimation({ isMobile }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.2 });

//   return (
//     <div
//       ref={ref}
//       className="absolute inset-0 pointer-events-none"
//     >
//       <motion.div
//         className="absolute top-[8000px] left-0 right-0"
//         initial={{ opacity: 0, scale: 0.85, y: 80 }}
//         animate={
//           isInView
//             ? { opacity: 1, scale: 1, y: 0 }
//             : { opacity: 0, scale: 0.85, y: 80 }
//         }
//         transition={{
//           duration: 0.9,
//           ease: [0.25, 0.1, 0.25, 1],
//         }}
//       >
//         {/* Phone mockup with float */}
//         <motion.div
//           animate={
//             !isMobile
//               ? {
//                   y: [0, -18, 0],
//                   rotate: [0, 1, 0, -1, 0],
//                 }
//               : {}
//           }
//           transition={
//             !isMobile
//               ? {
//                   duration: 3.5,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }
//               : {}
//           }
//         />
//       </motion.div>
//     </div>
//   );
// }

// // Footer with fade up
// function FooterAnimation({ isMobile }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, amount: 0.1 });

//   return (
//     <div
//       ref={ref}
//       className="absolute inset-0 pointer-events-none"
//     >
//       <motion.div
//         className="absolute top-[12000px] left-0 right-0"
//         initial={{ opacity: 0, y: 50 }}
//         animate={
//           isInView
//             ? { opacity: 1, y: 0 }
//             : { opacity: 0, y: 50 }
//         }
//         transition={{ duration: 0.7, ease: "easeOut" }}
//       >
//         {/* Footer links with stagger */}
//         <div className="flex gap-4">
//           {[0, 1, 2, 3].map((index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={
//                 isInView
//                   ? { opacity: 1, y: 0 }
//                   : { opacity: 0, y: 20 }
//               }
//               transition={{
//                 duration: 0.5,
//                 delay: 0.3 + index * 0.1,
//               }}
//             />
//           ))}
//         </div>

//         {/* Social icons with pop animation */}
//         <div className="flex gap-4 mt-8 absolute top-[12256px] left-[1087px]">
//           {[0, 1, 2].map((index) => (
//             <motion.div
//               key={index}
//               className="w-[30px] h-[30px] pointer-events-auto"
//               initial={{ opacity: 0, scale: 0 }}
//               animate={
//                 isInView
//                   ? { opacity: 1, scale: 1 }
//                   : { opacity: 0, scale: 0 }
//               }
//               transition={{
//                 duration: 0.4,
//                 delay: 0.6 + index * 0.1,
//                 type: "spring",
//                 stiffness: 260,
//                 damping: 20,
//               }}
//               whileHover={
//                 !isMobile
//                   ? {
//                       scale: 1.2,
//                       rotate: 10,
//                       transition: { duration: 0.2 },
//                     }
//                   : {}
//               }
//               whileTap={{ scale: 0.9 }}
//             />
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }







// import Hero from './components/hero';

// function App() {
//   return <Hero/>;
// }

// export default App;
