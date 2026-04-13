import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Watches from "./pages/Watches";
import SmartWatches from "./pages/SmartWatches";
import VYB from "./pages/VYB";
import Sale from "./pages/Sale";
import Gifting from "./pages/Gifting";
import Accessories from "./pages/Accessories";
import More from "./pages/More";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans">
        <Navbar />
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
        <Footer />
      </div>
    </BrowserRouter>
  );
}