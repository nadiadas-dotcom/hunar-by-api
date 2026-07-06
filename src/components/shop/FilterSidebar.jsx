import { motion } from "framer-motion"
import { X } from "lucide-react"
import { categories } from "../../data/products"

export default function FilterSidebar({ selectedCategory, onCategoryChange, priceRange, onPriceChange, isOpen, onClose }) {
  const sidebarContent = (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-lg text-charcoal-900 mb-4">Categories</h3>
        <div className="space-y-2">
          <button
            onClick={() => onCategoryChange("")}
            className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
              !selectedCategory
                ? "bg-amber-100 text-amber-900 font-medium"
                : "text-charcoal-600 hover:bg-cream-200"
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === cat.id
                  ? "bg-amber-100 text-amber-900 font-medium"
                  : "text-charcoal-600 hover:bg-cream-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-lg text-charcoal-900 mb-4">Price Range</h3>
        <div className="space-y-2">
          {[
            { label: "All Prices", min: 0, max: Infinity },
            { label: "Under Rs. 1,500", min: 0, max: 1500 },
            { label: "Rs. 1,500 - Rs. 3,000", min: 1500, max: 3000 },
            { label: "Rs. 3,000 - Rs. 5,000", min: 3000, max: 5000 },
            { label: "Above Rs. 5,000", min: 5000, max: Infinity },
          ].map((range) => (
            <button
              key={range.label}
              onClick={() => onPriceChange(range)}
              className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                priceRange.min === range.min && priceRange.max === range.max
                  ? "bg-amber-100 text-amber-900 font-medium"
                  : "text-charcoal-600 hover:bg-cream-200"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      <div className="hidden lg:block w-64 shrink-0">{sidebarContent}</div>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className="absolute top-0 left-0 bottom-0 w-80 bg-cream-50 p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl text-charcoal-900">Filters</h2>
              <button onClick={onClose} className="p-1 text-charcoal-500 hover:text-charcoal-900">
                <X size={24} />
              </button>
            </div>
            {sidebarContent}
          </motion.div>
        </div>
      )}
    </>
  )
}
