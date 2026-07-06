import { motion } from "framer-motion"

const sizeData = [
  { size: "XS", bust: "30-32", waist: "24-26", hips: "34-36" },
  { size: "S", bust: "33-35", waist: "27-29", hips: "37-39" },
  { size: "M", bust: "36-38", waist: "30-32", hips: "40-42" },
  { size: "L", bust: "39-41", waist: "33-35", hips: "43-45" },
  { size: "XL", bust: "42-44", waist: "36-38", hips: "46-48" },
  { size: "2XL", bust: "45-47", waist: "39-41", hips: "49-51" },
]

const bottomSizeData = [
  { size: "XS", waist: "24-26", hips: "34-36", length: "36" },
  { size: "S", waist: "27-29", hips: "37-39", length: "37" },
  { size: "M", waist: "30-32", hips: "40-42", length: "38" },
  { size: "L", waist: "33-35", hips: "43-45", length: "39" },
  { size: "XL", waist: "36-38", hips: "46-48", length: "40" },
  { size: "2XL", waist: "39-41", hips: "49-51", length: "40" },
]

export default function SizeGuide() {
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
              Find Your Fit
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal-900 font-medium mb-6">
              Size Guide
            </h1>
            <p className="text-charcoal-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Our sizes are based on standard Pakistani measurements. Please refer to the guide below to find your
              perfect fit.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-900 font-medium mb-6">
              Tops &amp; Kurtas
            </h2>
            <p className="text-charcoal-500 mb-6">
              Measure around the fullest part of your bust, keeping the tape measure horizontal.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-900 text-cream-50">
                    <th className="text-left px-6 py-3 font-display">Size</th>
                    <th className="text-left px-6 py-3 font-display">Bust (inches)</th>
                    <th className="text-left px-6 py-3 font-display">Waist (inches)</th>
                    <th className="text-left px-6 py-3 font-display">Hips (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeData.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? "bg-cream-100" : "bg-cream-50"}>
                      <td className="px-6 py-3 font-medium text-charcoal-900">{row.size}</td>
                      <td className="px-6 py-3 text-charcoal-600">{row.bust}</td>
                      <td className="px-6 py-3 text-charcoal-600">{row.waist}</td>
                      <td className="px-6 py-3 text-charcoal-600">{row.hips}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <h2 className="font-display text-2xl md:text-3xl text-charcoal-900 font-medium mb-6">
              Bottom Wear
            </h2>
            <p className="text-charcoal-500 mb-6">
              Measure around your natural waistline and the fullest part of your hips.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-amber-900 text-cream-50">
                    <th className="text-left px-6 py-3 font-display">Size</th>
                    <th className="text-left px-6 py-3 font-display">Waist (inches)</th>
                    <th className="text-left px-6 py-3 font-display">Hips (inches)</th>
                    <th className="text-left px-6 py-3 font-display">Length (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  {bottomSizeData.map((row, i) => (
                    <tr key={row.size} className={i % 2 === 0 ? "bg-cream-100" : "bg-cream-50"}>
                      <td className="px-6 py-3 font-medium text-charcoal-900">{row.size}</td>
                      <td className="px-6 py-3 text-charcoal-600">{row.waist}</td>
                      <td className="px-6 py-3 text-charcoal-600">{row.hips}</td>
                      <td className="px-6 py-3 text-charcoal-600">{row.length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-cream-100 rounded-xl border border-cream-200"
          >
            <h3 className="font-display text-xl text-charcoal-900 mb-4">Measurement Tips</h3>
            <ul className="space-y-3">
              {[
                "Use a soft measuring tape for best results.",
                "Measure yourself while wearing lightweight clothing.",
                "Bust: Measure around the fullest part of your bust, keeping tape parallel to the ground.",
                "Waist: Measure around the narrowest part of your natural waist.",
                "Hips: Measure around the fullest part of your hips and seat.",
                "If you are between sizes, we recommend sizing up for a comfortable fit.",
                "Unstitched suits are cut generously and can be tailored to your exact measurements.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-charcoal-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2.5 shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
