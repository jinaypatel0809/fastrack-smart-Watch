import { useState, useMemo } from "react";
import { useCart } from "../context/CartContext";

// Real watch images from Unsplash (free, no auth needed)
const WATCH_IMGS = {
  // Analog women rose gold
  rg1: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80",
  rg2: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80",
  rg3: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
  rg4: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=400&q=80",
  // Smartwatch
  sw1: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&q=80",
  sw2: "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=400&q=80",
  sw3: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
  sw4: "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80",
  // Blue dial analog
  bl1: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80",
  bl2: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&q=80",
  bl3: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=400&q=80",
  bl4: "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?w=400&q=80",
  // Black smartwatch
  bsw1: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  bsw2: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
  bsw3: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80",
  bsw4: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
  // Silver/steel mens
  sl1: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80",
  sl2: "https://images.unsplash.com/photo-1526045431048-f857369baa09?w=400&q=80",
  sl3: "https://images.unsplash.com/photo-1619946794135-5bc917a27793?w=400&q=80",
  sl4: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80",
  // Dark/black mens
  dk1: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=400&q=80",
  dk2: "https://images.unsplash.com/photo-1564213786700-f0d40a7af46b?w=400&q=80",
  dk3: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&q=80",
  dk4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  // Brown leather
  br1: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=400&q=80",
  br2: "https://images.unsplash.com/photo-1542496658-e33a6d0d5f5a?w=400&q=80",
  br3: "https://images.unsplash.com/photo-1595586964632-b215dfbc064a?w=400&q=80",
  br4: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?w=400&q=80",
  // Grey/white minimal
  gr1: "https://images.unsplash.com/photo-1620625515032-6ed0c1790c75?w=400&q=80",
  gr2: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?w=400&q=80",
  gr3: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
  gr4: "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=400&q=80",
  // Chronograph
  ch1: "https://images.unsplash.com/photo-1540496905036-5937c10647cc?w=400&q=80",
  ch2: "https://images.unsplash.com/photo-1586495777744-4e6232bf2f88?w=400&q=80",
  ch3: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
  ch4: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=400&q=80",
  // Copper/gold ladies
  cp1: "https://images.unsplash.com/photo-1606744888344-493238951221?w=400&q=80",
  cp2: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=400&q=80",
  cp3: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=400&q=80",
  cp4: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80",
  // Pink ladies
  pk1: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&q=80",
  pk2: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=400&q=80",
  pk3: "https://images.unsplash.com/photo-1548171915-e79a380a2a4b?w=400&q=80",
  pk4: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
  // Navy blue casual
  nb1: "https://images.unsplash.com/photo-1542496658-e33a6d0d5f5a?w=400&q=80",
  nb2: "https://images.unsplash.com/photo-1509941943102-10c232535736?w=400&q=80",
  nb3: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=400&q=80",
  nb4: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400&q=80",
};

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Vyb Striker By Fastrack Quartz Analog Rose Gold Dial Rose Gold Stainless Steel Strap Watch",
    shortName: "Vyb Striker By Fastrack Quartz Analog Rose Gold Dial Rose Go...",
    category: "Girls Watch", price: 1995, oldPrice: 2850, discount: 30, rating: 4.4, reviews: 128,
    badge: "New Arrival", displayType: "Analog", gender: "Girls", strapColor: "Rose Gold", size: "Small", available: true,
    thumb: WATCH_IMGS.rg1,
    description: "A bold statement piece for the modern woman. The Vyb Striker features a premium quartz movement with a stunning rose gold dial, encased in a sleek stainless steel bracelet. Perfect for both casual outings and evening events.",
    features: ["Quartz Movement", "Stainless Steel Case", "Water Resistant 30m", "Mineral Crystal Glass", "Push Button Clasp"],
    colors: [{ name: "Rose Gold", hex: "#d4a96a" }, { name: "Silver", hex: "#c0c0c0" }, { name: "Black", hex: "#1a1a1a" }],
    images: [WATCH_IMGS.rg1, WATCH_IMGS.rg2, WATCH_IMGS.rg3, WATCH_IMGS.rg4],
  },
  {
    id: 2,
    name: "Fastrack Astor FR2 Pro Smart Watch With 3.63 Cm AMOLED Display, BT Calling, 100+ Sports Modes",
    shortName: "Fastrack Astor FR2 Pro Smart Watch With 3.63 Cm AMOLED Displ...",
    category: "Unisex Watch", price: 2799, oldPrice: 5499, discount: 49, rating: 4.6, reviews: 52,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Large", available: true,
    thumb: WATCH_IMGS.sw1,
    description: "The Astor FR2 Pro is a powerhouse smartwatch packed with health and fitness features. With its stunning AMOLED display, built-in Bluetooth calling, and 100+ sports modes, it's the perfect companion for your active lifestyle.",
    features: ["3.63 Cm AMOLED Display", "Bluetooth Calling", "100+ Sports Modes", "Heart Rate & SpO2 Monitor", "7-Day Battery Life", "IP68 Water Resistant"],
    colors: [{ name: "Black", hex: "#1a1a1a" }, { name: "Navy Blue", hex: "#1a3060" }, { name: "Olive", hex: "#3a4a2a" }],
    images: [WATCH_IMGS.sw1, WATCH_IMGS.sw2, WATCH_IMGS.sw3, WATCH_IMGS.sw4],
  },
  {
    id: 3,
    name: "Fastrack Vyb Limitless Quartz Analog Blue Dial Silver Stainless Steel Strap Watch",
    shortName: "Fastrack Vyb Limitless Quartz Analog Blue Dial...",
    category: "Guys Watch", price: 1595, oldPrice: 2275, discount: 30, rating: 4.8, reviews: 5,
    badge: null, displayType: "Analog", gender: "Men", strapColor: "Silver", size: "Medium", available: true,
    thumb: WATCH_IMGS.bl1,
    description: "Break limits with the Vyb Limitless. Featuring a striking blue dial with luminous hands, this bold analog watch is built for those who dare to stand out. The slim stainless steel bracelet ensures all-day comfort.",
    features: ["Quartz Movement", "Blue Sunray Dial", "Luminous Hands", "Stainless Steel Bracelet", "Water Resistant 50m"],
    colors: [{ name: "Silver/Blue", hex: "#b0d8e8" }, { name: "Black", hex: "#1e1e3a" }],
    images: [WATCH_IMGS.bl1, WATCH_IMGS.bl2, WATCH_IMGS.bl3, WATCH_IMGS.bl4],
  },
  {
    id: 4,
    name: "Fastrack Revoltt XR1 3.50 Cm Smart Watch, BT Calling, Fast Charge, 100+ Watch Faces",
    shortName: "Fastrack Revoltt XR1 3.50 Cm, BT Calling, Fast Charge, 100+...",
    category: "Unisex Watch", price: 1500, oldPrice: 3995, discount: 62, rating: 4.1, reviews: 21,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Large", available: true,
    thumb: WATCH_IMGS.bsw1,
    description: "The Revoltt XR1 brings premium features at an unbeatable price. Fast charging, Bluetooth calling, and 100+ customizable watch faces engineered for the next generation. Charge for 10 minutes, run for a full day.",
    features: ["3.50 Cm Display", "10-min Fast Charge", "Bluetooth Calling", "100+ Watch Faces", "Heart Rate Monitor", "IP67 Water Resistant"],
    colors: [{ name: "Black", hex: "#0a0a0a" }, { name: "Red", hex: "#6b0000" }],
    images: [WATCH_IMGS.bsw1, WATCH_IMGS.bsw2, WATCH_IMGS.bsw3, WATCH_IMGS.bsw4],
  },
  {
    id: 5,
    name: "Fastrack UFO Quartz Multifunction Green Dial Silver Stainless Steel Strap Watch",
    shortName: "Fastrack UFO Quartz Multifunction Green Dial Silver Stainles...",
    category: "Guys Watch", price: 5995, oldPrice: null, discount: null, rating: 4.7, reviews: 9,
    badge: null, displayType: "Analog", gender: "Men", strapColor: "Silver", size: "Large", available: true,
    thumb: WATCH_IMGS.sl1,
    description: "Out-of-this-world design meets precision engineering. The UFO features a mesmerizing multi-textured dial with multifunction display. For those who look to the stars and still make it to every meeting on time.",
    features: ["Quartz Multifunction", "Green Textured Dial", "Day & Date Display", "Stainless Steel Bracelet", "Water Resistant 100m"],
    colors: [{ name: "Silver/Green", hex: "#e0e8e0" }, { name: "Black/Green", hex: "#1a2a1a" }],
    images: [WATCH_IMGS.sl1, WATCH_IMGS.sl2, WATCH_IMGS.sl3, WATCH_IMGS.sl4],
  },
  {
    id: 6,
    name: "Fastrack Vyb Nimbus Quartz Analog Black Dial Two Toned Stainless Steel Strap Watch",
    shortName: "Fastrack Vyb Nimbus Quartz Analog Black Dial Two Toned Color...",
    category: "Guys Watch", price: 2195, oldPrice: 3135, discount: 30, rating: 4.3, reviews: 14,
    badge: null, displayType: "Analog", gender: "Men", strapColor: "Black", size: "Medium", available: true,
    thumb: WATCH_IMGS.dk1,
    description: "Dark, bold, and commanding. The Nimbus features a sleek black dial with two-toned stainless steel construction that demands attention in every room. Engineered for the man who means business, day or night.",
    features: ["Quartz Analog", "Two-Toned Steel Strap", "Black Sunray Dial", "Date Display", "Water Resistant 30m"],
    colors: [{ name: "Two-Toned", hex: "#1e1e3a" }, { name: "All Black", hex: "#0a0a0a" }, { name: "Silver", hex: "#c0c8d8" }],
    images: [WATCH_IMGS.dk1, WATCH_IMGS.dk2, WATCH_IMGS.dk3, WATCH_IMGS.dk4],
  },
  {
    id: 7,
    name: "Fastrack Pulse IV Dual Time Analog Watch With Green Dial & Brown Leather Strap",
    shortName: "Fastrack Pulse IV Dual Time Analog Watch With Green Dial & B...",
    category: "Guys Watch", price: 4295, oldPrice: null, discount: null, rating: null, reviews: null,
    badge: null, displayType: "Analog", gender: "Men", strapColor: "Brown", size: "Large", available: false,
    thumb: WATCH_IMGS.br1,
    description: "Adventure-ready with dual time zone display and a rugged green dial. The Pulse IV is built for the explorer — whether crossing time zones or trekking through jungles. Paired with a premium genuine leather strap.",
    features: ["Dual Time Zone", "Green Military Dial", "Genuine Leather Strap", "Mineral Glass", "Water Resistant 50m", "Luminous Hands"],
    colors: [{ name: "Brown/Green", hex: "#2d1b00" }, { name: "Black/Green", hex: "#1a1a1a" }],
    images: [WATCH_IMGS.br1, WATCH_IMGS.br2, WATCH_IMGS.br3, WATCH_IMGS.br4],
  },
  {
    id: 8,
    name: "Fastrack Fastfit Quartz Analog Grey Dial Grey Silicone Strap Watch",
    shortName: "Fastrack Fastfit Quartz Analog Grey Dial Grey Colour Silicon...",
    category: "Unisex Watch", price: 895, oldPrice: 995, discount: 10, rating: 3.9, reviews: 42,
    badge: null, displayType: "Analog", gender: "Unisex", strapColor: "Grey", size: "Medium", available: true,
    thumb: WATCH_IMGS.gr1,
    description: "Clean, minimal, and built for everyday wear. The Fastfit is your no-nonsense companion — a simple grey dial paired with a comfortable silicone strap that goes from gym to boardroom without missing a beat.",
    features: ["Quartz Analog", "Silicone Strap", "Grey Minimalist Dial", "Lightweight Design", "Water Resistant 30m"],
    colors: [{ name: "Grey", hex: "#c8c8c8" }, { name: "Black", hex: "#333" }, { name: "Navy", hex: "#1a2a4a" }],
    images: [WATCH_IMGS.gr1, WATCH_IMGS.gr2, WATCH_IMGS.gr3, WATCH_IMGS.gr4],
  },
  {
    id: 9,
    name: "Fastrack Overdrive Chronograph Black Dial Men Stainless Steel Strap Watch",
    shortName: "Fastrack Overdrive Chronograph Black Dial Men Watch...",
    category: "Guys Watch", price: 3495, oldPrice: 4999, discount: 30, rating: 4.3, reviews: 18,
    badge: "Best Seller", displayType: "Analog", gender: "Men", strapColor: "Black", size: "Large", available: true,
    thumb: WATCH_IMGS.ch1,
    description: "Race-inspired engineering meets everyday boldness. The Overdrive Chronograph features a tachymeter bezel, three-eye sub-dials, and a bold black dial. Built for those who measure life in seconds.",
    features: ["Chronograph Movement", "Tachymeter Bezel", "Three Sub-Dials", "Stainless Steel Strap", "Water Resistant 100m", "Anti-Reflective Glass"],
    colors: [{ name: "Black/Red", hex: "#111" }, { name: "Black/Blue", hex: "#0a0a2a" }, { name: "Silver", hex: "#888" }],
    images: [WATCH_IMGS.ch1, WATCH_IMGS.ch2, WATCH_IMGS.ch3, WATCH_IMGS.ch4],
  },
  {
    id: 10,
    name: "Fastrack NR3089SL01 Analog Watch Copper Dial Rose Gold Steel Strap Women",
    shortName: "Fastrack NR3089SL01 Analog Watch Copper Dial Steel Strap...",
    category: "Girls Watch", price: 1295, oldPrice: 1850, discount: 30, rating: 4.5, reviews: 33,
    badge: "New Arrival", displayType: "Analog", gender: "Girls", strapColor: "Rose Gold", size: "Small", available: true,
    thumb: WATCH_IMGS.cp1,
    description: "Warm copper tones meet timeless elegance. This delicate ladies watch features a rich copper-toned dial housed in a rose gold stainless steel case with matching bracelet. A perfect gift for the woman who appreciates refined beauty.",
    features: ["Quartz Movement", "Copper Dial", "Rose Gold Steel Strap", "Mineral Glass", "Water Resistant 30m", "Fold-Over Clasp"],
    colors: [{ name: "Rose Gold/Copper", hex: "#c8956c" }, { name: "Silver/White", hex: "#e8e0d8" }],
    images: [WATCH_IMGS.cp1, WATCH_IMGS.cp2, WATCH_IMGS.cp3, WATCH_IMGS.cp4],
  },
  {
    id: 11,
    name: "Fastrack Reflex Bling Smart Watch With 1.1 AMOLED Round Dial Pink Strap",
    shortName: "Fastrack Reflex Bling Smart Watch With 1.1 AMOLED Screen...",
    category: "Girls Watch", price: 1999, oldPrice: 2999, discount: 33, rating: 4.2, reviews: 11,
    badge: null, displayType: "Smart", gender: "Girls", strapColor: "Pink", size: "Small", available: true,
    thumb: WATCH_IMGS.pk1,
    description: "Sparkle and smarts in one wrist. The Reflex Bling features a gorgeous AMOLED display with a blingy dial. Track your health, receive notifications, and look fabulous — all at once.",
    features: ["1.1 AMOLED Display", "Heart Rate Monitor", "SpO2 Tracking", "Pink Silicone Strap", "7-Day Battery", "IP67 Water Resistant"],
    colors: [{ name: "Pink", hex: "#f0c0d8" }, { name: "Black", hex: "#2a1a2a" }, { name: "Mint", hex: "#c0e8d0" }],
    images: [WATCH_IMGS.pk1, WATCH_IMGS.pk2, WATCH_IMGS.pk3, WATCH_IMGS.pk4],
  },
  {
    id: 12,
    name: "Fastrack Casual Analog Blue Dial Unisex Silicon Strap Watch",
    shortName: "Fastrack Casual Analog Blue Dial Unisex Watch...",
    category: "Unisex Watch", price: 795, oldPrice: null, discount: null, rating: 3.8, reviews: 7,
    badge: null, displayType: "Analog", gender: "Unisex", strapColor: "Blue", size: "Medium", available: false,
    thumb: WATCH_IMGS.nb1,
    description: "The everyday essential. Simple, clean, and reliable — the Casual Blue is for those who appreciate no-frills style. A classic blue dial on a comfortable silicone strap that pairs with everything in your wardrobe.",
    features: ["Quartz Analog", "Blue Silicone Strap", "Clean Dial Design", "Lightweight", "Water Resistant 30m"],
    colors: [{ name: "Blue", hex: "#1a3a6e" }, { name: "Black", hex: "#1a1a1a" }, { name: "Red", hex: "#6e1a1a" }],
    images: [WATCH_IMGS.nb1, WATCH_IMGS.nb2, WATCH_IMGS.nb3, WATCH_IMGS.nb4],
  },
];

