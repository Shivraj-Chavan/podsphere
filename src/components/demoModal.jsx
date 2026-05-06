import React, { useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "../constance";

const DemoModal = ({ open, onClose }) => {
  const [demoData, setDemoData] = useState({
    name: "",
    childName: "",
    age: "",
    phone: "",
    email: "",
    country: "",
    pincode: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const isValidPincode = demoData.pincode.length === 6;

  
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDemoData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!demoData.name || !demoData.phone || !demoData.email) {
      setError(true);
      return;
    }

    try {
      setLoading(true);
      setError(false);

      const res = await axios.post(`${CONFIG.API_BASE_URL}/contact`, {
        ...demoData,
        formType: "demo"
      });

      if (res.data?.success) {
        setSuccess(true);
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
        throw new Error();
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md  z-[9999] px-4 pt-15">
       <div className="
      w-full max-w-md
      max-h-[90vh] overflow-y-auto
      bg-white/70 backdrop-blur-xl
      border border-white/40
      rounded-2xl shadow-xl
      p-5 sm:p-6 md:p-8
      relative
    ">

        {/* Close */}
        <button
          onClick={() => {
            onClose();
            setSuccess(false);
          }}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        {success ? (
           <div className="flex flex-col items-center justify-center py-6 gap-4">
           <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-md">
             <svg
               className="w-10 h-10 text-green-500"
               fill="none"
               stroke="currentColor"
               strokeWidth={2.5}
               viewBox="0 0 24 24"
             >
               <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
             </svg>
           </div>
 
           <h3 className="text-2xl font-bold text-gray-100 text-center">
             Demo Booked! 
           </h3>
 
           <p className="text-gray-200 text-center text-sm leading-relaxed">
             Your free demo has been successfully booked.<br />
             We'll reach out to you shortly!
           </p>
 
           {/* <button
             onClick={() => { setOpen(false); setDemoSuccess(false); }}
             className="mt-2 px-8 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer text-sm font-medium"
           >
             Close
           </button> */}
           <button
            onClick={() => {
                onClose();        
                setSuccess(false); 
            }}
            className="mt-2 px-8 py-2.5 bg-black text-white rounded-lg hover:bg-gray-800 transition cursor-pointer text-sm font-medium"
            >
            Close
            </button>
         </div>
        ) : (
          <>
            <h2 className="text-xl font-bold text-center mb-4">
              Book a Free Demo
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 ">

              <input name="name" value={demoData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base" />
              <input name="childName" value={demoData.childName} onChange={handleChange} placeholder="Child Name" className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"/>
              <input name="age" value={demoData.age} onChange={handleChange} placeholder="Age" className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"/>
              <input name="phone" value={demoData.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"/>
              <input name="email" value={demoData.email} onChange={handleChange} placeholder="Email" className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"/>
              <input name="country" value={demoData.country} onChange={handleChange} placeholder="Country" className="w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base"/>

              <input
                name="pincode"
                value={demoData.pincode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "");
                  if (val.length <= 6) {
                    setDemoData((prev) => ({ ...prev, pincode: val }));
                  }
                }}
                placeholder="Pincode"
                className={`w-full p-2.5 sm:p-3 rounded-xl bg-white/80 outline-none text-sm sm:text-base border ${
                  isValidPincode ? "border-green-400" : "border-red-300"
                }`}
              />

              {error && (
                <p className="text-red-500 text-sm text-center">
                  Fill required fields
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-2 rounded"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default DemoModal;