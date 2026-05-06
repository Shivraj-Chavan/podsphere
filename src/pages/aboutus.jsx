'use client';
import {motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { BiGroup } from "react-icons/bi";
import { FaBookOpen, FaChalkboardTeacher, FaSmile, FaUserFriends, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import CONFIG from "../constance";
import axios from "axios";
import DemoModal from "../components/demoModal";

export default function Aboutus () {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [isSolutions, setIsSolutions] = useState(false);
  const [isSolution, setIsSolution] = useState(false);
  const [toggleState, setToggleState] = useState({});
    const [open, setOpen] = useState(false);
  
  const navigate = useNavigate();
  const [demoData, setDemoData] = useState({
    name: "",
    childName: "",
    age: "",
    phone: "",
    email: "",
    country: "",
    pincode: "",
  });
  
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoSuccess, setDemoSuccess] = useState(false);
  const [demoError, setDemoError] = useState(false);

  const isValidPincode = demoData.pincode.length === 6;

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
          country: "",
          pincode: ""
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
 
  // const items = [
  //   "Practice that builds real reading confidence. Our lessons help children apply phonics skills while reading words, sentences, and stories.",
  //   "Connecting sounds to meaning and imagination. Children learn to read with understanding through stories, pictures, and discussions.",
  //   "A step-by-step structured learning path. Children progress through carefully designed levels that build strong literacy foundations.",
  //   "We build language, imagination, and thinking together. Our activities combine phonics with storytelling, vocabulary, and creativity.",
  // ];
  
  const solutions = [
    {
      text: "Boost reading confidence with guided phonics practice through words, sentences, and engaging stories tailored for children.",
    },
    {
      text: "Bridge sounds and meaning using imagination-driven stories, pictures, and rich discussions that deepen comprehension.",
    },
    {
      text: "Follow a structured, level-by-level path designed to progressively build strong and lasting literacy foundations.",
    },
    {
      text: "Combine phonics with storytelling, vocabulary, and creativity to nurture language, imagination, and critical thinking.",
    },
  ];

  const data = [
    {
      title: "Learning That Feels Like an Adventure",
      image:  "/icons/Learning.PNG",
      content:
        "Our lessons aren't just worksheets they're missions, songs, puzzles, and tiny victories. Kids explore sounds as if they're unlocking magical worlds.",
    },
    {
      title: "Personalized & Group Learning Options",
      image: "/icons/Personalized.PNG",
      content: "Programs designed for individual and group learning experiences.",
    },
    {
      title: "Educators Who Inspire, Not Just Instruct",
      image: "/icons/Educators.PNG",
      content: "Our educators guide children with passion and encouragement.",
    },
    {
      title: "Confidence at Every Step",
      image: "/icons/Confidence.PNG",
      content: "Children gain reading confidence through structured learning.",
    },
    {
      title: "Parents as Partners",
      content: "Parents are involved in the learning journey.",
      image: "/icons/Parents.PNG",
    },
  ];


  const items = [
    {
      problem:
        "Children learn phonics rules but struggle to apply them while reading.",
      solution:
        "Practice that builds real reading confidence. Our lessons help children apply phonics skills while reading words, sentences, and stories.",
    },
    {
      problem:
        "My child memorises words but doesn’t understand them.",
      solution:
        "Connecting sounds to meaning and imagination. Children learn to read with understanding through stories, pictures, and discussions.",
    },
    {
      problem:
        "Parents worry if their child is falling behind in reading.",
      solution:
        "A step-by-step structured learning path. Children progress through carefully designed levels that build strong literacy foundations.",
    },
    {
      problem:
        "Many programs focus only on sounds, not thinking.",
      solution:
        "We build language, imagination, and thinking together. Our activities combine phonics with storytelling, vocabulary, and creativity.",
    },
  ];

  return (
    <>
    {/* (1) Yellow section */}
    <section className="relative w-full">

  {/* Background Image */}
  <div className="w-full h-[350px] sm:h-[450px] md:h-[800px] overflow-hidden rounded-b-4xl -mt-10 md:-mt-30">
  <img
    src="about1.jpeg"
    alt="Kids Reading"
    className=" w-full h-full object-cover rounded-b-4xl  
      /* Mobile */
      object-left
       
      /* Desktop */
      md:object-[top_-100px]
    "
  />
</div>

  {/* Text Content */}
  <div className="
    absolute 

    top-60 left-4 
    -translate-y-1/2 

    md:top-140 md:left-30 md:translate-x-0 md:-translate-y-1/2 

    text-white 
    text-left 
    max-w-xs sm:max-w-md
  ">
    <h2 className="text-2xl sm:text-3xl md:text-7xl font-bold leading-tight">
      About <br /> PodSphere
    </h2>

    <p className="mt-3 text-xs sm:text-sm md:text-lg">
      To make every child proudly say :
      <br />
      <span className="font-semibold">“I CAN READ!”</span>
    </p>

    <button
      onClick={() => setOpen(true)}
      className="relative cursor-pointer px-5 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-6 
      rounded-full text-xs sm:text-sm overflow-hidden 
      border border-gray-400 bg-white text-black shadow-md 
      hover:scale-105 transition"
    >
      <span className="relative z-10">Book a Free Demo</span>
    </button>
  </div>

  <DemoModal open={open} onClose={() => setOpen(false)} />

  </section>

{/* (2) sound to stories section */}
<section className="relative bg-white py-12 md:py-16 lg:py-20 overflow-hidden">

  {/* Background Curve */}
  <img
    src="/curvelines/Loop-08.png"
    alt="curve"
    className="
      absolute 
      right-[-90px] sm:right-[-120px] lg:-right-50
      top-[95%] sm:top-[75%] md:top-[80%] lg:top-1
      -translate-y-1/2 lg:translate-y-0
      w-[500px] sm:w-[550px] md:w-[650px] lg:w-[830px]
      opacity-80 lg:opacity-100 z-0
      pointer-events-none"/>

  <div className="w-full max-w-screen-xl xl:max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">

    {/* Left Content */}
    <div className="text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
        From Sounds to Stories
      </h2>

      <p className="text-sm sm:text-base text-gray-600 mb-3 lg:mb-4 leading-relaxed">
      At PodSphere, we believe that reading is the doorway to a child's imagination, confidence, and lifelong learning. Our vision is to inspire children to proudly say <br/>"I can read!" by building strong phonics foundations that make language joyful, meaningful, and accessible.
      </p>

      <p className="text-sm sm:text-base text-gray-600 mb-3 lg:mb-4 leading-relaxed">
      Through thoughtfully designed, story-driven phonics experiences, we transform early reading into an adventure. Our programs combine playful learning, structured phonics instruction, and interactive tools to spark curiosity and nurture confidence.

      </p>

      <p className="text-sm sm:text-base text-gray-600 mb-5 lg:mb-6 leading-relaxed">
      PodSphere was founded by Ms. Shailee Shah and Ms. Vruti Kansara with a commitment to making early literacy engaging, effective, and accessible for children everywhere.
      </p>

      <button
        onClick={() => navigate("/phonicsPods")}
        className="px-5 py-2 rounded-full 
        bg-yellow-300 text-black 
        font-bold text-base sm:text-lg 
        shadow-lg
        hover:bg-yellow-400 
        active:scale-95 
        transition-all duration-200 
        cursor-pointer"
      >
        Explore Our Pods
      </button>
    </div>

    {/* Right Image */}
    <div className="relative flex justify-center">
      <img
        src="/about3.jpeg"
        alt="girl reading"
        className="
          rounded-3xl shadow-xl relative z-10
          w-full max-w-[360px] sm:max-w-[480px] md:max-w-[560px] lg:w-[520px] lg:max-w-none
        "
      />
    </div>

  </div>
</section>

{/* (3) Why choose us section */}

<section className="relative bg-red-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase opacity-80 mb-2">
            WHY CHOOSE US?
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
          Thoughtfully Designed. Joyfully Delivered.

          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/about2.jpeg"
              alt="kid"
              className="rounded-3xl w-[420px] h-[420px] object-cover"
            />
          </div>
          <div className="border border-white/20 rounded-3xl overflow-hidden">
          {data.map((item, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="border-b border-white/20 last:border-none"
              >
                <button
                  onClick={() => setActive(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-12 h-12 object-contain"
                    />

                    <span className="font-medium">{item.title}</span>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Smooth Content */}
                <div
                  className={`px-5 text-sm opacity-90 overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                  style={{ willChange: "max-height" }}
                >
                  {item.content}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>


{/* (4) challenge and solutions section */}
<section className="relative w-full py-20 px-6 bg-gray-200 overflw-hidden">

  {/* IMAGE RIGHT SIDE */}
  <div className="  hidden xl:block
  absolute right-0 bottom-0
  w-[380px] xl:w-[440px]
  h-[520px] xl:h-[620px]
  pointer-events-none">
  <img
    src="/HappyParent.png"
    alt="mother and child"
    className="w-full h-full object-cover object-top"
  />
</div>

  {/* <div className="max-w-5xl"> */}
  <div className="w-full max-w-screen-xl xl:max-w-[1400px] mx-auto pr-0 lg:pr-[320px] xl:pr-[420px]">

    {/* TITLE */}
    <h2 className="text-center text-2xl font-bold text-black mb-6">
      Challenge & Solution
    </h2>

    {/* TOGGLE */}
    <div className="flex items-center justify-center gap-4 mb-10">
     
      <button
        onClick={() => setIsSolution(!isSolutions)}
        className={`w-12 h-7 flex items-center rounded-full p-1 transition ${
          isSolutions ? "bg-green-500" : "bg-red-500"
        }`}
      >
          
        <div
          className={`w-5 h-5  bg-white rounded-full shadow-md transform transition ${
            isSolutions ? "translate-x-7" : ""
          }`}
        />
        <span className="text-white text-md font-bold ms-2">
        ✕
        </span>
      </button>


       <span className="text-gray-400 font-medium">Switch the toggle to find Solution</span>

             <div className="flex items-center bg-lime-400 rounded-full w-14 h-7 pl-2 pr-1">
        <span className="text-white text-lg font-bold">
          ✓
        </span>
        <div className="ml-auto w-5 h-5 bg-white rounded-full shadow"></div>
      </div>
    </div>

    {/* LIST */}
    <div className="space-y-4 max-w-5xl ">

    {items.map((item, i) => {
  const isSolution = toggleState[i];

  return (
    <div
      key={i}
      className="flex items-center gap-6 bg-white rounded-full py-0 pr-5"
    >
      {/* TOGGLE PILL */}
      <div
  onClick={() =>
    setToggleState((prev) => ({
      ...prev,
      [i]: !prev[i],
    }))
  }
  className={`
    relative flex items-center 
    w-[55px] sm:w-[99px]
    h-[28px] sm:h-[45px]
    my-2 ml-2 rounded-full px-1
    cursor-pointer transition
    ${isSolution ? "bg-lime-400 justify-end" : "bg-red-500 justify-start"}
  `}
>

  {/* DESKTOP ICON (outside only) */}
  <span
    className={`
      hidden sm:block
      text-white text-lg font-bold absolute
      ${isSolution ? "left-3" : "right-3"}
    `}
  >
    {isSolution ? "✓" : "✕"}
  </span>

 {/* CIRCLE */}
<div className="w-[18px] h-[18px] sm:w-[32px] sm:h-[32px] bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300">
  
  {/* ICON → only mobile */}
  <span className="sm:hidden text-[10px] font-bold text-black">
    {isSolution ? "✓" : "✕"}
  </span>

</div>
   
</div>

      {/* TEXT */}
      <div className="py-1">
        <p className="text-gray-600 text-sm leading-relaxed">
          {isSolution ? item.solution : item.problem}
        </p>
      </div>
    </div>
  );
})}

</div>

  </div>

</section>
</>
  );
};
