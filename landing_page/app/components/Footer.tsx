const columns = [
  { title: "Dakingo", isLogo: true, links: ["Our Story", "Contact Us", "Locate", "Media", "Careers"] },
  { title: "KNOW US", links: ["Contact Us", "Blog"] },
  { title: "NEED HELP", links: ["Cancellation And Refund", "Privacy Policy"] },
  { title: "MORE INFO", links: ["Terms And Offers", "Customer Grievance"] },
  { title: "MORE INFO", links: ["Coupons & Offers", "Download App"] },
];

export default function Footer() {
  return (
    <footer className="mt-6">
      {/* Red banner */}
      <div className="text-center text-white py-4 px-4"
           style={{ backgroundColor: "#C62828" }}>
        <p style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "0.3px" }}>
          Dakingo – Your Trusted FSSAI Certified Online Bakery for Every Celebration
        </p>
      </div>

      {/* Footer body */}
      <div style={{ backgroundColor: "#FAE8DC" }} className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Columns */}
          <div className="grid grid-cols-5 gap-6 mb-8">
            {columns.map((col, i) => (
              <div key={i}>
                {col.isLogo ? (
                  <h4 style={{
                    fontFamily: "var(--font-montserrat)",
                    fontWeight: 700,
                    fontSize: "22px",
                    color: "#7B1818",
                    marginBottom: "10px",
                  }}>
                    {col.title}
                  </h4>
                ) : (
                  <h5 style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#3E2723",
                    letterSpacing: "0.5px",
                    marginBottom: "10px",
                    textTransform: "uppercase",
                  }}>
                    {col.title}
                  </h5>
                )}
                <ul className="flex flex-col gap-1.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:opacity-70 transition-opacity"
                         style={{ fontSize: "11px", color: "#5D4037" }}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="flex items-center justify-between" style={{ borderTop: "1px solid #E3CBBE", paddingTop: "20px" }}>
            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="outline-none"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #D5C4BA",
                  borderRadius: "20px",
                  padding: "8px 18px",
                  fontSize: "12px",
                  width: "240px",
                  color: "#3E2723",
                }}
              />
              <button className="rounded-full text-white"
                      style={{
                        backgroundColor: "#C62828",
                        fontSize: "11px",
                        fontWeight: 700,
                        padding: "9px 20px",
                      }}>
                SUBSCRIBE
              </button>
            </div>

            {/* Help */}
            <div className="flex items-center gap-3">
              <span style={{ fontSize: "12px", color: "#5D4037" }}>Hey, need any help?</span>
              <div className="flex items-center justify-center rounded-full text-white cursor-pointer"
                   style={{ width: 38, height: 38, backgroundColor: "#C62828" }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
