import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function BrandSection() {
  return (
    <section className="bg-espresso text-hueso">
      <div className="container-content grid grid-cols-1 items-center gap-0 sm:grid-cols-2">
        <div className="relative aspect-[4/5] w-full sm:aspect-auto sm:h-[520px]">
          <Image
            src="/images/products/mate-imperial-cincelado.jpeg"
            alt="Mate imperial cincelado terramates"
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 px-1 py-12 sm:px-10 sm:py-0 lg:px-16">
          <span className="h-[2px] w-12 bg-calabaza" />
          <h2 className="font-display text-3xl leading-tight sm:text-4xl">
            Cada mate cuenta una historia de manos que lo hicieron.
          </h2>
          <p className="text-hueso/70">
            No vendemos objetos en serie. Trabajamos con talabarteros y artesanos que curten,
            tallan y cincelan cada pieza como se viene haciendo hace generaciones. Elegir
            terramates es elegir esa historia para tu mesa de todos los días.
          </p>
          <WhatsAppButton
            variant="text"
            label="Contanos qué estás buscando"
            className="!text-hueso underline-offset-4"
          />
        </div>
      </div>
    </section>
  );
}
