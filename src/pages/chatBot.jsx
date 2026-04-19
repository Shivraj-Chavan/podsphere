"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FcHome } from "react-icons/fc";
import ENDPOINT from "../lib/endpoints";
import { apiPost } from "../lib/apiClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../lib/axios";




// export default function Page() {
//   const [hideLayout, setHideLayout] = useState(false);
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();


//   useEffect(() => {
//     setHideLayout(true);

//     const token = searchParams.get("token");

//     if (!token) {
//       navigate("/");
//       return;
//     }
// (async()=>{
  
//   const {data}=await axios(`sso/tutorcruncher?token=${token}`)
//   console.log({data})
//  if (data.success) {
//         localStorage.setItem("user", JSON.stringify(data.user));

//         // setLoading(false);
//       } else {
//         navigate("/");
//       }
     
// })()

//   }, []);



//   return (
//     <>
//       {!hideLayout && <Navbar />}

//       <ChatBot setHideLayout={setHideLayout} />

//       {/* {!hideLayout && <Footer />} */}
//     </>
//   );
// }

export default function Page() {
  const [hideLayout, setHideLayout] = useState(false);
  const [searchParams] = useSearchParams();
  const [isValidUser, setIsValidUser] = useState(true);

  useEffect(() => {
    setHideLayout(true);

    const token = searchParams.get("token");

    if (!token) {
      setIsValidUser(false);
      return;
    }

    (async () => {
      try {
        const { data } = await axios(`sso/tutorcruncher?token=${token}`);

        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data.user));
          setIsValidUser(true);
        } else {
          setIsValidUser(false);
        }
      } catch (err) {
        console.error(err);
        setIsValidUser(false);
      }
    })();
  }, []);

  if (!isValidUser) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-2xl font-semibold mb-4">
          Access Restricted 🚫
        </h1>

        <p className="text-gray-600 mb-6 max-w-md">
          You need to log in through TutorCruncher to access this chatbot.
          Head over there, open the chatbot section, and come back through the proper flow.
        </p>

        <a href="https://secure.tutorcruncher.com/podsphere/login/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          Go to TutorCruncher Login
        </a>
      </div>
    );
  }

  return (
    <>
      {!hideLayout && <Navbar />}

      <ChatBot setHideLayout={setHideLayout} />
    </>
  );
}

