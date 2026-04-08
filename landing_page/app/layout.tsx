import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Dakingo - Online Bakery for Every Celebration",
  description:
    "Your Trusted FSSAI Certified Online Bakery for Every Celebration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream" style={{ fontFamily: "var(--font-montserrat)" }}>
        {children}
      </body>
    </html>
  );
}
