import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export function FeaturedProducts() {
  const products = getFeaturedProducts().slice(0, 8);

  return (
    <section className="bg-piedra/40 py-14 sm:py-20">
      <div className="container-content">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl">Los más elegidos</h2>
            <p className="mt-1 text-sm text-cuero-600">
              Seleccionados por vos, cebados por nosotros.
            </p>
          </div>
          <Link href="/tienda" className="hidden text-sm text-cuero-700 hover:underline sm:inline">
            Ver todo
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/tienda"
            className="inline-flex border border-espresso px-6 py-3 text-sm font-medium hover:bg-espresso hover:text-hueso"
          >
            Ver todo el catálogo
          </Link>
        </div>
      </div>
    </section>
  );
}
