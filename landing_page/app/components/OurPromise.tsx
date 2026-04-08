import Image from "next/image";

const promises = [
  {
    label: "ON TIME\nDELIVERY",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" stroke="#7B1818" strokeWidth={2}>
        <rect x="4" y="12" width="20" height="16" rx="2" />
        <path d="M24 18h8l4 6v4h-12v-10z" />
        <circle cx="12" cy="30" r="3" />
        <circle cx="30" cy="30" r="3" />
      </svg>
    ),
  },
  {
    label: "500+\nDESIGNS",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" stroke="#7B1818" strokeWidth={2}>
        <rect x="6" y="4" width="28" height="32" rx="3" />
        <path d="M12 12h16M12 18h16M12 24h10" />
      </svg>
    ),
  },
  {
    label: "2 Cr+\nORDERS",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" stroke="#7B1818" strokeWidth={2}>
        <circle cx="14" cy="16" r="6" />
        <circle cx="26" cy="16" r="6" />
        <path d="M4 34c0-6 4-10 10-10h12c6 0 10 4 10 10" />
      </svg>
    ),
  },
  {
    label: "BAKED\nFRESH",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" stroke="#7B1818" strokeWidth={2}>
        <path d="M8 28h24v6H8z" />
        <path d="M6 28c0-8 4-14 14-14s14 6 14 14" />
        <path d="M16 14V8M20 14V6M24 14V8" />
      </svg>
    ),
  },
];

const galleryImages = [
  { label: "Reviews", bg: "#E8D5C8", image: "/previews.png" },
  { label: "Rustic", bg: "#F0DDD0", image: "/Rustic.jpg" },
  { label: "Why the wait?\nForget it,\nit's managed", bg: "#D4B8A8", image: "/why the wait.png" },
  { label: "Chocolate\nCollection", bg: "#E0C8B8", image: "/chocolate_collection.png" },
  { label: "", bg: "#F0DDD0", image: "/hola.png" },
  { label: "Cake with\nyour own quote", bg: "#E8D5C8", image: "/cake with.png" },
];

export default function OurPromise() {
  return (
    <section className="px-4 md:px-8 py-6">
      {/* Title */}
      <h3 style={{
        fontFamily: "var(--font-montserrat)",
        fontWeight: 800,
        fontSize: "26px",
        color: "#7B1818",
      }}>
        Our Promise
      </h3>
      <p style={{
        fontFamily: "var(--font-montserrat)",
        fontSize: "14px",
        color: "#5D4037",
        marginTop: "4px",
        marginBottom: "20px",
        fontStyle: "italic",
      }}>
        There&apos;s no secret spell – only honest the work!
      </p>

      {/* Two column layout */}
      <div className="flex flex-col md:flex-row gap-5">

        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4 w-full md:w-[38%] shrink-0">

          {/* Promise box */}
          <div className="rounded-2xl p-5" style={{ backgroundColor: "#FFF", border: "1px solid #F0E4DD" }}>
            <p style={{
              fontFamily: "var(--font-montserrat)",
              fontSize: "13px",
              color: "#5D4037",
              fontStyle: "italic",
              marginBottom: "18px",
            }}>
              A glimpse into secret spell – only social world!
            </p>
            <div className="grid grid-cols-4 gap-3">
              {promises.map((p, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center rounded-full"
                       style={{
                         width: 52, height: 52,
                         border: "2px solid #7B1818",
                         marginBottom: "8px",
                       }}>
                    {p.icon}
                  </div>
                  <span style={{
                    fontSize: "10px",
                    fontWeight: 800,
                    color: "#3E2723",
                    lineHeight: 1.3,
                    whiteSpace: "pre-line",
                    fontFamily: "var(--font-montserrat)",
                  }}>
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Magical Ticket */}
          <div className="rounded-2xl p-5 flex items-start gap-4"
               style={{ backgroundColor: "#FFF", border: "1px solid #F0E4DD" }}>
            <div className="shrink-0">
              <Image src="/Ticket.png" alt="Magical Ticket" width={80} height={80} className="object-contain" />
            </div>
            <div className="flex-1">
              <h4 style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 800,
                fontSize: "18px",
                color: "#1A1A1A",
              }}>
                THE MAGICAL TICKET
              </h4>
              <p style={{
                fontSize: "12px",
                color: "#5D4037",
                lineHeight: 1.5,
                marginTop: "4px",
                fontFamily: "var(--font-montserrat)",
              }}>
                Add 3 reminders in your account.<br />
                Win offers worth Rs. 750
              </p>
              <button className="rounded-full text-white mt-3"
                      style={{
                        backgroundColor: "#7B1818",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "8px 20px",
                        fontFamily: "var(--font-montserrat)",
                      }}>
                UNLOCK NOW
              </button>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-center gap-3 mt-2">
            <div className="flex -space-x-2">
              {["👩", "👨", "👩‍🦰", "👨‍🦱"].map((e, i) => (
                <div key={i} className="rounded-full flex items-center justify-center"
                     style={{
                       width: 36, height: 36,
                       backgroundColor: "#E8D5C8",
                       border: "2px solid #FDF8F4",
                       fontSize: "18px",
                     }}>
                  {e}
                </div>
              ))}
            </div>
            <p style={{
              fontFamily: "var(--font-dancing)",
              fontSize: "18px",
              color: "#3E2723",
            }}>
              Follow us on social!
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN - Gallery 3x2 grid */}
        <div className="flex-1 grid grid-cols-2 gap-3">
          {galleryImages.map((item, i) => (
            <div key={i}
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ backgroundColor: item.bg, minHeight: "150px" }}>
              {/* Image or placeholder */}
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.label || "Gallery"}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="group-hover:scale-105 transition-transform"
                        style={{ fontSize: "48px", opacity: 0.3 }}>🎂</span>
                </div>
              )}
              {/* Label */}
              {item.label && (
                <div className="absolute bottom-0 left-0 right-0 p-3"
                     style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.5))" }}>
                  <span className="text-white" style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    whiteSpace: "pre-line",
                    lineHeight: 1.3,
                    fontFamily: "var(--font-montserrat)",
                  }}>
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
