import ProductCard from "./ProductCard"

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-charcoal-500 text-lg">No products found.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
