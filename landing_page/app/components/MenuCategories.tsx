"use client";

import { useState } from "react";

const categories = [
  {
    name: "CLASSIC",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 48 48" fill="none" stroke="#7B1818" strokeWidth={2}>
        <rect x="8" y="20" width="32" height="18" rx="4" />
        <path d="M14 20V16a10 10 0 0120 0v4" />
        <circle cx="24" cy="12" r="3" />
      </svg>
    ),
  },
  {
    name: "GOURMET",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 48 48" fill="none" stroke="#7B1818" strokeWidth={2}>
        <rect x="6" y="22" width="36" height="16" rx="3" />
        <path d="M12 22v-4a12 12 0 0124 0v4" />
        <path d="M20 14l4-6 4 6" />
      </svg>
    ),
  },
  {
    name: "DESSERTS",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 48 48" fill="none" stroke="#7B1818" strokeWidth={2}>
        <rect x="8" y="14" width="32" height="24" rx="3" />
        <path d="M8 22h32" />
        <path d="M8 30h32" />
        <rect x="14" y="18" width="6" height="4" rx="1" />
        <rect x="28" y="18" width="6" height="4" rx="1" />
      </svg>
    ),
  },
  {
    name: "COOKIES",
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10" viewBox="0 0 48 48" fill="none" stroke="#7B1818" strokeWidth={2}>
        <rect x="6" y="10" width="36" height="28" rx="3" />
        <path d="M6 18h36" />
        <path d="M16 26h16" />
        <path d="M16 32h10" />
      </svg>
    ),
  },
];

export default function MenuCategories() {
  const [active, setActive] = useState("DESSERTS");

  return (
    <section className="px-4 md:px-8 py-5 md:py-6">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

          {/* Left side */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: "28px",
              color: "#7B1818",
            }}>
              Menu
            </h3>
            <p style={{ fontSize: "13px", color: "#5D4037", marginTop: "2px" }}>
              What will you wish for?
            </p>
            {/* Small circle icons */}
            <div className="flex gap-2 mt-3">
              {[
                <svg key="a" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#7B1818" strokeWidth={2}><circle cx="12" cy="12" r="8" /><path d="M12 8v4" /></svg>,
                <svg key="b" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#7B1818" strokeWidth={2}><path d="M4 16h16M8 12h8M6 8h12" /></svg>,
                <svg key="c" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="#7B1818" strokeWidth={2}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M4 10h16" /></svg>,
              ].map((icon, i) => (
                <div key={i} className="flex items-center justify-center rounded-full"
                     style={{ width: 32, height: 32, border: "1.5px solid #D5C4BA" }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 md:gap-4 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActive(cat.name)}
                className="flex flex-col items-center shrink-0 rounded-2xl transition-all"
                style={{
                  padding: "10px 16px",
                  minWidth: "80px",
                  backgroundColor: active === cat.name ? "#FFF0F0" : "transparent",
                  border: active === cat.name ? "1.5px solid #F0C4C4" : "1.5px solid transparent",
                }}
              >
                {cat.icon}
                <span style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.5px",
                  marginTop: "6px",
                  color: active === cat.name ? "#7B1818" : "#5D4037",
                }}>
                  {cat.name}
                </span>
              </button>
            ))}
          </div>
        </div>
    </section>
  );
}
