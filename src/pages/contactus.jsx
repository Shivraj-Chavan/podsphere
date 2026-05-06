import axios from "axios";
import React, { useState } from "react";
import CONFIG from "../constance";

 
const Contact = () => {

  return (
    <section className="relative w-full bg-white">

      {/* ───────── HERO IMAGE ───────── */}
      <div className="relative w-full h-[340px] sm:h-[420px] md:h-[560px] lg:h-[720px] overflow-hidden rounded-b-[10%]">
        <img
          src="/contactusimg.png"
          alt="contact"
          className="w-full h-full object-cover object-[80%_center] object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-6 left-5 sm:left-10 md:left-16 text-white z-10 md:bottom-16 lg:bottom-25 md:max-w-md">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Contact Us</h2>
        </div>

        {/* Floating form — desktop only (lg+) */}
        <div className="hidden lg:block absolute right-16 xl:right-24 top-1/2 -translate-y-1/3 z-10">
          <FormCard />
        </div>
      </div>

      {/* ───────── TABLET FORM (md only, below hero) ───────── */}
      <div className="hidden md:block lg:hidden px-8 py-8">
        <div className="text-center mb-6">
          <p className="text-xs font-semibold tracking-widest text-pink-500 mb-1">GET IN TOUCH</p>
          <h3 className="text-2xl font-extrabold text-gray-900">Send Us a Message</h3>
        </div>
        <div className="flex justify-center">
          <FormCard />
        </div>
      </div>

      {/* ───────── MOBILE FORM (below hero) ───────── */}
      <div className="block md:hidden px-4 py-6">
        <div className="text-center mb-5">
          <p className="text-xs font-semibold tracking-widest text-pink-500 mb-1">GET IN TOUCH</p>
          <h3 className="text-xl font-extrabold text-gray-900">Send Us a Message</h3>
        </div>
        <FormCard />
      </div>

      {/* ───────── BOTTOM CTA — Desktop (lg+) ───────── */}
      <div className="hidden lg:flex relative justify-center mt-25 mb-15 px-4 ">
        <div className="w-full max-w-[1100px] h-[340px] bg-red-900 rounded-2xl" />
         <div className="absolute -top-10 w-[calc(100%-6rem)] max-w-[1000px] h-[300px] bg-yellow-400 rounded-2xl shadow-lg px-12 py-10 flex items-center justify-between">
          <CtaContent />
        </div>
      </div>

<div className="hidden md:block lg:hidden mx-6 mb-12">
  <div className="bg-red-900 rounded-2xl p-[3px]">
    <div className="bg-yellow-400 rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center gap-6">

      <img
        src="/friends.jpg"
        alt="kids"
        className="w-32 h-32 rounded-full object-cover shadow-lg ring-4 ring-white/80"
      />

      <div className="text-gray-900 text-center sm:text-left max-w-md">
        <h2 className="text-xl font-extrabold mb-3 leading-snug">
          Let's Begin Your Child's Reading Journey Together
        </h2>

        <p className="text-sm text-gray-800 mb-5 leading-relaxed">
          Discover upcoming Podsphere programs, get the latest updates,
          and enjoy exclusive learning opportunities.
        </p>

        <div className="grid grid-cols-2 gap-3 text-sm font-medium">
          <a href="tel:+919892409029" className="cta-btn">
            📞 +91 9892409029
          </a>
          <a href="tel:+919892099029" className="cta-btn">
            📞 +91 9892099029
          </a>
          <a href="mailto:hello@pod-sphere.com" className="cta-btn">
            ✉️ hello@pod-sphere.com
          </a>
          <a href="https://www.google.com/maps?q=Mumbai,India" target="_blank" rel="noopener noreferrer" className="cta-btn">
            📍 Mumbai, India
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* ───────── BOTTOM CTA — Mobile ───────── */}

<div className="block md:hidden mx-4 mb-12">
  <div className="bg-red-900 rounded-[26px] p-[3px]">
    <div className="bg-yellow-400 rounded-[24px] px-6 py-8 flex flex-col items-center text-center gap-5">

      <img
        src="/friends.jpg"
        alt="kids"
        className="w-24 h-24 rounded-3xl object-cover shadow-lg ring-4 ring-white/80"
      />

      <div className="text-gray-900 w-full">
        <h2 className="text-lg font-extrabold mb-2 leading-snug">
          Let's Begin Your Child's Reading Journey Together
        </h2>

        <p className="text-xs text-gray-800 mb-4 leading-relaxed">
          Discover upcoming Podsphere programs, get the latest updates,
          and enjoy exclusive learning opportunities.
        </p>

        <div className="grid grid-cols-1 gap-2 text-sm font-medium">
          <a href="tel:+919892409029" className="cta-btn">
            📞 +91 9892409029
          </a>
          <a href="tel:+919892099029" className="cta-btn">
            📞 +91 9892099029
          </a>
          <a href="mailto:hello@pod-sphere.com" className="cta-btn">
            ✉️ hello@pod-sphere.com
          </a>
          <a href="https://www.google.com/maps?q=Mumbai,India" target="_blank" rel="noopener noreferrer" className="cta-btn">
            📍 Mumbai, India
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

/* ───────── FORM CARD ───────── */
const FormCard = () => {

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    countryCode: "+91", 
    preferredContact: "",
    email: "",
    school: "",
    country: "",
    pincode:"",
    message: "",
    formType: "contact",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.parentName || !formData.phone || !formData.email) {
      setError("true");
      return;
    }
  
    try {
      setLoading(true);
      setError(false);
  
      const res = await axios.post(
        `${CONFIG.API_BASE_URL}/contact`,
        {
          ...formData,
          formType: "contact", 
        }
      );
      console.log("formdata",res);
  
      if (res.data?.success) {
        setSubmitted(true);
      } else {
        throw new Error("API responded but failed");
      }
  
    } catch (err) {
      console.error("API Error:", err);
      setError(formData.parentName+"-"+formData.phone+formData.email+"API Error:"+err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // PHONE validation (only 10 digits)
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, phone: cleaned }));
      return;
    }
  
    // PINCODE validation (only 6 digits)
    if (name === "pincode") {
      const cleaned = value.replace(/\D/g, "").slice(0, 6);
      setFormData((prev) => ({ ...prev, pincode: cleaned }));
      return;
    }
  
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidPincode = /^[0-9]{6}$/.test(formData.pincode);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formData.parentName || !formData.phone || !formData.email) { setError(true); return; }
  //   setError(false);
  //   const lead = { ...formData, submittedAt: new Date().toISOString() };
  //   try {
  //     const existing = JSON.parse(localStorage.getItem("formLeads") || "[]");
  //     existing.push(lead);
  //     localStorage.setItem("formLeads", JSON.stringify(existing));
  //   } catch (err) { console.warn("localStorage unavailable", err); }
  //   setSubmitted(true);
  // };

  const handleReset = () => {
    setFormData({ parentName: "", childAge: "", phone: "", preferredContact: "", email: "", school: "", country: "", pincode:"",  message: "" });
    setSubmitted(false);
    setError(false);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-6 sm:p-8 w-full md:w-[560px] lg:w-[620px] border border-gray-100 flex flex-col items-center justify-center min-h-[400px] text-center gap-4">
        <div className="w-14 h-14 rounded-full bg-green-400 flex items-center justify-center text-2xl">✓</div>
        <h2 className="text-xl font-bold text-gray-900">Message Sent!</h2>
        <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
          Thanks, {formData.parentName.split(" ")[0]}! We've received your message and will get back to you shortly.
        </p>
        <button onClick={handleReset} className="mt-2 border border-gray-200 cursor-pointer rounded-full px-6 py-2.5 text-sm text-gray-500 hover:bg-gray-50 transition">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.15)] p-6 sm:p-7 lg:mb-60 lg:mt-5 w-full md:w-[560px] lg:w-[620px] border border-gray-100">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="text-[10px] font-bold text-gray-400 tracking-wider">PARENTS NAME*</label>
            <input type="text" name="parentName" autoComplete="name" value={formData.parentName} onChange={handleChange} placeholder="Jane Smith" className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 tracking-wider">CHILD NAME*</label>
            <input type="text" name="childName" autoComplete="name" value={formData.childName} onChange={handleChange} placeholder="John Smith" className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition" />
          </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 tracking-wider">CHILD AGE*</label>
            <input type="text" name="childAge" autoComplete="off" value={formData.childAge} onChange={handleChange} placeholder="5 Years" className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {/* <div>
            <label className="text-[10px] font-bold text-gray-400 tracking-wider">PHONE NUMBER*</label>
            <input type="tel" name="phone" autoComplete="tel" value={formData.phone} onChange={handleChange} placeholder="9876543210" maxLength={10} className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition" />
          </div> */}
          <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">
            PHONE NUMBER*
          </label>

          <div className="flex mt-1">
            {/* Country Code */}
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="border border-gray-200 rounded-l-full px-1.5 py-2.5 text-sm outline-none focus:border-pink-400 bg-white"
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+971">🇦🇪 +971</option>

            </select>

            <input
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => {
              let value = e.target.value;
              value = value.replace(/\D/g, "");
              if (value.length <= 10) {
                setFormData({ ...formData, phone: value });
              }
            }}
          placeholder="9876543210"
          className="w-full border-t border-b border-r border-gray-200 rounded-r-full px-3 py-2.5 text-sm outline-none focus:border-pink-400 transition"
        />
          </div>
        </div>
          <div>
            <label className="text-[10px] font-bold text-gray-400 tracking-wider">PREFERRED CONTACT</label>
            <input type="text" name="preferredContact" autoComplete="off" value={formData.preferredContact} onChange={handleChange} placeholder="Phone / Email" className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition" />
          </div>
        </div>
        <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">EMAIL ADDRESS*</label>
          <input type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} placeholder="jane@gmail.com" className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition" />
        </div>
        <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">SCHOOL NAME</label>
          <input type="text" name="school" autoComplete="organization" value={formData.school} onChange={handleChange} placeholder="School Name" className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-1 text-sm outline-none focus:border-pink-400 transition" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  
      <div>
        <label className="text-[10px] font-bold text-gray-400 tracking-wider">COUNTRY</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Country"
          className="w-full border border-gray-200 rounded-full px-4 py-2.5 mt-0 text-sm outline-none focus:border-pink-400 transition"
        />
      </div>
      <div>
        <label className="text-[10px] font-bold text-gray-400 tracking-wider">
          PINCODE
        </label>

        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          placeholder="Pincode"
          inputMode="numeric"
          maxLength={6}
          className={`w-full border rounded-full px-4 py-2.5 mt-1 text-sm outline-none transition
            ${
              formData.pincode.length === 0
                ? "border-gray-200"
                : isValidPincode
                ? "border-green-400"
                : "border-red-400"
            }
            focus:border-pink-400`}
        />

            {/* Error message */}
            {formData.pincode.length > 0 && !isValidPincode && (
              <p className="text-xs text-red-500 mt-1">
                Enter a valid 6-digit pincode
              </p>
            )}
          </div>

        </div>
           <div>
          <label className="text-[10px] font-bold text-gray-400 tracking-wider">YOUR MESSAGE</label>
          <textarea rows="3" name="message" value={formData.message} onChange={handleChange} placeholder="Write your message..." className="w-full border border-gray-200 rounded-2xl px-4 py-3 mt-1 text-sm outline-none focus:border-pink-400 transition resize-none" />
        </div>
        {error && <p className="text-xs text-red-400 px-1"> {error} Please fill in all required fields (*).</p>}
        {/* <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-full font-bold text-sm tracking-widest hover:bg-black active:scale-95 transition-all">
          SEND A MESSAGE
        </button> */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gray-900 text-white py-3 rounded-full font-bold text-sm tracking-widest hover:bg-black active:scale-95 transition-all disabled:opacity-50"
        >
          {loading ? "SENDING..." : "SEND A MESSAGE"}
        </button>
      </form>
    </div>
  );
};

