import { buildWhatsAppLink } from "@/lib/config";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "solid" | "outline" | "text";
  className?: string;
}

export function WhatsAppButton({
  message,
  label = "Escribinos por WhatsApp",
  variant = "outline",
  className = "",
}: WhatsAppButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-5 py-3 text-sm font-medium transition-colors";

  const variants = {
    solid: "bg-[#3B2415] text-hueso hover:bg-espresso-900",
    outline: "border border-cuero-700 text-cuero-800 hover:bg-cuero-700 hover:text-hueso",
    text: "text-cuero-700 underline underline-offset-4 hover:text-cuero-800",
  };

  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {label}
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2C6.486 2 2.01 6.476 2.01 11.994c0 2.113.573 4.06 1.686 5.733L2 22l4.396-1.653a9.94 9.94 0 0 0 5.608 1.712h.004c5.518 0 9.994-4.476 9.994-9.995C21.998 6.476 17.522 2 12.004 2zm0 18.235h-.003a8.226 8.226 0 0 1-4.938-1.653l-.354-.234-2.6.977.978-2.53-.256-.356a8.256 8.256 0 0 1-1.55-4.836c0-4.55 3.702-8.253 8.253-8.253 4.543 0 8.245 3.702 8.245 8.253 0 4.55-3.702 8.253-8.245 8.253z" />
    </svg>
  );
}
