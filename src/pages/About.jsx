import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Heart, Globe, Ruler } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Handcrafted with Love",
    description: "Every piece is personally hand-stitched by Nadia herself, ensuring unmatched quality and care in every seam.",
  },
  {
    icon: Ruler,
    title: "Perfect Fit Promise",
    description: "Specializing exclusively in bottoms — trousers, shalwars, and palazzos — tailored to celebrate every woman's silhouette.",
  },
  {
    icon: Globe,
    title: "Worldwide Delivery",
    description: "From Wah Cantt to the world, we deliver our craftsmanship to women everywhere, no matter the distance.",
  },
]

export default function About() {
  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-maroon-50 via-white to-maroon-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block font-elegant text-maroon-500 text-lg italic tracking-wider mb-3">
              Our Story
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-medium mb-6">
              About Hunar By Api
            </h1>
            <p className="text-charcoal-500 text-lg max-w-3xl mx-auto leading-relaxed">
              Where tradition meets contemporary elegance — a boutique born from a love for Pakistani craftsmanship.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-charcoal-900 font-medium mb-6">
                A Legacy of Elegance
              </h2>
              <div className="space-y-4 text-charcoal-500 leading-relaxed">
                <p>
                  In the year 2000, Nadia Alavi picked up her needle and thread with a quiet dream in her heart. From a
                  small room in <span className="font-medium text-maroon-600">Wah Cantt</span>, she began crafting
                  something that would grow far beyond those four walls. Hunar By Api was born — a name that speaks to
                  the skill and devotion woven into every piece. From the very beginning, Nadia focused on one thing
                  alone: creating the perfect bottoms for women. Trousers, shalwars, and palazzos became her canvas, and
                  her love for maroon and white aesthetics became her signature.
                </p>
                <p>
                  What makes Hunar By Api truly special is that every single garment is still stitched by Nadia&rsquo;s
                  own hands. There is no assembly line, no factory floor — just one woman, a sewing machine, and decades
                  of experience. She believes that a well-fitted shalwar or a flowing palazzo is more than just clothing;
                  it is confidence, grace, and comfort all at once. Each piece she creates carries her personal touch, a
                  promise of quality that machines simply cannot replicate.
                </p>
                <p>
                  Today, Hunar By Api reaches women far beyond the borders of Pakistan. With worldwide delivery from our
                  home in Wah Cantt, Nadia sends her handcrafted bottoms to every corner of the globe — from Canada to
                  London, from across Pakistan to far beyond. Yet no matter how far the packages travel, every stitch
                  still begins the same way: at her worktable in Wah Cantt, with the same hands, the same heart, and
                  the same dream that started it all over two decades ago.
                </p>
              </div>
              <Link
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 bg-maroon-600 text-white px-6 py-3 rounded-lg hover:bg-maroon-700 transition-all duration-300 group"
              >
                Explore Our Collection
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/rahima-farshi.jpeg"
                  alt="Hunar By Api handcrafted elegance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-maroon-600 text-white p-6 rounded-xl shadow-lg">
                <p className="font-display text-3xl font-bold">2000</p>
                <p className="text-maroon-200 text-sm">Founded by Nadia Alavi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-r from-maroon-50 via-white to-maroon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl text-charcoal-900 font-medium mb-4">
              What We Stand For
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="block w-12 h-0.5 bg-maroon-400" />
              <span className="block w-3 h-0.5 bg-maroon-400" />
              <span className="block w-12 h-0.5 bg-maroon-400" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl border border-maroon-100 text-center shadow-sm"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-maroon-100 mb-5">
                    <Icon size={28} className="text-maroon-600" />
                  </div>
                  <h3 className="font-display text-xl text-charcoal-900 mb-3">{value.title}</h3>
                  <p className="text-charcoal-500 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
