import { createContext, useContext, useReducer, useEffect } from "react"
import { WHATSAPP_NUMBER, OWNER_EMAIL, DELIVERY_CHARGE } from "../data/constants"

const CartContext = createContext()

const loadCartFromStorage = () => {
  try {
    const saved = localStorage.getItem("hunar-cart")
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.find((item) => item.id === action.payload.id)
      if (existing) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...state, { ...action.payload, quantity: 1 }]
    }
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.payload)
    case "UPDATE_QUANTITY":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, action.payload.quantity) }
          : item
      )
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}

const buildOrderMessage = (customerInfo, items, subtotal, deliveryCharge) => {
  const orderLines = items.map(
    (item) =>
      `${item.name} x ${item.quantity} - Rs. ${(item.price * item.quantity).toLocaleString()}`
  ).join("\n")

  const grandTotal = subtotal + deliveryCharge

  return (
    `New Order - Hunar By Api 🌸\n\n` +
    `Customer Name: ${customerInfo.name}\n` +
    `Phone: ${customerInfo.phone}\n` +
    `Address: ${customerInfo.address}\n\n` +
    `Order Details:\n${orderLines}\n\n` +
    `Subtotal: Rs. ${subtotal.toLocaleString()}\n` +
    `Delivery Charges: ${deliveryCharge === 0 ? "Free Delivery" : `Rs. ${deliveryCharge.toLocaleString()}`}\n` +
    `Total: Rs. ${grandTotal.toLocaleString()}\n\n` +
    `Payment: Cash on Delivery\n\n` +
    `Thank you for shopping with Hunar By Api!`
  )
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [], loadCartFromStorage)

  useEffect(() => {
    localStorage.setItem("hunar-cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  const updateQuantity = (id, quantity) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const FREE_DELIVERY_THRESHOLD = 3
  const isFreeDelivery = cartCount >= FREE_DELIVERY_THRESHOLD
  const deliveryCharge = isFreeDelivery ? 0 : DELIVERY_CHARGE
  const orderTotal = cartTotal + deliveryCharge
  const itemsUntilFreeDelivery = Math.max(0, FREE_DELIVERY_THRESHOLD - cartCount)

  const sendOrderNotifications = (customerInfo, items, subtotal) => {
    const dc = deliveryCharge
    const message = buildOrderMessage(customerInfo, items, subtotal, dc)

    const waMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`, "_blank")

    const emailSubject = encodeURIComponent(`New Order - Hunar By Api - ${customerInfo.name}`)
    const emailBody = encodeURIComponent(message)
    window.open(`mailto:${OWNER_EMAIL}?subject=${emailSubject}&body=${emailBody}`, "_blank")

    dispatch({ type: "CLEAR_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        sendOrderNotifications,
        cartCount,
        cartTotal,
        deliveryCharge,
        orderTotal,
        isFreeDelivery,
        itemsUntilFreeDelivery,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
