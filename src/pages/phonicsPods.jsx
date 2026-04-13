import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode , Mousewheel, Navigation  } from "swiper/modules";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  Leaf,
  Sprout,
  Flower2,
  Apple,
  Clock,
  Users,
  BookOpen,
  IndianRupee,
  Bot,
  Rocket,
  Heart,
  Handshake
} from "lucide-react";
import "swiper/css";
import "swiper/css/free-mode";

import {  MessageCircle, Mic, BookOpenCheck } from "lucide-react";import SignInModal from "../components/signinPopup";
;

const pods = [
  {
    name: "Seed Pod",
    image: "/pods/SeedPod.png",
    level: "Level 1",
    age: "3 – 3.5 yrs",
    sessions: "30 Sessions",
    classes: "3 classes a week",
    duration: "30 min (1:1) / 35–40 min (Group 1:4)",
    curriculum:
      "Early phonemic awareness, letter sounds, alphabet recognition, sight words",
    // price1: "₹425 / session (1:1)",
    // price4: "₹300 / session (1:4)",
    goal: "Identifies letter sounds & reads 2–3 letter words",
    icon: Leaf,
    bg: "from-blue-500 to-blue-700",
  },
  {
    name: "Sprout Pod",
    image: "/pods/SproutPod.png",
    level: "Level 2",
    age: "3.5 – 4.5 yrs",
    sessions: "52 Sessions",
    classes: "3 classes a week",
    duration: "30 min (1:1) / 35–40 min (Group 1:4)",
    curriculum:
      "Blending, segmenting, CVC words, short vowels, sight words, stories",
    // price1: "₹435 / session (1:1)",
    // price4: "₹310 / session (1:4)",
    goal: "Reads 2–4 letter words & simple sentences",
    icon: Sprout,
    bg: "from-pink-500 to-pink-700",
  },
  {
    name: "Bud Pod",
    image: "/pods/BudPod.png",
    level: "Level 3",
    age: "4 – 5.5 yrs",
    sessions: "65 Sessions",
    classes:
      "3 classes a week  ",
    duration: "35 min (1:1) / 40–60 min (Group 1:4)",
    curriculum:
      "Digraphs, long vowels, simple sentences, sight words, stories",
    // price1: "₹445 / session (1:1)",
    // price4: "₹320 / session (1:4)",
    goal: "Reads confidently & applies phonics rules",
    icon: Flower2,
    bg: "from-green-500 to-green-700",
  },
  {
    name: "Bloom Pod",
    image: "/pods/BloomPod.png",
    level: "Level 4",
    age: "5 – 6.5 yrs",
    sessions: "30 Sessions",
    classes:
      "3 classes a week ",
    duration: "35 min (1:1) / 40–60 min (Group 1:4)",
    curriculum:
      "Reading fluency, comprehension, spelling patterns, stories",
    // price1: "₹455 / session (1:1)",
    // price4: "₹330 / session (1:4)",
    goal: "Fluent, confident reader",
    icon: Flower2,
    bg: "from-red-500 to-red-700",
  },
  {
    name: "Fruit Pod",
    image: "/pods/FruitPod.png",
    level: "Level 5",
    age: "6+ yrs",
    sessions: "55 Sessions",
    classes: "3 classes a week",
    duration: "35 min (1:1)",
    curriculum:
      "40+ sounds, blending, segmenting, phonics rules, stories",
    // price1: "₹465 / session (1:1)",
    goal: "Independent reader & strong phonics mastery",
    icon: Apple,
    bg: "from-orange-400 to-orange-600",
    highlight: true,
  },
];


