// Decorative page background: glows, grid, thin neon lines and small stars.
const stars = Array.from({ length: 36 }, (_, i) => ({
  left: (i * 53 + 11) % 100,
  top: (i * 29 + 7) % 100,
  size: 1 + (i % 3),
  delay: (i % 7) * 0.7,
}));

export default function Background() {
  return (
    <div className="bg" aria-hidden="true">
      <div className="bg-blob bg-blue" />
      <div className="bg-blob bg-purple" />
      <div className="bg-blob bg-cyan" />
      <div className="bg-grid" />
      <div className="bg-line bg-line-1" />
      <div className="bg-line bg-line-2" />
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
