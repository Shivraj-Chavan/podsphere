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










import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { LogIn, User, UserCircle } from "lucide-react";
import SignInModal from "./signinPopup";

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
      if (isHome) {
        setScrolled(window.scrollY > 80);
      }
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
    const close = (e) =>
      !signupRef.current?.contains(e.target) && setOpenSignup(false);
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <>
      {/* ── DESKTOP & MOBILE TOP BAR ── */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50
        flex items-center justify-between px-4 md:px-8 py-3 rounded-full
        transition-all duration-300 ${navbarBg}`}
      >
        {/* ── MOBILE: Hamburger (left) ── */}
        <button
          className={`lg:hidden text-2xl z-10 ${
            isHome && !scrolled ? "text-white" : "text-black"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        <Link
          to="/"
          className="flex items-center lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto"
        >
          <img
            src="/logo2.png"
            alt="PodSphere Logo"
            className="w-[120px] md:w-[140px]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-sm">
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => setOpen(true)}
            className={`relative cursor-pointer px-4 py-2 rounded-full text-sm overflow-hidden 
            border border-gray-400 animated-border
            transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05]
            ${isHome && !scrolled ? "text-white" : ""}`}
          >
            <span className="relative z-10">Book a Free Demo</span>
          </button>

          {/* Desktop Login dropdown */}
          <div className="relative" ref={signupRef}>
            <button
              onClick={() => setOpenSignup(!openSignup)}
              className={`cursor-pointer border border-gray-400 px-4 py-2 rounded-full text-sm transition-transform duration-300 hover:-translate-y-[2px] hover:scale-[1.05] ${
                isHome && !scrolled
                  ? "text-white border-white"
                  : "hover:bg-gray-100"
              }`}
            >
              Login ▾
            </button>

            {openSignup && (
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
                }}
              >
                <style>{`@keyframes sdIn{from{opacity:0;transform:scale(.94) translateY(-4px)}to{opacity:1;transform:none}}`}</style>
                <div
                  style={{
                    padding: "7px 12px 5px",
                    fontSize: 10,
                    color: "#94a3b8",
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #f5f5f5",
                  }}
                >
                  I'm signing up as…
                </div>
                {[
                  { emoji: "🎓", label: "Signup", sub: "", color: "#f97316" },
                  {
                    emoji: "🏡",
                    label: "Parent Login",
                    sub: "Track & support",
                    color: "#8b5cf6",
                  },
                  {
                    emoji: "🏡",
                    label: "Teacher Login",
                    sub: "Track & support",
                    color: "#8b5cf6",
                  },
                ].map(({ emoji, label, sub, color }) => (
                  <div
                    key={label}
                    onClick={(e) => {
                      e.stopPropagation(); 
                    
                      setRole(label);
                      setShowSignIn(true);
                    
                      setTimeout(() => {
                        setOpenSignup(false);
                      }, 50); 
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#fafafa")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 12px",
                      cursor: "pointer",
                      borderBottom: "1px solid #f9f9f9",
                      transition: "background 0.12s",
                    }}
                  >
                    <div
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 9,
                        background: color + "18",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 15,
                      }}
                    >
                      {emoji}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: 13,
                          fontWeight: 700,
                          color: "#0f172a",
                        }}
                      >
                        {label}
                      </div>
                      <div style={{ fontSize: 11, color: "#94a3b8" }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── MOBILE: Login button (right) ── */}
        <div className="lg:hidden relative" ref={signupRef}>
        <button
        onClick={() => setOpenSignup(!openSignup)}
        className={`cursor-pointer px-3 py-1.5 rounded-full text-sm flex items-center gap-1 ${
          isHome && !scrolled
            ? "text-white"
            : "text-gray-800"
        }`}
      >
        <UserCircle size={20} className="text-3xl" />
        {/* <span className="text-xs">▾</span> */}
      </button>

          {openSignup && (
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
              <div
                style={{
                  padding: "7px 12px 5px",
                  fontSize: 10,
                  color: "#94a3b8",
                  letterSpacing: "0.07em",
                  textTransform: "uppercase",
                  borderBottom: "1px solid #f5f5f5",
                }}
              >
                I'm signing up as…
              </div>
              {[
                { emoji: "🎓", label: "Signup", sub: "", color: "#f97316" },
                { emoji: "🏡", label: "Parent Login", sub: "Track & support", color: "#8b5cf6"},
                {
                  emoji: "🏡",
                  label: "Teacher Login",
                  sub: "Track & support",
                  color: "#8b5cf6",
                },
              ].map(({ emoji, label, sub, color }) => (
                <Link
                  key={label}
                  onClick={() => {
                    setOpenSignup(false);
                    setRole(label);   
                    setShowSignIn(true);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 12px",
                    cursor: "pointer",
                    borderBottom: "1px solid #f9f9f9",
                    textDecoration: "none",
                  }}
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: 9,
                      background: color + "18",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                    }}
                  >
                    {emoji}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{label}</div>
                    <div style={{ fontSize: 11, color: "#94a3b8" }}>{sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── MOBILE: Slide-down Dropdown Menu ── */}
      {menuOpen && (
        <div className="fixed top-[80px] left-1/2 -translate-x-1/2 w-[90%] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-5 z-40 lg:hidden">
          <ul className="flex flex-col gap-0 text-center">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2 ${
                    isActive(item.path)
                      ? "font-bold text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── MOBILE: Fixed Bottom "Book a Free Demo" Bar ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#F5C518] py-4 flex items-center justify-center shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">
        <button
          onClick={() => setOpen(true)}
          className="font-bold text-black text-base tracking-wide uppercase cursor-pointer"
        >
          Book a Free Demo
        </button>
      </div>

      {/* ── SHARED: Demo Popup Form ── */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-[100]">
          <div className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-2xl shadow-2xl w-[420px] max-w-[92vw] p-8 relative mx-4">
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
              <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="text" placeholder="Child Name" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="number" placeholder="Age of the Child (Years)" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="tel" placeholder="Phone / WhatsApp Number" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="email" placeholder="Email ID" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <input type="text" placeholder="Country" className="w-full p-3 rounded-xl bg-white/80 outline-none" />
              <button type="submit" className="w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      <SignInModal
  isOpen={showSignIn}
  onClose={() => setShowSignIn(false)}
  role={role}
  onSignIn={(data) => {
    console.log("Login data:", data);
    setShowSignIn(false);
  }}
/>
    </>
  );
};

export default Navbar;