/* ───────── CTA CONTENT (desktop) ───────── */
const CtaContent = () => (
  <div className="py-20 flex items-center justify-between gap-6 flex-wrap">
    
    <div className="text-black max-w-xl">
      <h2 className="text-3xl font-bold mb-3">
        Let's Begin Your Child's Reading Journey Together
      </h2>
      <p className="text-sm mb-4">
        Discover upcoming Podsphere programs, get the latest updates, and enjoy exclusive learning opportunities.
      </p>

      <div className="space-y-2 text-sm">
        <p>
          📞 
          <a href="tel:+919892409029" className="underline hover:text-gray-600">
            +91 9892409029
          </a> / 
          <a href="tel:+919892099029" className="underline hover:text-gray-600">
            +91 9892099029
          </a>
        </p>
        <p>
          ✉️ 
          <a href="mailto:hello@pod-sphere.com" className="underline hover:text-gray-600">
            hello@pod-sphere.com
          </a>
        </p>
        <p>
          📍 
          <a href="https://www.google.com/maps?q=Mumbai,India" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-600">
            Mumbai, India
          </a>
        </p>
      </div>
    </div>

    <img
      src="/friends.jpg"
      alt="kids"
      className="w-[240px] h-[240px] rounded-3xl object-cover"
    />
    
  </div>
);

export default Contact;