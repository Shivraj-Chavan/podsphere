// 'use client';
// import React, { useState } from "react";
// import ApplyModal from "../components/ApplyModal";

// const jobs = [
//   {
//     title: "Phonics Teacher (Remote)",
//     type: "Remote | Part time | Experience: 1-2 years",
//     details: [
//       "Mode: Remote",
//       "Working Days: Monday – Saturday",
//       "Working Hours: 3 PM – 9 PM",
//       "(Flexible 3-hour slot)",
//     ],
//     skills:
//       "Key Skills: Strong knowledge of phonics and phonics rules. Excellent Spoken English and child-friendly communication. Comfortable teaching in an online environment.",
//     location: "Location: Remote",
//   },
//   {
//     title: "Sales Executive (Remote)",
//     type: "Remote | Full time | Experience: 1-2 years",
//     details: [
//       "Mode: Remote",
//       "Working Days: Monday – Saturday",
//       "Working Hours: 11 am to 8 pm",
//     ],
//     skills:
//       "Key Skills: Experience in inside sales, telesales, or education counselling. Strong communication and persuasion skills. Ability to build trust and guide parents effectively.",
//     location: "Location: Remote",
//   },
//   {
//     title: "Relationship Manager (Remote)",
//     type: "Remote | Part time | Experience: 1-2 years",
//     details: [
//       "Mode: Remote",
//       "Working Days: Monday – Saturday",
//       "Working Hours: 12 PM – 9 PM",
//     ],
//     skills:
//       "Key Skills: Prior experience in online education or e-learning platforms preferred. Strong communication and coordination skills. Comfortable using.",
//     location: "Location: Remote",
//   },
//   {
//     title: "Content Creator – (Remote)",
//     type: "Full-time / Part-time (depending on project needs)",
//     details: [
//       "Mode: Remote",
//       "Working Days: Monday – Saturday",
//       "Working Hours: 10 PM – 7 PM",
//     ],
//     skills:
//       "Key Skills: Strong English writing and content development skills. Comfortable using tools such as Google Docs, Slides, worksheets tools, or design platforms(canva, sora, others).Attention to detail and ability to follow target schedules.",
//     location: "Location: Remote",
//   },
// ];

// const Careers = () => {
//     const [expanded, setExpanded] = useState({});
//     const [open, setOpen] = useState(false);
//   return (
//     <div>
    
//       {/* HERO IMAGE */}
//       <div className="relative w-full h-[300px] sm:h-[500px] md:h-[800px] overflow-hidden md:rounded-b-4xl">

//         {/* Background Image */}
//         <img
//           src="/careerimg.jpeg"
//           alt="careers"
//           className="
//           w-full h-full object-cover
          
//           /* Mobile */
//           object-[bottom_20%]
          
//           /* Desktop */
//           sm:object-center"
//         />

// {/* Gradient overlay */}
// <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-black/20" />

// {/* Text — bottom on mobile, right-center on desktop */}
// <div className="absolute bottom-6 left-5 right-5 text-white
//                 sm:bottom-10 sm:left-auto sm:right-10 sm:text-right
//                 md:right-16 md:top-1/2 md:bottom-auto md:translate-y-[-50%] md:left-auto">
//   <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold drop-shadow-lg">
//     Careers
//   </h1>
//   <p className="text-sm sm:text-lg md:text-xl mt-2 md:mt-3 drop-shadow-md text-white/90">
//     Inspire Young Minds. <br />
//     Build Meaningful Careers.
//   </p>
// </div>

// </div>

//       {/* JOB CARDS SECTION */}
//       <section
//         className="py-16"
//         style={{
//           backgroundImage: "url('/cards/BG.jpg')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-4 gap-8">
//           {jobs.map((job, index) => (
//           <div
//           key={index}
//           className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:scale-105 transition flex flex-col h-full"
//         >
//               <h3 className="text-xl font-bold mb-2">{job.title}</h3>

//               <p className="text-gray-600 text-sm mb-4">{job.type}</p>
//                   {/* DETAILS */}
//                   <div className="text-sm text-gray-700 space-y-1 mb-4">
//                     {job.details?.map((d, i) => {
//                       if (!d?.includes(":")) {
//                         return <p key={i}>{d}</p>;
//                       }

//                       const [label, value] = d.split(":");

//                       return (
//                         <p key={i}>
//                           <span className="font-bold">{label}:</span> {value}
//                         </p>
//                       );
//                     })}
//                   </div>

//                   {/* SKILLS */}
//                   {(() => {
//                     const [label, value = ""] = job.skills?.split(":") || [];
//                     const isExpanded = expanded[index];

//                     const shouldShowToggle = value && value.length > 300;
//                     const shortText = value.slice(0, 300);

//                     return (
//                       <p className="text-sm text-gray-700 mb-4">
//                         <span className="font-bold">{label}:</span>{" "}

//                         {shouldShowToggle
//                           ? isExpanded
//                             ? value
//                             : shortText + "..."
//                           : value}

//                         {shouldShowToggle && (
//                           <button
//                             onClick={() =>
//                               setExpanded((prev) => ({
//                                 ...prev,
//                                 [index]: !prev[index],
//                               }))
//                             }
//                             className="text-gray-500 ml-2 font-medium"
//                           >
//                             {/* {isExpanded ? "show less" : "show more"} */}
//                           </button>
//                         )}
//                       </p>
//                     );
//                   })()}

//                   {/* LOCATION */}
//                   {(() => {
//                     const [label, value = ""] = job.location?.split(":") || [];

