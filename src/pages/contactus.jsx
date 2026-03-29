// import React from 'react'


// export default function Contactus() {
//   return (
//     <>
   
//    <section className="bg-gradient-to-b from-[rgb(249,250,255)] to-white py-0">
//   <div className="w-full mx-auto px-0">

//     <div className="bg-[#EEF1FF] rounded-b-[48px] px-8 md:px-16 py-8 relative overflow-hidden">

//       {/* ================= HEADER =====  ============ */}
//       <div className="text-center max-w-xl mx-auto mb-10 mt-18">
//         <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
//           Contact Us
//         </h2>
//         <p className="mt-4 text-gray-600 text-sm leading-relaxed">
//           Explore our magical universe of fun and find the perfect friends
//           for every little adventure. Let the fun begin!
//         </p>
//       </div>

//       {/* ================= CONTENT ================= */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">

//         {/* ===== LEFT IMAGE ===== */}
//         <div className="relative flex justify-center lg:justify-start top-[-40px]">

//           {/* Decorative Background Circle */}
//           <div className="absolute w-[420px] h-[420px] bg-[#FFF3B0] rounded-full top-10 left-[60px] rotate-slow" />

//           {/* Better Sized Image */}
//           {/* <img
//             src="/phonics-program.png"
//             alt="Happy Child"
//             className="relative z-10 w-[420px] h-[420px] object-cover rounded-[40px] "
//           /> */}

//           <div className="relative w-[420px] h-[420px] flex items-center justify-center">

//           {/* Image */}
//           <img
//             src="/phonics-program.png"
//             alt="Happy Child"
//             className="relative z-10 w-[420px] h-[420px] object-cover rounded-[40px] float"
//           />

//           {/* Vector 1 */}
//           <div className="absolute -top-6 -left-6 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>

//           <div className="absolute bottom-10 -right-8 w-4 h-4 bg-pink-400 rotate-45 animate-pulse"></div>

//           <div className="absolute top-20 -right-10 w-8 h-8 border-2 border-blue-400 rounded-full"></div>
//           </div>

//         </div>

//         {/* ===== FORM CARD ===== */}
//         <div className="bg-white/80 backdrop-blur-sm border border-pink-100 rounded-[32px] p-8 shadow-lg">
          
//           <form className="space-y-3">

//             {/* Row 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="text-xs font-semibold text-gray-600">
//                   PARENTS NAME*
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Jane Smith"
//                   className="mt-2 w-full rounded-full px-5 py-3 text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-gray-600">
//                   CHILD AGE
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="5 Years"
//                   className="mt-2 w-full rounded-full px-5 py-3 text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
//                 />
//               </div>
//             </div>

//             {/* Row 2 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="text-xs font-semibold text-gray-600">
//                   PHONE NUMBER*
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="+91 98765 43210"
//                   className="mt-2 w-full rounded-full px-5 py-3 text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
//                 />
//               </div>

//               <div>
//                 <label className="text-xs font-semibold text-gray-600">
//                   PREFERRED CONTACT
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Phone / Email"
//                   className="mt-2 w-full rounded-full px-5 py-3 text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div>
//               <label className="text-xs font-semibold text-gray-600">
//                 EMAIL ADDRESS*
//               </label>
//               <input
//                 type="email"
//                 placeholder="jane@email.com"
//                 className="mt-2 w-full rounded-full px-5 py-3 text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>

//             {/* School */}
//             <div>
//               <label className="text-xs font-semibold text-gray-600">
//                 Which school is she/he going to?
//               </label>
//               <input
//                 type="text"
//                 placeholder="School Name"
//                 className="mt-2 w-full rounded-full px-5 py-3 text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label className="text-xs font-semibold text-gray-600">
//                 YOUR MESSAGE
//               </label>
//               <textarea
//                 rows="4"
//                 placeholder="Write your message"
//                 className="mt-2 w-full rounded-[24px] px-5 py-4 text-sm border border-gray-300 outline-none focus:ring-2 focus:ring-pink-300 resize-none"
//               />
//             </div>

