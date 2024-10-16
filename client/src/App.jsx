import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import ProductsServicesPage from "./pages/ProductsServices"
import ContactPage from "./pages/Contact"
import Footer from "./components/Footer"
import CartPage from "./pages/Cart"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Homev1 from "./pages/Homev1"

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-services" element={<ProductsServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<Admin />} />
          {/* Demo's */}
          <Route path="/Homev1" element={<Homev1 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
}

export default App