import { products } from "../../data/products"
import ProductCard from "../shop/ProductCard"
import SectionHeader from "../ui/SectionHeader"

export default function RelatedProducts({ currentId, category }) {
  const related = products.filter((p) => p.category === category && p.id !== currentId).slice(0, 4)

  if (related.length === 0) return null

  return (
    <section className="py-16">
      <SectionHeader title="You May Also Like" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {related.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
