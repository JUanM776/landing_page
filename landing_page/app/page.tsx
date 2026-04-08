import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MenuCategories from "./components/MenuCategories";
import Bestsellers from "./components/Bestsellers";
import OurPromise from "./components/OurPromise";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#FFF5EE" }}>
      <Header />
      <HeroBanner />

      {/* White/cream wrapper from Menu down to before Footer */}
      <div
        className="max-w-5xl mx-auto w-full px-0 -mt-5 relative z-20 rounded-t-3xl"
        style={{ backgroundColor: "#FDF8F4" }}
      >
        <MenuCategories />
        <Bestsellers />
        <OurPromise />
      </div>

      <Footer />
    </div>
  );
}
