"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import { ProductImage } from "@/components/ProductImage";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { formatPrice, discountPercent } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import { whatsAppMessageForProduct } from "@/lib/config";
import { trackViewItem } from "@/lib/analytics";

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const { addItem } = useCart();
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const discount = discountPercent(product.price, product.oldPrice);
  const images = product.images.length > 0 ? product.images : [undefined];

  useEffect(() => {
    trackViewItem(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id]);

  return (
    <div className="container-content py-8 sm:py-12">
      <nav className="mb-6 text-xs text-cuero-500">
        <Link href="/" className="hover:text-cuero-700">
          Inicio
        </Link>
        <span className="mx-1.5">/</span>
        <Link href="/tienda" className="hover:text-cuero-700">
          Tienda
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-espresso">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Galería */}
        <div>
          <div className="aspect-square w-full overflow-hidden">
            <ProductImage
              src={images[activeImage]}
              alt={product.name}
              className="h-full w-full"
            />
          </div>
          {images.length > 1 && (
            <div className="mt-3 flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`h-16 w-16 overflow-hidden border ${
                    activeImage === i ? "border-espresso" : "border-piedra"
                  }`}
                >
                  <ProductImage src={img} alt={`${product.name} ${i + 1}`} className="h-full w-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-wideish text-cuero-500">{product.category}</p>
          <h1 className="mt-1 font-display text-2xl sm:text-3xl">{product.name}</h1>

          <div className="mt-3 flex items-baseline gap-3">
            <span className="text-2xl font-medium text-espresso">{formatPrice(product.price)}</span>
            {product.oldPrice && (
              <>
                <span className="text-cuero-400 line-through">{formatPrice(product.oldPrice)}</span>
                {discount && (
                  <span className="bg-calabaza px-2 py-0.5 text-xs font-medium text-hueso">
                    -{discount}%
                  </span>
                )}
              </>
            )}
          </div>

          <p className="mt-4 text-[15px] leading-relaxed text-espresso/85">{product.description}</p>

          {product.features.length > 0 && (
            <ul className="mt-4 flex flex-col gap-1.5 border-t border-piedra pt-4">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-espresso/80">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cuero-500" />
                  {f}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-4 text-sm">
            {product.stock > 0 ? (
              product.stock <= 5 ? (
                <span className="text-calabaza">Últimas {product.stock} unidades disponibles</span>
              ) : (
                <span className="text-cuero-600">En stock</span>
              )
            ) : (
              <span className="text-cuero-400">Sin stock por el momento</span>
            )}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <div className="flex items-center border border-piedra">
              <button
                aria-label="Restar cantidad"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-11 w-11 items-center justify-center text-lg text-espresso"
              >
                −
              </button>
              <span className="w-8 text-center">{quantity}</span>
              <button
                aria-label="Sumar cantidad"
                onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                className="flex h-11 w-11 items-center justify-center text-lg text-espresso"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addItem(product, quantity)}
              disabled={product.stock === 0}
              className="flex-1 bg-espresso py-3.5 text-sm font-medium text-hueso transition-colors hover:bg-espresso-900 disabled:cursor-not-allowed disabled:bg-cuero-300"
            >
              {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 border-t border-piedra pt-5 text-sm text-cuero-600 sm:grid-cols-2">
            <p>🚚 Envíos a todo el país.</p>
            <p>💳 Tarjetas, transferencia y Mercado Pago (próximamente).</p>
          </div>

          <div className="mt-6 border-t border-piedra pt-5">
            <p className="mb-2 text-sm font-medium text-espresso">¿Tenés alguna duda?</p>
            <WhatsAppButton
              message={whatsAppMessageForProduct(product.name)}
              label="Consultar por este producto"
              variant="outline"
            />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16 border-t border-piedra pt-10">
          <h2 className="mb-6 font-display text-2xl">También te puede interesar</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
