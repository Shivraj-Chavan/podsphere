// import { motion } from 'motion/react';
// import { Search, Lightbulb, BookOpen } from 'lucide-react';

// export default function ResearchSection() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-400 overflow-hidden relative">
//       {/* Decorative Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Green curved lines */}
//         <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1536 800">
//           <path
//             d="M 0 50 Q 100 150, 200 100 T 400 120"
//             stroke="rgba(132, 204, 22, 0.3)"
//             strokeWidth="40"
//             fill="none"
//             strokeLinecap="round"
//           />
//           <path
//             d="M 0 500 Q 150 600, 300 550 T 600 580"
//             stroke="rgba(163, 230, 53, 0.25)"
//             strokeWidth="60"
//             fill="none"
//             strokeLinecap="round"
//           />
//         </svg>
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 px-8 py-12 max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h1 className="text-5xl md:text-6xl font-bold">
//             <span className="text-pink-600">Background</span>{' '}
//             <span className="text-gray-800">&</span>{' '}
//             <span className="text-pink-600">User Research</span>
//           </h1>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//           className="flex items-center gap-3 mb-8"
//         >
//         </motion.div>

//         <div className="bg-white rounded-t-[40px] pt-16 pb-20 px-8 -mt-10 relative z-20">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 1.4 }}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
//         >
//            {/* Card 1 */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 1.6 }}
//             whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             className="bg-white rounded-2xl shadow-xl p-8"
//           >
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
//                 <Search className="w-8 h-8 text-pink-600" />
//               </div>
//             </div>
//             <div className="text-center">
//               <div className="text-5xl font-bold text-blue-500 mb-2">71%</div>
//               <div className="text-xl font-semibold text-blue-500 mb-4">
//                 says lesson is easier
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 As AR Helps To Visualize Complex Subjects Like Maths, Physics And Chemistry, It Is
//                 Easier Now To Understand The Theories.
//               </p>
//             </div>
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 1.7 }}
//             whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             className="bg-white rounded-2xl shadow-xl p-8"
//           >
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-full flex items-center justify-center">
//                 <Lightbulb className="w-8 h-8 text-yellow-500 fill-yellow-500" />
//               </div>
//             </div>
//             <div className="text-center">
//               <div className="text-5xl font-bold text-blue-500 mb-2">62%</div>
//               <div className="text-xl font-semibold text-pink-600 mb-4">
//                 agrees AR is interactive
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Students Agree, AR Makes Everything Lively, Thus Its More Easier To Engage In
//                 Lessons And Not Getting Bored.
//               </p>
//             </div>
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 1.8 }}
//             whileHover={{ y: -10, transition: { duration: 0.3 } }}
//             className="bg-white rounded-2xl shadow-xl p-8"
//           >
//             <div className="flex justify-center mb-4">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
//                 <BookOpen className="w-8 h-8 text-blue-600" />
//               </div>
//             </div>
//             <div className="text-center">
//               <div className="text-5xl font-bold text-pink-600 mb-2">40%</div>
//               <div className="text-xl font-semibold text-pink-600 mb-4">
//                 says education is more fun now
//               </div>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 Students Agree AR Transforms Education Into Storytelling, Which Makes It More Fun
//                 To Learn.
//               </p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//       </div>
//       </div>
  
//   );
// }






import { motion } from "motion/react";
import { Search, Lightbulb, BookOpen } from "lucide-react";

export default function ResearchSection() {
  return (
    <section className="relative w-full overflow-hidden "
    style={{
      background: "linear-gradient(to bottom, #FFE156 0%, #FFE156 65%, #FFFFFF 65%, #FFFFFF 100%)",
    }}
    >

      {/* ================= YELLOW BACKGROUND ================= */}
      <div className=" pt-24 pb-40 relative">
        
        {/* Decorative green curves */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          viewBox="0 0 1536 800"
        >
          <path
            d="M 0 120 Q 200 220 420 180"
            stroke="rgba(132, 204, 22, 0.35)"
            strokeWidth="40"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 0 520 Q 260 640 520 580"
            stroke="rgba(163, 230, 53, 0.25)"
            strokeWidth="60"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold">
            <span className="text-pink-600">Background</span>{" "}
            <span className="text-gray-800">&</span>{" "}
            <span className="text-pink-600">User Research</span>
          </h1>
        </motion.div>
      </div>

      {/* ================= WHITE SECTION ================= */}
      <div className=" relative -mt-2 pt-3 pb-20">
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="/Group 902.png"   
            alt="Research cards"
            className="
              w-full 
              max-w-6xl 
              object-contain
              drop-shadow-[0_25px_60px_rgba(0,0,0,0.25)]
            " 
          />
        </motion.div>
      </div>

      </div>
    </section>
  );
}

