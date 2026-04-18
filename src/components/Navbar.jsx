// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//   const [openSignup, setOpenSignup] = useState(false);
   

//   const isHome = location.pathname === "/";

//   const menuItems = [
//     // { label: "Home", path: "/" },
//     { label: "About Podsphere", path: "/aboutus" },
//     { label: "Phonics Pods", path: "/phonicsPods" },
//     { label: "Free Materials", path: "/freeMaterials" },
//     { label: "FAQ's", path: "/faqs" },
//     { label: "Contact", path: "/contactus" },
//     { label: "Careers", path: "/careers" },
//     // { label: "Pricing", path: "/pricing" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (isHome) {
//         setScrolled(window.scrollY > 80);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHome]);

//   const navbarBg = isHome
//     ? scrolled
//       ? "bg-white shadow-lg"
//       : "bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
//     : "bg-white shadow-md";


//     const signupRef = useRef(null);

// useEffect(() => {
//   const close = (e) => !signupRef.current?.contains(e.target) && setOpenSignup(false);
//   document.addEventListener("mousedown", close);
//   return () => document.removeEventListener("mousedown", close);
// }, []);

//   return (
//     <>
//       {/* Navbar */}
//       <div
//         className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50
//         flex items-center justify-between px-4 md:px-8 py-3 rounded-full
//         transition-all duration-300 ${navbarBg}`}
//       >
//         {/* Logo */}
//         <Link to="/" className="flex items-center">
//           <img src="/logo2.png" alt="PodSphere Logo" className="w-[120px] md:w-[140px]" />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-6 text-sm">
//           {menuItems.map((item) => (
//             <li key={item.label}>
//               <Link
//                 to={item.path}
//                 className={`transition-colors duration-300 ${
//                   isActive(item.path)
//                     ? "font-bold text-blue-600"
//                     : isHome && !scrolled
//                     ? "text-white hover:text-yellow-300"
//                     : "text-gray-800 hover:text-blue-500"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex gap-3">
//         <button
//           onClick={() => setOpen(true)}
//           className={`relative cursor-pointer px-4 py-2 rounded-full text-sm overflow-hidden 
//           border border-gray-400 animated-border
//           transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05]
//           ${isHome && !scrolled ? "text-white" : ""}`}
//         >
//           <span className="relative z-10">Book a Free Demo</span>
//         </button>
//           {/* Popup */}
//       {open && (
//        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50 mt-95">

//        <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl w-[420px] p-8 relative">
//             {/* Close Button */}
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"
//             >
//               ✕
//             </button>

//             <h2 className="text-2xl font-bold mb-6 text-center">
//               Book a Free Demo
//             </h2>

//             <form className="space-y-4">

//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-3 rounded-xl bg-white/80 outline-none"
//               />

//               <input
//                 type="text"
//                 placeholder="Child Name"
//                 className="w-full p-3 rounded-xl bg-white/80 outline-none"
//               />

//               <input
//                 type="number"
//                 placeholder="Age of the Child (Years)"
//                 className="w-full p-3 rounded-xl bg-white/80 outline-none"
//               />

//               <input
//                 type="tel"
//                 placeholder="Phone / WhatsApp Number"
//                 className="w-full p-3 rounded-xl bg-white/80 outline-none"
//               />

//               <input
//                 type="email"
//                 placeholder="Email ID"
//                 className="w-full p-3 rounded-xl bg-white/80 outline-none"
//               />

//               <input
//                 type="text"
//                 placeholder="Country"
//                 className="w-full p-3 rounded-xl bg-white/80 outline-none"
//               />

//               <button
//                 type="submit"
//                 className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
//               >
//                 Submit
//               </button>

//             </form>
//           </div>
//         </div>
//       )}

// <div className="relative" ref={signupRef}>
//   <button
//     onClick={() => setOpenSignup(!openSignup)}
//     className={`cursor-pointer border border-gray-400 px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05] ${
//       isHome && !scrolled ? "text-white border-white" : "hover:bg-gray-100"
//     }`}
//   >
//     Login ▾
//   </button>

