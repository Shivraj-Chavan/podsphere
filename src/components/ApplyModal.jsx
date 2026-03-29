import { useState } from "react";
import { X } from "lucide-react";

export default function ApplyModal({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    mobile: "",
    nationality: "",
    city: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Application Submitted");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-[750px] rounded-3xl px-6 pt-0 relative shadow-xl h-[90vh] overflow-y-auto ">

        {/* Close Button */}
   <div className="sticky top-0 bg-white pt-6">
   <button
          onClick={onClose}
          className="absolute right-0 top-5 text-gray-400 hover:text-black"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6">
          Apply for Position
        </h2>
   </div>

        <form onSubmit={handleSubmit} className="space-y-2">

          {/* Name */}
          <div>
            <label className="font-medium">Full Name *</label>
            <input
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-xl p-3 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-xl p-3 outline-none"
              required
            />
          </div>

          {/* Position Dropdown */}
          <div>
            <label className="font-medium">Position *</label>
            <select
              name="position"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-xl p-3 outline-none"
              required
            >
              <option value="">Select a role</option>
              <option>Phonics Teacher </option>
              <option>Sales Executive </option>
              <option>Relationship Manager</option>
              <option>Content Creator </option>
            </select>
          </div>

          {/* Mobile + Country */}
          <div className="flex gap-3">
            <div className="w-[35%]">
              <label className="font-medium">Country Code</label>
              <select className="w-full mt-1 border border-gray-300 rounded-xl p-3">
                <option>+91 (India)</option>
                <option>+1 (USA)</option>
              </select>
            </div>

            <div className="w-[65%]">
              <label className="font-medium">Mobile Number *</label>
              <input
                name="mobile"
                placeholder="Enter mobile number"
                onChange={handleChange}
                className="w-full mt-1 border border-gray-300 rounded-xl p-3"
                required
              />
            </div>
          </div>

          {/* Nationality */}
          <div className="flex gap-8">
          <div>
            <label className="font-medium">Nationality *</label>
            <input
              name="nationality"
              placeholder="Enter your nationality"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-xl p-3"
              required
            />
          </div>

          {/* City */}
          <div>
            <label className="font-medium">City *</label>
            <input
              name="city"
              placeholder="Enter your city"
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-xl p-3"
              required
            />
          </div>
          </div>

          {/* Message */}
          <div>
            <label className="font-medium">
              Why are you interested in this position?
            </label>
            <textarea
              name="message"
              placeholder="Tell us why you're interested in this position..."
              onChange={handleChange}
              className="w-full mt-1 border border-gray-300 rounded-xl p-3 h-24"
            />
          </div>

          {/* Upload Resume */}
          <div>
            <label className="font-medium">Upload Resume *</label>
            <label className="mt-2 flex items-center justify-center border-2 border-dashed border-purple-400 rounded-xl p-6 cursor-pointer">
              <span className="text-gray-500">
                Choose file or drag and drop
              </span>
              <input
                type="file"
                name="resume"
                onChange={handleChange}
                className="hidden"
                required
              />
            </label>
          </div>

          {/* Buttons */}
          <div className="flex sticky bg-white pb-6 pt-3 bottom-0 gap-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 bg-gray-200 py-3 rounded-xl font-medium hover:font-semibold hover:scale-105"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="w-1/2 py-3 rounded-xl text-white font-medium hover:font-semibold
              bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105" 
            >
              Submit Application
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}