//                     return (
//                       <p className="text-sm text-gray-700 mb-6">
//                         <span className="font-bold">{label}:</span> {value}
//                       </p>
//                     );
//                   })()}

//                   <button onClick={() => setOpen(true)} className="mt-auto w-44 bg-black text-white px-6 py-2  rounded-full hover:bg-gray-800">
//                       APPLY NOW
//                     </button>
//             </div>
//           ))}
//         </div>
//       </section>
//       <ApplyModal isOpen={open} onClose={() => setOpen(false)} />
//     </div>
//   );
// };

// export default Careers;





'use client';
import React, { useState } from "react";
import ApplyModal from "../components/ApplyModal";

const jobs = [
  {
    title: "Phonics Teacher (Remote)",
    type: "Remote | Part time | Experience: 1-2 years",
    details: [
      "Mode: Remote",
      "Working Days: Monday – Saturday",
      "Working Hours: 3 PM – 9 PM",
      "(Flexible 3-hour slot)",
    ],
    skills:
      "Key Skills: Strong knowledge of phonics and phonics rules. Excellent Spoken English and child-friendly communication. Comfortable teaching in an online environment.",
    location: "Location: Remote",
  },
  {
    title: "Sales Executive (Remote)",
    type: "Remote | Full time | Experience: 1-2 years",
    details: [
      "Mode: Remote",
      "Working Days: Monday – Saturday",
      "Working Hours: 11 am to 8 pm",
    ],
    skills:
      "Key Skills: Experience in inside sales, telesales, or education counselling. Strong communication and persuasion skills. Ability to build trust and guide parents effectively.",
    location: "Location: Remote",
  },
  {
    title: "Relationship Manager (Remote)",
    type: "Remote | Part time | Experience: 1-2 years",
    details: [
      "Mode: Remote",
      "Working Days: Monday – Saturday",
      "Working Hours: 12 PM – 9 PM",
    ],
    skills:
      "Key Skills: Prior experience in online education or e-learning platforms preferred. Strong communication and coordination skills. Comfortable using.",
    location: "Location: Remote",
  },
  {
    title: "Content Creator – (Remote)",
    type: "Full-time / Part-time (depending on project needs)",
    details: [
      "Mode: Remote",
      "Working Days: Monday – Saturday",
      "Working Hours: 10 PM – 7 PM",
    ],
    skills:
      "Key Skills: Strong English writing and content development skills. Comfortable using tools such as Google Docs, Slides, worksheets tools, or design platforms(canva, sora, others).Attention to detail and ability to follow target schedules.",
    location: "Location: Remote",
  },
];

const Careers = () => {
  const [expanded, setExpanded] = useState({});
  const [open, setOpen] = useState(false);

  return (
    <div>

      {/* HERO IMAGE */}
      <div className="relative w-full h-[300px] sm:h-[420px] md:h-[560px] lg:h-[800px] overflow-hidden">

        <img
          src="/careerimg.jpeg"
          alt="careers"
          className="w-full h-full object-cover object-[bottom_20%] sm:object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-black/20" />

        <div className="absolute bottom-6 left-5 right-5 text-white
                        sm:bottom-10 sm:left-auto sm:right-10 sm:text-right
                        md:right-16 md:top-1/2 md:bottom-auto md:-translate-y-1/2 md:left-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
            Careers
          </h1>
          <p className="text-sm sm:text-lg md:text-xl mt-2 md:mt-3 drop-shadow-md text-white/90">
            Inspire Young Minds. <br />
            Build Meaningful Careers.
          </p>
        </div>

      </div>

      {/* JOB CARDS SECTION */}
      <section
        className="py-16"
        style={{
          backgroundImage: "url('/cards/BG.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-8xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white/50 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:scale-105 transition flex flex-col h-full"
            >
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>

              <p className="text-gray-600 text-sm mb-4">{job.type}</p>

              {/* DETAILS */}
              <div className="text-sm text-gray-700 space-y-1 mb-4">
                {job.details?.map((d, i) => {
                  if (!d?.includes(":")) {
                    return <p key={i}>{d}</p>;
                  }
                  const [label, value] = d.split(":");
                  return (
                    <p key={i}>
                      <span className="font-bold">{label}:</span> {value}
                    </p>
                  );
                })}
              </div>

              {/* SKILLS */}
              {(() => {
                const [label, value = ""] = job.skills?.split(":") || [];
                const isExpanded = expanded[index];
                const shouldShowToggle = value && value.length > 300;
                const shortText = value.slice(0, 300);
                return (
                  <p className="text-sm text-gray-700 mb-4">
                    <span className="font-bold">{label}:</span>{" "}
                    {shouldShowToggle
                      ? isExpanded ? value : shortText + "..."
                      : value}
                    {shouldShowToggle && (
                      <button
                        onClick={() =>
                          setExpanded((prev) => ({ ...prev, [index]: !prev[index] }))
                        }
                        className="text-gray-500 ml-2 font-medium"
                      />
                    )}
                  </p>
                );
              })()}

              {/* LOCATION */}
              {(() => {
                const [label, value = ""] = job.location?.split(":") || [];
                return (
                  <p className="text-sm text-gray-700 mb-6">
                    <span className="font-bold">{label}:</span> {value}
                  </p>
                );
              })()}

              <button
                onClick={() => setOpen(true)}
                className="mt-auto w-44 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
              >
                APPLY NOW
              </button>
            </div>
          ))}
        </div>
      </section>

      <ApplyModal isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Careers;