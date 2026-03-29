import React, { useState, useRef, useEffect } from 'react';

const PhonicsPods = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white w-full overflow-hidden ">

      {/* ── TOP ROW: "Explore Pods" left + description right ── */}
      <div className="max-w-5xl mx-auto px-8 pt-12 pb-4 flex flex-col md:flex-row items-center md:items-start gap-12">
  
  {/* Left: Title + Arrow */}
  <div className="relative flex items-center gap-6">
    <h2 
      style={{
        color: '#EF4444',
        fontWeight: 600,
        fontSize: 'clamp(2rem,4vw,2.8rem)',
        lineHeight: '107%',
        fontFamily: "poppins",
        fontStyle: "semibold"
      }}
    >
      Explore<br />Pods
    </h2>

   {/* Curvy Arrow Image */}
    <img
      src="/curlyarrow.png"
      alt="Curvy Arrow"
      className="hidden md:block w-[70px] h-[45px] object-contain"
    />
  </div>

  {/* Right: Description */}
  <div className="flex-1 max-w-2xl">
    <p
      style={{
        color: '#374151',
        fontSize: 19,
        lineHeight: 1.7,
        textAlign: 'justify-center',
        fontFamily:"Poppins",
        fontWeight:500,
        fontStyle: "regular"
      }}
    >
      At <strong>Podsphere</strong>, we focus on building essential early-learning
      skills that help children grow with confidence. Through joyful experiences,
      meaningful activities, and guided exploration, we nurture young minds to
      think boldly, create freely, and learn with curiosity.{' '}
      <strong>Podsphere</strong> lays the broad foundation every learner needs.
    </p>
  </div>

</div>


      {/* ── PHONE MOCKUPS BAND ── */}
      <div className="relative bg-white py-5">
  
  {/* Yellow bottom area */}
  <div className="absolute bottom-0 left-0 w-full h-72 bg-[#F9E03B]"></div>

  {/* Content */}
  <div className="relative max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">
    
    <div className="flex justify-center md:justify-end w-full md:w-2/3">
      <img
        src="/mockup.png"
        alt="Phonics Pods Screens"
        className="h-[380px] md:h-[460px] lg:h-[520px] w-auto object-contain"
      />
    </div>

    <div className="flex justify-center md:justify-start w-full md:w-1/4">
      <img
        src="/phone.png"
        alt="Empowering Innovation"
        className="h-[420px] md:h-[420px] w-auto object-contain"
      />
    </div>

  </div>
</div>

    </section>
  );
};

export default PhonicsPods;