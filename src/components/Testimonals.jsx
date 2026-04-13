import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

import { FaStar, FaHeart, FaBookOpen, FaPenNib } from "react-icons/fa";
import { FaBookmark, FaEdit, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const testimonials = [
    {
          parent: "Raunak Mor & Shobhna Panda",
          child: "Aarvi Mor",
          text: `We would like to express our heartfelt thanks to Shailee Mam for the wonderful role she has played in Aarvi’s early learning journey. Her patient and gentle approach has made a big difference - Aarvi has not only learned a lot but has also developed a real affection for her.
      We truly appreciate the way Shailee mam teaches phonics. Her engaging and consistent style has helped lay a strong foundation for Aarvi. We’ve seen great progress - Aarvi can now confidently form 3- and 4-letter words, which is a big step for her at this age. 
      Her teaching style is structured, clear, yet playful and age-appropriate, which keeps Aarvi engaged and excited to learn. It’s not easy to teach young children online, but Shailee does it effortlessly and effectively.
      Thank you, Shailee Mam, for your dedication and the warmth you bring to your teaching. We’re really happy to have you guiding Aarvi in these formative years.`,
      image:"/profile/ProfilePicture-05.png"
        },
        {
          parent: "Anandi Mungekar ",
          child: "Aadhya",
          text: `A special shoutout to Ma’am, who has been an incredible support throughout our learning journey. Her dedication and patience have made a huge impact on my child’s progress. She took the time to teach every sound and rule thoroughly, always ensuring that concepts were clearly understood and retained. Her calm and composed approach to handling children online is truly admirable.
     Ma’am also made sure to explain the meanings of new words introduced in the curriculum, enriching my child’s vocabulary along the way. What stood out most was her commitment to teaching at my child’s pace - never rushing, never skipping - ensuring that every topic was covered thoughtfully, regardless of time constraints.
      Her efforts have truly paid off. The improvement in my child’s school dictation sheets and everyday writing is clearly visible. It’s a joy to see such progress!
      Heartfelt thanks to Ma’am for being such a wonderful guide and mentor in our phonics journey.
      `,
      image:"/profile/female1.png"
        },
        {
          parent: "Ankita Nandgaonkar",
          child: "Shaurya",
          text: `To Miss Shailee,
      It has been an incredible journey over the past year and today we have completed our phonics class and I just wanted to express my deepest gratitude for everything you’ve done for my child. From the very first class, your warmth, patience, and kindness were evident. You have a truly special gift for teaching – your ability to connect with children, understand their pace, and make learning enjoyable is exceptional.
      
      Phonics can be a challenging subject, especially in the early stages, but you made every concept feel simple, fun, and exciting. You never rushed through anything and always took the time to ensure that my child felt confident and comfortable before moving ahead. Your consistent encouragement and positive reinforcement helped build not only strong reading skills but also a genuine love for learning.
      
      There were days when my child felt tired or distracted, but your calm and patient approach always brought him back with a smile. You celebrated every small achievement and gently guided me through every hurdle. It’s rare to find a teacher who is not just skilled at teaching but also so deeply invested in the child’s growth and well-being.
      
      I truly appreciate the efforts, care, and dedication you’ve shown throughout this year. You’ve laid a strong foundation for my child’s language skills, and that will always stay with us. Thank you for being such a wonderful mentor and for making phonics such a joyful experience.`,
      image:"/profile/female2.png"
        },
        {
          parent: "Arjun’s Parents",
          child: "Arjun",
          text: `
     Since Arjun started classes, we’ve seen such a big improvement. Earlier, he had a hard time understanding the sounds, but now he’s really getting it. He’s much more confident and actually looks forward to every class.
Thank you so much for all the love, patience, and effort you’ve put into teaching Arjun phonics sounds. Because of you, he learned with confidence and joy, and we’ve seen such a positive change in his learning.
Your dedication and caring nature truly made a difference, and we will always be grateful for the strong foundation you gave him. Arjun’s Parents
Ma'am is so kind and patient, and we truly appreciate the way she teaches and disciplines Arjun.
Thank you for making learning fun for Arjun!😊💐`,
image:"/profile/male1.png"
        },
        {
          parent: "Samanvitha’s Parents",
          child: "Samanvitha",
          text: `We had a great experience with ma'am as our child’s phonics teacher.
She was always patient, soft-spoken, and explained things in a way children can easily understand.
Her classes were well-structured, yet fun and interactive.
My 4-year-old picked up phonic sounds and blending much faster than we expected.
She also gave helpful tips for practice at home, which we appreciated.
Thanks to her teaching, my child is now more confident in reading and speaking English.
We feel lucky to have found such a caring and capable teacher.
I would happily recommend her to any family looking for quality early learning.`,
image:"/profile/female3.png"
        },
      
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-200 via-pink-100 to-purple-200">

      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="relative text-pink-600 px-4 py-0 text-2xl font-semibold inline-block
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2
        after:-bottom-1 after:h-[3px] after:w-10 after:bg-pink-600
        after:rounded-full after:animate-pulse">
          Reviews
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
        Happy <span className="text-pink-500">Notes</span>
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        Parents trust our phonics classes for building strong reading
        foundations and confidence in young learners.
      </p>

      {/* Swiper */}
      <div className="relative max-w-6xl mx-auto ">

        {/* Left Arrow */}
        {/* <div className="swiper-button-prev-custom hidden md:flex items-center justify-center absolute -left-14 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-pink-100">
          <FaChevronLeft />
        </div> */}

<div className="
    swiper-button-prev-custom
    flex items-center justify-center
    absolute left-0 md:-left-2 lg:-left-14
    top-1/2 -translate-y-1/2 z-10
    bg-white p-2 md:p-3
    rounded-full shadow-lg
    cursor-pointer hover:bg-pink-100
  ">
    <FaChevronLeft className="text-sm md:text-base" />
  </div>

        {/* Right Arrow */}
        {/* <div className="swiper-button-next-custom hidden md:flex items-center justify-center absolute -right-14 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-pink-100">
          <FaChevronRight />
        </div> */}

<div className="
    swiper-button-next-custom
    flex items-center justify-center
    absolute right-0 md:-right-2 lg:-right-14
    top-1/2 -translate-y-1/2 z-10
    bg-white p-2 md:p-3
    rounded-full shadow-lg
    cursor-pointer hover:bg-pink-100
  ">
    <FaChevronRight className="text-sm md:text-base" />
  </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom"
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="relative mt-20 bg-white rounded-3xl p-8 text-center overflow-visible pt-20 hover:scale-105 transition">

                {/* Avatar */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 flex items-center justify-center ovden">

                  <img
                    src={item.image}
                    alt="parent"
                    className="w-28 h-32 mt-5"
                  />
                  </div>

                {/* Quote */}
                <div className="relative">
                <p
                  className={`text-sm leading-relaxed mt-2 ${
                    expandedIndex === index ? "" : "line-clamp-5"
                  }`}
                >
                  {/* Starting quote */}
                  <img
                    src="/doubleqt.png"
                    alt="quote start"
                    className="inline w-6 mr-2 align-top rotate-[5deg]"
                  />

                  {item.text}

                  {/* Ending quote */}
                  <img
                    src="/doubleqt.png"
                    alt="quote end"
                    className="inline w-6 ml-2 align-bottom rotate-[190deg]"
                  />
                </p>

              </div>

                {item.text.length > 180 && (
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="text-pink-500 text-sm font-semibold mt-3"
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                )}

                {/* Parent */}
                <div className="mt-6">
                  <h3 className="font-semibold text-lg italic">{item.parent}</h3>
                  <p className="text-sm opacity-70">Child: {item.child}</p>

                    {/* Star Rating */}
                <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-sm" />
                  ))}
                </div>
                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      {/* Buttons */}
      {/* <div className="flex justify-center gap-6 mt-12 flex-wrap">

        <button className="flex items-center cursor-pointer gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-400">
          <FaBookmark /> View All Reviews
        </button>

        <button className="flex items-center cursor-pointer gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-400">
          <FaEdit /> Write a Review
        </button>

      </div> */}

      <div className="flex justify-center gap-3 sm:gap-6 mt-12">

      <button className="
        flex items-center justify-center gap-2 
        bg-orange-500 text-white 
        px-4 sm:px-6 py-3 sm:py-3 
        rounded-full font-medium 
        text-sm sm:text-base
        hover:bg-orange-400
        w-1/2 sm:w-auto cursor-pointer
      ">
        <FaBookmark /> View All
      </button>

      <button className="
        flex items-center justify-center gap-2 
        bg-indigo-500 text-white 
        px-4 sm:px-6 py-3 sm:py-3 
        rounded-full font-medium 
        text-sm sm:text-base
        hover:bg-indigo-400
        w-1/2 sm:w-auto cursor-pointer
      ">
        <FaEdit /> Write a Review
      </button>

      </div>

    </section>
  );
}