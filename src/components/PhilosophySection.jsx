
import { useState, useEffect, useRef } from "react";

const nodes = [
  { id: "holistic", title: "Holistic", titleColor: "#FDD835", desc: "Early-learning approach that nurtures thinking, creativity, and expression", x: 8, y: 8, blob: "M100,18 C128,6 162,18 172,52 C184,92 165,138 132,158 C100,178 58,174 34,150 C8,124 10,80 22,50 C34,18 70,30 100,18 Z" },
  { id: "research", title: "Research-led", titleColor: "#F97316", desc: "Content crafted by experienced educators", x: 48, y: 8, blob: "M100,14 C132,2 170,18 178,54 C188,94 168,138 134,158 C100,178 56,172 32,148 C6,122 10,78 22,48 C34,16 68,26 100,14 Z" },
  { id: "nurturing", title: "Nurturing", titleColor: "#A855F7", desc: "A warm, child-centered environment focused on growth and curiosity", x: 78, y: 32, blob: "M100,12 C136,0 174,20 180,56 C188,96 166,140 130,160 C96,180 52,172 28,148 C2,122 6,78 20,48 C34,16 66,24 100,12 Z" },
  { id: "progressive", title: "Progressive", titleColor: "#3B82F6", desc: "Skill-building progression designed to grow with the child", x: 28, y: 30, blob: "M100,10 C138,2 176,18 184,56 C193,96 170,142 134,162 C98,182 50,176 26,150 C0,124 4,78 18,48 C32,16 64,22 100,10 Z" },
  { id: "joyful", title: "Joyful", titleColor: "#10B981", desc: "Interactive activities that make learning meaningful", x: 0, y: 56, blob: "M100,16 C130,4 166,22 176,58 C188,98 168,140 134,160 C100,180 54,176 30,152 C4,126 8,82 20,52 C32,18 68,28 100,16 Z" },
  { id: "empowering", title: "Empowering", titleColor: "#EC4899", desc: "Learning tools that develop confidence and independence", x: 47, y: 54, blob: "M100,12 C134,0 172,20 180,56 C190,96 168,140 132,160 C98,178 52,174 28,150 C2,124 6,80 18,50 C30,18 66,24 100,12 Z" },
];

const CH = 560;

function BlobNode({ node, visible, index }) {
  return (
    <div 
      style={{
        position: "absolute",
        left: `${node.x}%`,
        top: `${node.y}%`,
        width: 210,
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.8)",
        transition: `all .6s ease ${index * 0.1}s`,
        cursor:"pointer"
      }}
      className="blob-node"
    >
      <div style={{ position: "relative", width: 230, height: 250 }}>
      <svg width="381" height="388" viewBox="0 0 381 388" fill="none" xmlns="http://www.w3.org/2000/svg" style={{"transform":"scale(0.6)"}} className="absolute -left-17 -top-20  counter-rotate">
              <path d="M243.935 70.6618C220.849 44.445 187.022 27.9284 149.346 28.0002C80.2221 28.1543 23.205 86.0082 23.9712 155.187C24.046 161.902 24.641 168.489 25.728 174.91C28.9219 193.769 27.9445 213.159 21.9394 231.317C18.8617 240.612 17.1385 250.527 17.0083 260.824C16.3047 315.176 60.4922 360.001 114.801 360.001C126.92 360.001 138.519 357.789 149.223 353.766C170.177 345.873 192.418 342.033 214.803 342.252C215.233 342.258 215.657 342.258 216.089 342.258C285.637 342.258 343.155 284.578 343.011 214.966C342.929 172.313 321.832 134.6 289.545 111.63C272.837 99.7326 257.483 86.0595 243.935 70.662V70.6618Z" fill="#333333"/>
        </svg>

        {/* <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20, textAlign: "center" }}>
          <p style={{ color: node.titleColor, fontWeight: 700 }} className="text-lg text-center pt-2">{node.title}</p>
          <p className="blob-desc">{node.desc}</p>
        </div> */}

<div
  style={{
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: "10px",
    textAlign: "center",
    paddingTop:"60px",
    paddingLeft:'10px'
  }}
>
  <p
    style={{ color: node.titleColor, fontWeight: 700 }}
    className="text-lg leading-tight"
  >
    {node.title}
  </p>

  <p className="blob-desc text-sm leading-relaxed max-w-[180px]">
    {node.desc}
  </p>
</div>
      </div>

      <style>{`
        .blob-desc {
          color:#e5e7eb;
          font-size:14px;
          opacity:0;
          transform:translateY(6px);
          transition:.s;
          padding:0 15px;
          padding-top:6px
        }
        .blob-node:hover .blob-desc {
          opacity:1;
          transform:translateY(0);
        }
      `}</style>
    </div>
  );
}

