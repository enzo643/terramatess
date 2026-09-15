import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribinos por WhatsApp, mail o redes. Te respondemos rápido.",
};

export default function ContactoPage() {
  return (
    <div className="container-content py-12 sm:py-16">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-display text-3xl sm:text-4xl">Hablemos</h1>
        <p className="mt-3 text-cuero-600">
          ¿Dudas sobre un producto, un envío o un pedido especial? Elegí el medio que más te
          quede cómodo.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
        <ContactCard
          title="WhatsApp"
          description="La vía más rápida para consultas y seguimiento de pedidos."
        >
          <WhatsAppButton variant="solid" label="Escribir ahora" className="w-full" />
        </ContactCard>

        <ContactCard title="Email" description="Para consultas más detalladas o mayoristas.">
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex w-full items-center justify-center border border-espresso py-3 text-sm font-medium text-espresso hover:bg-espresso hover:text-hueso"
          >
            {siteConfig.email}
          </a>
        </ContactCard>

        <ContactCard title="Redes" description="Novedades, sorteos y el detrás de escena.">
          <div className="flex w-full flex-col gap-2">
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center border border-espresso py-3 text-sm font-medium text-espresso hover:bg-espresso hover:text-hueso"
            >
              Instagram
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center border border-espresso py-3 text-sm font-medium text-espresso hover:bg-espresso hover:text-hueso"
            >
              TikTok
            </a>
          </div>
        </ContactCard>
      </div>
    </div>
  );
}

function ContactCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 border border-piedra p-6 text-center">
      <h2 className="font-display text-lg text-espresso">{title}</h2>
      <p className="text-sm text-cuero-600">{description}</p>
      {children}
    </div>
  );
}