//             {/* Button */}
//             <button
//               type="submit"
//               className="w-full bg-[#F57C96] text-white font-semibold py-3 rounded-full hover:bg-[#f36b88] transition shadow-md"
//             >
//               SEND A MESSAGE
//             </button>

//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>



//   <section className="bg-white py-30">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* ==================================================
//            SECTION 1 – BANNER
//         ================================================== */}
//         <div className="relative bg-[#FFF176] rounded-[40px] px-8 pt-32 pb-24">

//           {/* Purple Banner Card */}
//           <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-full max-w-5xl bg-[#2F2146] rounded-[28px] px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-10 text-white shadow-xl">

//             {/* Text */}
//             <div className="max-w-xl">
//               <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
//                 Let’s Begin Your Child’s <br /> Reading Journey Together
//               </h2>
//               <p className="text-sm text-white/80 mb-6">
//                 Discover upcoming Podsphere programs, get the latest updates,
//                 and enjoy exclusive learning opportunities.
//               </p>

//               <div className="space-y-2 text-sm text-white/80">

//               <div className="flex items-center gap-2">
//                 <span>📞</span>
//                 <a href="tel:+919892409029" className="hover:text-white transition">
//                   +91 9892409029
//                 </a>
//                 <span>/</span>
//                 <a href="tel:+919892099029" className="hover:text-white transition">
//                   +91 9892099029
//                 </a>
//               </div>

//               <div className="flex items-center gap-2">
//                 <span>✉️</span>
//                 <a
//                   href="mailto:hello@pod-sphere.com"
//                   className="hover:text-white transition"
//                 >
//                   hello@pod-sphere.com
//                 </a>
//               </div>

//               <div className="flex items-center gap-2">
//                 <span>📍</span>
//                 <span>Mumbai, India</span>
//               </div>

//               </div>
//               </div>

//             {/* Image */}
//             <img
//               src="/friends.jpg"
//               alt="Happy Kids"
//               className="w-56 object-contain rounded-full"
//             />
//           </div>

//           {/* ==================================================
//              SECTION 2 – FORM
//           ================================================== */}
//           {/* <div className="mt-32 max-w-3xl mx-auto bg-white rounded-[32px] p-10 shadow-lg"> */}

//             {/* <form className="space-y-6">

//               <div>
//                 <label className="text-sm font-semibold">Parent’s Name *</label>
//                 <input
//                   type="text"
//                   className="mt-2 w-full rounded-full border px-5 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-semibold">Child’s Age *</label>
//                 <input
//                   type="number"
//                   className="mt-2 w-full rounded-full border px-5 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-semibold">Email Address *</label>
//                 <input
//                   type="email"
//                   className="mt-2 w-full rounded-full border px-5 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-semibold">Phone Number *</label>
//                 <input
//                   type="tel"
//                   className="mt-2 w-full rounded-full border px-5 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-semibold">
//                   Preferred Contact Method
//                 </label>
//                 <select className="mt-2 w-full rounded-full border px-5 py-3">
//                   <option>Call</option>
//                   <option>WhatsApp</option>
//                   <option>Email</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-sm font-semibold">
//                   Which school is he/she going to?
//                 </label>
//                 <input
//                   type="text"
//                   className="mt-2 w-full rounded-full border px-5 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-semibold">Board</label>
//                 <input
//                   type="text"
//                   className="mt-2 w-full rounded-full border px-5 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm font-semibold">
//                   Message (Optional)
//                 </label>
//                 <textarea
//                   rows="4"
//                   className="mt-2 w-full rounded-[24px] border px-5 py-4 resize-none"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#F57C96] text-white py-3 rounded-full font-semibold hover:bg-[#f36b88] transition"
//               >
//                 Submit
//               </button>
//             </form> */}
//           {/* </div> */}

