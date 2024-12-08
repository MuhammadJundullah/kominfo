import "./App.css";
import Beranda from "./Pages/Beranda";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layanan from "./Pages/Layanan";
import Kontak from "./Pages/Kontak";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Informasipublik from "./Pages/Informasipublik";

function App() {
  return (
    <>
      <Navbar />
      <header>
        <Router>
          <Routes>
            <Route path="/" element={<Beranda></Beranda>} />
            <Route path="/Layanan" element={<Layanan></Layanan>} />
            <Route path="/Kontak" element={<Kontak></Kontak>} />
            <Route path="/informasi-publik" element={<Informasipublik></Informasipublik>} />
            <Route path="/*" element={<Kontak></Kontak>} />
          </Routes>
        </Router>
      </header>
      <Footer />
    </>
  );
}

export default App;
