import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-maroon-50 via-white to-maroon-50">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-maroon-300 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-maroon-200 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-48 h-48 border border-maroon-300 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block font-elegant text-maroon-500 text-lg md:text-xl italic tracking-wider mb-4"
            >
              Handstitched Since 2000
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal-900 leading-tight font-medium"
            >
              Stitched with Love,
              <span className="block text-maroon-600">Worn with Pride</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-6 text-charcoal-500 text-lg md:text-xl leading-relaxed max-w-lg font-body"
            >
              Discover handcrafted trousers, shalwars, and palazzos — each piece personally stitched by founder Nadia
              Alavi. Based in Wah Cantt, delivered worldwide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 bg-maroon-600 text-white px-8 py-4 rounded font-medium hover:bg-maroon-700 transition-all duration-300"
              >
                Explore Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border-2 border-maroon-600 text-maroon-600 px-8 py-4 rounded font-medium hover:bg-maroon-50 transition-all duration-300"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/rahima-farshi.jpeg"
                alt="Rahima Farshi Shalwar — Handcrafted by Nadia Alavi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-maroon-100">
              <p className="font-display text-2xl text-maroon-600 font-semibold">500+</p>
              <p className="text-charcoal-500 text-sm">Happy Customers</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-maroon-600 text-white p-4 rounded-xl shadow-lg">
              <p className="font-display text-lg font-medium">Since</p>
              <p className="text-sm text-maroon-200">2000</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
