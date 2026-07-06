import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductImages({ images, name }) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-4">
      <motion.div
        key={selectedIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200"
      >
        <img
          src={images[selectedIndex]}
          alt={`${name} - Image ${selectedIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="grid grid-cols-3 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              selectedIndex === index
                ? "border-amber-700 opacity-100"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`${name} thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
