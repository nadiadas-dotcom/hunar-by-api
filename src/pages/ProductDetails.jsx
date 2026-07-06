import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { products } from "../data/products"
import ProductImages from "../components/product/ProductImages"
import ProductInfo from "../components/product/ProductInfo"
import RelatedProducts from "../components/product/RelatedProducts"

export default function ProductDetails() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl text-charcoal-900 mb-4">Product Not Found</h1>
          <p className="text-charcoal-500 mb-6">The product you are looking for does not exist.</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-amber-900 text-cream-50 px-6 py-3 rounded-lg hover:bg-amber-800 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1 text-charcoal-500 hover:text-amber-800 transition-colors mb-8"
        >
          <ChevronLeft size={18} />
          Back to Shop
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-8 md:gap-12"
        >
          <ProductImages images={product.images} name={product.name} />
          <ProductInfo product={product} />
        </motion.div>

        <RelatedProducts currentId={product.id} category={product.category} />
      </div>
    </div>
  )
}
