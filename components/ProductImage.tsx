import Image from "next/image";

/**
 * Muestra la primera imagen real del producto si existe. Si el array
 * "images" está vacío (caso por defecto de los datos de ejemplo), dibuja
 * un placeholder con la silueta del mate y el nombre del producto,
 * claramente identificable como placeholder — nunca una foto falsa que
 * parezca real.
 */
export function ProductImage({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden bg-piedra ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-piedra text-cuero-600 ${className}`}
    >
      <svg
        viewBox="0 0 200 200"
        className="h-2/3 w-2/3 opacity-40"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
      >
        <path d="M75 60c0-14 11-25 25-25s25 11 25 25v10H75V60z" strokeLinejoin="round" />
        <path
          d="M60 70h80l-6 80c-1.5 20-16 34-34 34s-32.5-14-34-34l-6-80z"
          strokeLinejoin="round"
        />
        <path d="M125 90l30-20" strokeLinecap="round" />
        <circle cx="158" cy="66" r="6" />
      </svg>
      <span className="absolute bottom-2 left-2 right-2 truncate text-center text-[11px] font-medium tracking-wide text-cuero-700/70">
        Foto próximamente — {alt}
      </span>
    </div>
  );
}
