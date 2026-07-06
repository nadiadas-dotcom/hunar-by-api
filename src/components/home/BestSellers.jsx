import { products } from "../../data/products"
import ProductCard from "../shop/ProductCard"
import SectionHeader from "../ui/SectionHeader"
import { motion } from "framer-motion"

export default function BestSellers() {
  const bestSellers = products.filter((p) => p.isBestSeller)

  return (
    <section className="py-20 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Best Sellers"
          subtitle="Customer favorites that define timeless elegance."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
