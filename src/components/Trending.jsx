import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Fastrack UFO Quartz Multifunction Green Dial Silver Stainless Steel Strap Watch For Guys",
    category: "Guys Watches",
    price: 5995,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe3fcaac7/images/Fastrack/Catalog/3327SM01_1.jpg?sw=360&sh=360",
  },
  {
    id: 2,
    name: "Fastrack Vyb Nimbus Quartz Analog Black Dial Two Toned Color Metal Strap Watch For Guys",
    category: "Guys Watches",
    price: 2195,
    oldPrice: 3135,
    discount: 30,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw9cd3d075/images/Fastrack/Catalog/FV30010KM02W_1.jpg?sw=360&sh=360",
  },
  {
    id: 3,
    name: "Fastrack Pulse IV Dual Time Analog Watch with Green Dial & Brown Leather Strap For Guys",
    category: "Guys Watches",
    price: 4295,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaf5a6d4a/images/Fastrack/Catalog/3341QL01_1.jpg?sw=600&sh=600",
  },
  {
    id: 4,
    name: "Vyb Striker By Fastrack Quartz Analog Rose Gold Dial Rose Gold Metal Strap Watch For Girls",
    category: "Girls Watches",
    price: 1995,
    oldPrice: 2850,
    discount: 30,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw57e35cef/images/Fastrack/Catalog/FV60130WM01W_1.jpg?sw=600&sh=600",
  },
  {
    id: 5,
    name: "Fastrack Astor FR2 Pro Smart Watch with 3.63 cm AMOLED Display with 466*466 Pixel Resolution, AI Voice Assistant",
    category: "Unisex Watches",
    price: 2799,
    oldPrice: 5499,
    discount: 49,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8178fcf1/images/Fastrack/Catalog/38156NM01_1.jpg?sw=600&sh=600",
  },
  {
    id: 6,
    name: "Fastrack Noir Pro Womens Smartwatch with 3.0 cm Super AMOLED Display, 390x390 Resolution",
    category: "Women's Watch",
    price: 5000,
    oldPrice: 8495,
    discount: 41,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3006acf9/images/Fastrack/Catalog/68042WM01_1.jpg?sw=600&sh=600",
  },
  {
    id: 7,
    name: "Fastrack Quartz Analog Black Dial Silicone Strap Watch for Unisex",
    category: "Unisex Watch",
    price: 875,
    oldPrice: 975,
    discount: 10,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0b36c7ed/images/Fastrack/Catalog/9915PP56_1.jpg?sw=600&sh=600",
  },
  {
    id: 8,
    name: "Fastrack UFO Quartz Multifunction Black Dial Black Leather Strap Watch For Guys",
    category: "Guys Watch",
    price: 6195,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw21b2288a/images/Fastrack/Catalog/3327KL01_1.jpg?sw=600&sh=600",
  },
    {
    id: 9,
    name: "Fastrack Kronos Guys Chronograph Watch With Date Black Dial & Brown Leather Strap",
    category: "Guys Watch",
    price: 5995,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4ec9083e/images/Fastrack/Catalog/3335NL01_1.jpg?sw=600&sh=600",
  },
    {
    id: 10,
    name: "Fastrack Fastfit Quartz Analog Grey Dial Grey Colour Silicone Strap Unisex Watch",
    category: "Unisex Watch",
    price: 895,
    oldPrice: 995,
    discount: 10,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw08795a5f/images/Fastrack/Catalog/68011PP08_1.jpg?sw=600&sh=600",
  },
      {
    id: 11,
    name: "Fastrack UFO Quartz Multifunction Black Dial Brown Stainless Steel Strap Watch For Guys",
    category: "Guys Watch",
    price: 6895,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw78e19b40/images/Fastrack/Catalog/3327KM01_1.jpg?sw=600&sh=600",
  },
    {
    id: 12,
    name: "Fastrack MYND - 4.9 cm AMOLED Display, AI Watchface, Offline Voice Commands, AI Chat, BT Calling IP68 Smartwatch",
    category: "Unisex Watch",
    price: 3599,
    oldPrice: 5499,
    discount: 35,
    image: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd1ba24e6/images/Fastrack/Catalog/38184PP01K_1.jpg?sw=600&sh=600",
  },
];

export default function Trending() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="w-full py-8 max-w-screen-xl mx-auto px-4">
      <h2 className="text-xl font-black text-gray-900 tracking-widest mb-6">
        TRENDING
      </h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-11 top-1/2 -translate-y-1/2 z-10 bg-white border shadow w-9 h-9 flex items-center justify-center"
        >
          ‹
        </button>

        {/* Scroll Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: "none" }}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="flex-shrink-0 border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition group"
              style={{ width: 300 }}
            >
              {/* Image */}
              <div className="h-[320px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-orange-500">
                  {p.name}
                </p>

                <p className="text-xs text-gray-400 mt-1">{p.category}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-bold">
                    ₹ {p.price.toLocaleString()}
                  </span>

                  {p.oldPrice && (
                    <>
                      <span className="text-xs line-through text-gray-400">
                        ₹ {p.oldPrice.toLocaleString()}
                      </span>
                      <span className="text-xs font-bold text-orange-500">
                        {p.discount}% off
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll(1)}
          className="absolute -right-16 top-2/4 -translate-y-1/2 z-10 bg-white border shadow w-9 h-9 flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </div>
  );
}