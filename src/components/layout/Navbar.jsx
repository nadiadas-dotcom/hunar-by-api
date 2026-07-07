import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { useCart } from "../../context/CartContext"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const { cartCount } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setSearchOpen(false)
  }, [location])

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setSearchOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream-50/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex flex-col items-center group">
            <span className="font-display text-2xl md:text-3xl font-bold text-amber-900 tracking-[0.15em] leading-none">
              HUNAR
            </span>
            <span className="font-elegant text-sm md:text-base text-amber-600 italic tracking-[0.3em] -mt-1">
              By Api
            </span>
            <span className="block w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-1 group-hover:w-12 transition-all duration-300" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body text-sm uppercase tracking-widest transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-amber-800"
                    : "text-charcoal-700 hover:text-amber-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-charcoal-600 hover:text-amber-800 transition-colors"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <Link
              to="/cart"
              className="p-2 text-charcoal-600 hover:text-amber-800 transition-colors relative"
              aria-label="Shopping Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-700 text-cream-50 text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </Link>

            <button
              className="hidden lg:block p-2 text-charcoal-600 hover:text-amber-800 transition-colors"
              aria-label="Account"
            >
              <User size={20} />
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-charcoal-600 hover:text-amber-800 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="bg-cream-50 border-t border-cream-200"
          >
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto px-4 py-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="w-full pl-12 pr-4 py-3 bg-cream-100 border border-cream-300 rounded-lg focus:outline-none focus:border-amber-700 font-body text-charcoal-800 placeholder:text-charcoal-400"
                  autoFocus
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream-50 border-t border-cream-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block font-body text-sm uppercase tracking-widest py-2 transition-colors ${
                    location.pathname === link.path
                      ? "text-amber-800"
                      : "text-charcoal-700 hover:text-amber-800"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-cream-200">
                <Link
                  to="/size-guide"
                  className="block text-sm text-charcoal-500 hover:text-amber-800 py-1"
                >
                  Size Guide
                </Link>
                <Link
                  to="/privacy-policy"
                  className="block text-sm text-charcoal-500 hover:text-amber-800 py-1"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
