// import { Mail, Phone, Globe, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 pt-20">
//       <div className="max-w-7xl mx-auto px-6 relative">
//       <img 
//               src='./cubebottom.png'
//               alt="ABC Blocks" 
//               className="absolute w-44 bottom-10 -right-2 h-auto drop-shadow-2xl"
//             />
//         {/* ================= TOP GRID ================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

//           {/* ===== LOGO + NEWSLETTER ===== */}
//           <div>
//             <img
//               src="/logo2.png"
//               alt="Podsphere"
//               className="h-10 mb-4"
//             />

//             <p className="text-sm text-gray-600 mb-4">
//               Stay in the loop and sign up for the Podsphere newsletter:
//             </p>

//             <div className="relative max-w-xs">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm outline-none"
//               />
//               <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#2F2146] text-white w-8 h-8 rounded-full flex items-center justify-center">
//                 →
//               </button>
//             </div>
//           </div>

//           {/* ===== COMPANY ===== */}
//           <div>
//             <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>
//                 <Link to="/" className="hover:text-gray-900 transition">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/phonicsPods" className="hover:text-gray-900 transition">
//                   Phonics Pods Journey
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/aboutus" className="hover:text-gray-900 transition">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contactus" className="hover:text-gray-900 transition">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* ===== DOCUMENTATION ===== */}
//           <div>
//             <h4 className="font-semibold text-gray-900 mb-4">Documentation</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>
//               <Link to="/terms" className="hover:text-gray-900 transition">
//                 Help Centre
//                 </Link>
//                 </li>
//               <li>
//               <Link to="/faqs" className="hover:text-gray-900 transition">
//                 FAQ's
//                 </Link>
//                 </li>
//               <li>
//               <Link to="/terms" className="hover:text-gray-900 transition">
//                 Privacy Policy
//                 </Link>
//                 </li>
//             </ul>
//           </div>

//           {/* ===== SOCIAL ===== */}
//           <div>
//             <h4 className="font-semibold text-gray-900 mb-4">Social</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li>Facebook</li>
//               <li>Instagram</li>
//               <li>Youtube</li>
//               <li>Twitter</li>
//             </ul>
//           </div>
//         </div>

//         {/* ================= CONTACT ROW ================= */}
//         <div className="mt-14 flex flex-wrap gap-8 text-sm text-gray-600">
//           <div className="flex items-center gap-2">
//             <Phone size={16} />
//             <span>+91 902 354 8480</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Mail size={16} />
//             <span>edtechpodsphere@gmail.com</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <Globe size={16} />
//             <span>www.podsphere.com</span>
//           </div>

//           <div className="flex items-center gap-2">
//             <MapPin size={16} />
//             <span>Mumbai, India</span>
//           </div>
//         </div>

//         {/* ================= DIVIDER ================= */}
//         <div className="mt-10 border-t border-gray-200" />

//         {/* ================= BOTTOM BAR ================= */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 py-6">
//           <p>© Podsphere. All Rights Reserved 2026</p>
//           <p className="mt-2 md:mt-0">Terms & Conditions</p>
//         </div>

//       </div>
//     </footer>
//   );
// }






// import { Mail, Phone, Globe, MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 pt-16 pb-16 md:pb-0">

//       <div className="max-w-7xl mx-auto px-6 relative">

//         {/* Decorative Image */}
//         <img
//           src="./cubebottom.png"
//           alt="ABC Blocks"
//           className="absolute w-32 lg:w-44 bottom-18 right-0 drop-shadow-xl"
//         />

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">

//           {/* LOGO */}
//           <div>
//             <img src="/logo2.png" alt="Podsphere" className="mb-3" />
//           </div>

//           {/* CONTACT US */}
//           <div>
//             <h4 className="font-semibold text-gray-900 mb-4">Contact Us</h4>

//             <div className="space-y-3 text-sm text-gray-600">

//             <div className="flex items-start gap-2">
//             <Phone size={16} className="mt-1" />

//             <div className="flex flex-col gap-2">
//               <a href="tel:+919892409029" className="hover:text-purple-600">
//                 +91 9892409029
//               </a>

//               <a href="tel:+919892099029" className="hover:text-purple-600">
//                 +91 9892099029
//               </a>
//             </div>
//           </div>

//               <div className="flex items-center gap-2">
//                 <Mail size={16} />
//                 <a
//                   href="mailto:hello@pod-sphere.com"
//                   className="hover:text-purple-600"
//                 >
//                   hello@pod-sphere.com
//                 </a>
//               </div>

//               <div className="flex items-center gap-2">
//                 <Globe size={16} />
//                 <a
//                   href="https://www.podsphere.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-purple-600"
//                 >
//                   www.pod-sphere.com
//                 </a>
//               </div>

//               <div className="flex items-center gap-2">
//                 <MapPin size={16} />
//                 <span>Mumbai, India</span>
//               </div>

