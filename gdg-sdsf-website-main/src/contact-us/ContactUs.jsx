/**
 * GDG Contact Page
 *
 * Props:
 * dark {boolean} — controlled by your navbar's theme toggle
 *
 * Usage:
 * <GDGContactPage dark={isDark} />
 */

import { useEffect, useRef } from "react";

const G_COLORS = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

function ColorDot({ color, delay = 0 }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: color,
        margin: "0 3px",
        animation: `gdg-pulse 2.4s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

function SectionLabel({ children, dark }) {
  return (
    <p
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: dark ? "#9aa0a6" : "#80868b",
        margin: "0 0 20px",
      }}
    >
      {children}
    </p>
  );
}

function ContactRow({ icon, label, value, href, color, dark }) {
  const inner = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "18px 22px",
        borderRadius: 16,
        background: dark ? "rgba(255,255,255,0.04)" : `${color}0a`,
        border: `1px solid ${dark ? "rgba(255,255,255,0.08)" : `${color}28`}`,
        transition: "transform 0.22s cubic-bezier(.4,0,.2,1), box-shadow 0.22s, background 0.3s",
        cursor: href ? "pointer" : "default",
        textDecoration: "none",
        color: "inherit",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(6px)";
        e.currentTarget.style.boxShadow = `-4px 0 0 ${color}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        style={{
          width: 42,
          height: 42,
          borderRadius: 12,
          background: `${color}18`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 20,
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.13em",
            textTransform: "uppercase",
            color: color,
            marginBottom: 3,
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 15,
            fontWeight: 500,
            color: dark ? "#e8eaed" : "#3c4043",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {value}
        </div>
      </div>
      {href && (
        <div
          style={{
            marginLeft: "auto",
            color: dark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          →
        </div>
      )}
    </div>
  );

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "block", marginBottom: 12 }}
    >
      {inner}
    </a>
  ) : (
    <div style={{ marginBottom: 12 }}>{inner}</div>
  );
}

