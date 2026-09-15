import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-espresso text-hueso">
      <div className="container-content grid grid-cols-2 gap-8 py-12 sm:grid-cols-4 sm:py-16">
        <div className="col-span-2 flex flex-col gap-3 sm:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="terramates"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full"
            />
            <span className="font-display text-lg">terramates</span>
          </Link>
          <p className="text-sm text-hueso/60">{siteConfig.tagline}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-hueso/50">Navegación</h4>
          <Link href="/tienda" className="text-sm text-hueso/85 hover:text-hueso">
            Tienda
          </Link>
          <Link href="/nosotros" className="text-sm text-hueso/85 hover:text-hueso">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-sm text-hueso/85 hover:text-hueso">
            Contacto
          </Link>
          <Link href="/carrito" className="text-sm text-hueso/85 hover:text-hueso">
            Carrito
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-hueso/50">Contacto</h4>
          <a href={`mailto:${siteConfig.email}`} className="text-sm text-hueso/85 hover:text-hueso">
            {siteConfig.email}
          </a>
          <span className="text-sm text-hueso/85">{siteConfig.phoneDisplay}</span>
          <div className="mt-1 flex gap-3">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-hueso/80 hover:text-hueso"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-hueso/80 hover:text-hueso"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h4 className="text-sm font-medium text-hueso/50">Envíos y pagos</h4>
          <p className="text-sm text-hueso/85">Envíos a todo el país por correo o cadetería.</p>
          <p className="text-sm text-hueso/85">
            Tarjetas, transferencia y Mercado Pago (próximamente).
          </p>
        </div>
      </div>

      <div className="border-t border-hueso/10">
        <div className="container-content flex flex-col gap-2 py-5 text-xs text-hueso/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} terramates. Todos los derechos reservados.</span>
          <span>Hecho a mano, mate a mate.</span>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 3c.4 2.1 1.7 3.5 3.9 3.7v2.9c-1.4.1-2.7-.3-3.9-1.1v6.6c0 3.2-2.6 5.4-5.5 5.4-1.3 0-2.7-.5-3.6-1.4-2.2-2-2.2-5.6.1-7.6 1.3-1.2 3.3-1.7 5-1.1v3.1c-.4-.2-.9-.3-1.5-.2-1.1.2-1.9 1.2-1.9 2.3 0 1.4 1.1 2.4 2.4 2.4 1.6 0 2.7-1.3 2.7-3V3h2.3z" />
    </svg>
  );
}
