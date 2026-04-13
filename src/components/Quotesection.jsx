
// import React from "react";
// import { FaBookOpen, FaHeart, FaPenNib, FaQuoteLeft, FaStar } from "react-icons/fa";

// const QuoteSection = () => {
//   return (
//     <section className="relative w-full bg-[#3b3b3b] py-16 md:py-20 lg:py-24 px-4 sm:px-6 flex justify-center">

//        {/* Floating Icons */}
//        <img
//         src="/icons/robot.png"
//         alt="gift"
//         className="absolute left-20 -top-10 w-30 opacity-90 animate-floatSlow pointer-events-none"
//       />

//       <img
//         src="/icons/paint.png"
//         alt="book"
//         className="absolute right-20 bottom-8 w-28 opacity-90 animate-float pointer-events-none"
//       />

//       <div className="max-w-8xl text-center">
//         <p
//           className="text-white 
//           text-lg 
//           sm:text-xl 
//           md:text-2xl 
//           lg:text-3xl 
//           xl:text-[38px] 
//           leading-relaxed 
//           font-medium"
//           style={{ fontFamily: "'Poppins'" }}
//         >
//           “At Podsphere, we focus on building essential early-learning skills that help children grow with confidence. Through joyful experiences, meaningful activities, and guided exploration, we nurture young minds to think boldly, create freely, and learn with curiosity. Podsphere lays the broad foundation every learner needs.
//           .”
//         </p>
//       </div>

//     </section>
//   );
// };

// export default QuoteSection;


import React from "react";

const QuoteSection = () => {
  return (
    <section className="relative w-full bg-[#3b3b3b] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 flex justify-center overflow-visible">

      {/* Floating Icons */}

      {/* Left Icon */}
      <img
  src="/icons/robot.png"
  alt="robot"
  className="
    absolute 
    left-2 sm:left-10 md:left-20 
    -top-5 sm:-top-14 md:-top-16 
    w-16 sm:w-20 md:w-28 
    opacity-90 animate-floatSlow 
    pointer-events-none
  "
/>

      {/* Right Icon */}
      <img
        src="/icons/paint.png"
        alt="paint"
        className="
          absolute 
          right-2 sm:right-10 md:right-10 
          bottom-1 sm:bottom-6 md:bottom-2 
          w-14 sm:w-20 md:w-28 
          opacity-80 animate-float 
          pointer-events-none
        "
      />

      <div className="max-w-5xl text-center">
        <p
          className="
            text-white 
            text-base 
            sm:text-lg 
            md:text-2xl 
            lg:text-3xl 
            xl:text-[38px] 
            leading-relaxed 
            font-medium
          "
          style={{ fontFamily: "'Poppins'" }}
        >
          “At Podsphere, we focus on building essential early-learning skills that help children grow with confidence. Through joyful experiences, meaningful activities, and guided exploration, we nurture young minds to think boldly, create freely, and learn with curiosity. Podsphere lays the broad foundation every learner needs.”
        </p>
      </div>

    </section>
  );
};

export default QuoteSection;