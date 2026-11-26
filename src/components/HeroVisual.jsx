import Icon from "./Icons.jsx";
import { ReactMark, TechLogo } from "./TechLogos.jsx";

// Developer illustration: floating laptop, orbit lines and technology icons.
// Built only from SVG/CSS. No photo or portrait is used.
export default function HeroVisual() {
  return (
    <div
      className="hv"
      role="img"
      aria-label="Illustration of a floating laptop showing the React logo, surrounded by HTML5, CSS3 and JavaScript icons"
    >
      <div className="hv-glow" />
      <div className="hv-ring hv-ring-1" />
      <div className="hv-ring hv-ring-2" />
      <div className="hv-ring hv-ring-3" />

      <div className="hv-laptop">
        <svg viewBox="0 0 400 252" focusable="false">
          <defs>
            <linearGradient id="hvEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#3b82f6" />
              <stop offset="0.55" stopColor="#a855f7" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
            <linearGradient id="hvScreen" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0d1530" />
              <stop offset="1" stopColor="#070b1c" />
            </linearGradient>
          </defs>

          {/* screen */}
          <rect
            x="42"
            y="6"
            width="316"
            height="200"
            rx="14"
            fill="url(#hvScreen)"
            stroke="url(#hvEdge)"
            strokeWidth="2.5"
          />
          <circle cx="62" cy="24" r="3.5" fill="#3b82f6" />
          <circle cx="75" cy="24" r="3.5" fill="#a855f7" />
          <circle cx="88" cy="24" r="3.5" fill="#22d3ee" />

          {/* abstract code lines */}
          <g opacity="0.9">
            <rect x="62" y="52" width="70" height="8" rx="4" fill="#a855f7" />
            <rect x="78" y="70" width="104" height="8" rx="4" fill="#3b82f6" />
            <rect x="78" y="88" width="62" height="8" rx="4" fill="#22d3ee" />
            <rect x="94" y="106" width="88" height="8" rx="4" fill="#3b82f6" opacity="0.7" />
            <rect x="78" y="124" width="48" height="8" rx="4" fill="#a855f7" opacity="0.8" />
            <rect x="62" y="142" width="40" height="8" rx="4" fill="#22d3ee" opacity="0.8" />
            <rect x="62" y="172" width="120" height="6" rx="3" fill="#1e2a55" />
          </g>

          {/* React logo on screen */}
          <svg x="206" y="50" width="136" height="120" viewBox="-11.5 -10.2 23 20.4">
            <ReactMark />
          </svg>

          {/* base */}
          <path
            d="M14 208 H386 L368 232 Q365 238 357 238 H43 Q35 238 32 232 Z"
            fill="#0b1230"
            stroke="url(#hvEdge)"
            strokeWidth="2"
          />
          <rect x="165" y="208" width="70" height="7" rx="3.5" fill="#1b2650" />
        </svg>
      </div>

      <div className="hv-chip hv-c1" style={{ "--fd": "0s" }}>
        <TechLogo name="html5" />
      </div>
      <div className="hv-chip hv-c2" style={{ "--fd": "1.2s" }}>
        <TechLogo name="css3" />
      </div>
      <div className="hv-chip hv-c3" style={{ "--fd": "2.2s" }}>
        <TechLogo name="js" />
      </div>
      <div className="hv-chip hv-c4" style={{ "--fd": "0.6s" }}>
        <TechLogo name="react" />
      </div>
      <div className="hv-chip hv-c5 hv-text" style={{ "--fd": "1.8s" }}>
        &lt;/&gt;
      </div>
      <div className="hv-chip hv-c6 hv-text" style={{ "--fd": "2.8s" }}>
        {"{ }"}
      </div>
      <div className="hv-chip hv-c7" style={{ "--fd": "3.4s" }}>
        <Icon name="code" size={22} />
      </div>
    </div>
  );
}