//   {openSignup && (
//     <div style={{
//       position: "absolute", right: 0, top: "calc(100% + 8px)",
//       width: 190, background: "#fff", borderRadius: 14,
//       border: "1px solid #f0f0f0", boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//       overflow: "hidden", animation: "sdIn 0.18s cubic-bezier(.16,1,.3,1)"
//     }}>
//       <style>{`@keyframes sdIn{from{opacity:0;transform:scale(.94) translateY(-4px)}to{opacity:1;transform:none}}`}</style>

//       <div style={{ padding: "7px 12px 5px", fontSize: 10, color: "#94a3b8", letterSpacing: "0.07em", textTransform: "uppercase", borderBottom: "1px solid #f5f5f5" }}>
//         I'm signing up as…
//       </div>

//       {[
//         { emoji: "🎓", label: "Signup", sub: "", color: "#f97316" },
//         { emoji: "🏡", label: "Parent Login", sub: "Track & support", color: "#8b5cf6" },
//       ].map(({ emoji, label, sub, color }) => (
//         <div key={label}
//           onClick={() => setOpenSignup(false)}
//           onMouseEnter={e => e.currentTarget.style.background = "#fafafa"}
//           onMouseLeave={e => e.currentTarget.style.background = "transparent"}
//           style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", cursor: "pointer", borderBottom: "1px solid #f9f9f9", transition: "background 0.12s" }}
//         >
//           <div style={{ width: 32, height: 32, borderRadius: 9, background: color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
//             {emoji}
//           </div>
//           <div>
//             <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{label}</div>
//             <div style={{ fontSize: 11, color: "#94a3b8" }}>{sub}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </div>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className={`lg:hidden text-2xl ${
//             isHome && !scrolled ? "text-white" : "text-black"
//           }`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//     <div className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-5 z-40 lg:hidden">
//           <ul className="flex flex-col gap-0 text-center">
//             {menuItems.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={`block py-2 ${
//                     isActive(item.path)
//                       ? "font-bold text-blue-600"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>

//           {/* Mobile Buttons */}
//           <div className="mt-5 relative flex gap-5">

//           <button
//     onClick={() => setOpen(true)}
//     className={`cursor-pointer border border-gray-400 px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05] ${
//       isHome && !scrolled ? "text-white border-white" : ""
//     }`}
//   >
//     Book a Free Demo
//   </button>

//   <button
//     onClick={() => setOpenSignup(!openSignup)}
//     className="cursor-pointer border border-gray-400 px-4 py-2 rounded-full text-sm flex items-center gap-2"
//   >
//     Login ▾
//   </button>

//           {openSignup && (
//             <div className="mt-3 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">

//               <Link
//                 to="/signup/student"
//                 onClick={() => {
//                   setMenuOpen(false);
//                   setOpenSignup(false);
//                 }}
//                 className="block px-4 py-3 text-sm text-center hover:bg-gray-100"
//               >
//                 🎓 Signup 
//               </Link>

//               <Link
//                 to="/signup/parent"
//                 onClick={() => {
//                   setMenuOpen(false);
//                   setOpenSignup(false);
//                 }}
//                 className="block px-4 py-3 text-sm text-center hover:bg-gray-100"
//               >
//                 👨‍👩‍👧 Parent Login
//               </Link>

//             </div>
//           )}

//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;










// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { HiMenu, HiX } from "react-icons/hi";
// import { ArrowRight, Calendar, LogIn, Phone, PlayCircle, Sparkles, Star, User, UserCircle, Video, Zap } from "lucide-react";
// import SignInModal from "./signinPopup";
// import { FaWhatsapp } from "react-icons/fa";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();
//   const [open, setOpen] = useState(false);
//   const [openSignup, setOpenSignup] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);
//   const [role, setRole] = useState(null);

//   const isHome = location.pathname === "/";

