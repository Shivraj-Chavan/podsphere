// "use client";

// const cards = [
//   "/cards/Foundation.png"
// ];


// const features = [
//   {
//     title: "Holistic",
//     desc: "Early learning approach that nurtures thinking, creativity, and expression",
//     icon: "/foundationIcons/Icon1.PNG",
//   },
//   {
//     title: "Progressive",
//     desc: "Skill building progression designed to grow with the child",
//     icon: "/foundationIcons/Icon2.PNG",
//   },
//   {
//     title: "Joyful",
//     desc: "Interactive activities that make learning meaningful",
//     icon: "/foundationIcons/Icon3.PNG",
//   },
//   {
//     title: "Research-led",
//     desc: "Content crafted by experienced educators",
//     icon: "/foundationIcons/Icon4.PNG",
//   },
//   {
//     title: "Empowering",
//     desc: "Learning tools that develop confidence and independence",
//     icon: "/foundationIcons/Icon5.PNG",
//   },
//   {
//     title: "Nurturing",
//     desc: "A warm, child-centered environment focused on growth and curiosity",
//     icon: "/foundationIcons/Icon7.PNG",
//   },
// ];

// export default function Foundation() {
//   return (
//     <section
//       className=" relative py-16 sm:py-16 md:py-20 bg-center bg-cover overflow-hidden"
//       style={{
//         backgroundImage: "url('/cards/BG.jpg')",
//       }}
//     >
//       <div className="max-w-8xl mx-auto px-4 sm:px-6">

//         {/* Heading */}
//         <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 md:mb-14 leading-snug">
//           Shaping a generation of thinkers and dreamers,
//           <br className="hidden sm:block"/>
//           starting with strong foundations.
//         </h2>

//         </div>


//       <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-8xl mx-auto px-8 py-8">

// {features.map((item, i) => (
//   <div
//     key={i}
//     className="
//     group
//     bg-white/30
//     backdrop-blur-md
//     border border-white/40
//     rounded-3xl
//     p-5
//     text-center
//     shadow-lg
//     hover:bg-white/20
//     transition duration-300
//     hover:scale-105
//     "
//   >
//     <img
//       src={item.icon}
//       alt={item.title}
//       className="w-20 h-20 mx-auto mb-4 opacity-120 "
//     />

//     <h3 className="text-lg font-semibold text-gray-900 mb-2">
//       {item.title}
//     </h3>

//     <p className="text-sm text-gray-700 leading-relaxed">
//       {item.desc}
//     </p>
//   </div>
// ))}

// </div>
//     </section>
//   );
// }









"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

const features = [
  {
    title: "Holistic",
    desc: "Early learning approach that nurtures thinking, creativity, and expression",
    icon: "/foundationIcons/Icon1.PNG",
  },
  {
    title: "Progressive",
    desc: "Skill building progression designed to grow with the child",
    icon: "/foundationIcons/Icon2.PNG",
  },
  {
    title: "Joyful",
    desc: "Interactive activities that make learning meaningful",
    icon: "/foundationIcons/Icon3.PNG",
  },
  {
    title: "Research-led",
    desc: "Content crafted by experienced educators",
    icon: "/foundationIcons/Icon4.PNG",
  },
  {
    title: "Empowering",
    desc: "Learning tools that develop confidence and independence",
    icon: "/foundationIcons/Icon5.PNG",
  },
  {
    title: "Nurturing",
    desc: "A warm, child-centered environment focused on growth and curiosity",
    icon: "/foundationIcons/Icon7.PNG",
  },
];

export default function Foundation() {
  return (
    <section
      className="relative py-16 sm:py-16 md:py-20 bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: "url('/cards/BG.jpg')" }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 md:mb-14 leading-snug">
          Shaping a generation of thinkers and dreamers,
          <br className="hidden sm:block" />
          starting with strong foundations.
        </h2>
      </div>

      {/*MOBILE SLIDER */}
      <div className="sm:hidden px-4">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          freeMode={true}
          modules={[FreeMode]}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 1.5 },
          }}
        >
          {features.map((item, i) => (
           <SwiperSlide key={i} className="h-auto">
           <div className="
             h-full min-h-[220px]
             flex flex-col justify-between
             bg-white/30 backdrop-blur-md border border-white/40
             rounded-3xl p-5 text-center shadow-lg
           ">
             
             <div>
               <img
                 src={item.icon}
                 alt={item.title}
                 className="w-16 h-16 mx-auto mb-3"
               />
               <h3 className="text-base font-semibold text-gray-900 mb-1">
                 {item.title}
               </h3>
             </div>
         
             <p className="text-sm text-gray-700 leading-relaxed">
               {item.desc}
             </p>
         
           </div>
         </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 💻 DESKTOP GRID */}
      <div className="hidden sm:grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-8xl mx-auto px-8 py-8">
        {features.map((item, i) => (
          <div
            key={i}
            className="
              group
              bg-white/30
              backdrop-blur-md
              border border-white/40
              rounded-3xl
              p-5
              text-center
              shadow-lg
              hover:bg-white/20
              transition duration-300
              hover:scale-105
            "
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-20 h-20 mx-auto mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-gray-700 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}