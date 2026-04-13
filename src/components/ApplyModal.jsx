// import { useState } from "react";
// import { X } from "lucide-react";

// export default function ApplyModal({ isOpen, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     position: "",
//     mobile: "",
//     nationality: "",
//     city: "",
//     message: "",
//     resume: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setForm({
//       ...form,
//       [name]: files ? files[0] : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     alert("Application Submitted");
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
//       <div className="bg-white w-[750px] rounded-3xl px-6 pt-0 relative shadow-xl h-[90vh] overflow-y-auto ">

//         {/* Close Button */}
//    <div className="sticky top-0 bg-white pt-6">
//    <button
//           onClick={onClose}
//           className="absolute right-0 top-5 text-gray-400 hover:text-black"
//         >
//           <X size={24} />
//         </button>

//         <h2 className="text-2xl font-semibold text-center mb-6">
//           Apply for Position
//         </h2>
//    </div>

//         <form onSubmit={handleSubmit} className="space-y-2">

//           {/* Name */}
//           <div>
//             <label className="font-medium">Full Name *</label>
//             <input
//               name="name"
//               placeholder="Enter your full name"
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-xl p-3 outline-none"
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="font-medium">Email Address *</label>
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email address"
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-xl p-3 outline-none"
//               required
//             />
//           </div>

//           {/* Position Dropdown */}
//           <div>
//             <label className="font-medium">Position *</label>
//             <select
//               name="position"
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-xl p-3 outline-none"
//               required
//             >
//               <option value="">Select a role</option>
//               <option>Phonics Teacher </option>
//               <option>Sales Executive </option>
//               <option>Relationship Manager</option>
//               <option>Content Creator </option>
//             </select>
//           </div>

//           {/* Mobile + Country */}
//           <div className="flex gap-3">
//             <div className="w-[35%]">
//               <label className="font-medium">Country Code</label>
//               <select className="w-full mt-1 border border-gray-300 rounded-xl p-3">
//                 <option>+91 (India)</option>
//                 <option>+1 (USA)</option>
//               </select>
//             </div>

//             <div className="w-[65%]">
//               <label className="font-medium">Mobile Number *</label>
//               <input
//                 name="mobile"
//                 placeholder="Enter mobile number"
//                 onChange={handleChange}
//                 className="w-full mt-1 border border-gray-300 rounded-xl p-3"
//                 required
//               />
//             </div>
//           </div>

//           {/* Nationality */}
//           <div className="flex gap-8">
//           <div>
//             <label className="font-medium">Nationality *</label>
//             <input
//               name="nationality"
//               placeholder="Enter your nationality"
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-xl p-3"
//               required
//             />
//           </div>

//           {/* City */}
//           <div>
//             <label className="font-medium">City *</label>
//             <input
//               name="city"
//               placeholder="Enter your city"
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-xl p-3"
//               required
//             />
//           </div>
//           </div>

//           {/* Message */}
//           <div>
//             <label className="font-medium">
//               Why are you interested in this position?
//             </label>
//             <textarea
//               name="message"
//               placeholder="Tell us why you're interested in this position..."
//               onChange={handleChange}
//               className="w-full mt-1 border border-gray-300 rounded-xl p-3 h-24"
//             />
//           </div>

//           {/* Upload Resume */}
//           <div>
//             <label className="font-medium">Upload Resume *</label>
//             <label className="mt-2 flex items-center justify-center border-2 border-dashed border-purple-400 rounded-xl p-6 cursor-pointer">
//               <span className="text-gray-500">
//                 Choose file or drag and drop
//               </span>
//               <input
//                 type="file"
//                 name="resume"
//                 onChange={handleChange}
//                 className="hidden"
//                 required
//               />
//             </label>
//           </div>

//           {/* Buttons */}
//           <div className="flex sticky bg-white pb-6 pt-3 bottom-0 gap-4 mt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="w-1/2 bg-gray-200 py-3 rounded-xl font-medium hover:font-semibold hover:scale-105"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="w-1/2 py-3 rounded-xl text-white font-medium hover:font-semibold
//               bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105" 
//             >
//               Submit Application
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   );
// }



// import { useState } from "react";
// import { X } from "lucide-react";

