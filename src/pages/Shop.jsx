import { useState, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import { motion } from "framer-motion"
import { SlidersHorizontal, X } from "lucide-react"
import { products } from "../data/products"
import ProductGrid from "../components/shop/ProductGrid"
import FilterSidebar from "../components/shop/FilterSidebar"
import SectionHeader from "../components/ui/SectionHeader"

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "")
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const [sortBy, setSortBy] = useState("default")
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity })
  const [filterOpen, setFilterOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.categoryName.toLowerCase().includes(query) ||
          p.fabric.toLowerCase().includes(query)
      )
    }

    result = result.filter((p) => p.price >= priceRange.min && p.price <= priceRange.max)

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        result.sort((a, b) => b.price - a.price)
        break
      case "rating":
        result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        break
    }

    return result
  }, [selectedCategory, searchQuery, priceRange, sortBy])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (category) {
      setSearchParams({ category })
    } else {
      setSearchParams({})
    }
  }

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-amber-900/10 to-cream-100 py-12">
        <SectionHeader
          title="Shop Collection"
          subtitle="Explore our curated collection of premium Pakistani fashion."
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <FilterSidebar
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            priceRange={priceRange}
            onPriceChange={setPriceRange}
            isOpen={filterOpen}
            onClose={() => setFilterOpen(false)}
          />

          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 text-charcoal-600 border border-charcoal-300 px-4 py-2 rounded-lg hover:bg-cream-100 transition-colors"
                >
                  <SlidersHorizontal size={18} />
                  Filters
                </button>
                {searchQuery && (
                  <div className="flex items-center gap-2 bg-cream-200 px-3 py-2 rounded-lg text-sm">
                    <span>Search: &ldquo;{searchQuery}&rdquo;</span>
                    <button onClick={() => { setSearchQuery(""); setSearchParams({}) }}>
                      <X size={16} />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 sm:w-48 px-4 py-2 bg-cream-100 border border-cream-300 rounded-lg text-sm focus:outline-none focus:border-amber-700"
                />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-cream-50 border border-cream-300 rounded-lg text-sm focus:outline-none focus:border-amber-700"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            <motion.div
              key={selectedCategory + sortBy + priceRange.min}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-charcoal-400 text-sm mb-6">
                Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </p>
              <ProductGrid products={filteredProducts} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