const points = [
    {
      icon: Rocket,
      title: "Story-Driven Phonics Learning",
      desc: "We craft immersive, story-driven phonics programs that transform learning into an adventure — sparking curiosity, building confidence, and unlocking the joy of reading.",
      image: "/pods/Story.jpeg"
    },
    {
      icon: Users,
      title: "Personalized & Small Group Learning Options",
      desc: "Every child learns in their own rhythm. Choose 1:1 attention or small, social group pods both equally warm and engaging. ",
      image: "/pods/Personalized.jpeg"
    },
    {
      icon: Heart,
      title: "Caring, Trained Educators",
      desc: "Our teachers are storytellers and cheerleaders who create safe, joyful spaces for confident learning.",
      image: "/pods/Caring.jpeg"
    },
    {
      icon: Leaf,
      title: "Confidence at Every Step",
      desc: "We spotlight every milestone no matter how small. The smile when they read a word for the first time ? That's our favourite moment too. ",
      image: "/pods/Confidence.jpeg"
    },
    {
      icon: Handshake,
      title: "Parents as Partners",
      desc: "You’re always in the loop through progress updates, at-home tips, and open communication. It truly takes a village and we're part of yours.",
      image: "/pods/Parents.jpeg"
    },
    {
      icon: Handshake,
      title: "Meet Poppi Your Friendly Phonics Guide",
      desc: "Got a phonics question? Poppi is here to help! Ask about sounds, spelling rules, or tricky words and get simple explanations you can use right away with your child.",
      image: "/robot.JPEG"
    },
  ];

  const features = [
    {
      icon: MessageCircle,
      text: "Answers parent queries instantly",
    },
    // {
    //   icon: BookOpenCheck,
    //   text: "Shares word-of-the-day & phonics tips",
    // },
    {
      icon: Mic,
      text: "Encourages kids with phonics sound voice notes",
    },
    {
      icon: Bot,
      text: "Assists logged-in teachers & staff (phonics-only support)",
    },
  ];

