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
import CONFIG from "../constance";
import axios from "axios";
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

const [open, setOpen] = useState(false);
const [demoData, setDemoData] = useState({
  name: "",
  childName: "",
  age: "",
  phone: "",
  email: "",
  country: ""
});

const [demoLoading, setDemoLoading] = useState(false);
const [demoSuccess, setDemoSuccess] = useState(false);
const [demoError, setDemoError] = useState(false);

const handleDemoSubmit = async (e) => {
  e.preventDefault();

  if (!demoData.name || !demoData.phone || !demoData.email) {
    setDemoError(true);
    return;
  }

  try {
    setDemoLoading(true);
    setDemoError(false);

    const res = await axios.post(
      `${CONFIG.API_BASE_URL}/contact/demo`,
      demoData
    );

    if (res.data?.success) {
      setDemoSuccess(true);
      setDemoData({
        name: "",
        childName: "",
        age: "",
        phone: "",
        email: "",
        country: ""
      });
    } else {
      throw new Error("Failed");
    }

  } catch (err) {
    console.error(err);
    setDemoError(true);
  } finally {
    setDemoLoading(false);
}
};

const handleDemoChange = (e) => {
const { name, value } = e.target;
setDemoData((prev) => ({
  ...prev,
  [name]: value
}));
};

const handleSignIn = async (data) => {
  console.log("Login data:", data);
  setOpenModal(false);
};

  return (
    <>
    <section className="relative bg-white py-24">

       {/* Background Shapes */}

       {/* <video
  src="/video/loop2.webm"
  autoPlay
  loop
  muted
  playsInline
  className="  hidden sm:block
    absolute pointer-events-none opacity-100 z-0 bg-white
    mt-10  sm:mt-0
    w-[600px] bottom-[-30px] right-[-120px]
    sm:w-[650px] sm:bottom-[-40px] sm:right-[-150px]
    md:w-[700px] md:bottom-[-50px] md:right-[-180px]
    lg:w-[700px] lg:top-[700px] lg:left-[1050px] lg:bottom-auto lg:right-auto
  "
/> */}

<video
  src="/video/loop2.webm"
  autoPlay
  loop
  muted
  playsInline
  className="
    hidden sm:block
    absolute pointer-events-none z-0
    w-[500px] md:w-[600px] lg:w-[650px]
    right-[-120px] bottom-[-40px]
    xl:right-[-160px] xl:bottom-[-60px]
  "
/>

    {/* LEFT */}
    <video
  src="/video/loop3.webm"
  autoPlay
  loop
  muted
  playsInline
  className="hidden sm:block not-last:absolute pointer-events-none opacity-100 mt-10 sm:mt-0 bg-white"
  style={{
    top: "20px",
    left: "-170px",
    width: "700px",
    height: "auto",
    transform: "scale(1.6)",   
    transformOrigin: "center"
  }}
/>

      <div className="w-full max-w-[1400px] xl:max-w-[1600px] mx-auto px-6">

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
            
              
              {/* BUTTON */}
              <div className="bg-white rounded-full py-2 px-6 shadow-sm w-50 mx-auto">
                {/* <p onClick={() => {
                  setRole("Signup"); 
                  setOpenModal(true);
                }} 
                className="text-lg font-bold text-center text-black cursor-pointer">
                  JOIN NOW
                </p> */}

                <p
                  onClick={() => {
                    setOpen(true);   
                    setDemoSuccess(false); 
                    setDemoError(false);
                  }}
                  className="text-lg font-bold text-center text-black cursor-pointer"
                >
                  JOIN NOW
                </p>

              </div>
              <p className="text-sm font-medium text-white mt-5">
                  🎯 Outcome: {pod.goal}
                </p>
            
                {pod.highlight && (
                  <p className="text-xs text-white font-semibold mt-2">
                    ⭐ Phonics crash course · Covers all levels
                  </p>
                )}
              </div>
            
            </motion.div>
            );
          })}
        </div>

      </div>
      {/* <SignInModal
  isOpen={openModal}
  onClose={() => setOpenModal(false)}
  onSignIn={handleSignIn}
  role={role}
/> */}

       {/* Popup */}
       {open && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 px-4">

    {/* Modal */}
    <div className="
      w-full max-w-md
      max-h-[90vh] overflow-y-auto
      bg-white/70 backdrop-blur-xl
      border border-white/40
      rounded-2xl shadow-xl
      p-5 sm:p-6 md:p-8
      relative
    ">

      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-700 text-lg sm:text-xl cursor-pointer"
      >
        ✕
      </button>

      <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">
        Book a Free Demo
      </h2>

      <form onSubmit={handleDemoSubmit} className="space-y-3 sm:space-y-4">

        <input
          type="text"
          name="name"
          value={demoData.name}
          onChange={handleDemoChange}
          placeholder="Your Name"
          className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"
        />

        <input
          type="text"
          name="childName"
          value={demoData.childName}
          onChange={handleDemoChange}
          placeholder="Child Name"
          className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"
        />

        <input
          type="number"
          name="age"
          value={demoData.age}
          onChange={handleDemoChange}
          placeholder="Age of the Child (Years)"
          className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"
        />

        <input
          type="tel"
          name="phone"
          value={demoData.phone}
          onChange={handleDemoChange}
          placeholder="Phone / WhatsApp Number"
          className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"
        />

        <input
          type="email"
          name="email"
          value={demoData.email}
          onChange={handleDemoChange}
          placeholder="Email ID"
          className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"
        />

        <input
          type="text"
          name="country"
          value={demoData.country}
          onChange={handleDemoChange}
          placeholder="Country"
          className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"
        />

        {demoError && (
          <p className="text-red-500 text-xs sm:text-sm text-center">
            Please fill required fields
          </p>
        )}

        {demoSuccess && (
          <p className="text-green-600 text-xs sm:text-sm text-center">
            Demo booked successfully 🎉
          </p>
        )}

        <button
          type="submit"
          disabled={demoLoading}
          className="w-full mt-3 sm:mt-4 bg-black text-white py-2.5 sm:py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer text-sm sm:text-base"
        >
          {demoLoading ? "Submitting..." : "Submit"}
        </button>

      </form>
    </div>
  </div>
)}
    </section>


