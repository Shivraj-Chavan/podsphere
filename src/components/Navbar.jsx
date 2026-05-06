import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { ArrowRight, UserCircle } from "lucide-react";
import SignInModal from "./signinPopup";
import { FaWhatsapp } from "react-icons/fa";
import axios from "axios";
import CONFIG from "../constance";
import DemoModal from "./demoModal";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [role, setRole] = useState(null);
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
      );
  
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

  const handleOptionClick = (item) => {
    if (item.action === "signup") {
      setIsModalOpen(true);
    } 
    else if (item.action === "logout") {
      handleLogout(item.url);
    } 
    else if (item.url) {
      window.location.href = item.url;
    }
  };


  const isValidPincode = demoData.pincode.length === 6;
  const isHome = location.pathname === "/" || location.pathname === "/chatBot";

  const menuItems = [
    { label: "About Podsphere", path: "/aboutus" },
    { label: "Phonics Pods", path: "/phonicsPods" },
    { label: "Free Materials", path: "/freeMaterials" },
    { label: "FAQ's", path: "/faqs" },
    { label: "Contact", path: "/contactus" },
    { label: "Careers", path: "/careers" },
    { label: "Poppi", path: "/chatBot" },
  ];

const handleLogout = (redirectUrl = "/") => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  window.location.href = redirectUrl;
};

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

//  url:"https://secure.tutorcruncher.com/podsphere/login/
  const loginOptions = [
    { emoji: "🎓", label: "Signup", sub: "", color: "#f97316" , action: "signup"  },
    { emoji: "🏡", label: "Parent Login", sub: "Track & support", color: "#8b5cf6" ,url:"https://secure.tutorcruncher.com/podsphere/signup/tutor/ " },
    { emoji: "🏡", label: "Teacher Login", sub: "Track & support", color: "#8b5cf6" ,url:" https://secure.tutorcruncher.com/podsphere/signup/client/" },
  ];

  const isLoggedIn = !!localStorage.getItem("token");

const updatedLoginOptions = loginOptions.map((item) => {
  if (item.action === "signup") {
    return isLoggedIn
      ? {
          ...item,
          emoji: "🚪",
          label: "Logout",
          action: "logout",
          color: "#ef4444",
          url: "/", // redirect after logout
        }
      : item;
  }
  return item;
});

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
        {updatedLoginOptions.map(({ emoji, label, sub, color, url , action  }) => (
          <div
            key={label}
            onMouseDown={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setOpenSignup(false);
            
              if (action === "signup") {
                setShowSignIn(true);
                setRole("Signup");
              } 
              else if (action === "logout") {
                handleLogout(url);
              } 
              else if (url) {
                window.open(url.trim(), "_blank");
              }
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
       <Link
        to="/"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center xl:static absolute left-1/2 -translate-x-1/2 xl:translate-x-0 xl:left-auto"
      >
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
      <DemoModal open={open} onClose={() => setOpen(false)} />

      <SignInModal
  isOpen={showSignIn}
  onClose={() => setShowSignIn(false)}
  role={role}
  onSignIn={async (data) => {
    console.log("Signup success:", data);
    localStorage.setItem("token", "dummy_token");

    setShowSignIn(false);
    window.location.reload();

    // optional redirect
    window.open(
      "https://secure.tutorcruncher.com/podsphere/login/",
      "_blank"
    );
  }}
/>
   </>
  );
};

export default Navbar;