"use client";

import Link from "next/link";
import type { Product } from "@/types/product";
import { ProductImage } from "@/components/ProductImage";
import { formatPrice, discountPercent } from "@/lib/format";
import { useCart } from "@/context/CartContext";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const discount = discountPercent(product.price, product.oldPrice);
  const lowStock = product.stock > 0 && product.stock <= 3;

  return (
    <div className="group flex flex-col">
      <Link
        href={`/producto/${product.slug}`}
        className="relative block aspect-[4/5] w-full overflow-hidden"
      >
        <ProductImage
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {(product.badge || discount) && (
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {product.badge && (
              <span className="bg-espresso px-2 py-1 text-[11px] font-medium text-hueso">
                {product.badge}
              </span>
            )}
            {discount && (
              <span className="bg-calabaza px-2 py-1 text-[11px] font-medium text-hueso">
                -{discount}%
              </span>
            )}
          </div>
        )}
      </Link>

      <div className="mt-3 flex flex-1 flex-col">
        <p className="text-[11px] uppercase tracking-wideish text-cuero-500">
          {product.category}
        </p>
        <Link href={`/producto/${product.slug}`} className="mt-1">
          <h3 className="font-display text-base leading-snug text-espresso group-hover:text-cuero-700">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="font-medium text-espresso">{formatPrice(product.price)}</span>
          {product.oldPrice && (
            <span className="text-sm text-cuero-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {lowStock && (
          <p className="mt-1 text-xs text-calabaza">Últimas {product.stock} unidades</p>
        )}

        <button
          onClick={() => addItem(product, 1)}
          disabled={product.stock === 0}
          className="mt-3 w-full border border-espresso py-2.5 text-sm font-medium text-espresso transition-colors hover:bg-espresso hover:text-hueso disabled:cursor-not-allowed disabled:border-cuero-300 disabled:text-cuero-400 disabled:hover:bg-transparent"
        >
          {product.stock === 0 ? "Sin stock" : "Agregar al carrito"}
        </button>
      </div>
    </div>
  );
}
