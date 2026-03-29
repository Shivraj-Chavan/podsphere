"use client";

const cards = [
  // "/cards/SL1.PNG",
  // "/cards/SL2.PNG",
  // "/cards/SL3.PNG",
  // "/cards/SL4.PNG",
  // "/cards/SL5.PNG",
  // "/cards/SL6.PNG",
  "/cards/Foundation.png"
];


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
      className=" relative py-16 sm:py-16 md:py-20 bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage: "url('/cards/BG.jpg')",
      }}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 md:mb-14 leading-snug">
          Shaping a generation of thinkers and dreamers,
          <br className="hidden sm:block"/>
          starting with strong foundations.
        </h2>

        {/* Cards */}
        {/* <img src="/cards/Foundation.png" alt="" />
        <div className="
        grid
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6
        place-items-center
        "> */}
          {/* {cards.map((card, index) => (
            <div
              key={index}
              className="
              w-full
              max-w-[160px]
              sm:max-w-[250px]
              md:max-w-[250px]
              transition-transform duration-500
              "
            >
              <img
                src={card}
                alt="card"
                className="w-full h-auto"
              />
            </div>
          ))} */}

        </div>

      {/* </div> */}



      <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-8xl mx-auto px-8 py-8">

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
      className="w-20 h-20 mx-auto mb-4 opacity-120 "
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