export default function BlobNodesSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#F9E03B",
        position: "relative",
        overflow: "hidden",
        minHeight: 700,
      }}
    >
      <img src="./Line12.png" className="absolute left-0 top-42 h-[600px]" alt="" />
      {/* HEADING */}
      <div style={{
        maxWidth: 900,
        margin: "0",
        // padding: '10px',
        // padding: "40px 24px 32px",
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.7s ease",
      }}>
        <div style={{
        //   border: "2.5px dashed #3B82F6",
          borderRadius: 10,
          padding: "0px 0px",
        //   background: "rgba(255,255,255,0.15)",
        }}>
          <h2 style={{
            fontSize: "55px",
            fontWeight: 700,
            color: "#1f2937",
            margin: 0,
            lineHeight: 1.20,
            fontFamily: "'Poppins'",
            top: "0",
            fontStyle: "medium",
            paddingTop: 35,
          }}>
            Shaping a generation of thinkers and dreamers, starting with strong foundations.
          </h2>
        </div>
      </div>

      <div className="rotating-bg"  style={{ position: "relative", maxWidth: 1100, margin: "0 auto", height: CH }}>

        {/* VECTOR ARROWS */}

        <img src="/arrowdownright.png" style={{ position:"absolute", left:"30%", top:"22%", width:60, transform:"rotate(-10deg)" }} />
        <img src="/arrowsleep.png" style={{ position:"absolute", left:"18%", top:"50%", width:60, transform:"rotate(120deg)" }} />
        <img src="/arrowsleep.png" style={{ position:"absolute", left:"38%", top:"70%", width:60, transform:"rotate(20deg)" }} />
        <img src="/arrowdownright.png" style={{ position:"absolute", right:"22%", top:"30%", width:60, transform:"rotate(-10deg)" }} />
        <img src="/arrowldownleft.png" style={{ position:"absolute", right:"35%", top:"48%", width:60, transform:"rotate(150deg)" }} />

        {/* BLOBS */}
        {nodes.map((n, i) => (
          <BlobNode key={n.id} node={n} visible={visible} index={i} />
        ))}

           {/* ── BOTTOM-LEFT CUBE CLUSTER ── */}
       <div style={{
        position: "absolute",
        bottom: "1rem",
        left: "6%",
        display: "flex",
        alignItems: "flex-end",
        gap: 6,
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.6s",
      }}>

        <img src="/cubebottom.png" alt="cube C" className="w-[336.52px] h-[5px]  me-[80px] left-[141px] rotate-[-16.39]" style={{ transform: "rotate(-8deg)", objectFit: "contain" }} />
      </div>

         {/* ── TOP-RIGHT CUBE CLUSTER ── */}
      {/* <div style={{
        position: "absolute",
        top: "-200px",
        right: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 6,
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.4s",
      }}>
    
        <img src="/cubetop.png" alt="cube A" className="w-[212px] h-[458px] top-[1500px] left-[1426px]" style={{  transform: "rotate(6deg)", objectFit: "contain" }} />
      </div> */}

      </div>
    </section>
  );
}



















