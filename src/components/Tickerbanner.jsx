"use client";

function Repeat({ text }) {
  return (
    <div className="flex whitespace-nowrap">
      {[...Array(20)].map((_, i) => (
        <span key={i} className="mx-6 sm:mx-8 md:mx-10 lg:mx-12 whitespace-nowrap 
          text-sm sm:text-base md:text-lg lg:text-3xl font-semibold py-4">
          {text}
        </span>
      ))}
    </div>
  );
}

export default function TickerBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-[#e6ded4]
    h-[260px] sm:h-[320px] md:h-[380px] lg:h-[380px]">

      
      {/* PURPLE */}
      <div className="absolute bottom-[10px] sm:bottom-[15px] md:bottom-[-250px] left-[-60%] sm:left-[-50%] md:left-[-40%] w-[600%] rotate-[4deg] z-0 md:pb-10">
        <div
          className="flex items-center py-4 sm:py-5 md:py-6 bg-[#009dda] text-white animate-leftSlow"
          style={{
            clipPath: "polygon(0 0,100% 0,95% 100%,0% 100%)",
          }}
        >
          <Repeat text="Nurturing Language, One Pod at a Time"/>
        </div>
      </div>
      {/* YELLOW */}
      <div className="absolute top-[60px] sm:top-[80px] md:top-[90px] left-0 w-full rotate-[-9deg] z-20 pt-6 md:pt-10">
        <div
          className="flex items-center py-4 sm:py-5 md:py-6 bg-[#93ca3c] text-white animate-right backdrop-blur-sm w-[600%]"
          style={{
            clipPath: "polygon(0 0,100% 0,96% 100%,0% 100%)",
          }}
        >
          <Repeat text="Decode Sounds. Discover Reading."/>
        </div>
      </div>

      {/* ORANGE */}
      <div className="absolute top-48 left-[-60%] sm:left-[-50%] md:left-[-40%] w-[600%] rotate-[4deg]  z-20 pt-6 md:pt-10">
        <div
          className="flex items-center py-4 sm:py-5 md:py-6 bg-[#c2388b] animate-left text-white"
          style={{
            clipPath: "polygon(0 0,100% 0,95% 100%,0% 100%)",
          }}
        >
          <Repeat text="Little Learners, Big Possibilities."/>
        </div>
      </div>

    </div>
  );
}