const FILTERS = {
  displayType:  { label: "Display Type",  options: ["Analog", "Smart", "Digital"] },
  size:         { label: "Screen Size",   options: ["Small", "Medium", "Large"] },
  gender:       { label: "Gender",        options: ["Men", "Girls", "Unisex"] },
  price:        { label: "Price",         options: ["Under ₹1000", "₹1000–₹2000", "₹2000–₹4000", "Above ₹4000"] },
  strapColor:   { label: "Strap Color",   options: ["Black", "Silver", "Rose Gold", "Brown", "Grey", "Blue", "Pink"] },
  discount:     { label: "Discounts",     options: ["10% and above", "30% and above", "50% and above"] },
  availability: { label: "Availability",  options: ["In Stock", "Out of Stock"] },
};

function priceMatch(price, range) {
  if (range === "Under ₹1000")  return price < 1000;
  if (range === "₹1000–₹2000") return price >= 1000 && price <= 2000;
  if (range === "₹2000–₹4000") return price > 2000 && price <= 4000;
  if (range === "Above ₹4000") return price > 4000;
  return true;
}
function discountMatch(discount, range) {
  if (!discount) return false;
  if (range === "10% and above") return discount >= 10;
  if (range === "30% and above") return discount >= 30;
  if (range === "50% and above") return discount >= 50;
  return true;
}

