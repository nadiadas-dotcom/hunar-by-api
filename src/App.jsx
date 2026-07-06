import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { ToastProvider } from "./context/ToastContext"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDetails from "./pages/ProductDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"
import SizeGuide from "./pages/SizeGuide"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Cart from "./pages/Cart"

export default function App() {
  return (
    <Router>
      <CartProvider>
        <ToastProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/size-guide" element={<SizeGuide />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
        </ToastProvider>
      </CartProvider>
    </Router>
  )
}
