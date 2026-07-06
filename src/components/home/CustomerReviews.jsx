import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { reviews } from "../../data/products"
import SectionHeader from "../ui/SectionHeader"

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Real words from real women who love Hunar By Api."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream-100/80 p-6 md:p-8 rounded-xl border border-cream-200 relative"
            >
              <Quote size={32} className="absolute top-4 right-4 text-cream-300" />
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < review.rating ? "text-amber-500 fill-amber-500" : "text-cream-300"}
                  />
                ))}
              </div>
              <p className="text-charcoal-600 text-sm leading-relaxed mb-6 italic">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="font-display text-charcoal-900 font-medium">{review.name}</p>
                <p className="text-charcoal-400 text-xs">{review.location}</p>
                <p className="text-amber-700 text-xs mt-1">Verified Purchase &middot; {review.product}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
