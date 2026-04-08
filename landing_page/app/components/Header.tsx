"use client";

import { useState } from "react";

const navLinks = [
  "Cakes", "Theme Cakes", "Desserts", "Birthday",
  "Hampers", "Anniversary", "Occasions", "Occasions",
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header style={{ backgroundColor: "#F2DDD1" }}>
      {/* Top row */}
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between"
           style={{ height: "68px" }}>
        <span style={{
          fontFamily: "var(--font-montserrat)",
          fontWeight: 800,
          fontSize: "32px",
          color: "#7B1818",
        }}>
          Dakingo
        </span>

        <div className="flex items-center gap-5">
          {/* Search */}
          <div className="flex items-center overflow-hidden"
               style={{
                 border: "1.5px solid #C9B1A4",
                 borderRadius: "6px",
                 height: "36px",
                 width: "250px",
                 backgroundColor: "#fff",
               }}>
            <div className="pl-3 flex items-center" style={{ color: "#A0887C" }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input type="text" placeholder="Search" value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none px-2 text-sm"
              style={{ color: "#3E2723" }} />
            <button className="h-full flex items-center justify-center text-white"
                    style={{ backgroundColor: "#7B1818", width: "36px" }}>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          {/* Cart + Login */}
          <div className="flex items-center gap-2" style={{ color: "#6B3A3A", fontSize: "13px" }}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 2.3c-.6.6-.2 1.7.7 1.7H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span>Login/Signup</span>
          </div>
        </div>
      </div>

      {/* Nav row */}
      <div style={{ borderTop: "1px solid #E3CBBE" }}>
        <nav className="max-w-6xl mx-auto px-6 flex items-center justify-center gap-7"
             style={{ height: "42px" }}>
          {navLinks.map((link, i) => (
            <a key={i} href="#" className="hover:opacity-70 transition-opacity"
               style={{
                 fontFamily: "var(--font-montserrat)",
                 fontSize: "13.5px",
                 color: "#6B3A3A",
               }}>
              {link}
            </a>
          ))}
          <button className="rounded-full text-white"
                  style={{
                    backgroundColor: "#C62828",
                    fontSize: "11.5px",
                    fontWeight: 700,
                    padding: "7px 20px",
                    letterSpacing: "0.3px",
                  }}>
            ORDER NOW
          </button>
        </nav>
      </div>
    </header>
  );
}
