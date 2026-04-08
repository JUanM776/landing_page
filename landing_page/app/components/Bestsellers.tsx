import Image from "next/image";

const products = [
  {
    name: "Rich Chocolate Truffle Truffle Cake",
    price: 500,
    original: "Strawberry",
    rating: 4.5,
    reviews: 500,
    image: "/Pastel Rich Chocolat.png",
  },
  {
    name: "Checo Chip Truffle Cake Cake",
    price: 509,
    original: "Strawberry",
    rating: 4.5,
    reviews: 300,
    image: "/Pastel Checo Chip Tr.png",
  },
  {
    name: "Tropical Fruit N Almond Cake Cake",
    price: 509,
    original: "Strawberry",
    rating: 4.5,
    reviews: 308,
    image: "/Pastel Tropical Frui.png",
  },
  {
    name: "Rich Butterscotch Crunch Cairic Cake",
    price: 399,
    original: "Strawberry",
    rating: 4.5,
    reviews: 308,
    image: "/Pastel Rich Buttersc.png",
  },
];

function Stars({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} className="w-3 h-3" fill={s <= Math.floor(rating) ? "#FFB300" : "#D5D5D5"} viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span style={{ fontSize: "11px", color: "#888" }}>{reviews}</span>
    </div>
  );
}

function HeartIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24"
         fill={filled ? "#C62828" : "none"}
         stroke="#C62828" strokeWidth={2}>
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

export default function Bestsellers() {
  return (
    <section className="px-4 md:px-8 py-6 md:py-8">
      <h3 style={{
        fontFamily: "var(--font-montserrat)",
        fontWeight: 800,
        fontSize: "22px",
        color: "#1A1A1A",
        marginBottom: "18px",
      }}>
        Bestsellers from Across the Country
      </h3>

      {/* Product grid - 2 cols mobile, 4 cols desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {products.map((p, i) => (
          <div key={i}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            style={{ border: "1px solid #F0E8E3" }}>

            {/* Image */}
            <div className="relative" style={{ backgroundColor: "#FDF8F5", padding: "12px" }}>
              <div className="absolute top-3 right-3 z-10">
                <HeartIcon filled />
              </div>
              <div className="flex items-center justify-center" style={{ height: "140px" }}>
                <Image
                  src={p.image}
                  alt={p.name}
                  width={160}
                  height={140}
                  className="object-contain max-h-full"
                />
              </div>
            </div>

            {/* Info */}
            <div className="p-3">
              <h4 style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#1A1A1A",
                lineHeight: 1.3,
                minHeight: "34px",
              }}>
                {p.name}
              </h4>

              <div className="flex items-center gap-1.5 mt-1.5">
                <span style={{ color: "#C62828", fontWeight: 800, fontSize: "15px" }}>
                  ₹{p.price}
                </span>
                <span style={{ color: "#999", fontSize: "11px" }}>••</span>
                <span style={{ color: "#999", fontSize: "11px", textDecoration: "line-through" }}>
                  {p.original}
                </span>
              </div>

              <div className="flex items-center justify-between mt-2">
                <Stars rating={p.rating} reviews={p.reviews} />
                <div className="rounded-full flex items-center justify-center"
                     style={{
                       width: 26, height: 26,
                       backgroundColor: "#C62828",
                     }}>
                  <HeartIcon filled />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-end mt-5">
        <button className="rounded-full text-white"
                style={{
                  backgroundColor: "#2D1810",
                  fontSize: "12px",
                  fontWeight: 700,
                  padding: "10px 26px",
                  letterSpacing: "0.5px",
                }}>
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
