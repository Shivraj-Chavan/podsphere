"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FcHome } from "react-icons/fc";
import ENDPOINT from "../lib/endpoints";
import { apiPost } from "../lib/apiClient";


const FRIENDS = [
  { id: 1, name: "Sunny",   emoji: "🦄", color: "#FF6B6B", lastMsg: "Let's play a game! 🎮",   time: "2m",  unread: 2 },
  { id: 2, name: "Bubbles", emoji: "🐬", color: "#4D96FF", lastMsg: "Did you see the rainbow?", time: "5m",  unread: 0 },
  { id: 3, name: "Sparky",  emoji: "⚡", color: "#FFD93D", lastMsg: "I love stars! ⭐⭐⭐",        time: "10m", unread: 1 },
  { id: 4, name: "Coco",    emoji: "🐼", color: "#6BCB77", lastMsg: "Bamboo is yummy 😋",        time: "1h",  unread: 0 },
  { id: 5, name: "Luna",    emoji: "🌙", color: "#C77DFF", lastMsg: "Goodnight friend!",         time: "2h",  unread: 0 },
];

const CANNED = [
  "Hi there! That's so cool! 🌟","Wow, you're amazing! 🎉","Let's go on an adventure! 🚀",
  "Hehe, that's funny! 😄","I love learning new things! 📚✨","You are so smart! 🧠💡",
  "That sounds super fun! 🎊","Let's be best friends forever! 🤝",
];

const SIDEBAR_FEATURES = [
  { icon:"💬", label:"Chat",       key:"chat"    },
  { icon:"🎮", label:"Games",      key:"games"   },
  { icon:"📖", label:"Stories",    key:"stories" },
  { icon:"🎨", label:"Art Studio", key:"art"     },
  { icon:"🎵", label:"Music",      key:"music"   },
  { icon:"🧩", label:"Puzzles",    key:"puzzles" },
  { icon:"📚", label:"Learn",      key:"learn"   },
  { icon:"🌍", label:"World Tour", key:"world"   },
  { icon:"⭐", label:"My Awards",  key:"awards"  },
];

const QUICK_ACTIONS = [
  { icon:"💬", label:"Start Chat"   },
  { icon:"🎮", label:"Play Game"    },
  { icon:"📖", label:"Tell a Story" },
  { icon:"🎨", label:"Draw Art"     },
  { icon:"➕", label:"More"         },
];

const SUGGESTIONS = [
  { icon:"🚀", title:"Space Adventure",  desc:"Fly to the moon and meet alien friends!"    },
  { icon:"🐉", title:"Dragon Quest",     desc:"Help a friendly dragon find his treasure"   },
  { icon:"🌊", title:"Ocean Explorer",   desc:"Dive deep and discover sea creatures"       },
  { icon:"🏰", title:"Magic Castle",     desc:"Solve riddles and unlock secret doors"      },
  { icon:"🦁", title:"Safari Fun",       desc:"Meet lions, zebras & elephants today"       },
  { icon:"🍕", title:"Chef Challenge",   desc:"Cook the yummiest pizza ever!"              },
];

const EMOJIS = ["🦄","🐶","🐱","🐸","🦊","🐼","🐨","🦋","🌈","⭐"];