//   const menuItems = [
//     { label: "About Podsphere", path: "/aboutus" },
//     { label: "Phonics Pods", path: "/phonicsPods" },
//     { label: "Free Materials", path: "/freeMaterials" },
//     { label: "FAQ's", path: "/faqs" },
//     { label: "Contact", path: "/contactus" },
//     { label: "Careers", path: "/careers" },
//     { label: "ChatBot", path: "/chatBot" },
//   ];

//   const isActive = (path) => location.pathname === path;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (isHome) {
//         setScrolled(window.scrollY > 80);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isHome]);

//   const navbarBg = isHome
//     ? scrolled
//       ? "bg-white shadow-lg"
//       : "bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
//     : "bg-white shadow-md";

//   const signupRef = useRef(null);

//   // useEffect(() => {
//   //   const close = (e) =>
//   //     !signupRef.current?.contains(e.target) && setOpenSignup(false);
//   //   document.addEventListener("mousedown", close);
//   //   return () => document.removeEventListener("mousedown", close);
//   // }, []);

//   useEffect(() => {
//     const close = (e) => {
//       if (!signupRef.current) return;
  
//       // Only close dropdown, NOT modal
//       if (!signupRef.current.contains(e.target)) {
//         setOpenSignup(false);
//       }
//     };
  
//     document.addEventListener("mousedown", close);
//     return () => document.removeEventListener("mousedown", close);
//   }, []);

//   return (
//     <>
//       {/* ── DESKTOP & MOBILE TOP BAR ── */}
//       <div
//         className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50
//         flex items-center justify-between px-4 md:px-8 py-3 rounded-full
//         transition-all duration-300 ${navbarBg}`}
//       >
//         {/* ── MOBILE: Hamburger (left) ── */}
//         <button
//           className={`lg:hidden text-2xl z-10 ${
//             isHome && !scrolled ? "text-white" : "text-black"
//           }`}
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </button>

//         <Link
//           to="/"
//           className="flex items-center lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto"
//         >
//           <img
//             src="/logo2.png"
//             alt="PodSphere Logo"
//             className="w-[120px] md:w-[140px]"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex gap-6 text-sm">
//           {menuItems.map((item) => (
//             <li key={item.label}>
//               <Link
//                 to={item.path}
//                 className={`transition-colors duration-300 ${
//                   isActive(item.path)
//                     ? "font-bold text-blue-600"
//                     : isHome && !scrolled
//                     ? "text-white hover:text-yellow-300"
//                     : "text-gray-800 hover:text-blue-500"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Desktop Buttons */}
//         <div className="hidden md:flex gap-3">
//           <button
//             onClick={() => setOpen(true)}
//             className={`relative cursor-pointer px-4 py-2 rounded-full text-sm overflow-hidden 
//             border border-gray-400 animated-border
//             transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05]
//             ${isHome && !scrolled ? "text-white" : ""}`}
//           >
//             <span className="relative z-10">Book a Free Demo</span>
//           </button>

//           {/* Desktop Login dropdown */}
//           <div className="relative" ref={signupRef}>
//             <button
//               onClick={() => setOpenSignup(!openSignup)}
//               className={`cursor-pointer border border-gray-400 px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05] ${
//                 isHome && !scrolled
//                   ? "text-white border-white"
//                   : "hover:bg-gray-100"
//               }`}
//             >
//               Login ▾
//             </button>

