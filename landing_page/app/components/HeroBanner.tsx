import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full">
      <Image
        src="/Publicidad de postre.png"
        alt="Decadent Chocolate Bliss - Satisfy Your Sweetest Cravings - Save 20%"
        width={1920}
        height={500}
        className="w-full h-auto object-cover"
        priority
      />
    </section>
  );
}
