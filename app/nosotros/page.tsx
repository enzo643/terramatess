import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conocé la historia de terramates: mates artesanales con tradición argentina, elegidos y curados uno por uno.",
};

export default function NosotrosPage() {
  return (
    <div>
      <section className="container-content grid grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:grid-cols-2">
        <div>
          <span className="h-[2px] w-12 bg-calabaza" />
          <h1 className="mt-4 font-display text-3xl leading-tight sm:text-4xl">
            Empezamos por un mate de todos los días. Terminamos armando terramates.
          </h1>
          <div className="mt-5 flex flex-col gap-4 text-[15px] leading-relaxed text-espresso/85">
            <p>
              terramates nació de una idea simple: conseguir mates que valgan la pena tener,
              sin depender de lo primero que aparece en una búsqueda. Empezamos eligiendo
              piezas para nosotros y para amigos, y con el tiempo eso se convirtió en una
              tienda.
            </p>
            <p>
              Trabajamos con talabarteros, tornerías y talleres que curten cuero, tallan
              madera y trabajan la alpaca de la manera tradicional. Cada mate que vendemos
              pasó antes por nuestras manos: lo revisamos, lo curamos si hace falta y recién
              ahí lo subimos a la tienda.
            </p>
            <p>
              No buscamos ser la marca más grande. Buscamos ser la que elegís cuando el mate
              te importa de verdad.
            </p>
          </div>
          <div className="mt-6">
            <WhatsAppButton label="Escribinos" variant="outline" />
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/images/products/mate-torpedo-cincelado.jpeg"
            alt="Mate torpedo cincelado terramates"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-piedra/40 py-12 sm:py-16">
        <div className="container-content grid grid-cols-1 gap-8 sm:grid-cols-3">
          <Principle
            title="Selección, no producción en masa"
            description="Elegimos cada modelo con la misma exigencia con la que elegiríamos el nuestro."
          />
          <Principle
            title="Materiales nobles"
            description="Cuero curtido, madera maciza y alpaca — nada de plástico haciéndose pasar por otra cosa."
          />
          <Principle
            title="Trato directo"
            description="WhatsApp abierto antes, durante y después de la compra. Sin bots que no resuelven nada."
          />
        </div>
      </section>
    </div>
  );
}

function Principle({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="font-display text-lg text-espresso">{title}</h3>
      <p className="mt-2 text-sm text-cuero-600">{description}</p>
    </div>
  );
}