//             {openSignup && (
//               <div
//                 style={{
//                   position: "absolute",
//                   right: 0,
//                   top: "calc(100% + 8px)",
//                   width: 190,
//                   background: "#fff",
//                   borderRadius: 14,
//                   border: "1px solid #f0f0f0",
//                   boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//                   overflow: "hidden",
//                   animation: "sdIn 0.18s cubic-bezier(.16,1,.3,1)",
//                 }}
//               >
//                 <style>{`@keyframes sdIn{from{opacity:0;transform:scale(.94) translateY(-4px)}to{opacity:1;transform:none}}`}</style>
//                 <div
//                   style={{
//                     padding: "7px 12px 5px",
//                     fontSize: 10,
//                     color: "#94a3b8",
//                     letterSpacing: "0.07em",
//                     textTransform: "uppercase",
//                     borderBottom: "1px solid #f5f5f5",
//                   }}
//                 >
//                   I'm signing up as…
//                 </div>
//                 {[
//                   { emoji: "🎓", label: "Signup", sub: "", color: "#f97316" },
//                   {
//                     emoji: "🏡",
//                     label: "Parent Login",
//                     sub: "Track & support",
//                     color: "#8b5cf6",
//                   },
//                   {
//                     emoji: "🏡",
//                     label: "Teacher Login",
//                     sub: "Track & support",
//                     color: "#8b5cf6",
//                   },
//                 ].map(({ emoji, label, sub, color }) => (
//                   <div
//                     key={label}
//                     onMouseDown={(e) => {
//                       e.stopPropagation(); 
//                       e.preventDefault();                      
//                       setRole(label);
//                       setOpenSignup(false);                   
//                       setTimeout(() => {
//                         setShowSignIn(true);
//                       }, 0);
//                     }}
//                     onMouseEnter={(e) =>
//                       (e.currentTarget.style.background = "#fafafa")
//                     }
//                     onMouseLeave={(e) =>
//                       (e.currentTarget.style.background = "transparent")
//                     }
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: 10,
//                       padding: "10px 12px",
//                       cursor: "pointer",
//                       borderBottom: "1px solid #f9f9f9",
//                       transition: "background 0.12s",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: 32,
//                         height: 32,
//                         borderRadius: 9,
//                         background: color + "18",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         fontSize: 15,
//                       }}
//                     >
//                       {emoji}
//                     </div>
//                     <div>
//                       <div
//                         style={{
//                           fontSize: 13,
//                           fontWeight: 700,
//                           color: "#0f172a",
//                         }}
//                       >
//                         {label}
//                       </div>
//                       <div style={{ fontSize: 11, color: "#94a3b8" }}>{sub}</div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ── MOBILE: Login button (right) ── */}
//         <div className="lg:hidden relative" ref={signupRef}>
//         <button
//         onClick={() => setOpenSignup(!openSignup)}
//         className={`cursor-pointer px-3 py-1.5 rounded-full text-sm flex items-center gap-1 ${
//           isHome && !scrolled
//             ? "text-white"
//             : "text-gray-800"
//         }`}
//       >
//         <UserCircle size={20} className="text-3xl" />
//         {/* <span className="text-xs">▾</span> */}
//       </button>

