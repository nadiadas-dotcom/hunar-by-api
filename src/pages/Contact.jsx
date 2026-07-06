import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send, Check } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  return (
    <div className="pt-20">
      <div className="bg-gradient-to-r from-amber-900/10 to-cream-100 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block font-elegant text-amber-700 text-lg italic tracking-wider mb-3">
              Get in Touch
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-medium mb-6">
              Contact Us
            </h1>
            <p className="text-charcoal-500 text-lg max-w-2xl mx-auto leading-relaxed">
              We&rsquo;d love to hear from you. Reach out with questions, orders, or just to say hello.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl text-charcoal-900 font-medium mb-8">
                Send Us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center"
                >
                  <Check size={48} className="text-emerald-500 mx-auto mb-4" />
                  <h3 className="font-display text-xl text-emerald-800 mb-2">Message Sent!</h3>
                  <p className="text-emerald-600">Thank you for reaching out. We will get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-charcoal-700 text-sm font-medium mb-2">Full Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-lg focus:outline-none focus:border-amber-700 font-body"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-charcoal-700 text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-lg focus:outline-none focus:border-amber-700 font-body"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-charcoal-700 text-sm font-medium mb-2">Phone (optional)</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-lg focus:outline-none focus:border-amber-700 font-body"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal-700 text-sm font-medium mb-2">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-cream-100 border border-cream-300 rounded-lg focus:outline-none focus:border-amber-700 font-body resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 bg-amber-900 text-cream-50 px-8 py-3.5 rounded-lg font-medium hover:bg-amber-800 transition-all duration-300"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl text-charcoal-900 font-medium mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Visit Us", content: "Wah Cantt, Pakistan", sub: "Shop by appointment" },
                  { icon: Phone, title: "Call Us", content: "0333-3395487", sub: "Mon-Sat, 10AM - 7PM" },
                  { icon: Mail, title: "Email Us", content: "agharida17@gmail.com", sub: "We reply within 24 hours" },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-amber-700" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg text-charcoal-900">{item.title}</h3>
                        <p className="text-charcoal-700">{item.content}</p>
                        <p className="text-charcoal-400 text-sm">{item.sub}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-6 bg-cream-100 rounded-xl border border-cream-200">
                <h3 className="font-display text-lg text-charcoal-900 mb-3">Order on WhatsApp</h3>
                <p className="text-charcoal-500 text-sm mb-4">
                  Prefer to order directly? Reach out to us on WhatsApp for personalized assistance.
                </p>
                <a
                  href="https://wa.me/923333395487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-cream-50 px-6 py-3 rounded-lg font-medium transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp: 0333-3395487
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
