import { motion } from "framer-motion"
import { Shield, Truck, RotateCcw, Sparkles } from "lucide-react"

const reasons = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Every piece is crafted with the finest fabrics and meticulous attention to detail.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Enjoy complimentary shipping on all orders across Pakistan.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days of delivery. Your satisfaction matters.",
  },
  {
    icon: Shield,
    title: "Secure Shopping",
    description: "Shop with confidence. Your privacy and security are our top priorities.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-amber-900 to-amber-950 text-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-elegant text-amber-300 text-lg italic tracking-wider mb-2">
            Hunar By Api
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-cream-50 font-medium">
            Why Choose Us
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="block w-12 h-0.5 bg-amber-400" />
            <span className="block w-3 h-0.5 bg-amber-400" />
            <span className="block w-12 h-0.5 bg-amber-400" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-800/50 border border-amber-600/30 mb-5 group-hover:bg-amber-700/50 transition-colors duration-300">
                  <Icon size={28} className="text-amber-300" />
                </div>
                <h3 className="font-display text-xl text-cream-50 mb-2">{reason.title}</h3>
                <p className="text-cream-300 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
