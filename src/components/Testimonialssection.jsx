import React from 'react';
import { Send, MapPin, Mail, Phone, Facebook, Instagram, Youtube } from 'lucide-react';
import Footer from './Footer';

const PodSphereLanding = () => {
  return (
    <div className=" text-[#333333] bg-no-repeat"
    style={{
      backgroundImage: "url('/Line.jpg')",
      backgroundSize: "contain",
      backgroundPosition:"30% 60%"
    }}>
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen px-6 lg:px-20 pt-16">
        {/* Wavy Background Line (Simplified SVG) */}
        {/* <div className="absolute top-1/2 left-0 w-full -z-10 opacity-40">
          <svg viewBox="0 0 1440 320" className="w-full">
            <path 
              fill="#8CC63F" 
              d="M0,160L80,176C160,192,320,224,480,213.3C640,203,800,149,960,138.7C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div> */}

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Phone */}
          <div className="lg:col-span-4 space-y-8">
            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-[#E94E77] block">Phonics</span>
              <span className="text-[#E94E77]">Sound</span> <span className="text-black">Quiz</span>
            </h1>
            
            <div className="relative w-full max-w-[300px] border-[8px] border-black rounded-[3rem] overflow-hidden shadow-2xl aspect-[9/18]">
               {/* Phone Mockup Content */}
               <div className="w-full h-full bg-[#FFDADA] flex items-center justify-center italic text-gray-400">
                  Quiz UI Placeholder
               </div>
            </div>
          </div>

          {/* Middle Column: Text Content */}
          <div className="lg:col-span-8 pt-10 relative">
            <p className="text-lg leading-relaxed text-[#555]">
              Turn phonics practice into an exciting game. Children listen to sounds, identify the 
              correct letters, and test their understanding through <span className="font-bold text-black">fun, interactive quizzes</span> that 
              <span className="font-bold text-black"> build confidence</span> and improve <span className="font-bold text-black">sound recognition</span>.
            </p>

            <div className="mt-20 space-y-2 font-fredoka">
              <h2 className="text-4xl font-bold leading-snug">
                <span className="text-[#E94E77]">Learn, </span>
                <span className="text-[#00ADEF]">play, </span>
                <span className="text-black">and </span>
                <span className="text-[#F7941D]">master phonics sounds</span>
              </h2>
              <p className="text-3xl   ">
                through quick challenges and joyful <br/> competition.
              </p>
            </div>
            <img 
              src='./cubebottom.png'
              alt="ABC Blocks" 
              className="absolute w-56 -bottom-1 -rotate-45 -left-5 h-auto drop-shadow-2xl"
            />
            {/* Floating 3D Blocks Placeholder */}
            {/* <div className="mt-12 flex gap-4 animate-bounce">
               <div className="w-12 h-12 bg-[#8CC63F] rounded shadow-lg flex items-center justify-center text-white font-bold rotate-12">A</div>
               <div className="w-12 h-12 bg-[#E94E77] rounded shadow-lg flex items-center justify-center text-white font-bold -rotate-12">B</div>
               <div className="w-12 h-12 bg-[#F7941D] rounded shadow-lg flex items-center justify-center text-white font-bold rotate-6">C</div>
            </div> */}
            <div className="flex justify-end">

             <img 
              src="/public/boy2.png" 
              alt="Learning Kid" 
              className="w-full max-w-md object-contain"
              />
              </div>
          </div>

    
        </div>
      </section>
    </div>
  );
};

export default PodSphereLanding;