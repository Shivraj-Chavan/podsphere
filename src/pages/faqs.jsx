// import { useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";

// const faqs = [
//   {
//     q: "How are the online classes conducted?",
//     a: "All classes are conducted live through a secure video platform. Teachers interact directly with your child, ensuring a personal and engaging learning experience.",
//   },
//   {
//     q: "What devices do we need for the classes?",
//     a: "A laptop, tablet, or computer with a stable internet connection, a camera, and a microphone is all you need. Headphones are optional but can help your child stay focused.",
//   },
//   {
//     q: "How long is each session?",
//     a: "Each session lasts between 30 to 60 minutes, depending on the program and class size. Sessions are short, focused, and age-appropriate.",
//   },
//   {
//     q: "Are the classes live or recorded?",
//     a: "All classes are live and interactive. We believe children learn best through real-time guidance, feedback, and encouragement.",
//   },
//   {
//     q: "What happens if my child misses a class?",
//     a: "Parents can request a make-up class based on teacher availability. We understand young learners may occasionally miss sessions.",
//   },
//   {
//     q: "How qualified are the teachers?",
//     a: "Our teachers are trained early childhood educators with expertise in phonics, literacy, and child engagement.",
//   },
//   {
//     q: "How is the learning progress tracked?",
//     a: "We provide regular progress updates to parents and share insights about learning strengths and next steps.",
//   },
//   {
//     q: "Will my child stay engaged online?",
//     a: "Yes! Sessions include interactive activities, sounds, and visuals that keep children curious and motivated.",
//   },
//   {
//     q: "What is the ideal class size?",
//     a: "Choose between 1:1 personalized sessions or small group classes (up to 4 students).",
//   },
//   {
//     q: "Do you give any homework or practice activities?",
//     a: "We keep it light and fun! Simple exercises are shared occasionally to reinforce learning.",
//   },
//   {
//     q: "How do I know which Pod level is right for my child?",
//     a: "We offer a free consultation or assessment session to place your child at the right level.",
//   },
//   {
//     q: "Can I sit with my child during class?",
//     a: "Parents are welcome to observe initially. Over time, we encourage independent participation.",
//   },
//   {
//     q: "How can I enroll my child?",
//     a: "You can register online or reach out to our team for personalized guidance.",
//   },
//   {
//     q: "What if my child is shy or a slow learner?",
//     a: "Every child learns at their own pace. Our teachers offer gentle encouragement and individual support.",
//   },
//   {
//     q: "Is there a trial class available?",
//     a: "Yes! We offer a trial session so you can experience our teaching style.",
//   },
//   {
//     q: "Can we change the tutor during the course?",
//     a: "Yes, you may request a tutor change at any time if needed.",
//   },
//   {
//     q: "Will you refund the money if we don’t like the course?",
//     a: "Yes, refunds are offered on a pro-rata basis for unused sessions.",
//   },
//   {
//     q: "Do we have to pay the full amount at once?",
//     a: "No. We offer flexible payment options — monthly, quarterly, or per session.",
//   },
// ];

// export default function Faqs() {
//   const [open, setOpen] = useState(null);

//   return (
//     <>
//       <section className="relative bg-white py-24 overflow-hidden ">

//           {/* LEFT Curvy Line */}
//           <video
//   src="/video/loop5.webm"
//   autoPlay
//   loop
//   muted
//   playsInline
//   className="absolute top-[60%] left-[0%] w-[40px] opacity-20 pointer-events-none"
//   style={{
//     position: "absolute",
//     top: "780px",
//     left: "50px",
//     width: "850px",
//     height: "auto",
//     zIndex: "1",
//   }}
// />

// <video
//   src="/video/loop4.webm"
//   autoPlay
//   loop
//   muted
//   playsInline
//   className="absolute top-[60%] left-[0%] w-[40px] opacity-20 pointer-events-none"
//   style={{
//     position: "absolute",
//     top: "180px",
//     left: "80px",
//     width: "650px",
//     height: "auto",
//     zIndex: "1",
//   }}
// />

