import React from "react";

const TechSprint = () => {
  return (
    <>
 
      <div
        className="position-relative overflow-hidden text-center"
        style={{
          background: "linear-gradient(135deg, #f0f5ff 0%, #ffffff 45%, #f0faf4 100%)",
          borderBottom: "1px solid #e0e4ef",
          paddingTop: "56px",
          paddingBottom: "52px",
        }}
      >
       
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundImage: "radial-gradient(rgba(66,133,244,0.14) 1.5px, transparent 1.5px)", backgroundSize: "36px 36px", pointerEvents: "none", zIndex: 0 }} />
      
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "radial-gradient(ellipse at 8% 60%, rgba(66,133,244,0.11) 0%, transparent 48%), radial-gradient(ellipse at 92% 20%, rgba(52,168,83,0.09) 0%, transparent 48%), radial-gradient(ellipse at 80% 85%, rgba(234,67,53,0.07) 0%, transparent 40%)", pointerEvents: "none", zIndex: 0 }} />

        
        <div className="position-absolute" style={{ top: "10%", left: "5%",  width: "64px", height: "64px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(66,133,244,0.13), rgba(52,168,83,0.08))",  animation: "floatBubble 6s ease-in-out infinite",        zIndex: 0 }} />
        <div className="position-absolute" style={{ top: "18%", right: "7%", width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(251,188,4,0.13), rgba(234,67,53,0.08))",   animation: "floatBubble 8s ease-in-out infinite reverse",  zIndex: 0 }} />
        <div className="position-absolute" style={{ bottom: "12%", left: "10%", width: "50px", height: "50px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(234,67,53,0.10), rgba(251,188,4,0.08))", animation: "floatBubble 7s ease-in-out infinite 1s",      zIndex: 0 }} />
        <div className="position-absolute" style={{ bottom: "20%", right: "4%", width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg, rgba(52,168,83,0.13), rgba(66,133,244,0.08))", animation: "floatBubble 5s ease-in-out infinite 0.5s",    zIndex: 0 }} />

        <div className="container position-relative" style={{ zIndex: 1 }}>

          {/* GDG Badge */}
          <div className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-2 rounded-pill"
            style={{ background: "rgba(66,133,244,0.08)", border: "1px solid rgba(66,133,244,0.22)", color: "#4285F4", fontSize: "11px", fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", boxShadow: "0 2px 12px rgba(66,133,244,0.10)" }}
          >
            <span className="rounded-circle" style={{ width: "7px", height: "7px", background: "#4285F4", display: "inline-block", animation: "pulse 2s infinite", boxShadow: "0 0 0 3px rgba(66,133,244,0.2)" }} />
            GDG On Campus · SDSF DAVV
          </div>

          {/* Main Title */}
          <h1
            className="fw-bold mb-1"
            style={{ fontFamily: "Google Sans, Roboto, sans-serif", fontSize: "clamp(2.6rem, 6vw, 4rem)", lineHeight: 1.1, color: "#0d0d0d", letterSpacing: "-1px" }}
          >
            TechSprint{" "}
            <span style={{ background: "linear-gradient(90deg, #4285F4, #34A853, #FBBC04, #EA4335)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", backgroundSize: "200% auto", animation: "gradientShift 4s ease infinite" }}>
              Hackathon
            </span>
          </h1>

          {/* Year — styled as a distinct subtitle */}
          <div className="mb-3" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#3c4043", letterSpacing: "2px", fontFamily: "Google Sans, Roboto, sans-serif" }}>
            2025 – 26
          </div>

          <p style={{ color: "#5f6368", maxWidth: "400px", margin: "0 auto 20px", fontSize: "0.95rem", letterSpacing: "0.4px" }}>
            Innovation-Driven · Collaborative · Impact-Focused
          </p>

          {/* GDG 4-color dots */}
          <div className="d-flex justify-content-center gap-1 mx-auto" style={{ width: "fit-content" }}>
            {["#4285F4","#EA4335","#FBBC04","#34A853"].map((c, i) => (
              <span key={i} className="rounded-pill" style={{ display: "inline-block", width: "32px", height: "4px", background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ background: "#f2f4f9" }}>
        <div className="container col-xxl-9 py-4">

          {/* About Card */}
          <div className="bg-white rounded-4 p-4 p-md-4 mb-4 position-relative overflow-hidden about-card"
            style={{ border: "1px solid #e0e4ef", boxShadow: "0 2px 8px rgba(66,133,244,0.06), 0 6px 24px rgba(0,0,0,0.04)" }}
          >
            <div className="position-absolute top-0 end-0" style={{ width: "120px", height: "120px", background: "radial-gradient(circle at top right, rgba(66,133,244,0.07), transparent 70%)", borderRadius: "0 16px 0 0", pointerEvents: "none" }} />
            <h5 className="fw-bold mb-2 d-flex align-items-center gap-2"
              style={{ fontFamily: "Google Sans, Roboto, sans-serif", color: "#202124", fontSize: "1.05rem" }}
            >
              <span className="rounded-pill flex-shrink-0" style={{ width: "4px", height: "22px", background: "linear-gradient(180deg, #4285F4, #34A853)", display: "inline-block" }} />
              About the Hackathon
            </h5>
            <p className="mb-1" style={{ color: "#5f6368", fontSize: "0.91rem", lineHeight: 1.75 }}>
              TechSprint Hackathon was an innovation-driven event organized by GDG On Campus – SDSF DAVV, encouraging students to build impactful tech solutions, collaborate with peers, and showcase their creativity before mentors and judges.
            </p>
            <p className="mb-0" style={{ color: "#5f6368", fontSize: "0.91rem", lineHeight: 1.75 }}>
              Participants worked on real-world problems, developed working prototypes, and presented their ideas in a competitive yet collaborative environment.
            </p>
          </div>

          {/* Stats */}
          <div className="row g-3 mb-4">
            {[
              { icon: "🎉", value: "220+",   label: "Registrations",     accent: "#4285F4", bg: "linear-gradient(135deg,#e8f0fe,#d2e3fc)", glow: "rgba(66,133,244,0.13)"  },
              { icon: "💡", value: "40+",    label: "Projects Submitted", accent: "#34A853", bg: "linear-gradient(135deg,#e6f4ea,#ceead6)", glow: "rgba(52,168,83,0.13)"   },
              { icon: "🏆", value: "Tier 1", label: "Recognition",        accent: "#FBBC04", bg: "linear-gradient(135deg,#fef9e0,#fde68a)", glow: "rgba(251,188,4,0.13)"   },
            ].map((s, i) => (
              <div className="col-12 col-md-4" key={i}>
                <div className="rounded-4 text-center py-4 px-3 position-relative overflow-hidden stat-card"
                  style={{ background: s.bg, border: `1px solid ${s.glow.replace("0.13","0.3")}`, boxShadow: `0 2px 16px ${s.glow}` }}
                >
                  <div className="position-absolute top-0 end-0" style={{ width: "80px", height: "80px", borderRadius: "50%", background: `radial-gradient(circle, ${s.glow.replace("0.13","0.18")}, transparent 70%)`, transform: "translate(20px,-20px)", pointerEvents: "none" }} />
                  <div style={{ fontSize: "2.4rem", lineHeight: 1, marginBottom: "8px" }}>{s.icon}</div>
                  <div className="fw-bold" style={{ fontFamily: "Google Sans, Roboto, sans-serif", fontSize: "2rem", color: "#202124", lineHeight: 1, marginBottom: "4px" }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: "0.72rem", fontWeight: 700, color: s.accent, textTransform: "uppercase", letterSpacing: "1.2px" }}>
                    {s.label}
                  </div>
                  <span className="position-absolute bottom-0 start-0 end-0" style={{ height: "3px", background: `linear-gradient(90deg, ${s.accent}, ${s.accent}99)` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Winners Heading */}
          <div className="text-center mb-4">
            <span className="d-inline-block rounded-pill px-4 py-2 mb-2"
              style={{ background: "linear-gradient(135deg, #fff8e1, #fff3e0)", border: "1px solid rgba(251,188,4,0.3)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#E37400" }}
            >
              🏆 &nbsp;Hall of Fame
            </span>
            <h2 className="fw-bold mb-1"
              style={{ fontFamily: "Google Sans, Roboto, sans-serif", fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "#0d0d0d", letterSpacing: "-0.3px" }}
            >
              TechSprint Winners
            </h2>
            <p style={{ color: "#5f6368", fontSize: "0.88rem", maxWidth: "340px", margin: "0 auto 12px" }}>
              Congratulations to the outstanding teams of TechSprint 2025–26
            </p>
            <div className="d-flex justify-content-center gap-1">
              {["#4285F4","#EA4335","#FBBC04","#34A853"].map((c, i) => (
                <span key={i} className="rounded-pill" style={{ display: "inline-block", width: "36px", height: "3px", background: c }} />
              ))}
            </div>
          </div>

          {/* Winner Cards */}
          <div className="row g-3">

            {/* Gold */}
            <div className="col-12 col-md-4">
              <div className="rounded-4 text-center px-4 py-4 position-relative overflow-hidden h-100 winner-card"
                style={{ background: "linear-gradient(160deg, #fffdf0 0%, #ffffff 60%)", border: "1px solid rgba(251,188,4,0.35)", boxShadow: "0 4px 24px rgba(251,188,4,0.15), 0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <span className="position-absolute top-0 start-0 end-0" style={{ height: "5px", background: "linear-gradient(90deg, #FBBC04, #FFD54F, #FBBC04)", backgroundSize: "200% auto", animation: "gradientShift 3s linear infinite" }} />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(251,188,4,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />

                {/* Medal with ring */}
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: "72px", height: "72px", background: "linear-gradient(135deg, #fff8e1, #ffe082)", border: "2px solid rgba(251,188,4,0.4)", boxShadow: "0 4px 16px rgba(251,188,4,0.25)" }}
                >
                  <span style={{ fontSize: "2.4rem", lineHeight: 1, filter: "drop-shadow(0 2px 4px rgba(251,188,4,0.4))" }}>🥇</span>
                </div>

                <span className="d-inline-block rounded-pill mb-2 px-3 py-1"
                  style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", background: "linear-gradient(135deg, #FFF8E1, #FFE082)", color: "#E37400", border: "1px solid rgba(251,188,4,0.3)" }}
                >
                  1st Place
                </span>
                <h5 className="fw-bold mb-1" style={{ fontFamily: "Google Sans, Roboto, sans-serif", color: "#202124", fontSize: "1.15rem" }}>
                  Team DevNova
                </h5>
                <div className="mb-3 fw-semibold" style={{ fontSize: "1 rem", color: "#202124", lineHeight:2 }}>
                  Jahnavi Mishra
                  <div style={{ fontSize: "0.74rem", color: "#80868b", marginTop: "2px" }}>SDSF, DAVV</div>
                </div>
                <a href="https://github.com/MissJahnavi/InfraSense" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2"
                  style={{ fontSize: "0.8rem", fontWeight: 600, background: "linear-gradient(135deg, #e8f0fe, #d2e3fc)", color: "#1a73e8", border: "1px solid rgba(66,133,244,0.25)", textDecoration: "none", cursor: "pointer" }}
                >
                  <span className="rounded-circle" style={{ width: "7px", height: "7px", background: "#4285F4", flexShrink: 0, display: "inline-block" }} />
                  InfraSense
                </a>
              </div>
            </div>

            {/* Silver */}
            <div className="col-12 col-md-4">
              <div className="rounded-4 text-center px-4 py-4 position-relative overflow-hidden h-100 winner-card"
                style={{ background: "linear-gradient(160deg, #f9fafb 0%, #ffffff 60%)", border: "1px solid rgba(154,160,166,0.35)", boxShadow: "0 4px 24px rgba(154,160,166,0.15), 0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <span className="position-absolute top-0 start-0 end-0" style={{ height: "5px", background: "linear-gradient(90deg, #9aa0a6, #CFD8DC, #9aa0a6)", backgroundSize: "200% auto", animation: "gradientShift 3s linear infinite" }} />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(154,160,166,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />

                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: "72px", height: "72px", background: "linear-gradient(135deg, #f5f5f5, #cfd8dc)", border: "2px solid rgba(154,160,166,0.4)", boxShadow: "0 4px 16px rgba(154,160,166,0.25)" }}
                >
                  <span style={{ fontSize: "2.4rem", lineHeight: 1, filter: "drop-shadow(0 2px 4px rgba(154,160,166,0.4))" }}>🥈</span>
                </div>

                <span className="d-inline-block rounded-pill mb-2 px-3 py-1"
                  style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", background: "linear-gradient(135deg, #F5F5F5, #ECEFF1)", color: "#5f6368", border: "1px solid rgba(154,160,166,0.3)" }}
                >
                  2nd Place
                </span>
                <h5 className="fw-bold mb-1" style={{ fontFamily: "Google Sans, Roboto, sans-serif", color: "#202124", fontSize: "1.15rem" }}>
                  Team RX
                </h5>
                <div className="mb-3 fw-semibold" style={{ fontSize: "1 rem", color: "#202124", lineHeight: 2 }}>
                  RouneetRaj Sinha
                  <div style={{ fontSize: "0.74rem", color: "#80868b", marginTop: "2px" }}>IET, DAVV</div>
                </div>
                <a href="https://github.com/rxsinhaa/codedungeon" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2"
                  style={{ fontSize: "0.8rem", fontWeight: 600, background: "linear-gradient(135deg, #f1f3f4, #e8eaed)", color: "#5f6368", border: "1px solid rgba(154,160,166,0.25)", textDecoration: "none", cursor: "pointer" }}
                >
                  <span className="rounded-circle" style={{ width: "7px", height: "7px", background: "#9aa0a6", flexShrink: 0, display: "inline-block" }} />
                  Code Dungeon
                </a>
              </div>
            </div>

            {/* Bronze */}
            <div className="col-12 col-md-4">
              <div className="rounded-4 text-center px-4 py-4 position-relative overflow-hidden h-100 winner-card"
                style={{ background: "linear-gradient(160deg, #fff8f5 0%, #ffffff 60%)", border: "1px solid rgba(205,127,50,0.35)", boxShadow: "0 4px 24px rgba(205,127,50,0.15), 0 1px 4px rgba(0,0,0,0.05)" }}
              >
                <span className="position-absolute top-0 start-0 end-0" style={{ height: "5px", background: "linear-gradient(90deg, #cd7f32, #e8a87c, #cd7f32)", backgroundSize: "200% auto", animation: "gradientShift 3s linear infinite" }} />
                <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: "radial-gradient(ellipse at 80% 0%, rgba(205,127,50,0.08) 0%, transparent 55%)", pointerEvents: "none" }} />

                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                  style={{ width: "72px", height: "72px", background: "linear-gradient(135deg, #fbe9e7, #ffccbc)", border: "2px solid rgba(205,127,50,0.4)", boxShadow: "0 4px 16px rgba(205,127,50,0.25)" }}
                >
                  <span style={{ fontSize: "2.4rem", lineHeight: 1, filter: "drop-shadow(0 2px 4px rgba(205,127,50,0.4))" }}>🥉</span>
                </div>

                <span className="d-inline-block rounded-pill mb-2 px-3 py-1"
                  style={{ fontSize: "0.68rem", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", background: "linear-gradient(135deg, #FBE9E7, #FFE0B2)", color: "#bf360c", border: "1px solid rgba(205,127,50,0.3)" }}
                >
                  3rd Place
                </span>
                <h5 className="fw-bold mb-1" style={{ fontFamily: "Google Sans, Roboto, sans-serif", color: "#202124", fontSize: "1.15rem" }}>
                  Team Soft Launch
                </h5>
                <div className="mb-3 fw-semibold" style={{ fontSize: "1rem", color: "#202124", lineHeight: 2 }}>
                  Urvi Pandey &amp; Kulshresth Tiwari
                  <div style={{ fontSize: "0.74rem", color: "#80868b", marginTop: "2px" }}>SCSIT, DAVV</div>
                </div>
                <a href="https://github.com/urvipandeyin/AllStars-DAVV" target="_blank" rel="noopener noreferrer" className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2"
                  style={{ fontSize: "0.8rem", fontWeight: 600, background: "linear-gradient(135deg, #fbe9e7, #ffe0cc)", color: "#bf360c", border: "1px solid rgba(205,127,50,0.25)", textDecoration: "none", cursor: "pointer" }}
                >
                  <span className="rounded-circle" style={{ width: "7px", height: "7px", background: "#cd7f32", flexShrink: 0, display: "inline-block" }} />
                  AllStars DAVV 
                </a>
              </div>
            </div>

          </div>

          {/* GDG Color Bar Footer */}
          <div className="d-flex overflow-hidden rounded-pill mx-auto mt-4"
            style={{ height: "5px", maxWidth: "160px", boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
          >
            <span className="flex-fill" style={{ background: "#4285F4" }} />
            <span className="flex-fill" style={{ background: "#EA4335" }} />
            <span className="flex-fill" style={{ background: "#FBBC04" }} />
            <span className="flex-fill" style={{ background: "#34A853" }} />
          </div>

          <div style={{ height: "32px" }} />
        </div>
      </div>

      <style jsx="true">{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1);   box-shadow: 0 0 0 3px rgba(66,133,244,0.2); }
          50%       { opacity: 0.6; transform: scale(1.3); box-shadow: 0 0 0 5px rgba(66,133,244,0.1); }
        }
        @keyframes gradientShift {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes floatBubble {
          0%, 100% { transform: translateY(0px)   scale(1);    }
          50%       { transform: translateY(-16px) scale(1.05); }
        }
        .about-card { transition: box-shadow 0.3s ease; }
        .about-card:hover { box-shadow: 0 4px 16px rgba(66,133,244,0.10), 0 12px 40px rgba(0,0,0,0.07) !important; }
        .stat-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .stat-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.14) !important; }
        .winner-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .winner-card:hover { transform: translateY(-8px); box-shadow: 0 16px 48px rgba(0,0,0,0.16) !important; }
        .winner-card a:hover { opacity: 0.85; transform: scale(1.03); transition: opacity 0.2s ease, transform 0.2s ease; }
      `}</style>
    </>
  );
};

export default TechSprint;
