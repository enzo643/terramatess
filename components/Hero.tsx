import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-espresso text-hueso">
      <div className="container-content grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:py-28">
        <div className="order-2 flex flex-col items-start gap-5 lg:order-1">
          <span className="h-[2px] w-12 bg-calabaza" />
          <h1 className="font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            El mate que se elige,
            <br />
            no el que sobra.
          </h1>
          <p className="max-w-md text-base text-hueso/75 sm:text-lg">
            Mates de calabaza, madera y alpaca seleccionados uno por uno.
            Tradición argentina, hechos para acompañar todos los días.
          </p>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center bg-hueso px-7 py-3.5 text-sm font-medium text-espresso transition-colors hover:bg-cuero-100"
            >
              Ver productos
            </Link>
            <Link
              href="/tienda#categorias"
              className="inline-flex items-center justify-center border border-hueso/30 px-7 py-3.5 text-sm font-medium text-hueso transition-colors hover:border-hueso"
            >
              Explorar categorías
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-sm border border-hueso/15 bg-espresso-900 sm:max-w-md">
            <div className="flex h-full w-full items-center justify-center">
              <svg viewBox="0 0 220 220" className="h-2/3 w-2/3 text-hueso/30" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M85 65c0-15 12-27 27-27s27 12 27 27v11H85V65z" strokeLinejoin="round" />
                <path
                  d="M68 76h88l-6.5 88c-1.6 22-17.6 37.5-37.5 37.5S75.1 186 73.5 164L68 76z"
                  strokeLinejoin="round"
                />
                <path d="M137 98l33-22" strokeLinecap="round" />
                <circle cx="174" cy="72" r="6.5" />
              </svg>
            </div>
            <span className="absolute bottom-4 left-4 right-4 text-center text-xs tracking-wide text-hueso/40">
              Espacio reservado para fotografía de producto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
