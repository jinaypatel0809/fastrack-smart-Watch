import { useState, useMemo } from "react";
import { useCart } from "../context/CartContext";

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Fastrack Reflex Nitro+ 4.9 cm AMOLED Display, BT Calling, 100+ Sports Modes, Heart Rate, SpO2 Smartwatch",
    shortName: "Fastrack Reflex Nitro+ 4.9 cm AMOLED, BT Calling, 100+ Sports Modes",
    category: "Unisex Smartwatch", price: 1799, oldPrice: 3999, discount: 55, rating: 4.3, reviews: 87,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Medium", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8a8d659e/images/Fastrack/Catalog/38151PP01K_1.jpg?sw=600&sh=600",
    description: "The Fastrack Reflex Nitro+ is packed with a vivid 4.9 cm AMOLED display and Bluetooth calling for staying connected on the go. With 100+ sports modes, heart rate monitoring, and SpO2 tracking, it's your all-day health and fitness partner. IP68 rated for worry-free workouts.",
    features: ["4.9 cm AMOLED Display", "BT Calling", "100+ Sports Modes", "Heart Rate & SpO2", "IP68 Water Resistant", "7-Day Battery"],
    colors: [{ name: "Black", hex: "#1a1a1a" }, { name: "Navy Blue", hex: "#1a2a4a" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8a8d659e/images/Fastrack/Catalog/38151PP01K_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb637b030/images/Fastrack/Catalog/38151PP01K_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2101da2c/images/Fastrack/Catalog/38151PP01K_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw20a561b5/images/Fastrack/Catalog/38151PP01K_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 2,
    name: "Fastrack Astor FR2 Pro Smart Watch with 3.63 cm AMOLED Display, AI Voice Assistant, SingleSync BT Calling",
    shortName: "Fastrack Astor FR2 Pro 3.63 cm AMOLED, AI Voice Assistant",
    category: "Unisex Smartwatch", price: 2799, oldPrice: 5499, discount: 49, rating: 4.4, reviews: 52,
    badge: "New Arrival", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Small", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8178fcf1/images/Fastrack/Catalog/38156NM01_1.jpg?sw=600&sh=600",
    description: "The Fastrack Astor FR2 Pro Smartwatch features a sharp 3.63 cm AMOLED display with 466x466 pixel resolution for stunning clarity. Stay connected with SingleSync BT calling, use the AI voice assistant, and track your fitness with 100+ sports modes. With IP68 water resistance and up to 5 days of battery life.",
    features: ["3.63 cm AMOLED Display", "AI Voice Assistant", "SingleSync BT Calling", "100+ Sports Modes", "IP68 Water Resistant", "5-Day Battery Life"],
    colors: [{ name: "Black", hex: "#1a1a1a" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8178fcf1/images/Fastrack/Catalog/38156NM01_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw45083838/images/Fastrack/Catalog/38156NM01_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2d411bb5/images/Fastrack/Catalog/38156NM01_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfc49dd84/images/Fastrack/Catalog/38156NM01_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 3,
    name: "Fastrack New Astor FS1 PRO Smartwatch, Large Super AMOLED Display 5 CM AOD, NextGen Chipset Lag Free",
    shortName: "Fastrack New Astor FS1 PRO 5 CM Super AMOLED AOD, NextGen Chipset",
    category: "Unisex Smartwatch", price: 2099, oldPrice: 4999, discount: 58, rating: 5.0, reviews: 25,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Large", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd1ba24e6/images/Fastrack/Catalog/38184PP01K_1.jpg?sw=600&sh=600",
    description: "The Fastrack New Astor FS1 PRO Smartwatch boasts a large 5 cm Super AMOLED display with Always-On Display (AOD) and a NextGen chipset for a fast, lag-free experience. Navigate easily with the functional crown, enjoy SingleSync BT calling, and access 100+ sports modes. With IP68 water resistance, it's built for both performance and style.",
    features: ["5 CM Super AMOLED AOD", "NextGen Chipset", "Functional Crown", "SingleSync BT Calling", "100+ Sports Modes", "IP68 Water Resistant"],
    colors: [{ name: "Black", hex: "#1a1a1a" }, { name: "Olive", hex: "#4a5a2a" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd1ba24e6/images/Fastrack/Catalog/38184PP01K_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfdfa4339/images/Fastrack/Catalog/38184PP01K_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd376ac78/images/Fastrack/Catalog/38184PP01K_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw4d4b62dd/images/Fastrack/Catalog/38184PP01K_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 4,
    name: "Fastrack Astor FR2 Pro Smart Watch Rose Gold, 3.63 cm AMOLED Display, AI Voice Assistant",
    shortName: "Fastrack Astor FR2 Pro Rose Gold, 3.63 cm AMOLED, AI Voice Assistant",
    category: "Women Smartwatch", price: 2799, oldPrice: 5499, discount: 49, rating: 3.6, reviews: 3,
    badge: null, displayType: "Smart", gender: "Girls", strapColor: "Rose Gold", size: "Small", available: false,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw55c4b031/images/Fastrack/Catalog/38156WM01_1.jpg?sw=600&sh=600",
    description: "Elegance meets technology in this Rose Gold edition. The FR2 Pro features a 3.63 cm AMOLED display with AI voice assistant and SingleSync BT calling. Track your health 24/7 with heart rate monitoring, SpO2 tracking, and sleep analysis — all wrapped in a stylish rose gold finish.",
    features: ["3.63 cm AMOLED Display", "Rose Gold Edition", "AI Voice Assistant", "BT Calling", "Heart Rate & SpO2", "IP68 Water Resistant"],
    colors: [{ name: "Rose Gold", hex: "#B76E79" }, { name: "Black", hex: "#1a1a1a" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw55c4b031/images/Fastrack/Catalog/38156WM01_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbff8fcac/images/Fastrack/Catalog/38156WM01_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc87db555/images/Fastrack/Catalog/38156WM01_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe0fcaab8/images/Fastrack/Catalog/38156WM01_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 5,
    name: "Fastrack MYND 4.9 cm Curved AMOLED, AI Watchface, Offline Voice Commands, AI Chat, BT Calling IP68",
    shortName: "Fastrack MYND 4.9 cm Curved AMOLED, AI Watchface, BT Calling IP68",
    category: "Unisex Smartwatch", price: 3599, oldPrice: 5499, discount: 35, rating: 4.5, reviews: 8,
    badge: "New Arrival", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Large", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0605633c/images/Fastrack/Catalog/38186NM01K_1.jpg?sw=600&sh=600",
    description: "Stunning 4.9 cm Curved AMOLED Display with crisp visuals and sleek 2.5D graphics. Smart AI Features — AI Chat & AI Watchface for personalized assistance. Offline Voice Commands let you control your watch hands-free, even without internet. Comprehensive 24/7 Health Suite tracks heart rate, SpO2, sleep patterns, and more.",
    features: ["4.9 cm Curved AMOLED", "AI Chat & AI Watchface", "Offline Voice Commands", "24/7 Health Suite", "BT Calling", "IP68 Water Resistant"],
    colors: [{ name: "Black", hex: "#1a1a1a" }, { name: "Green", hex: "#2a4a2a" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0605633c/images/Fastrack/Catalog/38186NM01K_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw57b10390/images/Fastrack/Catalog/38186NM01K_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa9d5206a/images/Fastrack/Catalog/38186NM01K_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw3fb25f44/images/Fastrack/Catalog/38186NM01K_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 6,
    name: "Fastrack Marvellous FX3 Smartwatch 1.43 AMOLED Display, Metal Case & Strap, Additional Silicone Strap",
    shortName: "Fastrack Marvellous FX3 1.43 AMOLED, Metal Case & Strap",
    category: "Unisex Smartwatch", price: 6399, oldPrice: 8499, discount: 25, rating: 4.8, reviews: 14,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Silver", size: "Medium", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw472776ec/images/Fastrack/Catalog/38184PP02K_1.jpg?sw=600&sh=600",
    description: "Premium smartwatch with a stunning 1.43 AMOLED display and 2.5D graphics delivering vibrant colors. The sleek metal case and metal strap in a slim 10.4mm profile offers a refined and comfortable fit. Personalize with AI watchfaces, navigate with multiple menu styles, and stay connected with BT calling.",
    features: ["1.43 AMOLED Display", "Metal Case & Strap", "AI Watchfaces", "BT Calling", "24/7 Health Suite", "IP68 Water Resistant"],
    colors: [{ name: "Silver", hex: "#a0a0a0" }, { name: "Black", hex: "#1a1a1a" }, { name: "Green", hex: "#50C878" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw472776ec/images/Fastrack/Catalog/38184PP02K_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfde1ad10/images/Fastrack/Catalog/38184PP02K_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfde1ad10/images/Fastrack/Catalog/38184PP02K_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd845611d/images/Fastrack/Catalog/38184PP02K_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 7,
    name: "Fastrack New Astor FS1 PRO Smartwatch Beige, 5 CM Super AMOLED AOD, NextGen Chipset",
    shortName: "Fastrack New Astor FS1 PRO Beige, 5 CM Super AMOLED AOD",
    category: "Unisex Smartwatch", price: 2099, oldPrice: 4999, discount: 58, rating: 4.5, reviews: 7,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Beige", size: "Small", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd617ade8/images/Fastrack/Catalog/38151PP05K_1.jpg?sw=600&sh=600",
    description: "The FS1 PRO in Beige is your stylish everyday companion. A large 5 cm Super AMOLED display with Always-On Display and NextGen chipset ensures a fast, lag-free experience. Functional crown navigation, SingleSync BT calling, 100+ sports modes, and IP68 water resistance make it perfect for any lifestyle.",
    features: ["5 CM Super AMOLED AOD", "NextGen Chipset", "Functional Crown", "SingleSync BT Calling", "100+ Sports Modes", "IP68 Water Resistant"],
    colors: [{ name: "Beige", hex: "#F5F5DC" }, { name: "Black", hex: "#1a1a1a" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwd617ade8/images/Fastrack/Catalog/38151PP05K_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw01c2da24/images/Fastrack/Catalog/38151PP05K_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw601b649e/images/Fastrack/Catalog/38151PP05K_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw601b649e/images/Fastrack/Catalog/38151PP05K_3.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 8,
    name: "Fastrack Optimus 2 Pro 3.63 cm AMOLED, Blazing Fast UI, AOD, Metal Case, IP68, Working Crown Smartwatch",
    shortName: "Fastrack Optimus 2 Pro 3.63 cm AMOLED, AOD, Metal Case, IP68",
    category: "Unisex Smartwatch", price: 2499, oldPrice: 4999, discount: 44, rating: 4.9, reviews: 28,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Small", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5a755061/images/Fastrack/Catalog/38153NP01_1.jpg?sw=600&sh=600",
    description: "Fastrack Optimus 2 Pro features a 3.63 cm AMOLED display, SingleSync BT Calling with Advanced Chipset, AI Voice Assistant, 100+ Sports Modes, One Click Health Measurement, Auto Stress Monitor, 24x7 Heart Rate Monitor, SpO2 and Sleep Monitor with REM Sleep, and a premium metal case with IP68 protection.",
    features: ["3.63 cm AMOLED Display", "Working Crown", "AI Voice Assistant", "100+ Sports Modes", "24x7 Heart Rate Monitor", "IP68 Metal Case"],
    colors: [{ name: "Black", hex: "#0F0F0F" }, { name: "Silver", hex: "#a0a0a0" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5a755061/images/Fastrack/Catalog/38153NP01_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8036a98a/images/Fastrack/Catalog/38153NP01_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw59eedf26/images/Fastrack/Catalog/38153NP01_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa3376bb1/images/Fastrack/Catalog/38153NP01_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 9,
    name: "Fastrack Reflex Bling 1.1 AMOLED Round Dial, BT Calling, 100+ Watchfaces, Pink Strap Women Smartwatch",
    shortName: "Fastrack Reflex Bling 1.1 AMOLED, BT Calling, Pink Strap",
    category: "Women Smartwatch", price: 1999, oldPrice: 2999, discount: 33, rating: 4.2, reviews: 41,
    badge: "New Arrival", displayType: "Smart", gender: "Girls", strapColor: "Pink", size: "Small", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw55c4b031/images/Fastrack/Catalog/38156WM01_1.jpg?sw=600&sh=600",
    description: "Sparkle and smarts on your wrist. The Reflex Bling features a gorgeous 1.1 AMOLED display with a blingy round dial. Track your health with heart rate monitoring and SpO2 tracking, stay connected with BT calling, and express yourself with 100+ watch faces and a vibrant pink strap.",
    features: ["1.1 AMOLED Round Dial", "BT Calling", "100+ Watchfaces", "Heart Rate & SpO2", "IP67 Water Resistant", "7-Day Battery"],
    colors: [{ name: "Pink", hex: "#f0c0d8" }, { name: "Black", hex: "#2a1a2a" }, { name: "Mint", hex: "#c0e8d0" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw55c4b031/images/Fastrack/Catalog/38156WM01_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwbff8fcac/images/Fastrack/Catalog/38156WM01_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc87db555/images/Fastrack/Catalog/38156WM01_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe0fcaab8/images/Fastrack/Catalog/38156WM01_4.jpg?sw=600&sh=600",
    ],
  },
  {
    id: 10,
    name: "Fastrack Revoltt XR1 3.50 cm Smart Watch, BT Calling, Fast Charge, 100+ Watch Faces, Sports Modes",
    shortName: "Fastrack Revoltt XR1 3.50 cm, BT Calling, Fast Charge",
    category: "Unisex Smartwatch", price: 1500, oldPrice: 3995, discount: 62, rating: 4.1, reviews: 21,
    badge: "Best Seller", displayType: "Smart", gender: "Unisex", strapColor: "Black", size: "Large", available: true,
    thumb: "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8178fcf1/images/Fastrack/Catalog/38156NM01_1.jpg?sw=600&sh=600",
    description: "The Revoltt XR1 brings premium smartwatch features at an unbeatable price. Fast charging means 10 minutes of charge gives you a full day of use. Bluetooth calling, 100+ customizable watch faces, heart rate monitoring, and IP67 water resistance make it the ultimate value smartwatch.",
    features: ["3.50 cm Display", "10-min Fast Charge", "BT Calling", "100+ Watch Faces", "Heart Rate Monitor", "IP67 Water Resistant"],
    colors: [{ name: "Black", hex: "#0a0a0a" }, { name: "Red", hex: "#8b0000" }],
    images: [
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8178fcf1/images/Fastrack/Catalog/38156NM01_1.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw45083838/images/Fastrack/Catalog/38156NM01_2.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw2d411bb5/images/Fastrack/Catalog/38156NM01_3.jpg?sw=600&sh=600",
      "https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfc49dd84/images/Fastrack/Catalog/38156NM01_4.jpg?sw=600&sh=600",
    ],
  },
];

const FILTERS = {
  displayType:  { label: "Display Type",  options: ["Smart", "Digital", "Analog"] },
  size:         { label: "Screen Size",   options: ["Small", "Medium", "Large"] },
  gender:       { label: "Gender",        options: ["Men", "Girls", "Unisex"] },
  price:        { label: "Price",         options: ["Under ₹1000", "₹1000–₹2000", "₹2000–₹4000", "Above ₹4000"] },
  strapColor:   { label: "Strap Color",   options: ["Black", "Silver", "Rose Gold", "Beige", "Green", "Pink"] },
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

function WatchImg({ src, alt, className, style }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 text-gray-400 text-4xl ${className}`} style={style}>
        ⌚
      </div>
    );
  }
  return (
    <img src={src} alt={alt || "smartwatch"} className={className} style={style} onError={() => setErr(true)} />
  );
}

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

function ProductCard({ p, onOpen }) {
  const [wished, setWished] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow duration-200 bg-white"
      onClick={() => onOpen(p.id)}>
      <div className="relative overflow-hidden bg-gray-50" style={{ height: 220 }}>
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
        <WatchImg src={p.thumb} alt={p.shortName}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 p-3" />
        {!p.available && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10">
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
        <button onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* LEFT — Images */}
          <div className="p-5 bg-gray-50 rounded-tl-2xl rounded-bl-none md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none">
            <div className="rounded-xl overflow-hidden bg-white mb-3 flex items-center justify-center" style={{ height: 340 }}>
              <WatchImg src={p.images[activeImg]} alt={p.name}
                className="w-full h-full object-contain p-4 transition-all duration-300" />
            </div>
            <div className="flex gap-2.5">
              {p.images.map((img, i) => (
                <button key={i} onClick={() => setActiveImg(i)}
                  className={`rounded-lg overflow-hidden border-2 flex-shrink-0 bg-white flex items-center justify-center transition-all ${activeImg === i ? "border-orange-500 shadow-md scale-105" : "border-gray-200 hover:border-gray-400"}`}
                  style={{ width: 72, height: 72 }}>
                  <WatchImg src={img} alt={`view ${i + 1}`} className="w-full h-full object-contain p-1" />
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
            <h2 className="text-base font-black text-gray-900 leading-snug">{p.name}</h2>

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

            <div>
              <p className="text-xs font-black tracking-widest text-gray-700 mb-2">KEY FEATURES</p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{f}</span>
                ))}
              </div>
            </div>

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

export default function SmartWatches() {
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
          <span>Home</span><span>/</span><span className="text-gray-700 font-semibold">Smart Watches</span>
        </div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">Smart Watches</h1>
        <p className="text-sm text-gray-500 mt-1">{ALL_PRODUCTS.length} Products</p>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="relative mb-6">
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="Search smartwatches by name, color, features..."
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
                <p className="text-lg font-bold text-gray-700">No smartwatches found</p>
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