// <video
//   src="/video/loop2.webm"
//   autoPlay
//   loop
//   muted
//   playsInline
//   className="absolute top-[60%] left-[0%] w-[40px] opacity-20 pointer-events-none"
//   style={{
//     position: "absolute",
//     top: "780px",
//     left: "15px",
//     width: "650px",
//     height: "auto",
//     zIndex: "1",
//   }}
// />

// <video
//   src="/video/loop1.webm"
//   autoPlay
//   loop
//   muted
//   playsInline
//   className="absolute top-[60%] left-[0%] w-[40px] opacity-20 pointer-events-none"
//   style={{
//     position: "absolute",
//     top: "780px",
//     left: "15px",
//     width: "650px",
//     height: "auto",
//     zIndex: "1",
//   }}
// />

// {/* RIGHT Curvy Line */}
// {/* <video
//   autoPlay
//   loop
//   muted
//   playsInline
//   className="absolute right-0 bottom-20 w-40 opacity-70 pointer-events-none"
// >
//   <source src="/video/loop2.webm" type="video/mp4" />
// </video> */}


//           {/* FLOATING ICONS */}
//   <img src="/icons/book.png" className="absolute left-10 top-80 w-20 animate-bounce" />
//   <img src="/icons/painter.png" className="absolute right-12 top-60 w-20 animate-bounce" />
//   <img src="/icons/cube.png" className="absolute left-12 -bottom-200 w-20 animate-bounce" />
//   <img src="/icons/pencil.png" className="absolute left-20 -bottom-40 w-20 animate-bounce" />
//   <img src="/icons/bucket.png" className="absolute right-20 -bottom-200 w-20 animate-bounce" />
//   <img src="/icons/paint.png" className="absolute right-20 -bottom-20 w-20 animate-bounce" />

//         <div className="max-w-5xl mx-auto px-6">

//           {/* ================= HEADER ================= */}
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-16"
//           >
//             <p className="text-xs font-semibold tracking-widest text-pink-500 mb-3">
//               FREQUENTLY ASKED QUESTIONS
//             </p>
//             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
//               We’re Here to Help
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-xl mx-auto">
//               Everything you need to know about our phonics programs and online classes.
//             </p>
//           </motion.div>

//           {/* ================= FAQ CARD ================= */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="bg-white rounded-[32px] p-6 md:p-10 shadow-sm space-y-4 "
//           >
//             {faqs.map((item, i) => (
//               <motion.div
//                 key={i}
//                 layout
//                 className=" rounded-2xl bg-[#FAFAFF] px-6 py-5 cursor-pointer "
//                 onClick={() => setOpen(open === i ? null : i)}
//               > 
//                 <div className="flex justify-between items-center">
//                   <h4 className="font-semibold text-gray-900">
//                     {item.q}
//                   </h4>

//                   <motion.span
//                     animate={{ rotate: open === i ? 180 : 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="text-xl text-pink-500"
//                   >
//                     {open === i ? "−" : "+"}
//                   </motion.span>
//                 </div>

//                 <AnimatePresence>
//                   {open === i && (
//                     <motion.p
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.35, ease: "easeInOut" }}
//                       className="mt-4 text-gray-600 leading-relaxed overflow-hidden"
//                     >
//                       {item.a}
//                     </motion.p>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </section>

      
//     </>
//   );
// }