const G = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;600;700;800&family=Nunito:wght@400;600;700;800&display=swap');
 *,*::before,*::after{
  box-sizing:border-box;
}
    @keyframes fadeUp  {from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
    @keyframes popIn   {0%{opacity:0;transform:scale(.75)}80%{transform:scale(1.04)}100%{opacity:1;transform:scale(1)}}
    @keyframes bounce  {0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    @keyframes pulse   {0%,100%{box-shadow:0 0 0 0 rgba(255,107,107,.45)}50%{box-shadow:0 0 0 12px rgba(255,107,107,0)}}
    @keyframes msgPop  {0%{opacity:0;transform:scale(.7) translateY(8px)}80%{transform:scale(1.04)}100%{opacity:1;transform:scale(1)}}
    @keyframes slideIn {from{opacity:0;transform:translateX(-14px)}to{opacity:1;transform:translateX(0)}}
    ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#FFB5B5;border-radius:10px}
    .sb-item{transition:all .2s ease;cursor:pointer}
    .sb-item:hover{background:rgba(255,107,107,.12)!important;transform:translateX(3px)}
    .chip{transition:all .22s ease;cursor:pointer}
    .chip:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 8px 22px rgba(255,107,107,.28)!important}
    .chip:active{transform:scale(.96)}
    .scard{transition:all .25s ease;cursor:pointer}
    .scard:hover{transform:translateY(-5px);box-shadow:0 14px 32px rgba(255,107,107,.18)!important}
    .sbtn:hover{transform:scale(1.08) rotate(-2deg)!important}
    .sbtn:active{transform:scale(.94)!important}
    .fi{transition:all .2s ease;cursor:pointer}
    .fi:hover{background:rgba(255,107,107,.1)!important;transform:translateX(3px)}
    .ab:hover{transform:scale(1.1)!important}
    .ab:active{transform:scale(.92)!important}
    .chatbot * {
  box-sizing: border-box;
  
}
  `}</style>
);


/* ── HOME ─────────────────────────────────────────────────── */
function HomePage({ onStart, userEmoji }) {
  const [input,   setInput]   = useState("");
  const [focused, setFocused] = useState(false);
  const [screen, setScreen] = useState("home");

  return (
    <div style={{ flex:1, overflowY:"visible", padding:"36px 40px 60px", background:"#FAFDF8" , marginTop:"20px"}}>

      {/* Badge bar */}
      <div style={{ display:"flex", justifyContent:"center", gap:"20px", marginBottom:"40px",marginTop:"40px", animation:"fadeUp .6s ease both", flexWrap:"wrap" }}>
        {[["🏆","Kids' Favourite App"],["⭐","4.9 Rating"],["👦","2M+ Happy Kids"]].map(([ic,tx],i)=>(
          <div key={i} style={{
            display:"flex",alignItems:"center",gap:"7px",
            background:"white",borderRadius:"50px",padding:"8px 18px",
            fontSize:"13px",fontWeight:700,color:"#3D2C2C",
            fontFamily:"Poppins",
            boxShadow:"0 2px 12px rgba(0,0,0,.07)",border:"1.5px solid #FFE0D0",
            animation:`fadeUp .6s ${i*.1}s ease both`,
          }}><span>{ic}</span>{tx}</div>
        ))}
      </div>

      {/* Headline */}
      <div style={{ textAlign:"center", marginBottom:"38px", animation:"fadeUp .7s .1s ease both" }}>
        <h1 style={{
          fontFamily:"Poppins",fontWeight:800,
          fontSize:"clamp(28px,3.6vw,50px)",lineHeight:1.2,
          color:"#1A2E1A",marginBottom:"12px",
        }}>
          Step into{" "}
          <span style={{ color:"#FF6B6B",position:"relative",display:"inline-block" }}>
            PodSphere
            <svg viewBox="0 0 220 14" style={{ position:"absolute",bottom:"-5px",left:0,width:"100%",height:"13px" }}>
              <path d="M4 10 Q55 2 110 8 Q165 14 216 5" stroke="#FF6B6B" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
            </svg>
          </span>
          {" "}<br/>where imagination comes alive 🌈
        </h1>
        <p style={{ fontFamily:"Poppins",fontSize:"16px",color:"#8A7070",fontWeight:600 }}>
        Chat, play, and create in a world built just for curious minds !
        </p>
      </div>

      {/* Big input card */}
      <div style={{
        maxWidth:"760px",margin:"0 auto 16px",background:"white",borderRadius:"24px",
        border:`2.5px solid ${focused?"#FF6B6B":"#FFE0D0"}`,
        boxShadow:focused?"0 0 0 6px rgba(255,107,107,.09),0 8px 32px rgba(255,107,107,.12)":"0 4px 24px rgba(0,0,0,.07)",
        transition:"all .3s ease",overflow:"hidden",animation:"fadeUp .8s .2s ease both",
      }}>
        <textarea
          value={input}
          onChange={e=>setInput(e.target.value)}
          onFocus={()=>setFocused(true)}
          onBlur={()=>setFocused(false)}
          placeholder="Write, paste, or start with an action below… ✏️"
          rows={4}
          style={{
            width:"100%",padding:"22px 24px 10px",border:"none",outline:"none",
            resize:"none",fontFamily:"Poppins",fontSize:"16px",
            fontWeight:600,color:"#3D2C2C",background:"transparent",lineHeight:1.6,
          }}
          onKeyDown={e=>{ if(e.key==="Enter"&&!e.shiftKey&&input.trim()){ e.preventDefault(); onStart(input.trim()); } }}
        />
        <div style={{ display:"flex",alignItems:"center",justifyContent:"end",padding:"8px 20px 14px" }}>
          {/* <button style={{ background:"none",border:"none",cursor:"pointer",fontSize:"20px",opacity:.5,padding:"4px 8px",borderRadius:"10px",transition:"opacity .2s" }}
            onMouseOver={e=>e.currentTarget.style.opacity="1"} onMouseOut={e=>e.currentTarget.style.opacity=".5"}>➕</button> */}
          <button className="sbtn" onClick={()=>{send();input.trim()&&onStart(input.trim())}}
            style={{
              width:"42px",height:"42px",borderRadius:"14px",
              background:input.trim()?"linear-gradient(135deg,#FF6B6B,#FF8E53)":"#FFD0C0",
              border:"none",cursor:input.trim()?"pointer":"default",fontSize:"20px",
              display:"flex",alignItems:"center",justifyContent:"center",transition:"all .25s",
              boxShadow:input.trim()?"0 4px 16px rgba(255,107,107,.35)":"none",
              animation:input.trim()?"pulse 2s ease-in-out infinite":"none",
            }}>➜</button>
        </div>
     
      </div>

      {/* Suggestions label */}
      <div style={{ textAlign:"center",fontSize:"14px",color:"#B09090",fontFamily:"Poppins",fontWeight:700,marginBottom:"18px",animation:"fadeUp .9s .3s ease both" }}>
        ✨ Need an idea? Try one of these adventures…
      </div>
    </div>
  );
}

/* ── VOICE HELPER ─────────────────────────────────────────── */
function speakText(text, friendName) {
  if (!window.speechSynthesis) return;
  // strip emojis so TTS doesn't read Unicode codepoints
  const clean = text.replace(/[\u{1F300}-\u{1FAFF}]/gu, "").trim();
  if (!clean) return;
  window.speechSynthesis.cancel(); // stop any ongoing speech
  const utt = new SpeechSynthesisUtterance(clean);
  utt.rate  = 0.92;
  utt.pitch = 1.45;   // high & cheerful for kids
  utt.volume = 1;
  // pick a friendly female voice if available
  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(v =>
    /female|girl|zira|samantha|victoria|karen|moira|tessa/i.test(v.name)
  ) || voices.find(v => v.lang.startsWith("en")) || voices[0];
  if (preferred) utt.voice = preferred;
  window.speechSynthesis.speak(utt);
}


function ChatView({firstMsg, userName, userEmoji, goHome }) {
  const [sel,      setSel]      = useState();
  const [msgs, setMsgs] = useState([]);
  const [input,    setInput]    = useState("");
  const [typing,   setTyping]   = useState(false);
  const [rec,      setRec]      = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [voiceOn,  setVoiceOn]  = useState(true);
  const [showList, setShowList] = useState(false); // mobile sidebar toggle
  const endRef                  = useRef(null);

  useEffect(()=>{
    send(firstMsg)
  },[firstMsg])

  useEffect(() => {
    const stored = sessionStorage.getItem("chat_msgs");
    if (stored) {
      setMsgs(JSON.parse(stored));
    }
  }, []);
  
  useEffect(() => {
    sessionStorage.setItem("chat_msgs", JSON.stringify(msgs));
  }, [msgs]);

  useEffect(() => {
    window.speechSynthesis?.getVoices();
    window.speechSynthesis?.addEventListener?.("voiceschanged", () => window.speechSynthesis.getVoices());
  }, []);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, sel]);

  const speakMsg = (text, id) => {
    if (!voiceOn) return;
    setSpeaking(id);
    const utt = (() => {
      const clean = text.replace(/[\u{1F300}-\u{1FAFF}]/gu, "").trim();
      const u = new SpeechSynthesisUtterance(clean);
      u.rate = 0.92; u.pitch = 1.45; u.volume = 1;
      const voices = window.speechSynthesis.getVoices();
      const v = voices.find(v => /female|girl|zira|samantha|victoria|karen|moira|tessa/i.test(v.name))
             || voices.find(v => v.lang.startsWith("en")) || voices[0];
      if (v) u.voice = v;
      u.onend = () => setSpeaking(null);
      u.onerror = () => setSpeaking(null);
      return u;
    })();
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  };
  const send = async (firstMsg) => {
    if (!input.trim() &&  !firstMsg) return;
  
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  
    const userWord = input.trim() || firstMsg;
  
    const userMsg = {
      id: Date.now(),
      from: "me",
      text: userWord,
      time,
    };
  
    setMsgs((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
  
    try {
      const data = await apiPost(ENDPOINT.getPhonics(), {
        word: userWord,
      });

      console.log({data})
  
      let replyText = data?.phonics || "Text not readable" ;
      let audioUrl = data?.audio || null;
  
      const botMsg = {
        id: Date.now() + 1,
        from: "them",
        text: replyText,
        time,
        audio: audioUrl,
      };
  
      setMsgs((prev) => [...prev, botMsg]);
      setTyping(false);
  
      // AUTO PLAY AUDIO
      if (voiceOn && audioUrl) {
        new Audio(audioUrl).play();
      } else if (voiceOn) {
        setTimeout(() => speakMsg(replyText, botMsg.id), 150);
      }
    } catch (err) {
      console.error("API Error:", err);
      setTyping(false);
    }
  };
  const curMsgs = msgs;
  return (
    <div style={{ flex: 1, display: "flex", minWidth: 0, height: "100%", marginTop: "100px", position: "relative" }}>

      {/* ── Messages Pane ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 , marginTop:'75px'}}>

        {/* Header */}
        <div style={{ padding: "13px 12px", background: "white", borderBottom: "2px solid #FFE8DC", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 3px 12px rgba(255,107,107,.06)", flexWrap: "nowrap" }}>

          {/* Voice toggle */}
          <button className="ab"
            onClick={() => { setVoiceOn(v => !v); window.speechSynthesis?.cancel(); setSpeaking(null); }}
            style={{ background: voiceOn ? "linear-gradient(135deg,#FF6B6B,#FF8E53)" : "#FFF5F0", border: `2px solid ${voiceOn ? "#FF6B6B" : "#FFE0D0"}`, borderRadius: "11px", width: "40px", height: "36px", cursor: "pointer", fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center", transition: "all .25s", flexShrink: 0, boxShadow: voiceOn ? "0 3px 12px rgba(255,107,107,.35)" : "none" }}
          >{voiceOn ? "🔊" : "🔇"}</button>

        </div>

        {/* Bubbles */}
        <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "9px", background: "linear-gradient(180deg,#FFF8F2,#FFF3E8)" }}>
          {curMsgs.map((m, i) => {
            const me = m.from === "me";
            const isSpk = speaking === m.id;
            return (
              <div key={m.id} style={{ display: "flex", justifyContent: me ? "flex-end" : "flex-start", alignItems: "flex-end", gap: "6px", animation: "msgPop .35s cubic-bezier(.34,1.56,.64,1) both", animationDelay: `${i * .03}s` }}>

                <div style={{ maxWidth: "75%", display: "flex", flexDirection: "column", gap: "4px", alignItems: me ? "flex-end" : "flex-start" }}>
                  <div style={{ padding: "9px 13px", borderRadius: me ? "20px 20px 5px 20px" : "20px 20px 20px 5px", background: me ? "linear-gradient(135deg,#FF6B6B,#FF8E53)" : "white", color: me ? "white" : "#3D2C2C", fontSize: "13px", fontWeight: 600, fontFamily: "Poppins", boxShadow: me ? "0 4px 14px rgba(255,107,107,.28)" : "0 3px 10px rgba(0,0,0,.07)", border: me ? "none" : "2px solid #FFE8DC", lineHeight: 1.55, wordBreak: "break-word" }}>
                    <div>{m.text}</div>
                    <div style={{ fontSize: "10px", opacity: .6, marginTop: "3px", textAlign: "right" }}>{m.time}{me ? " ✓✓" : ""}</div>
                  </div>

                  {!me && (
                    <button
                    onClick={() => {
                      if (m.audio) {
                        new Audio(m.audio).play();
                      } else {
                        speakMsg(m.text, m.id);
                      }
                    }}
                    style={{ display: "flex", alignItems: "center", gap: "5px", background: isSpk ? "linear-gradient(135deg,#FF6B6B,#FF8E53)" : "#FFF5F0", border: `1.5px solid ${isSpk ? "#FF6B6B" : "#FFD0C0"}`, borderRadius: "50px", padding: "3px 10px 3px 7px", cursor: "pointer", transition: "all .22s", boxShadow: isSpk ? "0 2px 10px rgba(255,107,107,.35)" : "none" }}
                    >
                      {isSpk ? (
                        <span style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "14px" }}>
                          {[1, 1.6, 1, 1.4, 1].map((h, j) => (
                            <span key={j} style={{ width: "3px", borderRadius: "3px", background: "white", height: `${h * 6}px`, animation: `bounce .6s ease-in-out ${j * .1}s infinite`, display: "inline-block" }} />
                          ))}
                        </span>
                      ) : (
                        <span style={{ fontSize: "12px" }}>🔊</span>
                      )}
                      <span style={{ fontSize: "11px", fontFamily: "Poppins", fontWeight: 700, color: isSpk ? "white" : "#8A7070" }}>
                        {isSpk ? "Speaking…" : "Hear it"}
                      </span>
                    </button>
                  )}
                </div>

                {me && <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg,#FF6B6B,#FFD93D)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", flexShrink: 0 }}>{userEmoji}</div>}
              </div>
            );
          })}

          {typing && (
            <div style={{ display: "flex", alignItems: "flex-end", gap: "7px" }}>
              <div style={{ padding: "11px 16px", background: "white", borderRadius: "20px 20px 20px 5px", border: "2px solid #FFE8DC", boxShadow: "0 3px 10px rgba(0,0,0,.06)", display: "flex", gap: "5px", alignItems: "center" }}>
                {[0, 1, 2].map(j => <div key={j} style={{ width: "7px", height: "7px", background: "#FF6B6B", borderRadius: "50%", animation: `bounce 1s ease-in-out ${j * .2}s infinite` }} />)}
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input bar */}
        <div style={{ padding: "10px 10px", background: "white", borderTop: "2px solid #FFE8DC", display: "flex", alignItems: "flex-end", gap: "7px", boxShadow: "0 -3px 12px rgba(255,107,107,.05)" }}>
          {/* <button className="ab" style={{ width: "38px", height: "38px", borderRadius: "11px", background: "#FFF5F0", border: "2px solid #FFD0B0", fontSize: "17px", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>😊</button> */}
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder={`Message… 💬`}
            rows={1}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault();  } }}
            style={{ flex: 1, padding: "9px 12px", borderRadius: "14px", border: "2px solid #FFD0B0", fontSize: "13px", fontFamily: "Poppins", fontWeight: 600, color: "#3D2C2C", background: "#FFF8F0", outline: "none", resize: "none", lineHeight: 1.5 }}
            onFocus={e => e.target.style.borderColor = "#FF6B6B"}
            onBlur={e => e.target.style.borderColor = "#FFD0B0"}
          />
          <button className="sbtn" onClick={send} style={{ width: "38px", height: "38px", borderRadius: "11px", background: input.trim() ? "linear-gradient(135deg,#FF6B6B,#FF8E53)" : "#FFD0B0", border: "none", cursor: input.trim() ? "pointer" : "default", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: input.trim() ? "0 4px 14px rgba(255,107,107,.35)" : "none" }}>🚀</button>
        </div>
      </div>

      {/* Home button */}
      <button
        onClick={goHome}
        style={{ position: "fixed", bottom: "90px", right: "16px", display: "flex", alignItems: "center", gap: "8px", padding: "10px 16px", borderRadius: "50px", background: "linear-gradient(135deg,#FF6B6B,#FF8E53)", color: "white", border: "none", fontWeight: "700", cursor: "pointer", boxShadow: "0 6px 20px rgba(255,107,107,.4)", zIndex: 1000 }}
      >
        <FcHome size={19} /> Home
      </button>
    </div>
  );
}

/* ── ROOT ─────────────────────────────────────────────────── */
function ChatBot({setHideLayout}) {
  const [screen,  setScreen]  = useState("home");
  const [user,    setUser]    = useState(null);
  const [active,  setActive]  = useState("chat");
  const [emoji]               = useState();
  const [firstMsg,setFirstMsg]=useState("")
  const handleStart = (text) => {
    setFirstMsg(text)
    if (!user) setUser({ name: text.length > 24 ? "Friend" : text, emoji });
  
    setScreen("chat");
    setActive("chat");
    setHideLayout(true);
    setHideLayout(false);
  };

  const goHome = () => {
    setScreen("home");
    setHideLayout(false);
  };
 

  return (
    // <div style={{ display:"flex",height:"100vh",overflow:"hidden",fontFamily:"'Nunito',sans-serif",background:"#FAFDF8", marginTop:"50px"}}>
<div
  style={{
    display: "flex",
    width: "100%",        // ADD THIS
    minHeight: "calc(100vh - 64px)",
    fontFamily: "Poppins",
    background: "#FAFDF8",
  }}
  className="chatbot"
>
      <G/>

      {/* ── Main content ── */}
      <div style={{ flex:1,display:"flex",flexDirection:"column",minWidth:0 }}>

        {/* View */}
        <div style={{ flex:1,display:"flex",overflow:"hidden" }}>
          {screen==="home"
            ? <HomePage onStart={handleStart} userEmoji={emoji}/>
            : <ChatView firstMsg={firstMsg} userName={user?.name||"Friend"} userEmoji={user?.emoji||"😊"}  goHome={goHome}/>}
        </div>
      </div>
    </div>
  );
}