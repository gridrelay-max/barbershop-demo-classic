'use client';
import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════
// 💈 TEMPLATE 01 — CLASSIC
// Dark, gold accents, vintage barbershop
// All data from site-config.json (auto-filled by scraper)
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  SHOP_NAME: "King's Classic Barbershop",
  SHOP_TAGLINE: "Where Tradition Meets Style",
  SHOP_ADDRESS: "1247 NW 36th Street",
  SHOP_CITY: "Miami",
  SHOP_STATE: "FL",
  SHOP_ZIP: "33142",
  SHOP_PHONE: "(305) 555-0147",
  SHOP_EMAIL: "",
  SHOP_RATING: "4.8",
  SHOP_REVIEW_COUNT: "127",
  SHOP_GOOGLE_MAPS_URL: "https://maps.google.com",
  SHOP_HOURS: {
    Monday: "9:00 AM – 7:00 PM",
    Tuesday: "9:00 AM – 7:00 PM",
    Wednesday: "9:00 AM – 7:00 PM",
    Thursday: "9:00 AM – 8:00 PM",
    Friday: "9:00 AM – 8:00 PM",
    Saturday: "8:00 AM – 6:00 PM",
    Sunday: "Closed",
  },
  SHOP_SERVICES: [
    { name: "Classic Haircut", price: "$25", duration: "30 min" },
    { name: "Beard Trim & Shape", price: "$15", duration: "15 min" },
    { name: "Hot Towel Shave", price: "$30", duration: "30 min" },
    { name: "Haircut & Beard Combo", price: "$35", duration: "45 min" },
    { name: "Kids Cut (12 & Under)", price: "$18", duration: "20 min" },
    { name: "Line Up / Edge Up", price: "$12", duration: "15 min" },
  ],
  SHOP_TOP_REVIEWS: [
    { author: "Marcus T.", rating: 5, text: "Best barbershop in the city. Been coming here for 3 years. They always get my fade right.", time: "2 weeks ago" },
    { author: "David R.", rating: 5, text: "Clean shop, skilled barbers, and great conversation. What more do you need?", time: "1 month ago" },
    { author: "James W.", rating: 5, text: "Finally found my go-to spot. The hot towel shave is an experience.", time: "3 weeks ago" },
  ],
};

// ─── ICONS (inline SVG) ──────────────────────────────────────

const ScissorsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const StarIcon = ({ filled = true }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#C9A84C" : "none"} stroke="#C9A84C" strokeWidth="1.5">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

// ─── MAIN COMPONENT ──────────────────────────────────────────

export default function ClassicBarbershop() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "services", "hours", "reviews", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayHours = CONFIG.SHOP_HOURS[today] || "Closed";

  return (
    <div style={{
      fontFamily: "'Libre Baskerville', 'Georgia', serif",
      background: "#0A0A0A",
      color: "#E8E2D6",
      minHeight: "100vh",
      overflowX: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Oswald:wght@300;400;500;600;700&family=Cormorant+Garamond:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        :root {
          --gold: #C9A84C;
          --gold-light: #D4B85A;
          --gold-dark: #A88A3D;
          --black: #0A0A0A;
          --black-light: #141414;
          --black-card: #1A1A1A;
          --cream: #E8E2D6;
          --cream-muted: #B8B2A6;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to { width: 80px; }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        .fade-up { animation: fadeInUp 0.8s ease forwards; opacity: 0; }
        .fade-up-d1 { animation-delay: 0.1s; }
        .fade-up-d2 { animation-delay: 0.2s; }
        .fade-up-d3 { animation-delay: 0.3s; }
        .fade-up-d4 { animation-delay: 0.4s; }
        .fade-up-d5 { animation-delay: 0.5s; }

        .gold-line {
          width: 80px; height: 1px;
          background: var(--gold);
          margin: 16px auto;
          animation: lineGrow 1s ease forwards;
        }

        .section-title {
          font-family: 'Oswald', sans-serif;
          font-weight: 300;
          font-size: 13px;
          letter-spacing: 6px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 12px;
        }

        .heading-lg {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(32px, 5vw, 56px);
          line-height: 1.1;
          color: var(--cream);
        }

        .nav-link {
          font-family: 'Oswald', sans-serif;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--cream-muted);
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s;
          padding: 8px 0;
          position: relative;
        }
        .nav-link:hover, .nav-link.active {
          color: var(--gold);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: var(--gold);
        }

        .service-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 1px solid #222;
          transition: all 0.3s;
        }
        .service-row:hover {
          padding-left: 12px;
          border-bottom-color: var(--gold-dark);
        }
        .service-row:last-child { border-bottom: none; }

        .cta-btn {
          font-family: 'Oswald', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          background: transparent;
          color: var(--gold);
          border: 1px solid var(--gold);
          padding: 16px 40px;
          cursor: pointer;
          transition: all 0.4s;
          text-decoration: none;
          display: inline-block;
        }
        .cta-btn:hover {
          background: var(--gold);
          color: var(--black);
        }
        .cta-btn-solid {
          background: var(--gold);
          color: var(--black);
        }
        .cta-btn-solid:hover {
          background: var(--gold-light);
        }

        .review-card {
          background: var(--black-card);
          border: 1px solid #222;
          padding: 32px;
          transition: border-color 0.3s;
        }
        .review-card:hover {
          border-color: var(--gold-dark);
        }

        .hours-row {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid #1A1A1A;
          font-family: 'Oswald', sans-serif;
          font-weight: 300;
          font-size: 14px;
          letter-spacing: 2px;
        }
        .hours-today {
          color: var(--gold);
        }

        .grain-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          opacity: 0.03;
          z-index: 9999;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 256px 256px;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger span {
          width: 24px; height: 1px;
          background: var(--cream);
          transition: all 0.3s;
        }

        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none !important; }
          .mobile-nav {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100vh;
            background: rgba(10,10,10,0.98);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 32px;
            z-index: 1000;
          }
          .mobile-nav .nav-link {
            font-size: 16px;
            letter-spacing: 6px;
          }
        }
      `}</style>

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* ─── NAVIGATION ─────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? "16px 40px" : "24px 40px",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? "1px solid #1A1A1A" : "none",
        transition: "all 0.4s",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <div style={{ cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "20px",
            letterSpacing: "3px",
            color: "var(--gold)",
          }}>
            {CONFIG.SHOP_NAME.toUpperCase()}
          </span>
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {["home", "services", "hours", "reviews", "contact"].map((s) => (
            <span
              key={s}
              className={`nav-link ${activeSection === s ? "active" : ""}`}
              onClick={() => scrollTo(s)}
            >
              {s}
            </span>
          ))}
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>

        <a href={`tel:${CONFIG.SHOP_PHONE}`} className="cta-btn" style={{
          padding: "10px 24px", fontSize: "11px", display: window.innerWidth < 768 ? "none" : "inline-block",
        }}>
          Call Now
        </a>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-nav" onClick={() => setMenuOpen(false)}>
          {["home", "services", "hours", "reviews", "contact"].map((s) => (
            <span key={s} className="nav-link" onClick={() => scrollTo(s)}>{s}</span>
          ))}
        </div>
      )}

      {/* ─── HERO ───────────────────────────────────────── */}
      <section id="home" style={{
        minHeight: "100vh",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        position: "relative",
        background: "radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.06) 0%, transparent 60%)",
      }}>
        <div className="fade-up fade-up-d1">
          <ScissorsIcon />
        </div>
        <div className="gold-line fade-up fade-up-d2" />
        <p className="section-title fade-up fade-up-d2">EST. {CONFIG.SHOP_CITY}, {CONFIG.SHOP_STATE}</p>
        <h1 className="heading-lg fade-up fade-up-d3" style={{ maxWidth: "700px", margin: "0 auto" }}>
          {CONFIG.SHOP_NAME}
        </h1>
        <p className="fade-up fade-up-d4" style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 300,
          fontSize: "14px",
          letterSpacing: "5px",
          color: "var(--cream-muted)",
          marginTop: "16px",
          textTransform: "uppercase",
        }}>
          {CONFIG.SHOP_TAGLINE}
        </p>

        <div className="fade-up fade-up-d5" style={{
          display: "flex", gap: "20px", marginTop: "48px", flexWrap: "wrap", justifyContent: "center",
        }}>
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="cta-btn cta-btn-solid">
            Book Your Cut
          </a>
          <span className="cta-btn" onClick={() => scrollTo("services")} style={{ cursor: "pointer" }}>
            View Services
          </span>
        </div>

        <div className="fade-up fade-up-d5" style={{
          display: "flex", alignItems: "center", gap: "8px",
          marginTop: "48px", color: "var(--cream-muted)",
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 300, fontSize: "13px", letterSpacing: "2px",
        }}>
          <div style={{ display: "flex", gap: "2px" }}>
            {[1,2,3,4,5].map(i => <StarIcon key={i} filled={i <= Math.round(parseFloat(CONFIG.SHOP_RATING))} />)}
          </div>
          <span style={{ color: "var(--gold)" }}>{CONFIG.SHOP_RATING}</span>
          <span>·</span>
          <span>{CONFIG.SHOP_REVIEW_COUNT} Reviews</span>
        </div>

        <div style={{ position: "absolute", bottom: "40px", cursor: "pointer", opacity: 0.4 }} onClick={() => scrollTo("services")}>
          <ChevronDown />
        </div>
      </section>

      {/* ─── SERVICES ───────────────────────────────────── */}
      <section id="services" style={{
        padding: "100px 24px",
        maxWidth: "700px",
        margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p className="section-title">What We Offer</p>
          <h2 className="heading-lg">Services & Pricing</h2>
          <div className="gold-line" />
        </div>

        <div>
          {CONFIG.SHOP_SERVICES.map((s, i) => (
            <div key={i} className="service-row">
              <div>
                <span style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "20px",
                  fontWeight: 400,
                }}>{s.name}</span>
                <span style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "2px",
                  color: "var(--cream-muted)",
                  marginLeft: "12px",
                  fontWeight: 300,
                }}>{s.duration}</span>
              </div>
              <span style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                color: "var(--gold)",
                letterSpacing: "1px",
              }}>{s.price}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href={`tel:${CONFIG.SHOP_PHONE}`} className="cta-btn cta-btn-solid">
            Book Now — {CONFIG.SHOP_PHONE}
          </a>
        </div>
      </section>

      {/* ─── HOURS ──────────────────────────────────────── */}
      <section id="hours" style={{
        padding: "100px 24px",
        background: "var(--black-light)",
      }}>
        <div style={{ maxWidth: "500px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p className="section-title">Visit Us</p>
            <h2 className="heading-lg">Hours</h2>
            <div className="gold-line" />
          </div>

          <div>
            {Object.entries(CONFIG.SHOP_HOURS).map(([day, hours]) => (
              <div key={day} className={`hours-row ${day === today ? "hours-today" : ""}`}>
                <span>{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: "center", marginTop: "32px",
            padding: "16px",
            border: "1px solid #222",
            fontFamily: "'Oswald', sans-serif",
            fontSize: "13px",
            letterSpacing: "3px",
            fontWeight: 300,
          }}>
            <span style={{ color: "var(--cream-muted)" }}>TODAY </span>
            <span style={{ color: "var(--gold)" }}>{todayHours}</span>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ────────────────────────────────────── */}
      <section id="reviews" style={{
        padding: "100px 24px",
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <p className="section-title">What They Say</p>
            <h2 className="heading-lg">Reviews</h2>
            <div className="gold-line" />
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}>
            {CONFIG.SHOP_TOP_REVIEWS.map((r, i) => (
              <div key={i} className="review-card">
                <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                  {[1,2,3,4,5].map(s => <StarIcon key={s} filled={s <= r.rating} />)}
                </div>
                <p style={{
                  fontFamily: "'Libre Baskerville', serif",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  fontStyle: "italic",
                  color: "var(--cream-muted)",
                  marginBottom: "20px",
                }}>"{r.text}"</p>
                <div style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "2px",
                  fontWeight: 300,
                }}>
                  <span style={{ color: "var(--gold)" }}>{r.author}</span>
                  <span style={{ color: "#555", marginLeft: "8px" }}>· {r.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <a
              href={CONFIG.SHOP_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
              style={{ fontSize: "11px", padding: "12px 32px" }}
            >
              See All Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* ─── CONTACT / LOCATION ─────────────────────────── */}
      <section id="contact" style={{
        padding: "100px 24px",
        background: "var(--black-light)",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <p className="section-title">Find Us</p>
          <h2 className="heading-lg">Come Through</h2>
          <div className="gold-line" />

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "40px",
            marginTop: "48px",
            textAlign: "center",
          }}>
            <div>
              <div style={{ color: "var(--gold)", marginBottom: "12px" }}><MapPinIcon /></div>
              <p style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 300, fontSize: "14px", letterSpacing: "2px",
                lineHeight: "1.8",
              }}>
                {CONFIG.SHOP_ADDRESS}<br />
                {CONFIG.SHOP_CITY}, {CONFIG.SHOP_STATE} {CONFIG.SHOP_ZIP}
              </p>
            </div>
            <div>
              <div style={{ color: "var(--gold)", marginBottom: "12px" }}><PhoneIcon /></div>
              <a href={`tel:${CONFIG.SHOP_PHONE}`} style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 300, fontSize: "14px", letterSpacing: "2px",
                color: "var(--cream)",
                textDecoration: "none",
              }}>
                {CONFIG.SHOP_PHONE}
              </a>
            </div>
            <div>
              <div style={{ color: "var(--gold)", marginBottom: "12px" }}><ClockIcon /></div>
              <p style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 300, fontSize: "14px", letterSpacing: "2px",
              }}>
                Today: {todayHours}
              </p>
            </div>
          </div>

          <div style={{ marginTop: "48px", display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${CONFIG.SHOP_PHONE}`} className="cta-btn cta-btn-solid">
              Call to Book
            </a>
            <a
              href={CONFIG.SHOP_GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─────────────────────────────────────── */}
      <footer style={{
        padding: "40px 24px",
        textAlign: "center",
        borderTop: "1px solid #1A1A1A",
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "18px",
          fontWeight: 600,
          color: "var(--gold)",
          letterSpacing: "3px",
          marginBottom: "12px",
        }}>
          {CONFIG.SHOP_NAME.toUpperCase()}
        </p>
        <p style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 300,
          fontSize: "11px",
          letterSpacing: "3px",
          color: "#555",
        }}>
          © {new Date().getFullYear()} {CONFIG.SHOP_NAME}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
