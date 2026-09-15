import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopClient } from "@/components/ShopClient";

export const metadata: Metadata = {
  title: "Tienda",
  description:
    "Explorá mates imperiales, torpedos, de calabaza, madera y alpaca, bombillas, yerbas, termos y accesorios de terramates.",
};

export default function TiendaPage() {
  return (
    <div className="container-content py-10 sm:py-14">
      <div className="mb-6">
        <h1 className="font-display text-3xl sm:text-4xl">Tienda</h1>
        <p className="mt-1 text-cuero-600">Todo el catálogo terramates en un solo lugar.</p>
      </div>

      <Suspense fallback={null}>
        <ShopClient />
      </Suspense>
    </div>
  );
}
