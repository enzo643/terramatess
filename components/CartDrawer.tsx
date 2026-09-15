"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "@/components/ProductImage";
import { formatPrice } from "@/lib/format";

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, subtotal } = useCart();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        aria-label="Cerrar carrito"
        onClick={closeDrawer}
        className="absolute inset-0 bg-espresso/40"
      />
      <div className="relative flex h-full w-full max-w-md flex-col bg-hueso shadow-xl">
        <div className="flex items-center justify-between border-b border-piedra px-5 py-4">
          <h2 className="font-display text-lg">Tu carrito</h2>
          <button aria-label="Cerrar" onClick={closeDrawer} className="p-1 text-espresso">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
            <p className="text-espresso/70">Todavía no agregaste productos.</p>
            <Link
              href="/tienda"
              onClick={closeDrawer}
              className="border border-espresso px-5 py-2.5 text-sm font-medium hover:bg-espresso hover:text-hueso"
            >
              Ir a la tienda
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="flex flex-col gap-4">
                {items.map((line) => (
                  <li key={line.productId} className="flex gap-3">
                    <Link
                      href={`/producto/${line.product.slug}`}
                      onClick={closeDrawer}
                      className="h-20 w-16 shrink-0 overflow-hidden"
                    >
                      <ProductImage
                        src={line.product.images[0]}
                        alt={line.product.name}
                        className="h-full w-full"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/producto/${line.product.slug}`}
                          onClick={closeDrawer}
                          className="text-sm font-medium leading-snug text-espresso"
                        >
                          {line.product.name}
                        </Link>
                        <button
                          aria-label="Quitar producto"
                          onClick={() => removeItem(line.productId)}
                          className="shrink-0 text-cuero-400 hover:text-cuero-700"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
                            <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
                          </svg>
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-cuero-600">{formatPrice(line.product.price)}</p>

                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center border border-piedra">
                          <button
                            aria-label="Restar"
                            onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center text-espresso"
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-sm">{line.quantity}</span>
                          <button
                            aria-label="Sumar"
                            onClick={() =>
                              updateQuantity(
                                line.productId,
                                Math.min(line.quantity + 1, line.product.stock)
                              )
                            }
                            className="flex h-8 w-8 items-center justify-center text-espresso"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-piedra px-5 py-4">
              <div className="flex items-center justify-between text-sm text-cuero-600">
                <span>Subtotal</span>
                <span className="font-medium text-espresso">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-xs text-cuero-500">
                Envío y total final se calculan en el carrito.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/carrito"
                  onClick={closeDrawer}
                  className="w-full border border-espresso py-3 text-center text-sm font-medium text-espresso hover:bg-espresso hover:text-hueso"
                >
                  Ver carrito
                </Link>
                <Link
                  href="/checkout"
                  onClick={closeDrawer}
                  className="w-full bg-espresso py-3 text-center text-sm font-medium text-hueso hover:bg-espresso-900"
                >
                  Finalizar compra
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
