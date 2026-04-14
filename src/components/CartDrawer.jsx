import { useCart } from "../context/CartContext";

function WatchImg({ src, alt }) {
  return (
    <img
      src={src} alt={alt}
      className="w-full h-full object-contain"
      onError={e => { e.target.style.display = "none"; }}
    />
  );
}

export default function CartDrawer() {
  const { cartItems, cartOpen, setCartOpen, updateQty, removeItem, clearCart, totalItems, totalPrice } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${cartOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)" }}
        onClick={() => setCartOpen(false)}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full z-50 flex flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out`}
        style={{
          width: "min(420px, 100vw)",
          transform: cartOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span className="font-black text-gray-900 tracking-wide text-base">My Cart</span>
            {totalItems > 0 && (
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{totalItems}</span>
            )}
          </div>
          <button
            onClick={() => setCartOpen(false)}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Empty state */}
        {cartItems.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center">
              <svg width="40" height="40" fill="none" stroke="#F47A20" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <div>
              <p className="font-black text-gray-800 text-lg">Your cart is empty</p>
              <p className="text-sm text-gray-400 mt-1">Add some watches to get started!</p>
            </div>
            <button
              onClick={() => setCartOpen(false)}
              className="mt-2 bg-orange-500 text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Free delivery progress */}
            <div className="px-5 py-3 bg-orange-50 border-b border-orange-100">
              {totalPrice >= 999 ? (
                <div className="flex items-center gap-2 text-xs text-green-600 font-semibold">
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  You've unlocked FREE delivery!
                </div>
              ) : (
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1.5">
                    <span>Add <span className="font-bold text-orange-500">₹{(999 - totalPrice).toLocaleString()}</span> more for free delivery</span>
                    <span className="font-semibold">₹999</span>
                  </div>
                  <div className="w-full h-1.5 bg-orange-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (totalPrice / 999) * 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4">
              {cartItems.map(item => (
                <div key={item.key} className="flex gap-3 p-3 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors bg-white group">
                  {/* Image */}
                  <div className="w-20 h-20 rounded-xl bg-gray-50 flex-shrink-0 overflow-hidden flex items-center justify-center p-1.5">
                    <WatchImg src={item.thumb} alt={item.shortName} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-gray-800 leading-snug line-clamp-2">{item.shortName}</p>
                    {item.color && (
                      <p className="text-xs text-gray-400 mt-0.5">Color: {item.color}</p>
                    )}

                    <div className="flex items-center justify-between mt-2">
                      {/* Price */}
                      <div>
                        <span className="text-sm font-black text-gray-900">₹{(item.price * item.qty).toLocaleString()}</span>
                        {item.discount && (
                          <span className="ml-1.5 text-xs text-orange-500 font-semibold">{item.discount}% off</span>
                        )}
                      </div>

                      {/* Qty controls */}
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden">
                        <button
                          onClick={() => item.qty === 1 ? removeItem(item.key) : updateQty(item.key, -1)}
                          className={`w-7 h-7 flex items-center justify-center text-sm font-bold transition-colors ${item.qty === 1 ? "hover:bg-red-50 hover:text-red-500" : "hover:bg-gray-100"}`}
                        >
                          {item.qty === 1 ? (
                            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                              <path d="M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2" />
                            </svg>
                          ) : "−"}
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-gray-700">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.key, 1)}
                          className="w-7 h-7 flex items-center justify-center text-sm font-bold hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.key)}
                    className="opacity-0 group-hover:opacity-100 self-start w-6 h-6 rounded-full hover:bg-red-50 flex items-center justify-center transition-all flex-shrink-0"
                  >
                    <svg width="12" height="12" fill="none" stroke="#ef4444" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-gray-100 px-5 py-4 bg-white">
              {/* Price breakdown */}
              <div className="flex flex-col gap-1.5 mb-4">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Subtotal ({totalItems} item{totalItems > 1 ? "s" : ""})</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Delivery</span>
                  <span className={totalPrice >= 999 ? "text-green-500 font-semibold" : ""}>
                    {totalPrice >= 999 ? "FREE" : "₹99"}
                  </span>
                </div>
                <div className="flex justify-between text-base font-black text-gray-900 pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>₹{(totalPrice + (totalPrice >= 999 ? 0 : 99)).toLocaleString()}</span>
                </div>
              </div>

              {/* CTA buttons */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black text-sm py-3.5 rounded-full transition-colors active:scale-95 mb-2">
                Proceed to Checkout →
              </button>
              <button
                onClick={() => setCartOpen(false)}
                className="w-full border border-gray-200 text-gray-600 font-semibold text-sm py-3 rounded-full hover:bg-gray-50 transition-colors"
              >
                Continue Shopping
              </button>

              {/* Clear cart */}
              {cartItems.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full mt-2 text-xs text-gray-400 hover:text-red-400 transition-colors py-1"
                >
                  Clear cart
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}