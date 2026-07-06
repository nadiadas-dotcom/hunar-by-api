import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Heart, Camera, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-xl text-cream-50 font-semibold tracking-wide">
                Hunar
              </span>
              <span className="font-elegant text-lg text-amber-400 italic"> By Api</span>
            </Link>
            <p className="text-cream-300 text-sm leading-relaxed mb-6">
              Premium Pakistani boutique offering handcrafted lawn suits, chikankari shalwars, and luxury pret wear
              since 2024.
            </p>
            <div className="flex gap-3">
              {[Camera, Heart, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-cream-700 flex items-center justify-center text-cream-400 hover:bg-amber-700 hover:border-amber-700 hover:text-cream-50 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-display text-lg text-cream-50 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Shop", path: "/shop" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Size Guide", path: "/size-guide" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-cream-400 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-display text-lg text-cream-50 mb-4">Categories</h4>
            <ul className="space-y-3">
              {[
                "Bottom Wear",
                "Kurtas",
                "Unstitched",
                "Festive Wear",
                "Accessories",
              ].map((cat) => (
                <li key={cat}>
                  <Link
                    to={`/shop?category=${cat.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-cream-400 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-display text-lg text-cream-50 mb-4">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-cream-400 text-sm">Wah Cantt, Pakistan</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-cream-400 text-sm">0333-3395487</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-amber-400 mt-0.5 shrink-0" />
                <span className="text-cream-400 text-sm">agharida17@gmail.com</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream-500 text-sm">
            &copy; {currentYear} Hunar By Api. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-cream-500 text-sm">
            Made with <Heart size={14} className="text-red-400" /> in Pakistan
          </div>
        </div>
      </div>
    </footer>
  )
}
