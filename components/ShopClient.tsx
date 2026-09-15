"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { getAllProducts, categories } from "@/lib/products";

type SortOption = "destacados" | "novedades" | "precio-asc" | "precio-desc";

export function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categoria") ?? "Todos";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(initialCategory);
  const [sort, setSort] = useState<SortOption>("destacados");

  const allProducts = useMemo(() => getAllProducts(), []);

  const filtered = useMemo(() => {
    let list = allProducts;

    if (category !== "Todos") {
      list = list.filter((p) => p.category === category);
    }

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
      );
    }

    const sorted = [...list];
    switch (sort) {
      case "precio-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "precio-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "novedades":
        sorted.sort((a, b) => (b.badge === "Nuevo" ? 1 : 0) - (a.badge === "Nuevo" ? 1 : 0));
        break;
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return sorted;
  }, [allProducts, category, search, sort]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar productos..."
            className="w-full border border-piedra bg-hueso px-4 py-2.5 pl-10 text-sm placeholder:text-cuero-400 focus:border-cuero-500 focus:outline-none"
          />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cuero-400"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
          </svg>
        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="w-full border border-piedra bg-hueso px-3 py-2.5 text-sm focus:border-cuero-500 focus:outline-none sm:w-auto"
        >
          <option value="destacados">Ordenar: Destacados</option>
          <option value="novedades">Ordenar: Novedades</option>
          <option value="precio-asc">Ordenar: Precio (menor a mayor)</option>
          <option value="precio-desc">Ordenar: Precio (mayor a menor)</option>
        </select>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        <FilterPill active={category === "Todos"} onClick={() => setCategory("Todos")}>
          Todos
        </FilterPill>
        {categories.map((cat) => (
          <FilterPill
            key={cat.name}
            active={category === cat.name}
            onClick={() => setCategory(cat.name)}
          >
            {cat.label}
          </FilterPill>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-cuero-500">
          No encontramos productos con esos filtros. Probá con otra búsqueda.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterPill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`border px-3.5 py-1.5 text-sm transition-colors ${
        active
          ? "border-espresso bg-espresso text-hueso"
          : "border-piedra text-espresso hover:border-cuero-500"
      }`}
    >
      {children}
    </button>
  );
}
