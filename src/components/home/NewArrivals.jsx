import { products } from "../../data/products"
import ProductCard from "../shop/ProductCard"
import SectionHeader from "../ui/SectionHeader"
import { motion } from "framer-motion"

export default function NewArrivals() {
  const newItems = products.filter((p) => p.isNew)

  return (
    <section className="py-20 bg-cream-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="New Arrivals"
          subtitle="Fresh off the design table — explore our latest drops."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {newItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
