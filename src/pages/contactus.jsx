
// import React from "react";

// const Contact = () => {
//   return (
//     <section className="relative w-full">
//       {/* Background Image */}
//       <div className="relative w-full h-[700px] overflow-hidden rounded-b-4xl">
//         <img
//           src="/contactusimg.png"
//           alt="contact"
//           className="absolute inset-0 w-full h-full object-cover object-[80%_center] "
//         />

//       {/* Text */}
//       <div className="absolute left-16 bottom-25 text-white max-w-md">
//         <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
//         <p className="text-sm leading-relaxed">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//         </p>
//       </div>

//         {/* Floating Form Card */}
//         <div className="absolute right-24 top-96 -translate-y-1/2">
//         <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.25)] p-8 w-[620px] border border-gray-200">
//             <form className="space-y-4">
              
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-xs font-semibold text-gray-500">
//                     PARENTS NAME*
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Jane Smith"
//                     className="w-full border border-gray-200  rounded-full px-4 py-2 mt-1 text-sm outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-gray-500">
//                     CHILD AGE
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="5 Years"
//                     className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-xs font-semibold text-gray-500">
//                     PHONE NUMBER*
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="+91 98765 43210"
//                     className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="text-xs font-semibold text-gray-500">
//                     PREFERRED CONTACT
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Phone / Email"
//                     className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-gray-500">
//                   EMAIL ADDRESS*
//                 </label>
//                 <input   
//                   type="email"
//                   placeholder="jane@gmail.com"
//                   className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-gray-500">
//                   Which school is he/she going to?
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="School Name"
//                   className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-gray-500">
//                   YOUR MESSAGE
//                 </label>
//                 <textarea
//                   rows="3"
//                   placeholder="Write your message"
//                   className="w-full border border-gray-200 rounded-2xl px-4 py-2 mt-1 text-sm outline-none"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-black transition"
//               >
//                 SEND A MESSAGE
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Overlapping Cards */}
//       <div className="relative flex justify-center mt-16 mb-15">

// {/* Bottom Card */}
// <div className="w-[1100px] h-[310px] bg-red-900 rounded-2xl"></div>

// {/* Top Card */}
// <div className="absolute -top-10 w-[1000px] h-[250px] bg-yellow-400 rounded-2xl shadow-lg p-12 flex items-center justify-between">

//   {/* LEFT CONTENT */}
//   <div className="text-white max-w-xl">
//     <h2 className="text-3xl font-bold mb-3">
//       Let’s Begin Your Child’s Reading Journey Together
//     </h2>

//     <p className="text-sm mb-4">
//       Discover upcoming Podsphere programs, get the latest updates, and enjoy
//       exclusive learning opportunities.
//     </p>

//     <div className="space-y-2 text-sm">

//       {/* PHONE */}
//       <p>
//         📞{" "}
//         <a
//           href="tel:+919892409029"
//           className="underline hover:text-gray-500"
//         >
//           +91 9892409029
//         </a>{" "}
//         /{" "}
//         <a
//           href="tel:+919892099029"
//           className="underline hover:text-gray-500"
//         >
//           +91 9892099029
//         </a>
//       </p>

//       {/* EMAIL */}
//       <p>
//         ✉️{" "}
//         <a
//           href="mailto:hello@pod-sphere.com"
//           className="underline hover:text-gray-500"
//         >
//           hello@pod-sphere.com
//         </a>
//       </p>

//       {/* LOCATION */}
//       <p>
//         📍{" "}
//         <a
//           href="https://www.google.com/maps?q=Mumbai,India"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="underline hover:text-gray-500"
//         >
//           Mumbai, India
//         </a> 
//       </p>

//     </div>
//   </div>

//   {/* RIGHT IMAGE */}
//   <div>
//     <img
//       src="/friends.jpg"
//       alt="kids"
//       className="w-[240px] h-[240px] rounded-full object-cover"
//     />
//   </div>

// </div>

// </div>
//     </section>
//   );
// };

// export default Contact;











import React from "react";