//             </div>
//           </div>

//           {/* COMPANY */}
//           <div>
//             <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><Link to="/" className="hover:text-gray-900">Home</Link></li>
//               <li><Link to="/phonicsPods" className="hover:text-gray-900">Phonics Pods Journey</Link></li>
//               <li><Link to="/aboutus" className="hover:text-gray-900">About Us</Link></li>
//             </ul>
//           </div>

//           {/* DOCUMENTATION */}
//           <div>
//             <h4 className="font-semibold text-gray-900 mb-4">Documentation</h4>
//             <ul className="space-y-2 text-sm text-gray-600">
//               <li><Link to="/terms" className="hover:text-gray-900">Help Centre</Link></li>
//               <li><Link to="/faqs" className="hover:text-gray-900">FAQ's</Link></li>
//               <li><Link to="/terms" className="hover:text-gray-900">Privacy Policy</Link></li>
//             </ul>
//           </div>

//           {/* SOCIAL */}
//           <div>
//   <h4 className="font-semibold text-gray-900 mb-4">Social</h4>

//   <ul className="space-y-2 text-sm text-gray-600">

//     <li>
//       <a href="#" className="hover:text-gray-900 cursor-pointer">
//         Facebook
//       </a>
//     </li>

//     <li>
//       <a 
//         href="https://www.instagram.com/podsphere_co?igsh=MTd5eWcycmVuN3k3aw%3D%3D&utm_source=qr" 
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hover:text-gray-900 cursor-pointer"
//       >
//         Instagram
//       </a>
//     </li>

//     <li>
//       <a href="#" className="hover:text-gray-900 cursor-pointer">
//         Youtube
//       </a>
//     </li>

//     <li>
//       <a 
//         href="https://www.linkedin.com/company/pod-sphere/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="hover:text-gray-900 cursor-pointer"
//       >
//         LinkedIn
//       </a>
//     </li>

//   </ul>
// </div>

//         </div>

//         {/* DIVIDER */}
//         <div className="mt-10 border-t border-gray-200" />

//         {/* BOTTOM BAR */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 py-6 gap-2">
//           <p>© Podsphere. All Rights Reserved 2026</p>
//           <p className="cursor-pointer hover:text-gray-700">
//             Terms & Conditions
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// }











import { Mail, Phone, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-12 pb-20 md:pb-12 lg:pb-0">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Decorative Image */}
        <img
          src="./cubebottom.png"
          alt="ABC Blocks"
          className="absolute w-24 sm:w-28 lg:w-44 bottom-16 md:bottom-12 right-0 drop-shadow-xl pointer-events-none"
        />

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-10">

          {/* LOGO — full width on mobile, spans on tablet */}
          <div className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-1">
            <img src="/logo2.png" alt="Podsphere" className="mb-3 w-32 sm:w-36" />
            <p className="text-xs text-gray-500 leading-relaxed max-w-[260px]">
              Building strong phonics foundations that make language joyful, meaningful, and accessible.
            </p>
          </div>

          {/* CONTACT US */}
          <div className="col-span-2 sm:col-span-1 md:col-span-1">
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Contact Us</h4>
            <div className="space-y-3 text-sm text-gray-600">

              <div className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1.5">
                  <a href="tel:+919892409029" className="hover:text-purple-600 transition-colors">+91 9892409029</a>
                  <a href="tel:+919892099029" className="hover:text-purple-600 transition-colors">+91 9892099029</a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={15} className="shrink-0" />
                <a href="mailto:hello@pod-sphere.com" className="hover:text-purple-600 transition-colors break-all">
                  hello@pod-sphere.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe size={15} className="shrink-0" />
                <a href="https://www.podsphere.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                  www.pod-sphere.com
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={15} className="shrink-0" />
                <span>Mumbai, India</span>
              </div>

            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link to="/" className="hover:text-gray-900 transition-colors">Home</Link></li>
              <li><Link to="/phonicsPods" className="hover:text-gray-900 transition-colors">Phonics Pods Journey</Link></li>
              <li><Link to="/aboutus" className="hover:text-gray-900 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* DOCUMENTATION */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Documentation</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><Link to="/terms" className="hover:text-gray-900 transition-colors">Help Centre</Link></li>
              <li><Link to="/faqs" className="hover:text-gray-900 transition-colors">FAQ's</Link></li>
              <li><Link to="/terms" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Social</h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Facebook</a></li>
              <li>
                <a
                  href="https://www.instagram.com/podsphere_co?igsh=MTd5eWcycmVuN3k3aw%3D%3D&utm_source=qr"
                  target="_blank" rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Youtube</a></li>
              <li>
                <a
                  href="https://www.linkedin.com/company/pod-sphere/"
                  target="_blank" rel="noopener noreferrer"
                  className="hover:text-gray-900 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
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