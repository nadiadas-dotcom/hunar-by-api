import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Check } from "lucide-react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-elegant text-amber-300 text-lg italic tracking-wider mb-2">
            Stay Connected
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-cream-50 font-medium mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-cream-300 mb-8 max-w-lg mx-auto">
            Be the first to know about new arrivals, exclusive offers, and styling inspiration.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 text-emerald-300 bg-emerald-900/30 py-4 px-6 rounded-lg max-w-md mx-auto"
            >
              <Check size={20} />
              <span>Thank you for subscribing!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3.5 bg-cream-50/10 border border-cream-300/30 rounded-lg text-cream-50 placeholder:text-cream-400 focus:outline-none focus:border-amber-400 font-body"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-cream-50 px-6 py-3.5 rounded-lg font-medium transition-all duration-300"
              >
                Subscribe
                <Send size={18} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