//           {openSignup && (
//             <div
//               style={{
//                 position: "absolute",
//                 right: 0,
//                 top: "calc(100% + 8px)",
//                 width: 190,
//                 background: "#fff",
//                 borderRadius: 14,
//                 border: "1px solid #f0f0f0",
//                 boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
//                 overflow: "hidden",
//                 animation: "sdIn 0.18s cubic-bezier(.16,1,.3,1)",
//                 zIndex: 60,
//               }}
//             >
//               <style>{`@keyframes sdIn{from{opacity:0;transform:scale(.94) translateY(-4px)}to{opacity:1;transform:none}}`}</style>
//               <div
//                 style={{
//                   padding: "7px 12px 5px",
//                   fontSize: 10,
//                   color: "#94a3b8",
//                   letterSpacing: "0.07em",
//                   textTransform: "uppercase",
//                   borderBottom: "1px solid #f5f5f5",
//                 }}
//               >
//                 I'm signing up as…
//               </div>
//               {[
//                 { emoji: "🎓", label: "Signup", sub: "", color: "#f97316" },
//                 { emoji: "🏡", label: "Parent Login", sub: "Track & support", color: "#8b5cf6"},
//                 {
//                   emoji: "🏡",
//                   label: "Teacher Login",
//                   sub: "Track & support",
//                   color: "#8b5cf6",
//                 },
//               ].map(({ emoji, label, sub, color }) => (
//                 <Link
//                   key={label}
//                   onClick={() => {
//                     setOpenSignup(false);
//                     setRole(label);   
//                     setShowSignIn(true);
//                   }}
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: 10,
//                     padding: "10px 12px",
//                     cursor: "pointer",
//                     borderBottom: "1px solid #f9f9f9",
//                     textDecoration: "none",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: 32,
//                       height: 32,
//                       borderRadius: 9,
//                       background: color + "18",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: 15,
//                     }}
//                   >
//                     {emoji}
//                   </div>
//                   <div>
//                     <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{label}</div>
//                     <div style={{ fontSize: 11, color: "#94a3b8" }}>{sub}</div>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* ── MOBILE: Slide-down Dropdown Menu ── */}
//       {menuOpen && (
//         <div className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-5 z-40 lg:hidden">
//           <ul className="flex flex-col gap-0 text-center">
//             {menuItems.map((item) => (
//               <li key={item.label}>
//                 <Link
//                   to={item.path}
//                   onClick={() => setMenuOpen(false)}
//                   className={`block py-2 ${
//                     isActive(item.path)
//                       ? "font-bold text-blue-600"
//                       : "text-gray-700"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {/* ── MOBILE: Fixed Bottom "Book a Free Demo" Bar ── */}
//       {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-md bg-[#F5C518] py-4 flex items-center justify-center shadow-[0_-2px_12px_rgba(0,0,0,0.15)]"> */}
//         <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 
//         backdrop-blur-2xl bg-yellow-300/20 
//         py-4 flex items-center justify-center 
//         shadow-[0_-4px_20px_rgba(245,197,24,0.25)] 
//         border-t border-yellow-200/20">

//           {/* WhatsApp Icon */}
//           <a
//             href="https://wa.me/919892409029"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="fixed bottom-10 right-5 z-[999] 
//             bg-green-500 p-2 rounded-full 
//             shadow-[0_8px_25px_rgba(0,0,0,0.3)] 
//             hover:scale-110 active:scale-95 
//             transition-all duration-300 animate-[bounce_1s_infinite]"
//           >
//             <FaWhatsapp className="text-white text-2xl" />
//           </a>

//           <button
//             onClick={() => setOpen(true)}
//             className="font-bold text-black text-base tracking-wide uppercase cursor-pointer"
//           >
//             Book a Free Demo
//           </button>
//         </div>


//         {/* ── MOBILE: Fixed Bottom Bar ── */}

// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0f0f1a] border-t border-white/5 py-2.5 px-5 flex items-center gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"> */}

// {/* OPTION 1 */}
// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 
// bg-[#0f0f1a]/70 backdrop-blur-md 
// border-t border-white/10 
// py-2.5 px-5 flex items-center gap-3 
// shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"> */}


//  {/* WhatsApp button */}
//   {/* <a
//     href="https://wa.me/919892409029"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0"
//   >
//     <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
//       <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.116 1.528 5.843L.057 23.5l5.797-1.522A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.574-.49-5.065-1.345L2.5 21.8l1.17-4.32A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
//     </svg>
//   </a>

//   <button
//     onClick={() => setOpen(true)}
//     className="flex-1 bg-[#f5c518] text-[#0f0f1a] font-bold text-sm rounded-full py-3 tracking-wide uppercase cursor-pointer"
//   >
//     Book a Free Demo
//   </button>
// </div> */}

// {/* OPTION 2 */}
// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 
// bg-white bg-gradient-to-r from-[#ff6b6b] to-[#ee5a24]
// border-t bg-white/20 border border-white/30 
// py-2.5 px-5 flex items-center gap-3 
// shadow-[0_-4px_20px_rgba(0,0,0,0.2)]"> */}