export default function Page() {
  const [hideLayout, setHideLayout] = useState(false);

  return (
    <>
      {!hideLayout && <Navbar />}

      <ChatBot setHideLayout={setHideLayout} />

      {/* {!hideLayout && <Footer />} */}
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
            fontFamily:"'Nunito',sans-serif",
            boxShadow:"0 2px 12px rgba(0,0,0,.07)",border:"1.5px solid #FFE0D0",
            animation:`fadeUp .6s ${i*.1}s ease both`,
          }}><span>{ic}</span>{tx}</div>
        ))}
      </div>

      {/* Headline */}
      <div style={{ textAlign:"center", marginBottom:"38px", animation:"fadeUp .7s .1s ease both" }}>
        <h1 style={{
          fontFamily:"'Baloo 2',cursive",fontWeight:800,
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
        <p style={{ fontFamily:"'Nunito',sans-serif",fontSize:"16px",color:"#8A7070",fontWeight:600 }}>
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
            resize:"none",fontFamily:"'Nunito',sans-serif",fontSize:"16px",
            fontWeight:600,color:"#3D2C2C",background:"transparent",lineHeight:1.6,
          }}
          onKeyDown={e=>{ if(e.key==="Enter"&&!e.shiftKey&&input.trim()){ e.preventDefault(); onStart(input.trim()); } }}
        />
        <div style={{ display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 20px 14px" }}>
          <button style={{ background:"none",border:"none",cursor:"pointer",fontSize:"20px",opacity:.5,padding:"4px 8px",borderRadius:"10px",transition:"opacity .2s" }}
            onMouseOver={e=>e.currentTarget.style.opacity="1"} onMouseOut={e=>e.currentTarget.style.opacity=".5"}>➕</button>
          <button className="sbtn" onClick={()=>input.trim()&&onStart(input.trim())}
            style={{
              width:"42px",height:"42px",borderRadius:"14px",
              background:input.trim()?"linear-gradient(135deg,#FF6B6B,#FF8E53)":"#FFD0C0",
              border:"none",cursor:input.trim()?"pointer":"default",fontSize:"20px",
              display:"flex",alignItems:"center",justifyContent:"center",transition:"all .25s",
              boxShadow:input.trim()?"0 4px 16px rgba(255,107,107,.35)":"none",
              animation:input.trim()?"pulse 2s ease-in-out infinite":"none",
            }}>➜</button>
        </div>
        {/* Chips */}
        {/* <div style={{ display:"flex",gap:"10px",flexWrap:"wrap",padding:"0 20px 18px",borderTop:"1.5px solid #FFF0E8",paddingTop:"14px" }}>
          {QUICK_ACTIONS.map((a,i)=>(
            <button key={i} className="chip"
              onClick={()=>a.label==="Start Chat"&&onStart("Let's chat!")}
              style={{
                display:"flex",alignItems:"center",gap:"7px",padding:"9px 18px",
                borderRadius:"50px",background:"#FFF5F0",border:"2px solid #FFD0C0",
                fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:"14px",
                color:"#3D2C2C",boxShadow:"0 2px 8px rgba(255,107,107,.1)",
              }}><span>{a.icon}</span>{a.label}</button>
          ))}
        </div> */}
      </div>

      {/* Suggestions label */}
      <div style={{ textAlign:"center",fontSize:"14px",color:"#B09090",fontFamily:"'Nunito',sans-serif",fontWeight:700,marginBottom:"18px",animation:"fadeUp .9s .3s ease both" }}>
        ✨ Need an idea? Try one of these adventures…
      </div>

      {/* Suggestion cards */}
      {/* <div style={{ maxWidth:"760px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(210px,1fr))",gap:"14px",animation:"fadeUp 1s .35s ease both" }}>
        {SUGGESTIONS.map((s,i)=>(
          <div key={i} className="scard" onClick={()=>onStart(s.title)}
            style={{ background:"white",borderRadius:"20px",padding:"18px 16px",border:"2px solid #FFE8DC",boxShadow:"0 4px 14px rgba(0,0,0,.06)",display:"flex",flexDirection:"column",gap:"7px" }}>
            <div style={{ fontSize:"30px" }}>{s.icon}</div>
            <div style={{ fontFamily:"'Baloo 2',cursive",fontWeight:700,fontSize:"15px",color:"#1A2E1A" }}>{s.title}</div>
            <div style={{ fontFamily:"'Nunito',sans-serif",fontSize:"12px",color:"#9A8080",fontWeight:600,lineHeight:1.5 }}>{s.desc}</div>
          </div>
        ))}
      </div> */}
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

/* ── CHAT ─────────────────────────────────────────────────── */
function ChatView({ userName, userEmoji ,goHome }) {
  const [sel,      setSel]      = useState(FRIENDS[0]);
  const [msgs,     setMsgs]     = useState({
    1:[{id:1,from:"them",text:"Hey! Wanna play a game? 🎮",time:"2:30 PM"},{id:2,from:"me",text:"Yes yes yes! 🎉",time:"2:31 PM"},{id:3,from:"them",text:"Let's do guessing animals! 🐾",time:"2:31 PM"}],
    2:[{id:1,from:"them",text:"Did you see the rainbow? 🌈",time:"1:00 PM"}],
    3:[{id:1,from:"them",text:"I love stars! ⭐⭐⭐",time:"12:00 PM"}],
    4:[{id:1,from:"them",text:"Bamboo is yummy 😋",time:"10:00 AM"}],
    5:[{id:1,from:"them",text:"Goodnight friend! 🌙",time:"9:00 PM"}],
  });
  const [input,    setInput]    = useState("");
  const [typing,   setTyping]   = useState(false);
  const [rec,      setRec]      = useState(false);
  const [speaking, setSpeaking] = useState(false); 
  const [voiceOn,  setVoiceOn]  = useState(true); 
  const endRef                  = useRef(null);
 
  // load voices (Chrome needs this event)
  useEffect(() => {
    window.speechSynthesis?.getVoices();
    window.speechSynthesis?.addEventListener?.("voiceschanged", () => window.speechSynthesis.getVoices());
  }, []);
 
  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs,sel]);
 
  const speakMsg = (text, id) => {
    if (!voiceOn) return;
    setSpeaking(id);
    const utt = (() => {
      const clean = text.replace(/[\u{1F300}-\u{1FAFF}]/gu,"").trim();
      const u = new SpeechSynthesisUtterance(clean);
      u.rate = 0.92; u.pitch = 1.45; u.volume = 1;
      const voices = window.speechSynthesis.getVoices();
      const v = voices.find(v=>/female|girl|zira|samantha|victoria|karen|moira|tessa/i.test(v.name))
             || voices.find(v=>v.lang.startsWith("en")) || voices[0];
      if (v) u.voice = v;
      u.onend = () => setSpeaking(null);
      u.onerror = () => setSpeaking(null);
      return u;
    })();
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utt);
  };
 
  // const send = () => {
  //   if(!input.trim()) return;
  //   const time = new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
  //   setMsgs(p=>({...p,[sel.id]:[...(p[sel.id]||[]),{id:Date.now(),from:"me",text:input,time}]}));
  //   setInput(""); setTyping(true);
  //   setTimeout(()=>{
  //     const replyText = CANNED[Math.floor(Math.random()*CANNED.length)];
  //     const replyId   = Date.now()+1;
  //     setMsgs(p=>({...p,[sel.id]:[...(p[sel.id]||[]),{id:replyId,from:"them",text:replyText,time}]}));
  //     setTyping(false);
  //     // auto-speak the reply
  //     if (voiceOn) {
  //       setTimeout(() => speakMsg(replyText, replyId), 150);
  //     }
  //   },1000+Math.random()*700);
  // };
 

  // const send = async () => {
  //   if (!input.trim()) return;
  
  //   const time = new Date().toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //   });
  
  //   const userWord = input.trim();
  
  //   // 👉 Add user message
  //   setMsgs((p) => ({
  //     ...p,
  //     [sel.id]: [
  //       ...(p[sel.id] || []),
  //       {
  //         id: Date.now(),
  //         from: "me",
  //         text: userWord,
  //         time,
  //       },
  //     ],
  //   }));
  
  //   setInput("");
  //   setTyping(true);
  
  //   try {
  //     // 🔥 DIRECT CALL (your pattern)
  //     const data = await apiPost(ENDPOINT.getPhonics(), { word: userWord });
  //     console.log("data",data)
  
  //     const replyText = data?.phonics || "Try again 🤔";
  //     const replyId = Date.now() + 1;
  
  //     // 👉 Add bot reply
  //     setMsgs((p) => ({
  //       ...p,
  //       [sel.id]: [
  //         ...(p[sel.id] || []),
  //         {
  //           id: replyId,
  //           from: "them",
  //           text: replyText,
  //           time,
  //         },
  //       ],
  //     }));
  
  //     setTyping(false);
  
  //     // 🔊 speak
  //     if (voiceOn) {
  //       setTimeout(() => speakMsg(replyText, replyId), 150);
  //     }
  
  //   } catch (err) {
  //     console.error("Phonics API Error:", err);
  //     setTyping(false);
  
  //     setMsgs((p) => ({
  //       ...p,
  //       [sel.id]: [
  //         ...(p[sel.id] || []),
  //         {
  //           id: Date.now() + 2,
  //           from: "them",
  //           text: "Oops! Something went wrong 😅",
  //           time,
  //         },
  //       ],
  //     }));
  //   }
  // };

  const send = async () => {
    if (!input.trim()) return;
  
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  
    const userWord = input.trim();
  
    // Add user message
    setMsgs((p) => ({
      ...p,
      [sel.id]: [
        ...(p[sel.id] || []),
        {
          id: Date.now(),
          from: "me",
          text: userWord,
          time,
        },
      ],
    }));
  
    setInput("");
    setTyping(true);
  
    try {
      // API CALL
      const data = await apiPost(
        ENDPOINT.getPhonics(),
        { word: userWord }
      );
  
      console.log("API RESPONSE:", data);

      // if (replyText === "N/A") replyText = userWord;
      // if (audioUrl) new Audio(audioUrl).play();
  
      let replyText = data?.phonics;
      let audioUrl = data?.audio;
  
      // fallback if phonics missing
      if (!replyText || replyText === "N/A") {
        replyText = userWord;
      }
  
      const replyId = Date.now() + 1;
  
      setMsgs((p) => ({
        ...p,
        [sel.id]: [
          ...(p[sel.id] || []),
          {
            id: replyId,
            from: "them",
            text: replyText,
            time,
          },
        ],
      }));
  
      setTyping(false);
  
      // AUDIO PRIORITY
      if (voiceOn) {
        if (audioUrl) {
          //  use real pronunciation audio
          const audio = new Audio(audioUrl);
          audio.play();
        } else {
          //  fallback to speech synthesis
          setTimeout(() => speakMsg(replyText, replyId), 150);
        }
      }
  
    } catch (err) {
      console.error("Phonics API Error:", err);
  
      setTyping(false);
  
      // fallback response
      const fallbackText = userWord;
  
      setMsgs((p) => ({
        ...p,
        [sel.id]: [
          ...(p[sel.id] || []),
          {
            id: Date.now() + 2,
            from: "them",
            text: fallbackText,
            time,
          },
        ],
      }));
  
      if (voiceOn) {
        speakMsg(fallbackText);
      }
    }
  };

  const curMsgs = msgs[sel.id]||[];
 
  return (
    <div style={{ flex:1,display:"flex",minWidth:0,height:"100%" , marginTop:"100px" }}>
      {/* Friends list */}
      <div style={{ width:"270px",minWidth:"270px",background:"white",borderRight:"2px solid #FFE8DC",display:"flex",flexDirection:"column" }}>
        <div style={{ padding:"16px 14px 12px",borderBottom:"2px solid #FFE8DC",fontFamily:"'Baloo 2',cursive",fontWeight:800,fontSize:"15px",color:"#3D2C2C",display:"flex",alignItems:"center",gap:"7px" }}>
          💬 <span>Friends</span>
        </div>

        <button
  onClick={goHome}
  style={{
    position: "fixed",
    bottom: "90px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "10px 16px",
    borderRadius: "50px",
    background: "linear-gradient(135deg,#FF6B6B,#FF8E53)",
    color: "white",  
    border: "none",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(255,107,107,.4)",
    zIndex: 1000
  }}
>
  <FcHome size={19}/> Home
</button>
        <div style={{ flex:1,overflowY:"auto",padding:"6px" }}>
          {FRIENDS.map((f,i)=>(
            <div key={f.id} className="fi" onClick={()=>setSel(f)}
              style={{
                padding:"10px 11px",borderRadius:"14px",margin:"2px 0",
                display:"flex",alignItems:"center",gap:"10px",
                background:sel.id===f.id?"rgba(255,107,107,.12)":"transparent",
                borderLeft:sel.id===f.id?`4px solid ${f.color}`:"4px solid transparent",
                animation:`slideIn .4s ease ${i*.07}s both`,
              }}>
              <div style={{ width:"42px",height:"42px",borderRadius:"50%",background:`${f.color}22`,border:`2.5px solid ${f.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"21px",flexShrink:0 }}>{f.emoji}</div>
              <div style={{ flex:1,minWidth:0 }}>
                <div style={{ display:"flex",justifyContent:"space-between" }}>
                  <span style={{ fontFamily:"'Nunito',sans-serif",fontWeight:800,color:"#3D2C2C",fontSize:"13px" }}>{f.name}</span>
                  <span style={{ fontSize:"10px",color:"#B09090" }}>{f.time}</span>
                </div>
                <div style={{ fontSize:"11px",color:"#B09090",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap" }}>{f.lastMsg}</div>
              </div>
              {f.unread>0&&<div style={{ background:"#FF6B6B",color:"white",borderRadius:"50%",width:"19px",height:"19px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:800,flexShrink:0 }}>{f.unread}</div>}
            </div>
          ))}
        </div>
      </div>
 
      {/* Messages pane */}
      <div style={{ flex:1,display:"flex",flexDirection:"column",minWidth:0 }}>
        {/* Header */}
        <div style={{ padding:"13px 18px",background:"white",borderBottom:"2px solid #FFE8DC",display:"flex",alignItems:"center",gap:"11px",boxShadow:"0 3px 12px rgba(255,107,107,.06)" }}>
          <div style={{ width:"42px",height:"42px",borderRadius:"50%",background:`${sel.color}22`,border:`2.5px solid ${sel.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px" }}>{sel.emoji}</div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Baloo 2',cursive",fontWeight:800,color:"#1A2E1A",fontSize:"16px" }}>{sel.name}</div>
            <div style={{ fontSize:"12px",color:"#6BCB77",fontWeight:700 }}>{typing?"✍️ typing…":"● Online & Happy!"}</div>
          </div>
          <button className="ab"
            onClick={()=>{ setVoiceOn(v=>!v); window.speechSynthesis?.cancel(); setSpeaking(null); }}
            style={{
              background: voiceOn?"linear-gradient(135deg,#FF6B6B,#FF8E53)":"#FFF5F0",
              border:`2px solid ${voiceOn?"#FF6B6B":"#FFE0D0"}`,
              borderRadius:"11px",width:"42px",height:"36px",cursor:"pointer",
              fontSize:"17px",display:"flex",alignItems:"center",justifyContent:"center",
              transition:"all .25s",flexShrink:0,
              boxShadow: voiceOn?"0 3px 12px rgba(255,107,107,.35)":"none",
            }}
          >{voiceOn?"🔊":"🔇"}</button>
          {["🎮","🎵","😊"].map((e,i)=>(
            <button key={i} className="ab" style={{ background:"#FFF5F0",border:"2px solid #FFE0D0",borderRadius:"11px",width:"36px",height:"36px",cursor:"pointer",fontSize:"17px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s" }}>{e}</button>
          ))}
        </div>
 
        {/* Bubbles */}
        <div style={{ flex:1,overflowY:"auto",padding:"18px",display:"flex",flexDirection:"column",gap:"9px",background:"linear-gradient(180deg,#FFF8F2,#FFF3E8)" }}>
          <div style={{ textAlign:"center",marginBottom:"6px" }}>
            <span style={{ background:"rgba(255,150,150,.13)",borderRadius:"20px",padding:"4px 14px",fontSize:"11px",color:"#B09090",fontWeight:700,fontFamily:"'Nunito',sans-serif" }}>Today 🌞</span>
          </div>
          {curMsgs.map((m,i)=>{
            const me   = m.from==="me";
            const isSpk = speaking===m.id;
            return(
              <div key={m.id} style={{ display:"flex",justifyContent:me?"flex-end":"flex-start",alignItems:"flex-end",gap:"7px",animation:"msgPop .35s cubic-bezier(.34,1.56,.64,1) both",animationDelay:`${i*.03}s` }}>
                {!me&&<div style={{ width:"32px",height:"32px",borderRadius:"50%",background:`${sel.color}22`,border:`2px solid ${sel.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",flexShrink:0 }}>{sel.emoji}</div>}
 
                <div style={{ maxWidth:"62%",display:"flex",flexDirection:"column",gap:"4px",alignItems:me?"flex-end":"flex-start" }}>
                  <div style={{ padding:"10px 14px",borderRadius:me?"20px 20px 5px 20px":"20px 20px 20px 5px",background:me?"linear-gradient(135deg,#FF6B6B,#FF8E53)":"white",color:me?"white":"#3D2C2C",fontSize:"14px",fontWeight:600,fontFamily:"'Nunito',sans-serif",boxShadow:me?"0 4px 14px rgba(255,107,107,.28)":"0 3px 10px rgba(0,0,0,.07)",border:me?"none":"2px solid #FFE8DC",lineHeight:1.55 }}>
                    <div>{m.text}</div>
                    <div style={{ fontSize:"10px",opacity:.6,marginTop:"3px",textAlign:"right" }}>{m.time}{me?" ✓✓":""}</div>
                  </div>
 
                  {/* Voice replay button — only on friend messages */}
                  {!me&&(
                    <button
                      onClick={()=>speakMsg(m.text, m.id)}
                      style={{
                        display:"flex",alignItems:"center",gap:"5px",
                        background: isSpk?"linear-gradient(135deg,#FF6B6B,#FF8E53)":"#FFF5F0",
                        border:`1.5px solid ${isSpk?"#FF6B6B":"#FFD0C0"}`,
                        borderRadius:"50px",padding:"3px 10px 3px 7px",
                        cursor:"pointer",transition:"all .22s",
                        boxShadow: isSpk?"0 2px 10px rgba(255,107,107,.35)":"none",
                      }}
                    >
                      {/* Animated sound bars when speaking */}
                      {isSpk ? (
                        <span style={{ display:"flex",alignItems:"flex-end",gap:"2px",height:"14px" }}>
                          {[1,1.6,1,1.4,1].map((h,j)=>(
                            <span key={j} style={{
                              width:"3px",borderRadius:"3px",background:"white",
                              height:`${h*6}px`,
                              animation:`bounce .6s ease-in-out ${j*.1}s infinite`,
                              display:"inline-block",
                            }}/>
                          ))}
                        </span>
                      ) : (
                        <span style={{ fontSize:"12px" }}>🔊</span>
                      )}
                      <span style={{ fontSize:"11px",fontFamily:"'Nunito',sans-serif",fontWeight:700,color:isSpk?"white":"#8A7070" }}>
                        {isSpk?"Speaking…":"Hear it"}
                      </span>
                    </button>
                  )}
                </div>
 
                {me&&<div style={{ width:"32px",height:"32px",borderRadius:"50%",background:"linear-gradient(135deg,#FF6B6B,#FFD93D)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px",flexShrink:0 }}>{userEmoji}</div>}
              </div>
            );
          })}
          {typing&&(
            <div style={{ display:"flex",alignItems:"flex-end",gap:"7px" }}>
              <div style={{ width:"32px",height:"32px",borderRadius:"50%",background:`${sel.color}22`,border:`2px solid ${sel.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"16px" }}>{sel.emoji}</div>
              <div style={{ padding:"11px 16px",background:"white",borderRadius:"20px 20px 20px 5px",border:"2px solid #FFE8DC",boxShadow:"0 3px 10px rgba(0,0,0,.06)",display:"flex",gap:"5px",alignItems:"center" }}>
                {[0,1,2].map(j=><div key={j} style={{ width:"7px",height:"7px",background:"#FF6B6B",borderRadius:"50%",animation:`bounce 1s ease-in-out ${j*.2}s infinite` }}/>)}
              </div>
            </div>
          )}
          <div ref={endRef}/>
        </div>
 
        {/* Input bar */}
        <div style={{ padding:"11px 16px",background:"white",borderTop:"2px solid #FFE8DC",display:"flex",alignItems:"flex-end",gap:"9px",boxShadow:"0 -3px 12px rgba(255,107,107,.05)" }}>
          <button className="ab" style={{ width:"42px",height:"42px",borderRadius:"12px",background:"#FFF5F0",border:"2px solid #FFD0B0",fontSize:"19px",cursor:"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .2s" }}>😊</button>
          <button className="ab" onClick={()=>setRec(r=>!r)} style={{ width:"42px",height:"42px",borderRadius:"12px",background:rec?"linear-gradient(135deg,#FF6B6B,#FF4444)":"#FFF5F0",border:`2px solid ${rec?"#FF6B6B":"#FFD0B0"}`,fontSize:"19px",cursor:"pointer",flexShrink:0,display:"flex",alignItems:"center",justifyContent:"center",transition:"all .25s",animation:rec?"pulse 1s ease-in-out infinite":"none" }}>{rec?"⏹️":"🎤"}</button>
          <textarea value={input} onChange={e=>setInput(e.target.value)} placeholder={`Message ${sel.name}… 💬`} rows={1}
            onKeyDown={e=>{ if(e.key==="Enter"&&!e.shiftKey){e.preventDefault();send();} }}
            style={{ flex:1,padding:"10px 14px",borderRadius:"15px",border:"2px solid #FFD0B0",fontSize:"14px",fontFamily:"'Nunito',sans-serif",fontWeight:600,color:"#3D2C2C",background:"#FFF8F0",outline:"none",resize:"none",lineHeight:1.5,transition:"border-color .2s" }}
            onFocus={e=>e.target.style.borderColor="#FF6B6B"} onBlur={e=>e.target.style.borderColor="#FFD0B0"}
          />
          <button className="sbtn" onClick={send} style={{ width:"42px",height:"42px",borderRadius:"12px",background:input.trim()?"linear-gradient(135deg,#FF6B6B,#FF8E53)":"#FFD0B0",border:"none",cursor:input.trim()?"pointer":"default",fontSize:"19px",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all .25s",boxShadow:input.trim()?"0 4px 14px rgba(255,107,107,.35)":"none" }}>🚀</button>
        </div>
      </div>
    </div>
  );
}

/* ── ROOT ─────────────────────────────────────────────────── */
function ChatBot({setHideLayout}) {
  const [screen,  setScreen]  = useState("home");
  const [user,    setUser]    = useState(null);
  const [active,  setActive]  = useState("chat");
  const [emoji]               = useState(EMOJIS[Math.floor(Math.random()*EMOJIS.length)]);

  const handleStart = (text) => {
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
    width: "100%",        // ✅ ADD THIS
    minHeight: "calc(100vh - 64px)",
    fontFamily: "'Nunito', sans-serif",
    background: "#FAFDF8",
  }}
  className="chatbot"
>
      <G/>

      {/* ── Feature sidebar ── */}
      {/* <div style={{ width:"82px",background:"white",borderRight:"2px solid #FFE8DC",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"12px",paddingTop:"10px",paddingBottom:"14px",gap:"2px",boxShadow:"3px 0 16px rgba(255,107,107,.05)",zIndex:10,flexShrink:0 }}>
       
             {SIDEBAR_FEATURES.map((f,i)=>(
          <button key={f.key} className="sb-item"
            onClick={()=>{ setActive(f.key); if(f.key==="chat"){ user?setScreen("chat"):setScreen("home"); } else setScreen("home"); }}
            style={{ width:"70px",padding:"9px 4px 7px",border:"none",background:active===f.key?"rgba(255,107,107,.14)":"transparent",borderRadius:"14px",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"3px",borderLeft:active===f.key?"4px solid #FF6B6B":"4px solid transparent",animation:`fadeUp .5s ease ${i*.06}s both` }}>
            <span style={{ fontSize:"20px" }}>{f.icon}</span>
            <span style={{ fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:"9.5px",color:active===f.key?"#FF6B6B":"#8A7070",textAlign:"center",lineHeight:1.2 }}>{f.label}</span>
          </button>
        ))}

        {user&&<div style={{ marginTop:"auto",paddingTop:"10px" }}>
          <div style={{ width:"40px",height:"40px",borderRadius:"50%",background:"linear-gradient(135deg,#FF6B6B,#FFD93D)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",boxShadow:"0 3px 10px rgba(255,107,107,.3)",border:"3px solid white",cursor:"pointer" }}>{user.emoji}</div>
        </div>}
      </div> */}

      {/* ── Main content ── */}
      <div style={{ flex:1,display:"flex",flexDirection:"column",minWidth:0 }}>

        {/* Top nav */}
        {/* <div style={{ height:"56px",background:"white",borderBottom:"2px solid #FFE8DC",display:"flex",alignItems:"center",padding:"0 26px",gap:"14px",boxShadow:"0 3px 12px rgba(255,107,107,.04)",flexShrink:0 }}>
          <div style={{ fontFamily:"'Baloo 2',cursive",fontWeight:800,fontSize:"21px",background:"linear-gradient(135deg,#FF6B6B,#FF8E53)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",letterSpacing:"1px" }}>Phonix</div>

          <div style={{ flex:1,display:"flex",alignItems:"center",background:"#FFF5F0",borderRadius:"50px",border:"2px solid #FFE0D0",padding:"7px 16px",maxWidth:"300px",gap:"7px" }}>
            <span style={{ fontSize:"14px",opacity:.45 }}>🔍</span>
            <input placeholder="Search friends or adventures…" style={{ border:"none",background:"transparent",outline:"none",fontFamily:"'Nunito',sans-serif",fontWeight:600,fontSize:"12px",color:"#3D2C2C",width:"100%" }}/>
          </div>

          <div style={{ marginLeft:"auto",display:"flex",gap:"10px",alignItems:"center" }}>
            {user&&<div style={{ fontFamily:"'Nunito',sans-serif",fontWeight:700,fontSize:"13px",color:"#8A7070" }}>Hi, {user.emoji} {user.name}!</div>}
            <button onClick={()=>setScreen("home")} style={{ background:"linear-gradient(135deg,#FF6B6B,#FF8E53)",border:"none",borderRadius:"50px",padding:"8px 20px",color:"white",fontFamily:"'Baloo 2',cursive",fontWeight:700,fontSize:"13px",cursor:"pointer",boxShadow:"0 4px 14px rgba(255,107,107,.32)",letterSpacing:".5px" }}>🏠 Home</button>
          </div>
        </div> */}

        {/* View */}
        <div style={{ flex:1,display:"flex",overflow:"hidden" }}>
          {screen==="home"
            ? <HomePage onStart={handleStart} userEmoji={emoji}/>
            : <ChatView userName={user?.name||"Friend"} userEmoji={user?.emoji||"😊"}  goHome={goHome}/>}
        </div>
      </div>
    </div>
  );
}