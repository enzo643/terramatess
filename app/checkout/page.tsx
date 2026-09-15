"use client";

import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/format";
import { trackBeginCheckout, trackPurchase } from "@/lib/analytics";
import { siteConfig } from "@/lib/config";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const provincias = [
  "Buenos Aires",
  "CABA",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
];

type PaymentMethod = "mercadopago" | "transferencia";

export default function CheckoutPage() {
  const { items, subtotal, shipping, total, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [payment, setPayment] = useState<PaymentMethod>("mercadopago");

  useEffect(() => {
    if (items.length > 0) trackBeginCheckout(total, items.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (items.length === 0 && !submitted) {
    return (
      <div className="container-content flex flex-col items-center gap-4 py-24 text-center">
        <h1 className="font-display text-2xl">No hay nada para pagar todavía</h1>
        <p className="text-cuero-600">Agregá productos al carrito para poder finalizar la compra.</p>
        <Link
          href="/tienda"
          className="mt-2 border border-espresso px-6 py-3 text-sm font-medium hover:bg-espresso hover:text-hueso"
        >
          Ir a la tienda
        </Link>
      </div>
    );
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = `TM-${Date.now().toString().slice(-6)}`;
    trackPurchase(total, id);
    setOrderId(id);
    setSubmitted(true);
    clearCart();
  }

  if (submitted) {
    return (
      <div className="container-content flex flex-col items-center gap-4 py-24 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cuero-700 text-hueso">
          ✓
        </span>
        <h1 className="font-display text-2xl">¡Gracias por tu compra!</h1>
        <p className="max-w-md text-cuero-600">
          Tu pedido <strong className="text-espresso">{orderId}</strong> quedó registrado. Este
          es un checkout simulado: para confirmar el pago real, te vamos a escribir por
          WhatsApp en los próximos minutos.
        </p>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/tienda"
            className="border border-espresso px-6 py-3 text-sm font-medium hover:bg-espresso hover:text-hueso"
          >
            Seguir comprando
          </Link>
          <WhatsAppButton
            message={`Hola terramates! Acabo de hacer el pedido ${orderId}, quería confirmar los datos.`}
            label="Confirmar por WhatsApp"
            variant="solid"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="container-content py-10 sm:py-14">
      <h1 className="mb-8 font-display text-3xl sm:text-4xl">Checkout</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:col-span-2">
          <fieldset className="flex flex-col gap-4">
            <legend className="mb-1 font-display text-lg">Datos de contacto</legend>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Nombre" name="nombre" required />
              <Field label="Apellido" name="apellido" required />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" required />
              <Field label="Teléfono" name="telefono" type="tel" required />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-4 border-t border-piedra pt-6">
            <legend className="mb-1 font-display text-lg">Dirección de envío</legend>
            <Field label="Dirección" name="direccion" required />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Field label="Ciudad" name="ciudad" required />
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-espresso">Provincia</span>
                <select
                  name="provincia"
                  required
                  defaultValue=""
                  className="border border-piedra bg-hueso px-3 py-2.5 focus:border-cuero-500 focus:outline-none"
                >
                  <option value="" disabled>
                    Elegir
                  </option>
                  {provincias.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </label>
              <Field label="Código postal" name="cp" required />
            </div>
          </fieldset>

          <fieldset className="flex flex-col gap-3 border-t border-piedra pt-6">
            <legend className="mb-1 font-display text-lg">Medio de pago</legend>
            <PaymentOption
              value="mercadopago"
              current={payment}
              onChange={setPayment}
              label="Mercado Pago"
              description="Tarjetas de crédito, débito y dinero en cuenta (próximamente)."
            />
            <PaymentOption
              value="transferencia"
              current={payment}
              onChange={setPayment}
              label="Transferencia bancaria"
              description="Transferís antes de que despachemos el pedido."
            />
            {payment === "transferencia" && (
              <div className="border border-piedra bg-piedra/30 p-4 text-sm">
                <p className="text-espresso">
                  <span className="font-medium">Titular:</span> {siteConfig.bankTransfer.holderName}
                </p>
                <p className="mt-1 text-espresso">
                  <span className="font-medium">CVU:</span> {siteConfig.bankTransfer.cvu}
                </p>
                <p className="mt-2 text-xs text-cuero-500">
                  Después de confirmar el pedido, mandanos el comprobante por WhatsApp para que
                  arranquemos con el envío.
                </p>
              </div>
            )}
          </fieldset>

          <button
            type="submit"
            className="mt-2 bg-espresso py-3.5 text-sm font-medium text-hueso hover:bg-espresso-900"
          >
            Confirmar pedido — {formatPrice(total)}
          </button>
        </form>

        <div className="h-fit border border-piedra p-6">
          <h2 className="font-display text-lg">Tu pedido</h2>
          <ul className="mt-4 flex flex-col gap-3">
            {items.map((line) => (
              <li key={line.productId} className="flex justify-between text-sm text-espresso/85">
                <span>
                  {line.product.name} <span className="text-cuero-500">× {line.quantity}</span>
                </span>
                <span>{formatPrice(line.product.price * line.quantity)}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2 border-t border-piedra pt-4 text-sm">
            <div className="flex justify-between text-cuero-600">
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-cuero-600">
              <span>Envío</span>
              <span>{shipping === 0 ? "Gratis" : formatPrice(shipping)}</span>
            </div>
            <div className="flex justify-between border-t border-piedra pt-2 font-medium text-espresso">
              <span>Total</span>
              <span>{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-espresso">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="border border-piedra bg-hueso px-3 py-2.5 focus:border-cuero-500 focus:outline-none"
      />
    </label>
  );
}

function PaymentOption({
  value,
  current,
  onChange,
  label,
  description,
}: {
  value: PaymentMethod;
  current: PaymentMethod;
  onChange: (v: PaymentMethod) => void;
  label: string;
  description: string;
}) {
  return (
    <label
      className={`flex cursor-pointer items-start gap-3 border p-4 ${
        current === value ? "border-espresso" : "border-piedra"
      }`}
    >
      <input
        type="radio"
        name="payment"
        checked={current === value}
        onChange={() => onChange(value)}
        className="mt-1"
      />
      <span>
        <span className="block text-sm font-medium text-espresso">{label}</span>
        <span className="block text-xs text-cuero-500">{description}</span>
      </span>
    </label>
  );
}