// {/* OPTION 3*/}
// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 to-slate-800 py-3.5 px-4 flex items-center justify-between shadow-[0_-4px_16px_rgba(0,0,0,0.3)] border-t border-slate-700">
//   <div className="flex items-center gap-2">
//     <FaWhatsapp className="w-5 h-5 text-white" />
//     <span className="text-white text-sm font-medium">Chat with Us !</span>
//   </div>
//   <button
//     onClick={() => setOpen(true)}
//     className="bg-white text-slate-900 px-6 py-2.5 rounded-full font-semibold text-sm tracking-wide hover:bg-slate-100 transition-all shadow-lg"
//   >
//     Book Now
//   </button>
// </div> */}

// {/* OPTION 3 */}
// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 py-3.5 px-4 flex items-center justify-between shadow-[0_-4px_24px_rgba(0,0,0,0.1)] border-t border-white/20">
//   <div className="flex items-center gap-2">
//     <FaWhatsapp className="w-6 h-6 text-green-700" />
//     <span className="text-slate-800 text-sm font-semibold">Chat with US </span>
//   </div>
//   <button
//     onClick={() => setOpen(true)}
//     className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-xl transition-shadow"
//   >
//     Book Now
//   </button>
// </div> */}


// {/* OPTION 4 */}
// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-4px_24px_rgba(0,0,0,0.15)]">
//   <div className="flex-1 bg-gray-900 py-4 px-4 flex items-center gap-2.5">
//     <FaWhatsapp className="w-5 h-5 text-white" />
//     <span className="text-white text-sm font-medium">Chat with Us !</span>
//   </div>
//   <button
//     onClick={() => setOpen(true)}
//     className="bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 font-bold text-sm hover:from-pink-700 hover:to-rose-700 transition-colors"
//   >
//     Book Live
//   </button>
// </div> */}

// {/* OPTION 5*/}
// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_24px_rgba(0,0,0,0.15)] border-t border-gray-200">
//   <div className="px-4 py-3 flex items-center justify-between">
//     <div className="flex-1">
//       <div className="flex items-center gap-2 mb-1">
//         <FaWhatsapp className="w-5 h-5 text-indigo-600" />
//         <span className="text-gray-900 text-sm font-bold">Chat with Us !</span>
//       </div>
//       <p className="text-gray-500 text-xs ms-6">24/7 customer support available</p>
//     </div>
//     <button
//       onClick={() => setOpen(true)}
//       className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm flex items-center gap-1.5 hover:bg-indigo-700 transition-colors shadow-lg"
//     >
//       <span>Book</span>
//       <ArrowRight className="w-4 h-4" />
//     </button>
//   </div>
// </div> */}

// {/* OPTION 6 */}
// {/* <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-4 px-5 flex items-center justify-between shadow-[0_-6px_24px_rgba(0,0,0,0.5)] border-t border-gray-700">
//   <div className="flex items-center gap-2.5">
//     <FaWhatsapp className="w-5 h-5 text-yellow-400" />
//     <span className="text-gray-100 text-sm font-medium">24/7 Support</span>
//   </div>
//   <button
//     onClick={() => setOpen(true)}
//     className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 px-7 py-2.5 rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] transition-all"
//   >
//     Book Now
//   </button>
// </div> */}




//       {/* ── SHARED: Demo Popup Form ── */}
//       {open && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-[100]">
//           <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl w-[420px] max-w-[92vw] p-8 relative mx-4">
//             <button
//               onClick={() => setOpen(false)}
//               className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer"
//             >
//               ✕
//             </button>
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               Book a Free Demo
//             </h2>
//             <form className="space-y-4">
//               <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
//               <input type="text" placeholder="Child Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
//               <input type="number" placeholder="Age of the Child (Years)" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
//               <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
//               <input type="email" placeholder="Email ID" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
//               <input type="text" placeholder="Country" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
//               <button type="submit" className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
//                 Submit
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//       <SignInModal
//       isOpen={showSignIn}
//       onClose={() => setShowSignIn(false)}
//       role={role}
//       onSignIn={(data) => {
//         console.log("Login data:", data);
//         setShowSignIn(false);
//        }}
// />
//     </>
//   );
// };

