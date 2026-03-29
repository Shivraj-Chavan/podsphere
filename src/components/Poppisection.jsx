import { useState, useEffect, useRef } from "react";

const PHONE_IMG   = "/phonemockup.png";

const FEATURES = [
  {
    num: "1.",
    icon: "🚀",
    title: "Game-Driven Phonics Learning",
    desc: "Connecting phonics with characters and narratives, learning becomes natural, fun, and long-lasting.",
    bg: "#3B5BDB",        // blue
    accent: "#ffffff",
  },
  {
    num: "2.",
    icon: "👨‍👩‍👧",
    title: "Personalized & Small Group Classes",
    desc: "Small group sessions allow focused attention, adaptive pacing, and personalized guidance so each learner grows with confidence.",
    bg: "#F97316",        // orange
    accent: "#ffffff",
  },
  {
    num: "3.",
    icon: "🎓",
    title: "Caring, Trained Educators",
    desc: "Our educators are trained in early literacy, child psychology, and phonics instruction — nurturing both skills and self-belief.",
    bg: "#84CC16",        // green
    accent: "#1f2937",
    titleColor: "#1f2937",
  },
  {
    num: "4.",
    icon: "⭐",
    title: "Confidence at Every Step",
    desc: "Through gentle encouragement, achievable milestones, and positive reinforcement, children gain the courage to read, speak, and explore independently.",
    bg: "#EC4899",        // pink/magenta
    accent: "#ffffff",
  },
  {
    num: "5.",
    icon: "🤝",
    title: "Parents as Learning Partners",
    desc: "We work closely with parents, sharing progress, strategies, and insights so children receive consistent support at home and class.",
    bg: "#8B5CF6",        // purple
    accent: "#ffffff",
  },
];

