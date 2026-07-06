import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft, Package, Truck } from "lucide-react"
import { useCart } from "../context/CartContext"
import { WHATSAPP_NUMBER, OWNER_EMAIL, DELIVERY_CHARGE } from "../data/constants"

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, sendOrderNotifications, cartTotal, deliveryCharge, orderTotal, isFreeDelivery, itemsUntilFreeDelivery } = useCart()
  const [showForm, setShowForm] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  })

  const handleCheckout = (e) => {
    e.preventDefault()
    sendOrderNotifications(customerInfo, cart, cartTotal)
    setOrderPlaced(true)
  }

  if (orderPlaced) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-4 max-w-lg"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-maroon-100 mb-6">
            <Package size={40} className="text-maroon-600" />
          </div>
          <h1 className="font-display text-3xl text-charcoal-900 mb-3">Order Placed! 🌸</h1>
          <p className="text-charcoal-500 mb-2 leading-relaxed">
            Thank you, <span className="font-medium text-charcoal-800">{customerInfo.name}</span>! Your order has been
            received.
          </p>
          <p className="text-charcoal-400 text-sm mb-6">
            We have sent your order details to the owner via <strong>WhatsApp</strong> and <strong>Email</strong>. You
            will be contacted shortly for confirmation and delivery.
          </p>
          <div className="bg-maroon-50 rounded-xl border border-maroon-200 p-4 mb-8 text-sm text-left space-y-1">
            <p><span className="font-medium text-charcoal-800">WhatsApp:</span> 0333-3395487</p>
            <p><span className="font-medium text-charcoal-800">Email:</span> {OWNER_EMAIL}</p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-maroon-600 text-white px-6 py-3 rounded-lg hover:bg-maroon-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    )
  }

  if (cart.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <ShoppingBag size={64} className="mx-auto text-cream-300 mb-6" />
          <h1 className="font-display text-3xl text-charcoal-900 mb-3">Your Cart is Empty</h1>
          <p className="text-charcoal-500 mb-8">Add some products to get started!</p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-maroon-600 text-white px-6 py-3 rounded-lg hover:bg-maroon-700 transition-colors"
          >
            <ArrowLeft size={20} />
            Browse Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-gradient-to-r from-maroon-50 via-white to-maroon-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="font-display text-3xl md:text-4xl text-charcoal-900 font-medium">Shopping Cart</h1>
            <p className="text-charcoal-500 mt-2">{cart.length} {cart.length === 1 ? "item" : "items"} in your bag</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="space-y-4 mb-8">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="flex items-center gap-4 bg-white p-4 rounded-xl border border-maroon-100"
              >
                <Link to={`/product/${item.id}`} className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-cream-200">
                  <img src={item.images?.[0]} alt={item.name} className="w-full h-full object-cover" />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link to={`/product/${item.id}`}>
                    <h3 className="font-display text-charcoal-900 font-medium truncate">{item.name}</h3>
                  </Link>
                  <p className="text-charcoal-400 text-sm">{item.fabric}</p>
                  <p className="font-display text-maroon-600 font-semibold mt-1">
                    Rs. {item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center border border-maroon-200 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 text-charcoal-600 hover:text-charcoal-900"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-3 text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 text-charcoal-600 hover:text-charcoal-900"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <p className="font-display text-charcoal-900 font-semibold min-w-[5rem] text-right">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 text-charcoal-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="bg-maroon-50 rounded-xl border border-maroon-200 p-6 mb-8 space-y-3">
          {isFreeDelivery ? (
            <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 rounded-lg px-4 py-2.5 text-emerald-800 text-sm font-medium">
              <Truck size={18} className="text-emerald-600 shrink-0" />
              Free delivery unlocked!
            </div>
          ) : itemsUntilFreeDelivery > 0 && itemsUntilFreeDelivery <= 2 ? (
            <div className="flex items-center gap-2 bg-amber-50 border border-amber-300 rounded-lg px-4 py-2.5 text-amber-800 text-sm font-medium">
              <Truck size={18} className="text-amber-600 shrink-0" />
              Add {itemsUntilFreeDelivery} more {itemsUntilFreeDelivery === 1 ? "item" : "items"} for free delivery
            </div>
          ) : null}
          <div className="flex items-center justify-between">
            <span className="text-charcoal-600">Subtotal</span>
            <span className="font-display text-maroon-600 font-semibold">
              Rs. {cartTotal.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-charcoal-600">Delivery Charges</span>
            <span className="font-display text-maroon-600 font-semibold">
              {isFreeDelivery ? (
                <span className="text-emerald-600">FREE</span>
              ) : (
                <>Rs. {deliveryCharge.toLocaleString()}</>
              )}
            </span>
          </div>
          <hr className="border-maroon-200" />
          <div className="flex items-center justify-between">
            <span className="text-charcoal-800 font-medium">Total</span>
            <span className="font-display text-xl text-maroon-600 font-bold">
              Rs. {orderTotal.toLocaleString()}
            </span>
          </div>
        </div>

        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="w-full bg-maroon-600 text-white py-4 rounded-xl font-medium hover:bg-maroon-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={20} />
            Proceed to Checkout
          </button>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={handleCheckout}
            className="bg-white rounded-xl border border-maroon-100 p-6 space-y-4"
          >
            <h2 className="font-display text-xl text-charcoal-900 mb-4">Customer Details</h2>
            <div>
              <label className="block text-charcoal-700 text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                required
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg focus:outline-none focus:border-maroon-600"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="block text-charcoal-700 text-sm font-medium mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg focus:outline-none focus:border-maroon-600"
                placeholder="03XX XXXXXXX"
              />
            </div>
            <div>
              <label className="block text-charcoal-700 text-sm font-medium mb-1">Delivery Address *</label>
              <textarea
                required
                rows={3}
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                className="w-full px-4 py-3 bg-cream-50 border border-cream-300 rounded-lg focus:outline-none focus:border-maroon-600 resize-none"
                placeholder="House #, Street, Area, City"
              />
            </div>

            <div>
              <h3 className="font-display text-lg text-charcoal-900 mb-3">Payment Method</h3>
              <label className="flex items-center gap-3 p-4 bg-maroon-50 border-2 border-maroon-600 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  checked
                  readOnly
                  className="accent-maroon-600 w-4 h-4"
                />
                <div>
                  <span className="font-medium text-charcoal-800">Cash on Delivery</span>
                  <p className="text-charcoal-400 text-sm">Pay when you receive your order</p>
                </div>
              </label>
            </div>

            <div className="bg-maroon-50 border border-maroon-200 rounded-lg p-4 text-sm text-charcoal-600">
              <p className="font-medium text-charcoal-800 mb-1">How it works:</p>
              <p>After placing your order, the details will be sent to the owner via <strong>WhatsApp</strong> and <strong>Email</strong>. The owner will contact you to confirm and arrange delivery. Payment will be collected upon delivery.</p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="flex-1 border border-charcoal-300 text-charcoal-700 py-3 rounded-lg hover:bg-cream-200 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-[2] bg-maroon-600 text-white py-3 rounded-lg font-medium hover:bg-maroon-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={18} />
                Place Order
              </button>
            </div>
          </motion.form>
        )}

        <div className="mt-6 text-center">
          <Link to="/shop" className="text-maroon-600 hover:text-maroon-700 text-sm inline-flex items-center gap-1">
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}
