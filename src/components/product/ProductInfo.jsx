import { useState } from "react"
import { motion } from "framer-motion"
import { ShoppingBag, Heart, Star, Minus, Plus, Check } from "lucide-react"
import { useCart } from "../../context/CartContext"
import { useToast } from "../../context/ToastContext"
import { WHATSAPP_NUMBER } from "../../data/constants"
import Button from "../ui/Button"

export default function ProductInfo({ product }) {
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const { addToCart } = useCart()
  const { showToast } = useToast()

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product)
    }
    setAddedToCart(true)
    showToast(`${product.name} added to cart`)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const whatsappMessage = encodeURIComponent(
    `Hi! I'm interested in "${product.name}" (Rs. ${product.price.toLocaleString()}) from Hunar By Api.`
  )

  return (
    <div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <p className="text-amber-700 text-sm uppercase tracking-wider font-medium mb-2">
          {product.categoryName}
        </p>
        <h1 className="font-display text-2xl md:text-3xl lg:text-4xl text-charcoal-900 font-medium mb-3">
          {product.name}
        </h1>

        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < Math.floor(product.rating) ? "text-amber-500 fill-amber-500" : "text-cream-300"}
              />
            ))}
          </div>
          <span className="text-charcoal-400 text-sm">({product.reviewCount} reviews)</span>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <span className="font-display text-3xl text-amber-900 font-semibold">
            Rs. {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-charcoal-400 text-lg line-through">
              Rs. {product.originalPrice.toLocaleString()}
            </span>
          )}
          {product.originalPrice && (
            <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-1 rounded-full">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </span>
          )}
        </div>

        <div className="mb-6">
          <span className="text-charcoal-500 text-sm">Fabric: </span>
          <span className="text-charcoal-800 font-medium">{product.fabric}</span>
        </div>

        <p className="text-charcoal-500 leading-relaxed mb-8">{product.description}</p>

        {product.details && (
          <div className="mb-8">
            <h3 className="font-display text-lg text-charcoal-900 mb-3">Product Details</h3>
            <ul className="space-y-2">
              {product.details.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-charcoal-500 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center border border-charcoal-300 rounded-lg">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="px-4 font-medium text-charcoal-900 min-w-[3ch] text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-3 text-charcoal-600 hover:text-charcoal-900 transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary" size="lg" onClick={handleAddToCart} disabled={addedToCart} className="flex-1">
            {addedToCart ? (
              <>
                <Check size={20} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={20} /> Add to Cart
              </>
            )}
          </Button>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-cream-50 px-8 py-4 rounded-lg font-medium transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>

          <button className="p-4 border border-charcoal-300 rounded-lg text-charcoal-500 hover:text-red-500 hover:border-red-300 transition-all duration-300">
            <Heart size={20} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-cream-200">
          <p className="text-charcoal-400 text-sm flex items-center gap-2">
            <Check size={16} className="text-emerald-500" />
            Free shipping across Pakistan
          </p>
          <p className="text-charcoal-400 text-sm flex items-center gap-2 mt-2">
            <Check size={16} className="text-emerald-500" />
            7-day easy returns
          </p>
        </div>
      </motion.div>
    </div>
  )
}
