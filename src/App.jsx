import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import BackToTop from "./components/BackToTop.jsx";
import ScrollManager from "./components/ScrollManager.jsx";
import Home from "./pages/Home.jsx";
import ServicosPage from "./pages/ServicosPage.jsx";
import PortfolioAlbunsPage from "./pages/PortfolioAlbunsPage.jsx";
import AlbumPage from "./pages/AlbumPage.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:text-sm"
      >
        Pular para o conteúdo
      </a>

      <ScrollManager />
      <Navbar />

      <main id="conteudo">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/portfolio" element={<PortfolioAlbunsPage />} />
          <Route path="/portfolio/:slug" element={<AlbumPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}
