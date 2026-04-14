import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Watches from "./pages/Watches";
import SmartWatches from "./pages/SmartWatches";
import VYB from "./pages/VYB";
import Sale from "./pages/Sale";
import Gifting from "./pages/Gifting";
import Accessories from "./pages/Accessories";
import More from "./pages/More";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-white font-sans">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watches" element={<Watches />} />
            <Route path="/smart-watches" element={<SmartWatches />} />
            <Route path="/vyb" element={<VYB />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/gifting" element={<Gifting />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/more" element={<More />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}