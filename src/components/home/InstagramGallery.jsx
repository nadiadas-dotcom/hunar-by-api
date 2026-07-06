import { motion } from "framer-motion"
import { Camera } from "lucide-react"
import { instagramPosts } from "../../data/products"
import SectionHeader from "../ui/SectionHeader"

export default function InstagramGallery() {
  return (
    <section className="py-20 bg-cream-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Follow Us on Instagram"
          subtitle="Tag @hunarbyapi for a chance to be featured."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-charcoal-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Camera size={32} className="text-cream-50" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