// ── Img with fallback ─────────────────────────────────────────────────────────
function WatchImg({ src, alt, className, style }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 text-gray-400 text-xs ${className}`} style={style}>
        ⌚
      </div>
    );
  }
  return (
    <img
      src={src} alt={alt || "watch"}
      className={className} style={style}
      onError={() => setErr(true)}
    />
  );
}

// ── FilterSection ─────────────────────────────────────────────────────────────
function FilterSection({ filterKey, config, selected, onChange }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="border-b border-gray-200 py-3">
      <button className="w-full flex items-center justify-between text-left" onClick={() => setOpen(o => !o)}>
        <span className="text-xs font-black tracking-widest text-gray-800">{config.label.toUpperCase()}</span>
        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""} text-gray-400`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="mt-3 flex flex-col gap-2.5">
          {config.options.map(opt => {
            const checked = selected.includes(opt);
            return (
              <label key={opt} className="flex items-center gap-2.5 cursor-pointer group" onClick={() => onChange(filterKey, opt)}>
                <div className={`w-4 h-4 border rounded flex-shrink-0 flex items-center justify-center transition-all ${checked ? "bg-orange-500 border-orange-500" : "border-gray-300 group-hover:border-orange-400"}`}>
                  {checked && <svg width="9" height="9" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>}
                </div>
                <span className={`text-xs transition-colors ${checked ? "text-orange-500 font-semibold" : "text-gray-600 group-hover:text-gray-900"}`}>{opt}</span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── ProductCard ───────────────────────────────────────────────────────────────
function ProductCard({ p, onOpen }) {
  const [wished, setWished] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white"
      onClick={() => onOpen(p.id)}>
      <div className="relative overflow-hidden" style={{ height: 220 }}>
        {p.badge && (
          <div className={`absolute top-3 left-3 z-10 text-white text-xs font-bold px-2.5 py-1 rounded-sm ${p.badge === "Best Seller" ? "bg-orange-500" : "bg-gray-900"}`}>
            {p.badge}
          </div>
        )}
        <button onClick={e => { e.stopPropagation(); setWished(w => !w); }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:scale-110 transition-transform">
          <svg width="15" height="15" fill={wished ? "#ef4444" : "none"} stroke={wished ? "#ef4444" : "#666"} strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
        <WatchImg
          src={p.thumb} alt={p.shortName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!p.available && (
          <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center z-10">
            <span className="text-xs font-bold text-gray-500 border border-gray-400 px-3 py-1 rounded bg-white">OUT OF STOCK</span>
          </div>
        )}
        {p.rating && (
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1 bg-white rounded-full px-2.5 py-1 shadow">
            <svg width="10" height="10" fill="#F47A20" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <span className="text-xs font-bold text-gray-700">{p.rating} ({p.reviews})</span>
          </div>
        )}
      </div>
      <div className="p-3.5">
        <p className="text-sm font-semibold text-gray-800 leading-snug line-clamp-2 group-hover:text-orange-500 transition-colors min-h-[40px]">{p.shortName}</p>
        <p className="text-xs text-gray-400 mt-1">{p.category}</p>
        <div className="flex items-center gap-2 mt-2 flex-wrap">
          <span className="text-sm font-bold text-gray-900">₹ {p.price.toLocaleString()}</span>
          {p.oldPrice && <span className="text-xs text-gray-400 line-through">₹ {p.oldPrice.toLocaleString()}</span>}
          {p.discount && <span className="text-xs font-bold text-orange-500">{p.discount}% off</span>}
        </div>
      </div>
    </div>
  );
}

// ── ProductDetail Modal ───────────────────────────────────────────────────────
function ProductDetail({ productId, onClose }) {
  const p = ALL_PRODUCTS.find(x => x.id === productId);
  const [activeImg, setActiveImg] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [added, setAdded] = useState(false);
  const [wished, setWished] = useState(false);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  if (!p) return null;

  const handleAddToCart = () => {
    addToCart(p, p.colors[selectedColor].name, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto relative"
        onClick={e => e.stopPropagation()}>
        {/* Close */}
        <button onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — Images */}
          <div className="p-5 bg-gray-50 rounded-tl-2xl rounded-bl-none md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none">
            {/* Main image */}
            <div className="rounded-xl overflow-hidden mb-3" style={{ height: 320 }}>
              <WatchImg
                src={p.images[activeImg]} alt={p.name}
                className="w-full h-full object-cover transition-all duration-300"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2.5">
              {p.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${activeImg === i ? "border-orange-500 shadow-md scale-105" : "border-transparent hover:border-gray-300"}`}
                  style={{ width: 70, height: 70 }}>
                  <WatchImg src={img} alt={`view ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            {p.badge && (
              <div className={`mt-3 inline-flex text-white text-xs font-bold px-3 py-1 rounded-full ${p.badge === "Best Seller" ? "bg-orange-500" : "bg-gray-800"}`}>
                {p.badge}
              </div>
            )}
          </div>

          {/* RIGHT — Info */}
          <div className="p-6 flex flex-col gap-4">
            <p className="text-xs text-gray-400">{p.category} / {p.displayType}</p>
            <h2 className="text-lg font-black text-gray-900 leading-snug">{p.name}</h2>

            {p.rating && (
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="14" height="14" fill={s <= Math.round(p.rating) ? "#F47A20" : "#e5e7eb"} viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{p.rating} ({p.reviews} reviews)</span>
              </div>
            )}

            <div className="flex items-baseline gap-3">
              <span className="text-2xl font-black text-gray-900">₹ {p.price.toLocaleString()}</span>
              {p.oldPrice && <span className="text-sm text-gray-400 line-through">₹ {p.oldPrice.toLocaleString()}</span>}
              {p.discount && <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-0.5 rounded-full">{p.discount}% OFF</span>}
            </div>
            {p.oldPrice && (
              <p className="text-xs text-green-600 font-semibold -mt-2">You save ₹ {(p.oldPrice - p.price).toLocaleString()}</p>
            )}

            <p className="text-sm text-gray-600 leading-relaxed">{p.description}</p>

            {/* Color */}
            <div>
              <p className="text-xs font-black tracking-widest text-gray-700 mb-2">
                COLOR: <span className="text-orange-500">{p.colors[selectedColor].name}</span>
              </p>
              <div className="flex gap-2.5">
                {p.colors.map((c, i) => (
                  <button key={i} onClick={() => setSelectedColor(i)} title={c.name}
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === i ? "border-orange-500 scale-110 shadow-md" : "border-gray-200 hover:border-gray-400"}`}
                    style={{ background: c.hex }}>
                    {selectedColor === i && (
                      <svg width="12" height="12" fill="none" stroke="white" strokeWidth="3" viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <p className="text-xs font-black tracking-widest text-gray-700 mb-2">KEY FEATURES</p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{f}</span>
                ))}
              </div>
            </div>

            {/* Qty + Stock */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors text-lg font-bold">−</button>
                <span className="w-8 text-center text-sm font-semibold">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="w-9 h-9 flex items-center justify-center hover:bg-gray-100 transition-colors text-lg font-bold">+</button>
              </div>
              <span className={`text-xs font-semibold ${p.available ? "text-green-600" : "text-red-500"}`}>
                {p.available ? "✓ In Stock" : "✗ Out of Stock"}
              </span>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <button onClick={handleAddToCart} disabled={!p.available}
                className={`flex-1 py-3 rounded-full text-sm font-black tracking-widest transition-all duration-200 ${
                  p.available
                    ? added ? "bg-green-500 text-white" : "bg-orange-500 hover:bg-orange-600 text-white active:scale-95"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}>
                {added ? "✓ ADDED TO CART" : "ADD TO CART"}
              </button>
              <button onClick={() => setWished(w => !w)}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${wished ? "border-red-400 bg-red-50" : "border-gray-200 hover:border-red-300"}`}>
                <svg width="18" height="18" fill={wished ? "#ef4444" : "none"} stroke={wished ? "#ef4444" : "#666"} strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Delivery info */}
            <div className="border-t border-gray-100 pt-3 flex flex-col gap-1.5">
              {[
                ["M5 12H19M12 5l7 7-7 7", "Free delivery on orders above ₹999"],
                ["M1 4v6h6M3.51 15a9 9 0 1 0 .49-3.5", "Easy 30-day returns"],
                ["M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", "2 Year Titan Warranty"],
              ].map(([d, text]) => (
                <div key={text} className="flex items-center gap-2 text-xs text-gray-500">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d={d} /></svg>
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Watches() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState({});
  const [sortBy, setSortBy] = useState("relevance");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openProductId, setOpenProductId] = useState(null);

  const toggleFilter = (key, value) => {
    setSelected(prev => {
      const current = prev[key] || [];
      return { ...prev, [key]: current.includes(value) ? current.filter(v => v !== value) : [...current, value] };
    });
  };
  const clearAll = () => { setSelected({}); setSearch(""); };
  const activeCount = Object.values(selected).flat().length;

  const filtered = useMemo(() => {
    let list = ALL_PRODUCTS;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.strapColor.toLowerCase().includes(q) || p.displayType.toLowerCase().includes(q));
    }
    if (selected.displayType?.length)  list = list.filter(p => selected.displayType.includes(p.displayType));
    if (selected.size?.length)         list = list.filter(p => selected.size.includes(p.size));
    if (selected.gender?.length)       list = list.filter(p => selected.gender.includes(p.gender));
    if (selected.price?.length)        list = list.filter(p => selected.price.some(r => priceMatch(p.price, r)));
    if (selected.strapColor?.length)   list = list.filter(p => selected.strapColor.includes(p.strapColor));
    if (selected.discount?.length)     list = list.filter(p => selected.discount.some(r => discountMatch(p.discount, r)));
    if (selected.availability?.length) {
      if (selected.availability.includes("In Stock") && !selected.availability.includes("Out of Stock")) list = list.filter(p => p.available);
      else if (selected.availability.includes("Out of Stock") && !selected.availability.includes("In Stock")) list = list.filter(p => !p.available);
    }
    if (sortBy === "price-asc")  list = [...list].sort((a,b) => a.price - b.price);
    if (sortBy === "price-desc") list = [...list].sort((a,b) => b.price - a.price);
    if (sortBy === "discount")   list = [...list].sort((a,b) => (b.discount||0)-(a.discount||0));
    if (sortBy === "rating")     list = [...list].sort((a,b) => (b.rating||0)-(a.rating||0));
    return list;
  }, [search, selected, sortBy]);

  const FilterPanel = () => (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-black tracking-widest text-gray-900">FILTERS</span>
        {activeCount > 0 && <button onClick={clearAll} className="text-xs text-orange-500 font-semibold hover:underline">Clear all ({activeCount})</button>}
      </div>
      {activeCount > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-3">
          {Object.entries(selected).map(([key, vals]) =>
            vals.map(v => (
              <span key={`${key}-${v}`} onClick={() => toggleFilter(key, v)}
                className="flex items-center gap-1 text-xs bg-orange-50 border border-orange-200 text-orange-600 px-2 py-0.5 rounded-full cursor-pointer hover:bg-orange-100">
                {v}
                <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </span>
            ))
          )}
        </div>
      )}
      {Object.entries(FILTERS).map(([key, cfg]) => (
        <FilterSection key={key} filterKey={key} config={cfg} selected={selected[key] || []} onChange={toggleFilter} />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-100 py-6 px-4 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
          <span>Home</span><span>/</span><span className="text-gray-700 font-semibold">Watches</span>
        </div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Watches</h1>
        <p className="text-sm text-gray-500 mt-1">{ALL_PRODUCTS.length} Products</p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search watches by name, color, type..."
            value={search} onChange={e => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-full pl-10 pr-10 py-2.5 text-sm focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 transition-all" />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
          )}
        </div>

        <div className="flex gap-6">
          <aside className="hidden md:block w-52 flex-shrink-0"><FilterPanel /></aside>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <button className="md:hidden flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700 hover:border-orange-400 transition-colors" onClick={() => setMobileFiltersOpen(true)}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" /></svg>
                  Filters {activeCount > 0 && <span className="bg-orange-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">{activeCount}</span>}
                </button>
                <span className="text-xs text-gray-500">{filtered.length} results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500 hidden sm:block">Sort by:</span>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-full px-3 py-1.5 text-xs font-semibold text-gray-700 focus:outline-none focus:border-orange-400 cursor-pointer">
                  <option value="relevance">Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="discount">Highest Discount</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map(p => <ProductCard key={p.id} p={p} onOpen={setOpenProductId} />)}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <span className="text-5xl mb-4">🔍</span>
                <p className="text-lg font-bold text-gray-700">No watches found</p>
                <p className="text-sm text-gray-400 mt-1">Try changing your filters or search term</p>
                <button onClick={clearAll} className="mt-4 bg-orange-500 text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-orange-600 transition-colors">Clear all filters</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setMobileFiltersOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white overflow-y-auto p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span className="font-black text-gray-900 tracking-widest text-sm">FILTERS</span>
              <button onClick={() => setMobileFiltersOpen(false)}>
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>
            </div>
            <FilterPanel />
            <button onClick={() => setMobileFiltersOpen(false)} className="w-full mt-6 bg-orange-500 text-white font-bold py-3 rounded-full hover:bg-orange-600 transition-colors text-sm">
              Apply Filters ({filtered.length} results)
            </button>
          </div>
        </div>
      )}

      {openProductId && (
        <ProductDetail productId={openProductId} onClose={() => setOpenProductId(null)} />
      )}
    </div>
  );
}