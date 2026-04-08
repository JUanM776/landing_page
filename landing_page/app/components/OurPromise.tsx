const promises = [
  { label: "ON TIME\nDELIVERY", icon: "🕐" },
  { label: "500+\nDESIGNS", icon: "📋" },
  { label: "2 Cr+\nORDERS", icon: "📦" },
  { label: "BAKED\nFRESH", icon: "🔥" },
];

const galleryItems = [
  { emoji: "🎂", label: "Reviews", span: "col-span-1" },
  { emoji: "🍫", label: "Rustic", span: "col-span-1" },
  { emoji: "🧁", label: "Why the wait?\nForget it,\nit's managed", span: "col-span-1" },
  { emoji: "🍰", label: "Chocolate\nCollection", span: "col-span-1" },
  { emoji: "🎂", label: "", span: "col-span-1" },
  { emoji: "🍪", label: "Cake with\nyour own quote", span: "col-span-1" },
  { emoji: "🧁", label: "", span: "col-span-1" },
  { emoji: "🎂", label: "", span: "col-span-1" },
];

export default function OurPromise() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-6">
      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-montserrat)",
        fontWeight: 700,
        fontSize: "26px",
        color: "#7B1818",
      }}>
        Our Promise
      </h3>
      <p style={{
        fontFamily: "var(--font-dancing)",
        fontSize: "16px",
        color: "#5D4037",
        marginTop: "2px",
        marginBottom: "20px",
      }}>
        There&apos;s no secret spell – only honest the work!
      </p>

      {/* Two column layout: left promises, right gallery */}
      <div className="flex gap-5">
        {/* Left column */}
        <div className="flex flex-col gap-4 shrink-0" style={{ width: "280px" }}>
          {/* Promise icons box */}
          <div className="bg-white rounded-2xl p-5" style={{ border: "1px solid #F0E4DD" }}>
            <p style={{
              fontFamily: "var(--font-dancing)",
              fontSize: "14px",
              color: "#5D4037",
              marginBottom: "16px",
            }}>
              A glimpse into secret spell – only social world!
            </p>
            <div className="grid grid-cols-4 gap-2">
              {promises.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center rounded-full"
                       style={{
                         width: 48, height: 48,
                         border: "1.5px solid #D4726A",
                         fontSize: "20px",
                         marginBottom: "6px",
                       }}>
                    {p.icon}
                  </div>
                  <span style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#3E2723",
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                  }}>
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Magical Ticket */}
          <div className="bg-white rounded-2xl p-5 flex items-center gap-4"
               style={{ border: "1px solid #F0E4DD" }}>
            <div className="shrink-0 flex items-center justify-center rounded-xl"
                 style={{ width: 56, height: 56, backgroundColor: "#FFD54F" }}>
              <span style={{ fontSize: "28px" }}>🎫</span>
            </div>
            <div className="flex-1">
              <h4 style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 800,
                fontSize: "16px",
                color: "#7B1818",
              }}>
                THE MAGICAL TICKET
              </h4>
              <p style={{ fontSize: "11px", color: "#5D4037", lineHeight: 1.4, marginTop: "2px" }}>
                Add 3 reminders in your account.<br />
                Win offers worth Rs. 750
              </p>
              <button className="rounded-full text-white mt-2"
                      style={{
                        backgroundColor: "#2D1810",
                        fontSize: "10px",
                        fontWeight: 700,
                        padding: "6px 16px",
                      }}>
                UNLOCK NOW
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 mt-1">
            <span style={{ fontSize: "24px" }}>🎂</span>
            <span style={{ fontSize: "24px" }}>🧁</span>
            <p style={{
              fontFamily: "var(--font-dancing)",
              fontSize: "15px",
              color: "#3E2723",
            }}>
              Follow us on social!
            </p>
          </div>
          <div className="flex gap-2">
            {["📸", "📘", "🐦", "▶️", "📌"].map((icon, i) => (
              <div key={i} className="flex items-center justify-center rounded-full cursor-pointer"
                   style={{
                     width: 34, height: 34,
                     border: "1.5px solid #D5C4BA",
                     fontSize: "14px",
                   }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Gallery grid */}
        <div className="flex-1 grid grid-cols-3 gap-3" style={{ gridAutoRows: "130px" }}>
          {galleryItems.map((item, i) => (
            <div key={i}
              className={`${item.span} relative rounded-2xl overflow-hidden cursor-pointer group`}
              style={{ backgroundColor: "#F5E6DC" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="group-hover:scale-110 transition-transform" style={{ fontSize: "40px" }}>
                  {item.emoji}
                </span>
              </div>
              {item.label && (
                <div className="absolute bottom-0 left-0 right-0 p-2"
                     style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.45))" }}>
                  <span className="text-white" style={{ fontSize: "11px", fontWeight: 600, whiteSpace: "pre-line", lineHeight: 1.3 }}>
                    {item.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
