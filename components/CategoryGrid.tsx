import Link from "next/link";
import { categories } from "@/lib/products";

const featuredSlugs = ["Imperiales", "Torpedos", "Calabaza", "Bombillas", "Termos", "Combos"];

export function CategoryGrid() {
  const shown = categories.filter((c) => featuredSlugs.includes(c.name));

  return (
    <section id="categorias" className="container-content py-14 sm:py-20">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="font-display text-2xl sm:text-3xl">Elegí por categoría</h2>
        <Link href="/tienda" className="hidden text-sm text-cuero-700 hover:underline sm:inline">
          Ver todo
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {shown.map((cat) => (
          <Link
            key={cat.name}
            href={`/tienda?categoria=${encodeURIComponent(cat.name)}`}
            className="group flex flex-col justify-between border border-piedra bg-hueso p-4 transition-colors hover:border-cuero-500"
          >
            <span className="h-8 w-8 text-cuero-600">
              <CategoryGlyph name={cat.name} />
            </span>
            <div className="mt-6">
              <p className="font-display text-lg text-espresso">{cat.label}</p>
              <p className="mt-0.5 text-xs text-cuero-500">{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CategoryGlyph({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6 } as const;
  switch (name) {
    case "Bombillas":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M6 4l3 3M8 6l10 10a2 2 0 0 1 0 3v0a2 2 0 0 1-3 0L5 9" strokeLinecap="round" />
        </svg>
      );
    case "Termos":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="7" y="6" width="10" height="15" rx="2" />
          <path d="M9 6V4h6v2" />
        </svg>
      );
    case "Combos":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="4" y="8" width="16" height="12" rx="1.5" />
          <path d="M4 12h16M12 8v12" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v2H8V8z" strokeLinejoin="round" />
          <path d="M6 10h12l-1 11a4.5 4.5 0 0 1-4.5 4h-1A4.5 4.5 0 0 1 7 21L6 10z" strokeLinejoin="round" />
        </svg>
      );
  }
}