// export default function ApplyModal({ isOpen, onClose }) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     position: "",
//     mobile: "",
//     countryCode: "+91 (India)",
//     nationality: "",
//     city: "",
//     message: "",
//     resume: null,
//   });
//   const [fileName, setFileName] = useState("");

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (files) {
//       setForm({ ...form, [name]: files[0] });
//       setFileName(files[0]?.name || "");
//     } else {
//       setForm({ ...form, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//     alert("Application Submitted");
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4"
//       style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
//       onClick={onClose}
//     >
//       <div
//         className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl flex flex-col overflow-hidden"
//         style={{ maxHeight: "92vh" }}
//         onClick={(e) => e.stopPropagation()}
//       >

//         {/* ── Sticky Header ── */}
//         <div className="shrink-0 px-5 sm:px-8 pt-5 pb-4 border-b border-gray-100 bg-white">
//           {/* Top accent */}
//           <div
//             className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
//             style={{ background: "linear-gradient(to right, #a855f7, #ec4899, #f43f5e)" }}
//           />

//           <button
//             onClick={onClose}
//             className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
//             style={{ background: "rgba(0,0,0,0.06)", color: "#9ca3af" }}
//           >
//             <X size={16} />
//           </button>

//           <div className="text-center pr-6">
//             <div
//               className="mx-auto mb-2 w-10 h-10 rounded-2xl flex items-center justify-center"
//               style={{ background: "linear-gradient(135deg, #f3e8ff, #fce7f3)" }}
//             >
//               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth={1.8}>
//                 <path strokeLinecap="round" strokeLinejoin="round"
//                   d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
//               </svg>
//             </div>
//             <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
//               Apply for Position
//             </h2>
//             <p className="text-xs text-gray-400 mt-0.5">Fill in your details below</p>
//           </div>
//         </div>

//         {/* ── Scrollable Form ── */}
//         <div className="overflow-y-auto flex-1 px-5 sm:px-8 py-5">
//           <form onSubmit={handleSubmit} className="space-y-4">

//             {/* Full Name */}
//             <Field label="Full Name *">
//               <Input name="name" placeholder="Enter your full name" onChange={handleChange} required />
//             </Field>

//             {/* Email */}
//             <Field label="Email Address *">
//               <Input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} required />
//             </Field>

//             {/* Position */}
//             <Field label="Position *">
//               <div
//                 className="flex items-center rounded-2xl px-3.5"
//                 style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}
//               >
//                 <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth={1.8}>
//                   <path strokeLinecap="round" strokeLinejoin="round"
//                     d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
//                 </svg>
//                 <select
//                   name="position"
//                   onChange={handleChange}
//                   required
//                   className="flex-1 bg-transparent text-sm text-gray-800 outline-none border-none py-3 cursor-pointer"
//                 >
//                   <option value="">Select a role</option>
//                   <option>Phonics Teacher</option>
//                   <option>Sales Executive</option>
//                   <option>Relationship Manager</option>
//                   <option>Content Creator</option>
//                 </select>
//               </div>
//             </Field>

//             {/* Mobile */}
//             <Field label="Mobile Number *">
//               <div className="flex gap-2">
//                 <div
//                   className="flex items-center rounded-2xl px-3 shrink-0"
//                   style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb", width: "38%" }}
//                 >
//                   <select
//                     name="countryCode"
//                     onChange={handleChange}
//                     className="flex-1 bg-transparent text-sm text-gray-800 outline-none border-none py-3 cursor-pointer w-full"
//                   >
//                     <option>+91 (India)</option>
//                     <option>+1 (USA)</option>
//                     <option>+44 (UK)</option>
//                     <option>+61 (AUS)</option>
//                   </select>
//                 </div>
//                 <div className="flex-1">
//                   <Input name="mobile" placeholder="Mobile number" onChange={handleChange} required type="tel" />
//                 </div>
//               </div>
//             </Field>

//             {/* Nationality + City */}
//             <div className="grid grid-cols-2 gap-3">
//               <Field label="Nationality *">
//                 <Input name="nationality" placeholder="e.g. Indian" onChange={handleChange} required />
//               </Field>
//               <Field label="City *">
//                 <Input name="city" placeholder="e.g. Mumbai" onChange={handleChange} required />
//               </Field>
//             </div>

//             {/* Message */}
//             <Field label="Why are you interested in this position?">
//               <div
//                 className="rounded-2xl px-3.5 py-3"
//                 style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}
//               >
//                 <textarea
//                   name="message"
//                   placeholder="Tell us why you're a great fit..."
//                   onChange={handleChange}
//                   rows={3}
//                   className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-300 outline-none border-none resize-none"
//                 />
//               </div>
//             </Field>

//             {/* Resume Upload */}
//             <Field label="Upload Resume *">
//               <label
//                 className="flex flex-col items-center justify-center gap-1.5 rounded-2xl p-5 cursor-pointer"
//                 style={{ border: "1.5px dashed #c084fc", background: "#fdf4ff" }}
//               >
//                 <div
//                   className="w-9 h-9 rounded-xl flex items-center justify-center mb-1"
//                   style={{ background: "linear-gradient(135deg, #f3e8ff, #fce7f3)" }}
//                 >
//                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth={1.8}>
//                     <path strokeLinecap="round" strokeLinejoin="round"
//                       d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
//                   </svg>
//                 </div>
//                 {fileName ? (
//                   <span className="text-xs font-semibold text-purple-600 text-center break-all">{fileName}</span>
//                 ) : (
//                   <>
//                     <span className="text-sm font-semibold text-gray-600">Click to upload resume</span>
//                     <span className="text-xs text-gray-400">PDF, DOC, DOCX up to 5MB</span>
//                   </>
//                 )}
//                 <input
//                   type="file"
//                   name="resume"
//                   accept=".pdf,.doc,.docx"
//                   onChange={handleChange}
//                   className="hidden"
//                   required
//                 />
//               </label>
//             </Field>

//           </form>
//         </div>

//         {/* ── Sticky Footer Buttons ── */}
//         <div
//           className="shrink-0 px-5 sm:px-8 py-4 flex gap-3 border-t border-gray-100 bg-white"
//         >
//           <button
//             type="button"
//             onClick={onClose}
//             className="flex-1 py-3 rounded-2xl text-sm font-bold text-gray-500 cursor-pointer"
//             style={{ background: "#f3f4f6" }}
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="flex-1 py-3 rounded-2xl text-sm font-bold text-white cursor-pointer"
//             style={{ background: "linear-gradient(to right, #a855f7, #ec4899)" }}
//           >
//             Submit Application
//           </button>
//         </div>

//       </div>
//     </div>
//   );
// }

// /* ── Reusable Field wrapper ── */
// const Field = ({ label, children }) => (
//   <div>
//     <label className="block text-[11px] font-bold tracking-widest mb-1.5" style={{ color: "#9ca3af" }}>
//       {label.toUpperCase()}
//     </label>
//     {children}
//   </div>
// );

// /* ── Reusable Input ── */
// const Input = ({ ...props }) => (
//   <div
//     className="flex items-center rounded-2xl px-3.5"
//     style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}
//   >
//     <input
//       {...props}
//       className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-300 outline-none border-none py-3 w-full"
//     />
//   </div>
// );



import { useState } from "react";
import { X } from "lucide-react";

export default function ApplyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    mobile: "",
    countryCode: "+91 (India)",
    nationality: "",
    city: "",
    message: "",
    resume: null,
  });
  const [fileName, setFileName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
      setFileName(files[0]?.name || "");
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      position: "",
      mobile: "",
      countryCode: "+91 (India)",
      nationality: "",
      city: "",
      message: "",
      resume: null,
    });
    setFileName("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-3 sm:px-4"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
      onClick={submitted ? undefined : onClose}
    >
      {submitted ? (
        /* ── Success Popup ── */
        <div
          className="relative bg-white w-full max-w-sm rounded-3xl shadow-2xl overflow-hidden"
          style={{ animation: "popIn 0.35s cubic-bezier(.34,1.56,.64,1) both" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: "linear-gradient(to right, #a855f7, #ec4899, #f43f5e)" }}
          />

          {/* Confetti dots */}
          <ConfettiDots />

          <div className="px-8 pt-10 pb-8 text-center">
            {/* Animated check circle */}
            <div
              className="mx-auto mb-5 flex items-center justify-center rounded-full"
              style={{
                width: 80,
                height: 80,
                background: "linear-gradient(135deg, #f3e8ff, #fce7f3)",
                animation: "scalePop 0.4s cubic-bezier(.34,1.56,.64,1) 0.1s both",
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                style={{ overflow: "visible" }}
              >
                <circle cx="20" cy="20" r="18" stroke="#e9d5ff" strokeWidth="2" />
                <path
                  d="M11 20.5l6.5 6.5 11.5-13"
                  stroke="#a855f7"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ animation: "drawCheck 0.5s ease 0.4s both" }}
                />
              </svg>
            </div>

            <h2 className="text-xl font-extrabold text-gray-900 tracking-tight mb-2">
              Application Submitted!
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Thanks for applying! Our team will review your details and get back to you within{" "}
              <span className="text-purple-500 font-semibold">3–5 business days</span>.
            </p>

            {/* What's next steps */}
            <div
              className="text-left rounded-2xl p-4 mb-6 space-y-3"
              style={{ background: "#faf5ff" }}
            >
              <p className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-3">
                What happens next
              </p>
              {[
                { step: "1", color: "#a855f7", bg: "#f3e8ff", text: "We review your resume & application" },
                { step: "2", color: "#ec4899", bg: "#fce7f3", text: "Shortlisted candidates are contacted" },
                { step: "3", color: "#f43f5e", bg: "#fff1f2", text: "Final offer rolled out to selected candidate" },
              ].map(({ step, color, bg, text }) => (
                <div key={step} className="flex items-center gap-3">
                  <div
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: bg, color }}
                  >
                    {step}
                  </div>
                  <p className="text-xs text-gray-500">{text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-2xl text-sm font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(to right, #a855f7, #ec4899)" }}
            >
              Done
            </button>
          </div>

          <style>{`
            @keyframes popIn {
              from { opacity: 0; transform: scale(0.85); }
              to   { opacity: 1; transform: scale(1); }
            }
            @keyframes scalePop {
              from { transform: scale(0); }
              to   { transform: scale(1); }
            }
            @keyframes drawCheck {
              from { stroke-dasharray: 0 50; }
              to   { stroke-dasharray: 50 0; }
            }
            @keyframes confettiFall {
              0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
              100% { transform: translateY(180px) rotate(540deg); opacity: 0; }
            }
          `}</style>
        </div>
      ) : (
        /* ── Apply Form Modal ── */
        <div
          className="relative bg-white w-full max-w-xl rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          style={{ maxHeight: "92vh" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
            style={{ background: "linear-gradient(to right, #a855f7, #ec4899, #f43f5e)" }}
          />

          {/* Sticky Header */}
          <div className="shrink-0 px-5 sm:px-8 pt-5 pb-4 border-b border-gray-100 bg-white">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
              style={{ background: "rgba(0,0,0,0.06)", color: "#9ca3af" }}
            >
              <X size={16} />
            </button>

            <div className="text-center pr-6">
              <div
                className="mx-auto mb-2 w-10 h-10 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #f3e8ff, #fce7f3)" }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 tracking-tight">
                Apply for Position
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">Fill in your details below</p>
            </div>
          </div>

          {/* Scrollable Form */}
          <div className="overflow-y-auto flex-1 px-5 sm:px-8 py-5">
            <form id="applyForm" onSubmit={handleSubmit} className="space-y-4">
              <Field label="Full Name *">
                <Input name="name" placeholder="Enter your full name" onChange={handleChange} required />
              </Field>

              <Field label="Email Address *">
                <Input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} required />
              </Field>

              <Field label="Position *">
                <div
                  className="flex items-center rounded-2xl px-3.5"
                  style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}
                >
                  <svg className="w-4 h-4 shrink-0 mr-2" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                  <select
                    name="position"
                    onChange={handleChange}
                    required
                    className="flex-1 bg-transparent text-sm text-gray-800 outline-none border-none py-3 cursor-pointer"
                  >
                    <option value="">Select a role</option>
                    <option>Phonics Teacher</option>
                    <option>Sales Executive</option>
                    <option>Relationship Manager</option>
                    <option>Content Creator</option>
                  </select>
                </div>
              </Field>

              <Field label="Mobile Number *">
                <div className="flex gap-2">
                  <div
                    className="flex items-center rounded-2xl px-3 shrink-0"
                    style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb", width: "38%" }}
                  >
                    <select
                      name="countryCode"
                      onChange={handleChange}
                      className="flex-1 bg-transparent text-sm text-gray-800 outline-none border-none py-3 cursor-pointer w-full"
                    >
                      <option>+91 (India)</option>
                      <option>+1 (USA)</option>
                      <option>+44 (UK)</option>
                      <option>+61 (AUS)</option>
                    </select>
                  </div>
                  <div className="flex-1">
                    <Input name="mobile" placeholder="Mobile number" onChange={handleChange} required type="tel" />
                  </div>
                </div>
              </Field>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Nationality *">
                  <Input name="nationality" placeholder="e.g. Indian" onChange={handleChange} required />
                </Field>
                <Field label="City *">
                  <Input name="city" placeholder="e.g. Mumbai" onChange={handleChange} required />
                </Field>
              </div>

              <Field label="Why are you interested in this position?">
                <div
                  className="rounded-2xl px-3.5 py-3"
                  style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}
                >
                  <textarea
                    name="message"
                    placeholder="Tell us why you're a great fit..."
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent text-sm text-gray-800 placeholder-gray-300 outline-none border-none resize-none"
                  />
                </div>
              </Field>

              <Field label="Upload Resume *">
                <label
                  className="flex flex-col items-center justify-center gap-1.5 rounded-2xl p-5 cursor-pointer"
                  style={{ border: "1.5px dashed #c084fc", background: "#fdf4ff" }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-1"
                    style={{ background: "linear-gradient(135deg, #f3e8ff, #fce7f3)" }}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                    </svg>
                  </div>
                  {fileName ? (
                    <span className="text-xs font-semibold text-purple-600 text-center break-all">{fileName}</span>
                  ) : (
                    <>
                      <span className="text-sm font-semibold text-gray-600">Click to upload resume</span>
                      <span className="text-xs text-gray-400">PDF, DOC, DOCX up to 5MB</span>
                    </>
                  )}
                  <input
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleChange}
                    className="hidden"
                    required
                  />
                </label>
              </Field>
            </form>
          </div>

          {/* Sticky Footer */}
          <div className="shrink-0 px-5 sm:px-8 py-4 flex gap-3 border-t border-gray-100 bg-white">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-2xl text-sm font-bold text-gray-500 cursor-pointer"
              style={{ background: "#f3f4f6" }}
            >
              Cancel
            </button>
            <button
              type="submit"
              form="applyForm"
              className="flex-1 py-3 rounded-2xl text-sm font-bold text-white cursor-pointer"
              style={{ background: "linear-gradient(to right, #a855f7, #ec4899)" }}
            >
              Submit Application
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Confetti decorative dots ── */
function ConfettiDots() {
  const dots = [
    { top: "8%",  left: "10%", color: "#a855f7", size: 8,  delay: "0s",    dur: "1s" },
    { top: "5%",  left: "30%", color: "#ec4899", size: 6,  delay: "0.1s",  dur: "1.1s" },
    { top: "10%", left: "55%", color: "#f43f5e", size: 7,  delay: "0.05s", dur: "0.95s" },
    { top: "6%",  left: "75%", color: "#c084fc", size: 5,  delay: "0.15s", dur: "1.2s" },
    { top: "12%", left: "88%", color: "#f9a8d4", size: 8,  delay: "0.2s",  dur: "1s" },
    { top: "3%",  left: "46%", color: "#a855f7", size: 5,  delay: "0.25s", dur: "1.15s" },
    { top: "7%",  left: "20%", color: "#f43f5e", size: 6,  delay: "0.08s", dur: "1.05s" },
    { top: "4%",  left: "65%", color: "#ec4899", size: 7,  delay: "0.18s", dur: "0.9s" },
  ];

  return (
    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "hidden" }}>
      {dots.map((d, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: d.top,
            left: d.left,
            width: d.size,
            height: d.size,
            borderRadius: i % 2 === 0 ? "50%" : "2px",
            background: d.color,
            animation: `confettiFall ${d.dur} ease ${d.delay} both`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(200px) rotate(540deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

/* ── Reusable Field wrapper ── */
const Field = ({ label, children }) => (
  <div>
    <label className="block text-[11px] font-bold tracking-widest mb-1.5" style={{ color: "#9ca3af" }}>
      {label.toUpperCase()}
    </label>
    {children}
  </div>
);

/* ── Reusable Input ── */
const Input = ({ ...props }) => (
  <div
    className="flex items-center rounded-2xl px-3.5"
    style={{ background: "#f9fafb", border: "1.5px solid #e5e7eb" }}
  >
    <input
      {...props}
      className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-300 outline-none border-none py-3 w-full"
    />
  </div>
);