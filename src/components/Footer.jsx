import { Mail, Phone, Globe, MapPin, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const location = useLocation();

const handleNavigation = (path) => {
  if (location.pathname === path) {
    // same page → just scroll
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // different page → navigate + scroll
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }
};
  return (
    <footer className="bg-gray-100 pt-12 pb-20 md:pb-12 lg:pb-0">
      <div className="w-full max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 relative">

        {/* Decorative Image */}
        <img
          src="/icons/iconbook.png"
          alt="ABC Blocks"
          className="absolute w-24 sm:w-28 lg:w-38 bottom-16 md:bottom-12 right-0 drop-shadow-xl pointer-events-none"
        />

        {/* GRID */}
        {/* <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 "> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 items-start pl-5 sm:pl-20 md:pl-5 lg:pl-10 ">

          {/* LOGO — full width on mobile, spans on tablet */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <img
            src="/logo2.png"
            alt="Podsphere"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="mb-3 w-32 sm:w-36 cursor-pointer"
          /> 
            <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">
              Building strong phonics foundations that make language joyful, meaningful, and accessible.
            </p>

            <div className="flex items-center gap-3 mt-4">
            <a
              href=" https://www.facebook.com/61572092741920/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <Facebook size={16} className=" text-blue-600 hover:text-blue-700" />
            </a>

            <a
              href=" https://www.instagram.com/podsphere_co"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <Instagram size={16} className="text-pink-500 hover:text-pink-600" />
            </a>

            <a
              href=" https://www.youtube.com/@Podsphere-z6r"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <Youtube size={16} className="text-red-500 hover:text-red-600" />
            </a>

            <a
              href=" https://www.linkedin.com/company/pod-sphere/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white shadow-sm hover:shadow-md transition hover:-translate-y-0.5"
            >
              <Linkedin size={16} className="text-blue-500 hover:text-blue-600" />
            </a>
          </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-16 sm:pr-25">

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link to="/" onClick={() => handleNavigation("/")} className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="/phonicsPods" onClick={() => handleNavigation("/phonicsPods")} className="hover:text-gray-900 transition-colors">Phonics Pods Journey</Link></li>
              <li><Link to="/aboutus" onClick={() => handleNavigation("/aboutus")} className="hover:text-gray-900 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* DOCUMENTATION */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Documentation</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link to="/contactus" onClick={() => handleNavigation("/contactus")} className="hover:text-gray-900 transition-colors">Help Centre</Link></li>
              <li><Link to="/faqs"   onClick={() => handleNavigation("/faqs")} className="hover:text-gray-900 transition-colors">FAQ's</Link></li>
              <li><Link to="/terms" onClick={() => handleNavigation("/terms")} className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>  
        </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-10 border-t border-gray-200" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 py-6 gap-2 text-center sm:text-left">
          <p>© Podsphere. All Rights Reserved 2026</p>
          <p className="cursor-pointer hover:text-gray-700 transition-colors">Designed By Linkdoor </p>
        </div>

      </div>
    </footer>
  );
}