<section className="relative z-2 bg-[#F7F8FE] py-0 pb-10 ">
  <div className="max-w-[1400px] xl:max-w-[1950px] mx-auto px-6 ">

    {/* Header */}
    <div className="text-center mb-10">
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

{/* Poppi section */}
<section className="bg-white py-10 md:py-14">
  <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6">

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="
        rounded-[24px] md:rounded-[36px]
        p-6 sm:p-8 md:p-14
        flex flex-col md:flex-row items-center
        gap-8 md:gap-12
        overflow-hidden
        relative text-white
      "
      style={{
        background: `
          linear-gradient(
            to bottom,
            #140f8f 0%,
            #140f8f 72%,
            rgba(20,15,143,0.95) 82%,
            rgba(20,15,143,0.75) 90%,
            rgba(20,15,143,0.4) 100%
          ),
          linear-gradient(
            to right,
            rgba(56,189,248,0.35) 0%,
            rgba(59,130,246,0.45) 25%,
            rgba(124,58,237,0.5) 60%,
            rgba(236,72,153,0.45) 100%
          )
        `,
      }}
    >

      {/* TEXT */}
      <div className="flex-1 text-center md:text-left z-10">
        <p className="text-xs font-semibold tracking-widest text-cyan-400 mb-3">
          SMART LEARNING BUDDY
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
          Introducing <span className="text-cyan-400">Poppi</span>
        </h2>

        <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-300 max-w-lg mx-auto md:mx-0">
          Poppi is Podsphere's friendly AI companion that supports parents,
          encourages kids, and assists educators - all focused on phonics learning.
        </p>

        <ul className="mt-5 md:mt-6 space-y-3 inline-flex flex-col items-start text-left">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i} className="flex items-center gap-3 text-sm sm:text-base text-gray-200">
                <Icon className="text-cyan-400 shrink-0" size={18} />
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>

      {/* ROBOT */}
      <div className="flex-1 flex justify-center md:justify-end relative z-10">
        <img
          src="/Poppi.png"
          alt="Poppi Robot"
          className="
            w-[220px] sm:w-[260px] md:w-[320px]
            object-contain
            drop-shadow-[0_0_40px_rgba(56,189,248,0.5)]
            animate-float rounded-4xl
          "
        />
      </div>

    </motion.div>
  </div>
</section>
</>
  );
}
