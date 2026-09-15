"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ProductImage } from "@/components/ProductImage";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { formatPrice } from "@/lib/format";
import { siteConfig } from "@/lib/config";

export default function CarritoPage() {
  const { items, updateQuantity, removeItem, subtotal, shipping, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-content flex flex-col items-center gap-4 py-24 text-center">
        <h1 className="font-display text-2xl">Tu carrito está vacío</h1>
        <p className="text-cuero-600">Todavía no agregaste ningún mate. ¡Vamos a elegir uno!</p>
        <Link
          href="/tienda"
          className="mt-2 border border-espresso px-6 py-3 text-sm font-medium hover:bg-espresso hover:text-hueso"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  const missingForFreeShipping = siteConfig.shipping.freeShippingThreshold - subtotal;

  return (
    <div className="container-content py-10 sm:py-14">
      <h1 className="mb-8 font-display text-3xl sm:text-4xl">Tu carrito</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <ul className="flex flex-col gap-6 lg:col-span-2">
          {items.map((line) => (
            <li key={line.productId} className="flex gap-4 border-b border-piedra pb-6">
              <Link href={`/producto/${line.product.slug}`} className="h-28 w-24 shrink-0 sm:h-32 sm:w-28">
                <ProductImage src={line.product.images[0]} alt={line.product.name} className="h-full w-full" />
              </Link>

              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Link
                      href={`/producto/${line.product.slug}`}
                      className="font-display text-base text-espresso sm:text-lg"
                    >
                      {line.product.name}
                    </Link>
                    <p className="mt-0.5 text-xs uppercase tracking-wideish text-cuero-500">
                      {line.product.category}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(line.productId)}
                    className="shrink-0 text-xs text-cuero-500 underline hover:text-cuero-700"
                  >
                    Quitar
                  </button>
                </div>

                <div className="mt-auto flex items-end justify-between pt-4">
                  <div className="flex items-center border border-piedra">
                    <button
                      aria-label="Restar"
                      onClick={() => updateQuantity(line.productId, line.quantity - 1)}
                      className="flex h-9 w-9 items-center justify-center text-espresso"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">{line.quantity}</span>
                    <button
                      aria-label="Sumar"
                      onClick={() =>
                        updateQuantity(line.productId, Math.min(line.quantity + 1, line.product.stock))
                      }
                      className="flex h-9 w-9 items-center justify-center text-espresso"
                    >
                      +
                    </button>
                  </div>
                  <span className="font-medium text-espresso">
                    {formatPrice(line.product.price * line.quantity)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="h-fit border border-piedra p-6">
          <h2 className="font-display text-lg">Resumen</h2>

          <div className="mt-4 flex flex-col gap-2 text-sm">
            <div className="flex justify-between text-cuero-600">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-cuero-600">
              <span>Envío</span>
              <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
            </div>
            {missingForFreeShipping > 0 && (
              <p className="text-xs text-calabaza">
                Te faltan {formatPrice(missingForFreeShipping)} para envío gratis.
              </p>
            )}
          </div>

          <div className="mt-4 flex justify-between border-t border-piedra pt-4 font-medium text-espresso">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-5 block w-full bg-espresso py-3.5 text-center text-sm font-medium text-hueso hover:bg-espresso-900"
          >
            Finalizar compra
          </Link>
          <Link
            href="/tienda"
            className="mt-3 block w-full border border-espresso py-3.5 text-center text-sm font-medium text-espresso hover:bg-espresso hover:text-hueso"
          >
            Seguir comprando
          </Link>

          <div className="mt-5 border-t border-piedra pt-4">
            <WhatsAppButton
              message="Hola terramates! Tengo una consulta sobre mi carrito antes de comprar."
              label="Consultar antes de comprar"
              variant="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
