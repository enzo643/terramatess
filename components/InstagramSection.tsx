import { siteConfig } from "@/lib/config";

const gallerySlots = [
  "/images/products/mate-imperial-liso.jpeg",
  "/images/products/mate-torpedo-premium-base.jpeg",
  "/images/products/mate-criollo.jpeg",
  "/images/products/termo-1l-media-manija.jpeg",
  "/images/products/mate-imperial-algarrobo.jpeg",
  "/images/products/bombilla-pico-loro-inox.jpeg",
];

export function InstagramSection() {
  return (
    <section className="container-content py-14 sm:py-20">
      <div className="mb-8 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl">Seguinos en @terramates</h2>
          <p className="mt-1 text-sm text-cuero-600">
            Mates en uso, novedades y sorteos, todos los días.
          </p>
        </div>
        <a
          href={siteConfig.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-cuero-700 hover:underline"
        >
          Ir a Instagram
        </a>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {gallerySlots.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={src}
            alt="Producto terramates en Instagram"
            className="aspect-square w-full bg-piedra object-cover"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