const Contact = () => {
  return (
    <section className="relative w-full bg-white">

      {/* ───────── HERO IMAGE ───────── */}
      <div className="relative w-full h-[340px] sm:h-[360px] md:h-[700px] overflow-hidden rounded-b-[15%]">
        <img
          src="/contactusimg.png"
          alt="contact"
          className="w-full h-full object-cover object-[80%_center] object-left"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Text on image */}
        <div className="absolute bottom-6 left-5 sm:left-10 md:left-16 text-white z-10 md:bottom-25 md:max-w-md">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Contact Us</h2>
          {/* <p className="text-xs sm:text-sm leading-relaxed text-white/80 max-w-[260px] sm:max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p> */}
        </div>

        {/* Desktop floating form */}
        <div className="hidden md:block absolute right-24 top-96 -translate-y-1/2 z-10">
          <FormCard />
        </div>
      </div>

      {/* ───────── MOBILE FORM (below hero) ───────── */}
      <div className="block md:hidden px-4 py-6">
        <div className="text-center mb-5">
          <p className="text-xs font-semibold tracking-widest text-pink-500 mb-1">GET IN TOUCH</p>
          <h3 className="text-xl font-extrabold text-gray-900">Send Us a Message</h3>
        </div>
        <FormCard />
      </div>

      {/* ───────── BOTTOM CTA SECTION ───────── */}
      {/* Desktop version */}
      <div className="hidden md:flex relative justify-center mt-16 mb-15 px-4">
        <div className="w-full max-w-[1100px] h-[310px] bg-red-900 rounded-2xl" />
        <div className="absolute -top-10 w-[calc(100%-4rem)] max-w-[1000px] h-[250px] bg-yellow-400 rounded-2xl shadow-lg p-12 flex items-center justify-between">
          <CtaContent />
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="block md:hidden mx-4 mb-10 rounded-[24px] bg-yellow-400 overflow-hidden shadow-xl">
        <div className="p-6 flex flex-col items-center text-center gap-5">
          <img
            src="/friends.jpg"
            alt="kids"
            className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md"
          />
          <div className="text-white">
            <h2 className="text-lg font-extrabold mb-2 leading-snug">
              Let's Begin Your Child's<br />Reading Journey Together
            </h2>
            <p className="text-xs text-white/80 mb-4 leading-relaxed">
              Discover upcoming Podsphere programs, get the latest updates,
              and enjoy exclusive learning opportunities.
            </p>
            <div className="space-y-2 text-sm font-medium">
              <a
                href="tel:+919892409029"
                className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition"
               > 
                📞 +91 9892409029
              </a>
              <a
                href="tel:+919892099029"
                className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition"
               > 
                📞 +91 9892099029
              </a>
              <a
                href="mailto:hello@pod-sphere.com"
                className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition"
              >
                ✉️ hello@pod-sphere.com
              </a>
              <a
                href="https://www.google.com/maps?q=Mumbai,India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/20 rounded-full px-4 py-2 hover:bg-white/30 transition"
              >
                📍 Mumbai, India
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ───────── FORM CARD ───────── */
const FormCard = () => (
  <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-6 sm:p-8 w-full md:w-[620px] border border-gray-100">
    <form className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">PARENTS NAME*</label>
          <input
            type="text"
            placeholder="Jane Smith"
            className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">CHILD AGE</label>
          <input
            type="text"
            placeholder="5 Years"
            className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">PHONE NUMBER*</label>
          <input
            type="text"
            placeholder="+91 98765 43210"
            className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">PREFERRED CONTACT</label>
          <input
            type="text"
            placeholder="Phone / Email"
            className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition"
          />
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold text-gray-400 tracking-wider">EMAIL ADDRESS*</label>
        <input
          type="email"
          placeholder="jane@gmail.com"
          className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition"
        />
      </div>

      <div>
        <label className="text-[10px] font-bold text-gray-400 tracking-wider">SCHOOL NAME</label>
        <input
          type="text"
          placeholder="School Name"
          className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition"
        />
      </div>

      <div>
        <label className="text-[10px] font-bold text-gray-400 tracking-wider">YOUR MESSAGE</label>
        <textarea
          rows="3"
          placeholder="Write your message..."
          className="w-full border border-gray-200 rounded-2xl px-4 py-3 mt-1 text-sm outline-none focus:border-pink-400 transition resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 rounded-full font-bold text-sm tracking-widest hover:bg-black active:scale-95 transition-all"
      >
        SEND A MESSAGE
      </button>
    </form>
  </div>
);

/* ───────── CTA CONTENT (desktop) ───────── */
const CtaContent = () => (
  <>
    <div className="text-white max-w-xl">
      <h2 className="text-3xl font-bold mb-3">
        Let's Begin Your Child's Reading Journey Together
      </h2>
      <p className="text-sm mb-4">
        Discover upcoming Podsphere programs, get the latest updates, and enjoy
        exclusive learning opportunities.
      </p>
      <div className="space-y-2 text-sm">
        <p>
          📞{" "}
          <a href="tel:+919892409029" className="underline hover:text-gray-200">+91 9892409029</a>{" "}
          /{" "}
          <a href="tel:+919892099029" className="underline hover:text-gray-200">+91 9892099029</a>
        </p>
        <p>
          ✉️{" "}
          <a href="mailto:hello@pod-sphere.com" className="underline hover:text-gray-200">hello@pod-sphere.com</a>
        </p>
        <p>
          📍{" "}
          <a href="https://www.google.com/maps?q=Mumbai,India" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-200">
            Mumbai, India
          </a>
        </p>
      </div>
    </div>
    <img src="/friends.jpg" alt="kids" className="w-[240px] h-[240px] rounded-full object-cover" />
  </>
);

export default Contact;