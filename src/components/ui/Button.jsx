import { motion } from "framer-motion"

const variants = {
  primary: "bg-amber-900 text-cream-50 hover:bg-amber-800 border-amber-900",
  secondary: "bg-transparent text-amber-900 border-amber-900 hover:bg-amber-50",
  outline: "bg-transparent text-charcoal-800 border-charcoal-300 hover:bg-charcoal-50",
  gold: "bg-amber-700 text-cream-50 hover:bg-amber-600 border-amber-700",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  onClick,
  disabled = false,
  type = "button",
}) {
  const baseClass = `inline-flex items-center justify-center gap-2 font-medium border transition-all duration-300 rounded ${sizes[size]} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
  }

  if (href) {
    return (
      <motion.a href={href} className={baseClass} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClass}
      {...motionProps}
    >
      {children}
    </motion.button>
  )
}