//           {/* ==================================================
//              SECTION 3 – QUICK CONTACT
//           ================================================== */}
//           <div className="mt-34 text-center max-w-2xl mx-auto ">
//             <h3 className="text-xl font-bold mb-2">
//               Have questions about phonics, class structure, or where your child fits best?
//             </h3>
//             <p className="text-gray-700">
//               Our team is happy to guide you — gently, honestly, and without pressure.
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>

    
//   </>
//   )
// }





import React from "react";

const Contact = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-[700px] overflow-hidden rounded-b-4xl">
        <img
          src="/contactusimg.png"
          alt="contact"
          className="absolute inset-0 w-full h-full object-cover object-[80%_center] "
        />

      {/* Text */}
      <div className="absolute left-16 bottom-25 text-white max-w-md">
        <h2 className="text-5xl font-bold mb-4">Contact Us</h2>
        <p className="text-sm leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

        {/* Floating Form Card */}
        <div className="absolute right-24 top-96 -translate-y-1/2">
        <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.25)] p-8 w-[620px] border border-gray-200">
            <form className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    PARENTS NAME*
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full border border-gray-200  rounded-full px-4 py-2 mt-1 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    CHILD AGE
                  </label>
                  <input
                    type="text"
                    placeholder="5 Years"
                    className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    PHONE NUMBER*
                  </label>
                  <input
                    type="text"
                    placeholder="+91 98765 43210"
                    className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500">
                    PREFERRED CONTACT
                  </label>
                  <input
                    type="text"
                    placeholder="Phone / Email"
                    className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500">
                  EMAIL ADDRESS*
                </label>
                <input
                  type="email"
                  placeholder="jane@gmail.com"
                  className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500">
                  Which school is he/she going to?
                </label>
                <input
                  type="text"
                  placeholder="School Name"
                  className="w-full border border-gray-200 rounded-full px-4 py-2 mt-1 text-sm outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-500">
                  YOUR MESSAGE
                </label>
                <textarea
                  rows="3"
                  placeholder="Write your message"
                  className="w-full border border-gray-200 rounded-2xl px-4 py-2 mt-1 text-sm outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-3 rounded-full font-semibold hover:bg-black transition"
              >
                SEND A MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Overlapping Cards */}
      <div className="relative flex justify-center mt-16 mb-15">

{/* Bottom Card */}
<div className="w-[1100px] h-[310px] bg-red-900 rounded-2xl"></div>

{/* Top Card */}
<div className="absolute -top-10 w-[1000px] h-[250px] bg-yellow-400 rounded-2xl shadow-lg p-12 flex items-center justify-between">

  {/* LEFT CONTENT */}
  <div className="text-white max-w-xl">
    <h2 className="text-3xl font-bold mb-3">
      Let’s Begin Your Child’s Reading Journey Together
    </h2>

    <p className="text-sm mb-4">
      Discover upcoming Podsphere programs, get the latest updates, and enjoy
      exclusive learning opportunities.
    </p>

    <div className="space-y-2 text-sm">

      {/* PHONE */}
      <p>
        📞{" "}
        <a
          href="tel:+919892409029"
          className="underline hover:text-gray-500"
        >
          +91 9892409029
        </a>{" "}
        /{" "}
        <a
          href="tel:+919892099029"
          className="underline hover:text-gray-500"
        >
          +91 9892099029
        </a>
      </p>

      {/* EMAIL */}
      <p>
        ✉️{" "}
        <a
          href="mailto:hello@pod-sphere.com"
          className="underline hover:text-gray-500"
        >
          hello@pod-sphere.com
        </a>
      </p>

      {/* LOCATION */}
      <p>
        📍{" "}
        <a
          href="https://www.google.com/maps?q=Mumbai,India"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-500"
        >
          Mumbai, India
        </a>
      </p>

    </div>
  </div>

  {/* RIGHT IMAGE */}
  <div>
    <img
      src="/friends.jpg"
      alt="kids"
      className="w-[240px] h-[240px] rounded-full object-cover"
    />
  </div>

</div>

</div>
    </section>
  );
};

export default Contact;