import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How are the online classes conducted?",
    a: "All classes are conducted live through a secure video platform. Teachers interact directly with your child, ensuring a personal and engaging learning experience.",
  },
  {
    q: "What devices do we need for the classes?",
    a: "A laptop, tablet, or computer with a stable internet connection, a camera, and a microphone is all you need. Headphones are optional but can help your child stay focused.",
  },
  {
    q: "How long is each session?",
    a: "Each session lasts between 30 to 60 minutes, depending on the program and class size. Sessions are short, focused, and age-appropriate.",
  },
  {
    q: "Are the classes live or recorded?",
    a: "All classes are live and interactive. We believe children learn best through real-time guidance, feedback, and encouragement.",
  },
  {
    q: "What happens if my child misses a class?",
    a: "Parents can request a make-up class based on teacher availability. We understand young learners may occasionally miss sessions.",
  },
  {
    q: "How qualified are the teachers?",
    a: "Our teachers are trained early childhood educators with expertise in phonics, literacy, and child engagement.",
  },
  {
    q: "How is the learning progress tracked?",
    a: "We provide regular progress updates to parents and share insights about learning strengths and next steps.",
  },
  {
    q: "Will my child stay engaged online?",
    a: "Yes! Sessions include interactive activities, sounds, and visuals that keep children curious and motivated.",
  },
  {
    q: "What is the ideal class size?",
    a: "Choose between 1:1 personalized sessions or small group classes (up to 4 students).",
  },
  {
    q: "Do you give any homework or practice activities?",
    a: "We keep it light and fun! Simple exercises are shared occasionally to reinforce learning.",
  },
  {
    q: "How do I know which Pod level is right for my child?",
    a: "We offer a free consultation or assessment session to place your child at the right level.",
  },
  {
    q: "Can I sit with my child during class?",
    a: "Parents are welcome to observe initially. Over time, we encourage independent participation.",
  },
  {
    q: "How can I enroll my child?",
    a: "You can register online or reach out to our team for personalized guidance.",
  },
  {
    q: "What if my child is shy or a slow learner?",
    a: "Every child learns at their own pace. Our teachers offer gentle encouragement and individual support.",
  },
  {
    q: "Is there a trial class available?",
    a: "Yes! We offer a trial session so you can experience our teaching style.",
  },
  {
    q: "Can we change the tutor during the course?",
    a: "Yes, you may request a tutor change at any time if needed.",
  },
  {
    q: "Will you refund the money if we don't like the course?",
    a: "Yes, refunds are offered on a pro-rata basis for unused sessions.",
  },
  {
    q: "Do we have to pay the full amount at once?",
    a: "No. We offer flexible payment options - monthly, quarterly, or per session.",
  },
];

export default function Faqs() {
  const [open, setOpen] = useState(null);

  return (
    <section className="relative bg-white py-24 md:py-24 overflow-hidden">

      {/* ───────── BACKGROUND CURVY VIDEO LINES ───────── */}

      {/* LEFT CURLY — hidden on mobile to avoid clutter */}
      <video
        src="/video/loop7.webm"
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute -left-75 top-1/3 -translate-y-1/2 w-[900px] opacity-90 pointer-events-none z-0"
      />

      {/* RIGHT CURLY — hidden on mobile */}
      <video
        src="/video/loop6.webm"
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute -right-72 top-4/5 -translate-y-1/2 w-[900px] opacity-90 rotate-[90deg] pointer-events-none z-0 scale-x-[-1]"
      />

      {/* ───────── CONTENT ───────── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-pink-500 mb-3">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            We're Here to Help
          </h2>
          <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Everything you need to know about our phonics programs and online classes.
          </p>
        </motion.div>

        {/* FAQ CARD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[24px] md:rounded-[32px] p-4 sm:p-6 md:p-10 shadow-sm space-y-3 md:space-y-4 relative z-10"
        >
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              layout
              className="rounded-xl md:rounded-2xl bg-[#FAFAFF] px-4 sm:px-6 py-4 sm:py-5 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex justify-between items-start gap-3">
                <h4 className="font-semibold text-sm sm:text-base text-gray-900 leading-snug">
                  {item.q}
                </h4>
                <motion.span
                  animate={{ rotate: open === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl text-pink-500 flex-shrink-0 mt-0.5 leading-none"
                >
                  {open === i ? "−" : "+"}
                </motion.span>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed overflow-hidden"
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}