'use client';

import { useState } from "react";
import SignInModal from "../components/signinPopup";


const worksheets = [
  {
    title: "Tracing Worksheet",
    desc: " Alphabet tracing sheets to build early writing and letter recognition.",
    file: "/files/TracingWorksheet .pdf",
     thumbnail: "/thumbnails/TracingWorksheet.jpg"
  },
  {
    title: "Flash Cards",
    desc: "Picture based sound cards to help children remember letter sounds.",
    file: "/files/FlashCards.pdf",
    thumbnail: "/thumbnails/FlashCards.jpg"
  },
  {
    title: "Sound Worksheets",
    desc: "Matching activities to connect letters with their sounds.",
    file: "/files/SoundsWorksheets.pdf",
     thumbnail: "/thumbnails/SoundsWorksheets.jpg"
  },
  {
    title: "Short Vowels & Long Vowels",
    desc: "Practice sheets for short and long vowel sounds.",
    file: "/files/ShortVowels.pdf",
     thumbnail: "/thumbnails/ShortVowels.jpg"
  },
  {
    title: "CVC Worksheets & Sentences",
    desc: "Exercises for reading simple CVC words and sentences.",
    file: "/files/CVCWorksheets.pdf",
     thumbnail: "/thumbnails/CVCWorksheets.jpg"
  },
  {
    title: "CVCC CCVC Worksheets",
    desc: "Practice with four-letter words and reading sentences.",
    file: "/files/CVCC.pdf",
     thumbnail: "/thumbnails/CVCC.jpg"
  },
  {
    title: "Rules Worksheets & Sentences",
    desc: "Worksheets to reinforce key phonics rules.",
    file: "/files/Rules.pdf",
     thumbnail: "/thumbnails/Rules.jpg"
  },
  {
    title: "Short Stories",
    desc: "Simple stories to encourage independent reading.",
    file: "/files/ShortStories.pdf",
     thumbnail: "/thumbnails/ShortStories.jpg"
  },
  {
    title: "Reading & Comprehension",
    desc: "Reading passages with questions to build understanding.",
    file: "/files/Reading.pdf",
     thumbnail: "/thumbnails/Reading.jpg"
  },
  {
    title: "Picture Comprehension",
    desc: " Picture based questions to develop observation and thinking skills.",
    file: "/files/Picture.pdf",
     thumbnail: "/thumbnails/Picture.jpg"
  },
  {
    title: "Sentence Reading",
    desc: " Mixed sentences to improve reading fluency.",
    file: "/files/Sentence.pdf",
     thumbnail: "/thumbnails/Sentence.jpg"
  },
  {
    title: "Tongue Twister",
    desc: "Fun phrases to improve pronunciation and speech clarity.",
    file: "/files/Tongue.pdf",
     thumbnail: "/thumbnails/Tongue.jpg"
  },
  {
    title: "Picture Talk",
    desc: "Picture discussions to build early language skills.",
    file: "/files/PictureTalk.pdf",
     thumbnail: "/thumbnails/PictureTalk.jpg"
  },
  {
    title: "Long Decodable words",
    desc: "Structured practice for reading longer phonics based words..",
    file: "/files/Long.pdf",
     thumbnail: "/thumbnails/Long.jpg"
  },
];


export default function FreeMaterials() {
  const [showModal, setShowModal] = useState(false);

  const handleDownloadClick = (e) => {
    e.preventDefault(); // stop direct download
    setShowModal(true);
  };

  const handleSignIn = () => {
    console.log("Redirect to login...");
  };

  return (
    <>
      <section className="bg-white py-30">
        <div className="max-w-7xl mx-auto px-6 space-y-15">

          {/* ================= PAGE HEADER ================= */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-pink-500 mb-3">
              FREE MATERIALS
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Learn, Play & Explore Phonics
            </h1>
            <p className="mt-4 text-gray-600">
              Download free worksheets and explore phonics fundamentals designed
              to make early learning joyful and effective.
            </p>
          </div>

          {/* ================= SECTION 1: WORKSHEETS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 ">
  {worksheets.map((item, i) => (
    <div
      key={i}
      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xl transition flex flex-col h-full emboss-card transform hover:-translate-y-2 hover:rotate-x-2 hover:rotate-y-2 hover:shadow-2xl"
    >

      {/* Thumbnail */}
      <div className="h-32 rounded-xl mb-4 overflow-hidden shadow-xl">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h4 className="font-semibold text-gray-900 mb-2">
        {item.title}
      </h4>

      <p className="text-sm text-gray-600 mb-4">
        {item.desc}
      </p>

      {/* Button pushed to bottom */}
      <a
        href={item.file}
        onClick={handleDownloadClick}
        download
        className="mt-auto text-sm font-semibold text-pink-600 hover:underline hover:scale-105 hover:text-pink-500"
      >
        Download →
      </a>

      {/* MODAL */}
      <SignInModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSignIn={handleSignIn}
      />

    </div>
  ))}
</div>

          {/* ================= SECTION 2: GAME SHEETS (TURNED OFF) ================= */}
          {/*
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
              Game Sheets
            </h2>
            <p className="text-gray-600">
              Interactive phonics games will be available soon.
            </p>
          </div>
          */}

          {/* ================= SECTION 3: HIGHLIGHTS ================= */}
          <div className="bg-white rounded-[32px] p-10 shadow-sm">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              Highlights
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Basics to Phonics:</strong> Our materials guide children
                from sound awareness to confident reading through structured,
                playful learning.
              </p>

              <p>
                <strong>Easy Sharing:</strong> Worksheets and highlights can be
                shared easily via Google Drive or other platforms for convenient
                at-home practice.
              </p>

              <p>
                Each resource is designed to support parents and educators in
                building strong phonics foundations without pressure.
              </p>
            </div>
          </div>

        </div>
      </section>

      
    </>
  );
}
