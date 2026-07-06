import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ShoppingBag, Star } from "lucide-react"
import { useCart } from "../../context/CartContext"
import { useToast } from "../../context/ToastContext"

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addToCart(product)
    showToast(`${product.name} added to cart`)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-cream-200 mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {product.originalPrice && (
            <div className="absolute top-3 left-3 bg-red-500 text-cream-50 text-xs font-medium px-2.5 py-1 rounded-full">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </div>
          )}
          {product.isNew && !product.originalPrice && (
            <div className="absolute top-3 left-3 bg-amber-700 text-cream-50 text-xs font-medium px-2.5 py-1 rounded-full">
              New
            </div>
          )}

          <button
            onClick={handleAddToCart}
            className="absolute bottom-3 right-3 bg-cream-50 text-charcoal-800 p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-700 hover:text-cream-50 shadow-lg"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>

          <div className="absolute top-3 right-3 flex items-center gap-1 bg-cream-50/90 px-2 py-1 rounded-full text-xs font-medium">
            <Star size={12} className="text-amber-500 fill-amber-500" />
            {product.rating}
          </div>
        </div>

        <div>
          <p className="text-charcoal-400 text-xs uppercase tracking-wider font-medium mb-1">
            {product.categoryName}
          </p>
          <h3 className="font-display text-charcoal-900 font-medium text-base md:text-lg mb-1">
            {product.name}
          </h3>
          <p className="text-charcoal-400 text-sm mb-2">{product.fabric}</p>
          <div className="flex items-center gap-2">
            <span className="font-display text-lg text-amber-900 font-semibold">
              Rs. {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-charcoal-400 text-sm line-through">
                Rs. {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
