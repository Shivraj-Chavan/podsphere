

export default function SoundQuizSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-8 overflow-hidden">
      <div className="max-w-8xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-0">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#D94A6A]">AI Chatbot –</span>
            <br />
            <span className="text-[#2D2D2D]">A New Sound Experience</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Bring phonics to life with interactive sound learning. Children don't just read letters —<br />
            they hear them, see them, and experience them through engaging <span className="font-bold">AR visuals</span> that<br />
            make <span className="font-bold">sounds easier to understand</span> and <span className="font-bold">remember</span>.
          </p>
        </div>

        {/* Visual Flow */}
        <div className="relative flex items-center justify-center gap-8 md:gap-12 my-12">
          {/* VR Character */}
          <div className="flex-shrink-0 w-32 md:w-40 lg:w-48">
            <img 
              src='/public/boy.png'
              alt="VR Character" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>

          {/* Arrow 1 */}
          <div className="flex-shrink-0">
            <img
              src="/orangearrow1.png"
              alt="arrow"
              className="w-16 md:w-20 object-contain"
            />
          </div>

          {/* iPhone with Heart */}
          <div className="flex-shrink-0 relative w-48 md:w-56 lg:w-64">
            <img 
              src='/public/phonemockup.png'
              alt="iPhone Frame"
              height='100px' 
              className=" drop-shadow-2xl height-[100px]"
            />
            
            {/* Heart Image Inside Phone */}
            <div className="absolute inset-[4%] flex items-center justify-center overflow-hidden">

<img src="./heart.gif" className=" rounded-3xl" />

                {/* Bottom Circle Button */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-gray-400 bg-gray-100 opacity-40" />
                </div>
          </div>

        {/* Arrow 2 */}
      <div className="flex-shrink-0">
        <img
          src="/orangearrow2.png"
          alt="arrow"
          className="w-16 md:w-20 object-contain"
        />
      </div>
          {/* ABC Blocks */}
          <div className="flex-shrink-0 w-32 md:w-40 lg:w-48">
            <img 
              src='/public/cubebottom.png'
              alt="ABC Blocks" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-0">
          <p className="text-2xl md:text-3xl font-bold text-[#5B4A9A] leading-relaxed">
            Learn sounds the fun way with real-time visual and audio interaction.
          </p>
        </div>
      </div>
    </section>
  );
}
