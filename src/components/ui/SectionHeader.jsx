import { motion } from "framer-motion"

export default function SectionHeader({ title, subtitle, align = "center" }) {
  const alignClass = align === "center" ? "text-center" : "text-left"

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignClass}`}
    >
      <span className="inline-block font-elegant text-amber-700 text-lg italic tracking-wider mb-2">
        Hunar By Api
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-charcoal-900 font-medium">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-charcoal-500 max-w-2xl mx-auto font-body text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-4 flex items-center justify-center gap-2">
        <span className="block w-12 h-0.5 bg-amber-700" />
        <span className="block w-3 h-0.5 bg-amber-700" />
        <span className="block w-12 h-0.5 bg-amber-700" />
      </div>
    </motion.div>
  )
}