export default function WhyChoosePodSphere() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setVisible(true);
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#ffffff",
        fontFamily: " 'Poppins'",
        padding: "56px 24px 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,600;0,700;0,900;1,900&display=swap');

        .wcp-card {
          transition: transform 0.35s cubic-bezier(.21,1.02,.73,1), box-shadow 0.35s ease;
        }
        .wcp-card:hover {
          transform: translateY(-6px) scale(1.02) !important;
          box-shadow: 0 28px 60px rgba(0,0,0,0.22) !important;
        }

        @media (max-width: 900px) {
          .wcp-layout { flex-direction: column !important; align-items: center !important; }
          .wcp-left, .wcp-right { flex-direction: row !important; flex-wrap: wrap !important; justify-content: center !important; width: 100% !important; }
          .wcp-phone { display: none !important; }
        }
      `}</style>

      {/* ── TOP: Heading + description ── */}
      <div style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 32,
        maxWidth: 1100,
        margin: "0 auto 52px",
        flexWrap: "wrap",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.7s ease",
      }}>
        {/* Left: title + arrow */}
        <div style={{ minWidth: 220 }}>
          <h2 style={{
            fontSize: "clamp(28px, 3.5vw, 42px)",
            fontWeight: 900,
            lineHeight: 1.2,
            margin: 0,
            fontFamily: "'Poppins",
          }}>
            <span style={{ color: "#EC4899" }}>Why choose</span>
            <br />
            <span style={{ color: "#1f2937" }}>PodSphere ?</span>
          </h2>
          {/* Decorative arrow */}
          <svg width="80" height="40" viewBox="0 0 80 40" style={{ marginTop: 8, marginLeft: 8 }}>
            <path
              d="M 5 30 C 20 5, 50 5, 65 20"
              fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round"
            />
            <polygon points="62,14 72,22 60,26" fill="#1f2937" />
          </svg>
        </div>

        {/* Right: description */}
        <p style={{
          maxWidth: 450,
          fontSize: "clamp(13px, 1.4vw, 16px)",
          lineHeight: 1.75,
          color: "#4b5563",
          margin: 0,
          paddingTop: 4,
          fontFamily: "'Poppins",
          fontWeight: 600,
        }}>
          Small steps that build big confidence, because your child's first learning steps truly matter.
          We nurture curious minds through joyful experiences that{" "}
          <strong>inspire growth, creativity,</strong> and{" "}
          <strong>a lifelong love</strong> of learning.
        </p>
      </div>

      {/* ── BOTTOM: Cards + Phone ── */}
      <div
      className="wcp-layout"
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        gap: 55, // ⬅ tighter like image
        maxWidth: 1150,
        margin: "0 auto",
        position: "relative",
      }}
    >

        {/* ── LEFT CARDS (1 & 2) ── */}
        <div
          className="wcp-left"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 55,
            flex: "0 0 auto",
          }}
        >
          {FEATURES.slice(0, 2).map((f, i) => (
            <FeatureCard
              key={f.num}
              feature={f}
              index={i}
              visible={visible}
              // Cards fan out: card 0 is tallest and most offset, card 1 is slightly in
              // height={i === 0 ? 380 : 360}
              width={190}
              clipSide="right"
              offsetY={i === 0 ? -40 : -15}
            />
          ))}
        </div>

        {/* ── CENTER: Phone mockup ── */}
        <div
        className="wcp-phone"
        style={{
          width: 210,
          zIndex: 10,
          position: "relative",
          transform: visible ? "translateY(-12px)" : "translateY(40px)",
          transition: "all 0.8s cubic-bezier(.21,1.02,.73,1) 0.3s",
        }}  
      >
         {/* <FeatureCard
    feature={FEATURES[2]} // GREEN CARD
    index={2}
    visible={visible}
    height={260}
    width={160}
    clipSide={null}
  /> */}

          {/* Phone frame */}
          <div style={{ position: "relative", width: 200 }}>
            <img
              src={PHONE_IMG}
              alt="PodSphere app"
              style={{ width: "100%", height: "100%", display: "block", filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.35))" }}
            />
            {/* PodSphere branding overlay on phone screen */}
            <div style={{
              position: "absolute",
              top: "10%",
              left: "11%",
              right: "11%",
              bottom: "4%",
              borderRadius: 20,
              background: "linear-gradient(160deg, #f0fdf4 0%, #ecfdf5 100%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}>
              <div style={{
                fontFamily: "'Poppins",
                fontWeight: 900,
                fontSize: 22,
                background: "linear-gradient(135deg, #EC4899, #8B5CF6, #3B82F6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                letterSpacing: "-0.5px",
                textAlign: "center",
                lineHeight: 1.1,
              }}>
                PodSphere
              </div>
              <div style={{
                fontSize: 9,
                color: "#6b7280",
                marginTop: 4,
                fontFamily: "'Poppins",
                fontWeight: 600,
                fontStyle: "italic",
                textAlign: "center",
              }}>
                Education Delivered
              </div>
              {/* mini decorative dots */}
              {/* <div style={{ display: "flex", gap: 6, marginTop: 20 }}>
                {["#EC4899","#F97316","#84CC16","#3B82F6","#8B5CF6"].map((c,i) => (
                  <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
                ))}
              </div> */}
              <FeatureCard
              feature={FEATURES[2]} // GREEN CARD
              index={2}
              visible={visible}
              height={260}
              width={160}
              clipSide={null}
            />
            </div>
 
          </div>
        </div>

        {/* ── RIGHT CARDS (3, 4, 5) ── */}
        <div
          className="wcp-right"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            gap: 55,
            flex: "0 0 auto",
          }}
        >
          {FEATURES.slice(3).map((f, i) => (
            <FeatureCard
              key={f.num}
              feature={f}
              index={i + 2}
              visible={visible}
              // height={i === 0 ? 400 : i === 1 ? 370 : 350}
              width={190}
              clipSide="left"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Individual Feature Card ── */
function FeatureCard({ feature: f, index, visible, height, width, clipSide }) {
  const delay = `${index * 0.09}s`;

  return (
    <div
      className="wcp-card"
      style={{
        width,
        height,
        background: f.bg,
        borderRadius: 24,
        padding: "24px 18px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "0 16px 48px rgba(0,0,0,0.18)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(50px) scale(0.92)",
        transition: `opacity 0.6s ease ${delay}, transform 0.7s cubic-bezier(.21,1.02,.73,1) ${delay}`,
        // Overlap the phone slightly
        marginLeft: clipSide === "left" ? -18 : 0,
        marginRight: clipSide === "right" ? -18 : 0,
        zIndex: 3 + index,
      }}
    >
      {/* Decorative darker blob top-right */}
      <div style={{
        position: "absolute",
        top: -30, right: -30,
        width: 100, height: 100,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.10)",
        pointerEvents: "none",
      }} />
      {/* Decorative blob bottom-left */}
      <div style={{
        position: "absolute",
        bottom: -20, left: -20,
        width: 80, height: 80,
        borderRadius: "50%",
        background: "rgba(0,0,0,0.08)",
        pointerEvents: "none",
      }} />

      {/* Number */}
      <p style={{
        color: f.accent || "#fff",
        fontWeight: 900,
        fontSize: 18,
        margin: 0,
        fontFamily: "'Poppins",
        opacity: 0.9,
        position: "relative",
        zIndex: 1,
      }}>
        {f.num}
      </p>

      {/* Icon */}
      <div style={{
        fontSize: 32,
        lineHeight: 1,
        position: "relative",
        zIndex: 1,
      }}>
        {f.icon}
      </div>

      {/* Title */}
      <p style={{
        color: f.titleColor || "#ffffff",
        fontWeight: 900,
        fontSize: 14,
        lineHeight: 1.35,
        margin: 0,
        fontFamily: "'Poppins",
        position: "relative",
        zIndex: 1,
      }}>
        {f.title}
      </p>

      {/* Desc */}
      <p style={{
        color: f.titleColor ? "rgba(0,0,0,0.7)" : "rgba(255,255,255,0.88)",
        fontSize: 11,
        lineHeight: 1.6,
        margin: 0,
        fontFamily: "'Poppins",
        fontWeight: 600,
        position: "relative",
        zIndex: 1,
        flex: 1,
      }}>
        {f.desc}
      </p>
    </div>
  );
}