import Icon from "./Icons.jsx";

/* Simplified, original vector marks for the technologies used. */

// Drawn inside an existing <svg> that uses viewBox="-11.5 -10.2 23 20.4"
export function ReactMark() {
  return (
    <g>
      <circle r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </g>
  );
}

export function TechLogo({ name }) {
  if (name === "react") {
    return (
      <svg viewBox="-11.5 -10.2 23 20.4" aria-hidden="true" focusable="false">
        <ReactMark />
      </svg>
    );
  }
  if (name === "html5") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M4 2l2.2 24.6L16 30l9.8-3.4L28 2z" fill="#e44d26" />
        <path d="M16 27.7l7.9-2.6L25.9 4.3H16z" fill="#f16529" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
          fill="#fff"
        >
          5
        </text>
      </svg>
    );
  }
  if (name === "css3") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <path d="M4 2l2.2 24.6L16 30l9.8-3.4L28 2z" fill="#1572b6" />
        <path d="M16 27.7l7.9-2.6L25.9 4.3H16z" fill="#33a9dc" />
        <text
          x="16"
          y="21"
          textAnchor="middle"
          fontSize="14"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
          fill="#fff"
        >
          3
        </text>
      </svg>
    );
  }
  // JavaScript
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="26" height="26" rx="3" fill="#f7df1e" />
      <text
        x="16"
        y="23"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fontFamily="Arial, sans-serif"
        fill="#1a1a1a"
      >
        JS
      </text>
    </svg>
  );
}

const brand = ["html5", "css3", "js", "react"];

const iconMap = {
  jsx: "code",
  components: "box",
  router: "navigation",
  redux: "layers",
  responsive: "monitor",
  axios: "repeat",
  rest: "globe",
  storage: "database",
  git: "branch",
  github: "github",
};

export function SkillIcon({ name }) {
  if (brand.includes(name)) return <TechLogo name={name} />;
  return <Icon name={iconMap[name] || "code"} size={22} />;
}
