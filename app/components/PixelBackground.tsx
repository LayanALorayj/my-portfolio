const stars = [
  { top: "12%", left: "6%", size: 6, accent: false },
  { top: "22%", left: "44%", size: 4, accent: false },
  { top: "16%", left: "60%", size: 6, accent: true },
  { top: "46%", left: "3%", size: 4, accent: false },
  { top: "78%", left: "36%", size: 6, accent: true },
  { top: "84%", left: "82%", size: 4, accent: false },
  { top: "38%", left: "92%", size: 6, accent: false },
  { top: "9%", left: "86%", size: 4, accent: true },
];

export default function PixelBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute top-[18%] -left-32 h-[420px] w-[420px] rounded-full bg-violet/20 blur-[110px]" />
      <div className="absolute -bottom-24 -right-16 h-[460px] w-[460px] rounded-full bg-rose/25 blur-[120px]" />
      {stars.map((star, i) => (
        <span
          key={i}
          className={`absolute ${star.accent ? "bg-violet" : "bg-lavender"} opacity-70`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
}