function Card({ children, dark, style = {} }) {
  return (
    <div
      style={{
        background: dark ? "rgba(30, 32, 35, 0.75)" : "rgba(255,255,255,0.86)",
        backdropFilter: "blur(22px)",
        WebkitBackdropFilter: "blur(22px)",
        borderRadius: 22,
        padding: "32px 30px",
        border: `1px solid ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"}`,
        transition: "background 0.4s, border-color 0.4s, box-shadow 0.4s",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SocialPill({ label, handle, icon, color, href, dark }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          borderRadius: 12,
          background: dark ? "rgba(255,255,255,0.04)" : `${color}09`,
          border: `1px solid ${color}30`,
          transition: "background 0.2s, transform 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${color}1a`;
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = dark ? "rgba(255,255,255,0.04)" : `${color}09`;
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        <span style={{ fontSize: 18 }}>{icon}</span>
        <div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: color,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            {label}
          </div>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: dark ? "#bdc1c6" : "#3c4043",
              fontWeight: 500,
            }}
          >
            {handle}
          </div>
        </div>
      </div>
    </a>
  );
}

export default function GDGContactPage({ dark = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let t = 0, raf;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      const w = canvas.width, h = canvas.height;
      const colors = dark
        ? ["#0d1b4b", "#1a0b2e", "#0a2d5c", "#081c15"]
        : ["#dce8ff", "#fde8ec", "#ddf0ff", "#e4f7ec"];

      const cx = w * (0.5 + 0.25 * Math.sin(t * 0.6));
      const cy = h * (0.45 + 0.15 * Math.cos(t * 0.45));
      const grad = ctx.createRadialGradient(cx, cy, 0, w * 0.5, h * 0.5, Math.max(w, h) * 0.9);
      grad.addColorStop(0, colors[0]);
      grad.addColorStop(0.33, colors[1]);
      grad.addColorStop(0.66, colors[2]);
      grad.addColorStop(1, colors[3]);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      t += 0.004;
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [dark]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#0d1117" : "#f8f9fa",
        color: dark ? "#e8eaed" : "#202124",
        transition: "background 0.5s ease, color 0.5s ease",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');
        @keyframes gdg-pulse  { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.35)} }
        @keyframes gdg-fadeup { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes gdg-fadein { from{opacity:0} to{opacity:1} }
      `}</style>

      {/* Animated canvas BG */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: dark ? 0.28 : 0.4,
          pointerEvents: "none",
          zIndex: 0,
          transition: "opacity 0.5s",
        }}
      />

      {/* Page content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1060,
          margin: "0 auto",
          padding: "72px 24px 72px",
          animation: "gdg-fadeup 0.65s cubic-bezier(.4,0,.2,1) both",
        }}
      >
        {/* ── Hero ── */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ display: "flex", justifyContent: "center", gap: 1, marginBottom: 14 }}>
            {["G", "D", "G"].map((ch, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: 50,
                  color: G_COLORS[i],
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  animation: `gdg-fadein 0.5s ${0.1 * i}s both`,
                }}
              >
                {ch}
              </span>
            ))}
          </div>

          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.26em",
              color: dark ? "#9aa0a6" : "#5f6368",
              textTransform: "uppercase",
              marginBottom: 22,
            }}
          >
            Google Developer Group · SDSF Indore
          </div>

          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(32px, 5.5vw, 58px)",
              lineHeight: 1.08,
              margin: "0 0 14px",
              background: `linear-gradient(130deg, ${G_COLORS[0]} 0%, ${G_COLORS[1]} 55%, ${G_COLORS[2]} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 16,
              color: dark ? "#bdc1c6" : "#5f6368",
              maxWidth: 440,
              margin: "0 auto 18px",
              lineHeight: 1.7,
            }}
          >
            Whether you want to collaborate, speak at an event, or simply say hi — we're always happy to connect with the Indore community.
          </p>

          <div>
            {G_COLORS.map((c, i) => (
              <ColorDot key={c} color={c} delay={i * 0.35} />
            ))}
          </div>
        </div>

        {/* ── Two-column grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {/* Left — Contact Details */}
          <Card dark={dark}>
            <SectionLabel dark={dark}>Contact Details</SectionLabel>
            <ContactRow
              icon="📧"
              label="General Enquiries"
              value="hello@gdgsdsf.dev"
              href="mailto:hello@gdgsdsf.dev"
              color={G_COLORS[0]}
              dark={dark}
            />
            <ContactRow
              icon="📨"
              label="Partnerships"
              value="partners@gdgsdsf.dev"
              href="mailto:partners@gdgsdsf.dev"
              color={G_COLORS[1]}
              dark={dark}
            />
            <ContactRow
              icon="📍"
              label="Chapter HQ"
              value="Indore, Madhya Pradesh, India"
              color={G_COLORS[3]}
              dark={dark}
            />
            <ContactRow
              icon="💬"
              label="WhatsApp Community"
              value="+91 00000 00000"
              href="https://wa.me/910000000000"
              color={G_COLORS[2]}
              dark={dark}
            />
          </Card>

          {/* Right — Socials + Meetup CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <Card dark={dark}>
              <SectionLabel dark={dark}>Follow Us</SectionLabel>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <SocialPill icon="𝕏"  label="Twitter / X" handle="@gdg_sdsf" color={G_COLORS[0]} href="#" dark={dark} />
                <SocialPill icon="🔗" label="LinkedIn"    handle="GDG SDSF"  color={G_COLORS[1]} href="#" dark={dark} />
                <SocialPill icon="📸" label="Instagram"   handle="@gdgsdsf"  color={G_COLORS[2]} href="#" dark={dark} />
                <SocialPill icon="▶️" label="YouTube"     handle="GDG SDSF"  color={G_COLORS[3]} href="#" dark={dark} />
                <SocialPill icon="💬" label="Discord"     handle="GDG SDSF"  color={G_COLORS[0]} href="#" dark={dark} />
                <SocialPill icon="🐙" label="GitHub"      handle="gdg-sdsf"  color={G_COLORS[3]} href="#" dark={dark} />
              </div>
            </Card>

            {/* Meetup CTA */}
            <a
              href="https://gdg.community.dev/gdg-sdsf-indore"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  borderRadius: 22,
                  padding: "26px 30px",
                  background: `linear-gradient(135deg, ${G_COLORS[0]}ee, ${G_COLORS[1]}cc)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                  transition: "transform 0.22s, box-shadow 0.22s",
                  boxShadow: `0 8px 32px ${G_COLORS[0]}44`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = `0 14px 40px ${G_COLORS[0]}55`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = `0 8px 32px ${G_COLORS[0]}44`;
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.8)",
                      marginBottom: 6,
                    }}
                  >
                    Join our community
                  </div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 800,
                      fontSize: 20,
                      color: "#fff",
                    }}
                  >
                    RSVP on Meetup →
                  </div>
                </div>
                <span style={{ fontSize: 42 }}>🚀</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}