// "use client";

// import { useState } from "react";

// interface SkillCardProps {
//   name: string;
//   icon: string; // رابط الصورة أو أيقونة
//   library?: string; // optional
// }

// export default function SkillCard({ name, icon, library }: SkillCardProps) {
//   const [hover, setHover] = useState(false);

//   return (
//     <div
//       className="relative w-36 h-48 flex flex-col items-center justify-center rounded-2xl glass transition-shadow duration-500 cursor-pointer"
//       onMouseEnter={() => setHover(true)}
//       onMouseLeave={() => setHover(false)}
//       style={{
//         boxShadow: hover
//           ? "0 0 20px 4px rgba(129,140,248,0.7), 0 0 40px 8px rgba(129,140,248,0.5)"
//           : "0 0 10px 2px rgba(129,140,248,0.3)",
//         border: "2px solid rgba(129,140,248,0.5)",
//       }}
//     >
//       <img src={icon} alt={name} className="w-12 h-12 mb-2" />
//       <span className="text-lg font-semibold text-[--color-lavender]">{name}</span>
//       {library && <span className="text-sm text-[--color-secondary] mt-1">{library}</span>}
//     </div>
//   );
// }