export default function PhonicsPods() {
  const prevRef = useRef(null);
const nextRef = useRef(null);
const [openModal, setOpenModal] = useState(false);
const [role, setRole] = useState("Signup");

const handleSignIn = async (data) => {
  console.log("Login data:", data);
  setOpenModal(false);
};

  return (
    <>
    <section className="relative bg-white py-24">

       {/* Background Shapes */}
      {/* RIGHT  */}
 
      {/* <video
        src="/video/loop2.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-[60%] left-[80%] w-[400px] opacity-100 pointer-events-none"
        style={{
          position: "absolute",
          top: "700px",
          left: "1050px",
          width: "700px",
          height: "auto",
          zIndex: "1",
        }}
      /> */}

<video
  src="/video/loop2.webm"
  autoPlay
  loop
  muted
  playsInline
  className="
    absolute pointer-events-none opacity-100 z-0
    w-[600px] bottom-[-30px] right-[-120px]
    sm:w-[650px] sm:bottom-[-40px] sm:right-[-150px]
    md:w-[700px] md:bottom-[-50px] md:right-[-180px]
    lg:w-[700px] lg:top-[700px] lg:left-[1050px] lg:bottom-auto lg:right-auto
  "
/>

    {/* LEFT */}
    <video
      src="/video/loop3.webm"
      autoPlay
      loop
      muted
      playsInline
      className="absolute pointer-events-none opacity-100"
      style={{
        position: "absolute",
        top: "20px",     
        left: "-170px",    
        width: "700px",  
        height: "auto",
        transform: "scale(1.6)",
        transformOrigin: "center"
      }}
    />

      <div className="max-w-8xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 relative z-15"
        >
          <p className="text-xs font-semibold tracking-widest text-pink-500 mb-3 ">
            PHONICS PODS
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 ">
            Learning Paths That Grow With Your Child
          </h2>
        </motion.div>

        {/* POD CARDS */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4"> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {pods.map((pod, i) => {
            const Icon = pod.icon;
            return (
              <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl p-4 z-2 shadow-sm hover:shadow-md transition bg-gradient-to-b ${pod.bg} hover:scale-105 flex flex-col justify-between h-full`}
            >
              
              {/* CONTENT */}
              <div>
                {/* Title */}
                <div className="flex items-center justify-center gap-3 mb-3 pt-2 pb-1">
                <h3 className="text-xl font-bold text-white text-center">
                  {pod.name}
                </h3>
              </div>
            
                {/* Image */}
                <div className="w-full h-50 rounded-2xl overflow-hidden mb-5 bg-white/40">
                  <img
                    src={pod.image}
                    alt={pod.name}
                    className="w-full h-full object-cover"
                  />
                </div>
            
                <p className="text-sm text-white mb-2">
                  {pod.level} : Age {pod.age}
                </p>
            
                <ul className="space-y-2 text-sm text-white mb-5">
                  <li className="flex gap-2"><Clock size={16}/> {pod.sessions}</li>
                  <li className="flex gap-2"><Users size={20}/> {pod.classes}</li>
                  <li className="flex gap-2"><Users size={16}/> Duration: {pod.duration}</li>
                  <li className="flex gap-2"><BookOpen size={25}/> {pod.curriculum}</li>
                </ul>
            
                <p className="text-sm font-medium text-white mb-5">
                  🎯 Outcome: {pod.goal}
                </p>
            
                {pod.highlight && (
                  <p className="text-xs text-white font-semibold mb-4">
                    ⭐ Phonics crash course · Covers all levels
                  </p>
                )}
              </div>
            
              {/* BUTTON */}
              <div className="bg-white rounded-full py-2 px-6 shadow-sm w-50 mx-auto">
                <p onClick={() => {
    setRole("Signup"); 
    setOpenModal(true);
  }} 
  className="text-lg font-bold text-center text-black cursor-pointer">
                  JOIN NOW
                </p>
              </div>
            
            </motion.div>
            );
          })}
        </div>

      </div>
      <SignInModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
  onSignIn={handleSignIn}
  role={role}
/>
    </section>


<section className="relative z-2 bg-[#F7F8FE] py-0 pb-10 ">
  <div className="max-w-8xl mx-auto px-6 ">

    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-xs font-semibold tracking-widest text-pink-500 mb-3 pt-7">
        WHY PODSPHERE
      </p>
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
        Why Parents Choose Podsphere
      </h2>
    </div>

    <div className="flex justify-end gap-3 mb-6">
  <button
    ref={prevRef}
    className="bg-white hover:scale-110 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
  >
    ←
  </button>

  <button
    ref={nextRef}
    className="bg-white hover:scale-110 shadow-md rounded-full w-10 h-10 flex items-center justify-center"
  >
    →
  </button>
</div>

<Swiper
  modules={[FreeMode, Mousewheel, Navigation]}
  spaceBetween={20}
  slidesPerView={3.5}
  grabCursor={true}
  freeMode={true}
  mousewheel={true}
  speed={600}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  breakpoints={{
    0: { slidesPerView: 1.2 },
    640: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3.5 },
  }}
>
      {points.map((item, i) => {
        const Icon = item.icon;

        return (
          <SwiperSlide key={i}>
            <div className="rounded-b-[30px] h-[535px] xl:h-[490px] overflow-hidden bg-white shadow-md hover:shadow-xl transition relative">

              {/* Top Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Image */}
              <div className="h-80 absolute bottom-0 w-full">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>

  </div>
</section>


<section className="bg-white py-10 md:py-14">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-[#FFF0F4] rounded-[24px] md:rounded-[36px] p-6 sm:p-8 md:p-14 flex flex-col md:flex-row items-center gap-8 md:gap-10"
    >
      {/* Robot Avatar — shown on top for mobile */}
      <div className="flex md:hidden w-20 h-20 rounded-full bg-pink-500 text-white items-center justify-center text-3xl shadow-lg shrink-0">
        🤖
      </div>

      {/* Left — Text Content */}
      <div className="flex-1 text-center md:text-left">
        <p className="text-xs font-semibold tracking-widest text-pink-500 mb-3">
          SMART LEARNING BUDDY
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Introducing <span className="text-pink-500">Poppi 🤖</span>
        </h2>
        <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-600 max-w-lg mx-auto md:mx-0">
          Poppi is Podsphere's friendly AI companion that supports parents,
          encourages kids, and assists educators all focused on phonics learning.
        </p>

        <ul className="mt-5 md:mt-6 space-y-3 inline-flex flex-col items-start text-left">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-700">
                <Icon className="text-pink-500 shrink-0" size={18} />
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right — shown on desktop only */}
      <div className="hidden md:flex w-32 h-32 rounded-full bg-pink-500 text-white items-center justify-center text-4xl shadow-lg shrink-0">
        🤖
      </div>
    </motion.div>

  </div>
</section>
</>
  );
}
