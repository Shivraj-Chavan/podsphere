import { ArrowRight, Smile } from 'lucide-react';

export default function ProblemSolution() {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <div className="w-full max-w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 relative">
          {/* Problems Section - Left Side */}
          <div className="bg-[#0891D1] text-white p-8 md:p-12 relative overflow-hidden min-h-[600px]">
            {/* Decorative yellow arc */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <div className="w-24 h-48 border-8 border-[#F5A623] rounded-r-full border-l-0"></div>
            </div>
            
            <h1 className="text-5xl font-bold mb-8">Problems</h1>
            
            {/* User 01 */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-3 rounded-full font-bold mb-4 shadow-lg">
                <span>User 01</span>
                <Smile className="w-5 h-5" />
              </div>
              
              <div className="space-y-4 ml-2">
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    My child is learning only phonics without understanding how it connects to real life.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    Lessons feel repetitive and lack creativity or exploration.
                  </p>
                </div>
              </div>
            </div>
            
            {/* User 02 */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-3 rounded-full font-bold mb-4 shadow-lg">
                <span className="flex items-center gap-2">
                  695 × 340
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#F5A623] text-black px-6 py-3 rounded-full font-bold mb-4 shadow-lg -ml-32 mt-2">
                <span>User 02</span>
                <Smile className="w-5 h-5" />
              </div>
              
              <div className="space-y-4 ml-2">
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    Children can read sounds, but struggle to build meaning and curiosity.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1" />
                  <p className="text-sm">
                    There is little focus on thinking skills beyond letters and pronunciation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solution Section - Right Side */}
          <div className="bg-[#F5A623] text-black p-8 md:p-12 min-h-[600px]">
            <h1 className="text-5xl font-bold mb-8">Solution</h1>
            
            {/* User 01 */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#0891D1] text-white px-6 py-3 rounded-full font-bold mb-4 shadow-lg">
                <span>User 01</span>
                <Smile className="w-5 h-5" />
              </div>
              
              <div className="space-y-4 ml-2">
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1 text-[#0891D1]" />
                  <p className="text-sm">
                    Integrate phonics with stories, visuals, and real-world themes.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1 text-[#0891D1]" />
                  <p className="text-sm">
                    Help children connect sounds to ideas, imagination, and understanding.
                  </p>
                </div>
              </div>
            </div>
            
            {/* User 02 */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#0891D1] text-white px-6 py-3 rounded-full font-bold mb-4 shadow-lg">
                <span>User 02</span>
                <Smile className="w-5 h-5" />
              </div>
              
              <div className="space-y-4 ml-2">
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1 text-[#0891D1]" />
                  <p className="text-sm">
                    Use engaging activities that combine language with thinking and creativity.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <ArrowRight className="w-6 h-6 flex-shrink-0 mt-1 text-[#0891D1]" />
                  <p className="text-sm">
                    Create a balanced approach that builds both literacy and curiosity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* 3D Character - Centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none hidden md:block">
            <img 
            //   src={characterImage} 
            src='/public/boy.png'
              alt="VR Character" 
              className="w-64 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
