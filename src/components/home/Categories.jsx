import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { categories } from "../../data/products"
import SectionHeader from "../ui/SectionHeader"

export default function Categories() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Shop by Category"
          subtitle="Find your perfect piece from our curated collections."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/shop?category=${category.id}`}
                className="group block relative aspect-square rounded-xl overflow-hidden"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg text-cream-50 font-medium">{category.name}</h3>
                  <p className="text-cream-300 text-sm">Shop Now</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
