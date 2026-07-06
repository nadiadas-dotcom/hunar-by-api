import { products } from "../../data/products"
import ProductCard from "../shop/ProductCard"
import SectionHeader from "../ui/SectionHeader"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function FeaturedCollection() {
  const featured = products.filter((p) => p.isBestSeller).slice(0, 4)

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Collection"
          subtitle="Our most beloved pieces, handpicked for the woman who values grace and quality."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-amber-800 font-medium hover:text-amber-900 transition-colors group"
          >
            View All Collection
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
