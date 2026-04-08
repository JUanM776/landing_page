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
      <MenuCategories />
      <Bestsellers />
      <OurPromise />
      <Footer />
    </div>
  );
}