// export default Navbar;




import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { ArrowRight, UserCircle } from "lucide-react";
import SignInModal from "./signinPopup";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [role, setRole] = useState(null);

  const isHome = location.pathname === "/";

  const menuItems = [
    { label: "About Podsphere", path: "/aboutus" },
    { label: "Phonics Pods", path: "/phonicsPods" },
    { label: "Free Materials", path: "/freeMaterials" },
    { label: "FAQ's", path: "/faqs" },
    { label: "Contact", path: "/contactus" },
    { label: "Careers", path: "/careers" },
    { label: "ChatBot", path: "/chatBot" },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const navbarBg = isHome
    ? scrolled
      ? "bg-white shadow-lg"
      : "bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
    : "bg-white shadow-md";

  const signupRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (!signupRef.current) return;
      if (!signupRef.current.contains(e.target)) setOpenSignup(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const loginOptions = [
    { emoji: "🎓", label: "Signup", sub: "", color: "#f97316" ,url:"https://secure.tutorcruncher.com/podsphere/login/ " },
    { emoji: "🏡", label: "Parent Login", sub: "Track & support", color: "#8b5cf6" ,url:"https://secure.tutorcruncher.com/podsphere/signup/tutor/ " },
    { emoji: "🏡", label: "Teacher Login", sub: "Track & support", color: "#8b5cf6" ,url:" https://secure.tutorcruncher.com/podsphere/signup/client/" },
  ];

  const LoginDropdown = ({ isMobile }) =>
    openSignup && (
      <div
        style={{
          position: "absolute",
          right: 0,
          top: "calc(100% + 8px)",
          width: 190,
          background: "#fff",
          borderRadius: 14,
          border: "1px solid #f0f0f0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          overflow: "hidden",
          animation: "sdIn 0.18s cubic-bezier(.16,1,.3,1)",
          zIndex: 60,
        }}
      >
        <style>{`@keyframes sdIn{from{opacity:0;transform:scale(.94) translateY(-4px)}to{opacity:1;transform:none}}`}</style>
        <div style={{ padding: "7px 12px 5px", fontSize: 10, color: "#94a3b8", letterSpacing: "0.07em", textTransform: "uppercase", borderBottom: "1px solid #f5f5f5" }}>
          I'm signing up as…
        </div>
        {loginOptions.map(({ emoji, label, sub, color, url  }) => (
          <div
            key={label}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setOpenSignup(false);
              window.open(url.trim(), "_blank"); 
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#fafafa")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", cursor: "pointer", borderBottom: "1px solid #f9f9f9", transition: "background 0.12s" }}
          >
            <div style={{ width: 32, height: 32, borderRadius: 9, background: color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
              {emoji}
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{label}</div>
              <div style={{ fontSize: 11, color: "#94a3b8" }}>{sub}</div>
            </div>
          </div>
        ))}
      </div>
    );

  return (
    <>
      {/* ── TOP NAV BAR ── */}
      <div className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50
        flex items-center justify-between px-4 md:px-6 py-3 rounded-full
        transition-all duration-300 ${navbarBg}`}
      >
        {/* Hamburger — shown on mobile + tablet (below xl) */}
        <button
          className={`xl:hidden text-2xl z-10 ${isHome && !scrolled ? "text-white" : "text-black"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Logo — centered on mobile/tablet, left-aligned on desktop */}
        <Link to="/" className="flex items-center xl:static absolute left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto">
          <img src="/logo2.png" alt="PodSphere Logo" className="w-[120px] md:w-[140px]" />
        </Link>

        {/* Desktop Nav Links — only xl and above */}
        <ul className="hidden xl:flex gap-5 text-sm">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`transition-colors duration-300 ${
                  isActive(item.path)
                    ? "font-bold text-blue-600"
                    : isHome && !scrolled
                    ? "text-white hover:text-yellow-300"
                    : "text-gray-800 hover:text-blue-500"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons — xl and above */}
        <div className="hidden xl:flex gap-3 items-center">
          <button
            onClick={() => setOpen(true)}
            className={`relative cursor-pointer px-4 py-2 rounded-full text-sm border border-gray-400
              transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05]
              ${isHome && !scrolled ? "text-white" : ""}`}
          >
            Book a Free Demo
          </button>
          <div className="relative" ref={signupRef}>
            <button
              onClick={() => setOpenSignup(!openSignup)}
              className={`cursor-pointer border border-gray-400 px-4 py-2 rounded-full text-sm
                transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05]
                ${isHome && !scrolled ? "text-white border-white" : "hover:bg-gray-100"}`}
            >
              Login ▾
            </button>
            <LoginDropdown />
          </div>
        </div>

        {/* Tablet + Mobile: right-side icons */}
        <div className="xl:hidden flex items-center gap-2">
          {/* Tablet only: Book a Free Demo button */}
          <button
            onClick={() => setOpen(true)}
            className={`hidden sm:block cursor-pointer px-3 py-1.5 rounded-full text-xs font-semibold border
              transition-transform duration-300 hover:scale-[1.05]
              ${isHome && !scrolled ? "text-white border-white/60" : "text-gray-800 border-gray-300"}`}
          >
            Book Demo
          </button>

          {/* Login icon */}
          <div className="relative" ref={signupRef}>
            <button
              onClick={() => setOpenSignup(!openSignup)}
              className={`cursor-pointer p-1.5 rounded-full ${isHome && !scrolled ? "text-white" : "text-gray-800"}`}
            >
              <UserCircle size={22} />
            </button>
            <LoginDropdown isMobile />
          </div>
        </div>
      </div>

      {/* ── SLIDE-DOWN MOBILE/TABLET MENU ── */}
      {menuOpen && (
       <div className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-br from-white/50 to-white/50 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-5 z-40 lg:hidden">
          <ul className="flex flex-col gap-1 text-center">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 text-sm rounded-xl transition-colors
                    ${isActive(item.path)
                      ? "font-extrabold text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Book Demo inside mobile menu too */}
          <button
            onClick={() => { setOpen(true); setMenuOpen(false); }}
            className="mt-3 w-full bg-yellow-400 text-black font-bold py-2.5 rounded-full text-sm sm:hidden"
          >
            Book a Free Demo
          </button>
        </div>
      )}

      {/* ── MOBILE ONLY: Fixed Bottom Bar (hidden on sm and above) ── */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50
        backdrop-blur-2xl bg-yellow-300/20
        py-4 flex items-center justify-center
        shadow-[0_-4px_20px_rgba(245,197,24,0.25)]
        border-t border-yellow-200/20">
        <button
          onClick={() => setOpen(true)}
          className="font-bold text-black text-base tracking-wide uppercase cursor-pointer"
        >
          Book a Free Demo
        </button>
      </div>

      {/* WhatsApp FAB — mobile only */}
      <a
        href="https://wa.me/919892409029"
        target="_blank"
        rel="noopener noreferrer"
        className="sm:hidden fixed bottom-9 right-5 z-[999]
          bg-green-500 p-2 rounded-full
          shadow-[0_8px_25px_rgba(0,0,0,0.3)]
          hover:scale-110 active:scale-95
          transition-all duration-300 animate-[bounce_1s_infinite]"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* ── DEMO POPUP ── */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-[100]">
          <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl w-[420px] max-w-[92vw] p-8 relative mx-4">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-700 text-xl cursor-pointer">✕</button>
            <h2 className="text-2xl font-bold mb-6 text-center">Book a Free Demo</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="text" placeholder="Child Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="number" placeholder="Age of the Child (Years)" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="email" placeholder="Email ID" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="text" placeholder="Country" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <button type="submit" className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">Submit</button>
            </form>
          </div>
        </div>
      )}

      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        role={role}
        onSignIn={(data) => { console.log("Login data:", data); setShowSignIn(false); }}
      />
   </>
  );
};

export default Navbar;