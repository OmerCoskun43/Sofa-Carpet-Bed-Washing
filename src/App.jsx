import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Koltuk from "./pages/koltuk";
import Yatak from "./pages/Yatak";
import Halı from "./pages/Halı";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Galeri from "./pages/Galeri";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/koltuk" element={<Koltuk />} />
        <Route path="/hali" element={<Halı />} />
        <Route path="/yatak" element={<Yatak />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/galeri" element={<Galeri />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
