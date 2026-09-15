/**
 * CAPA DE ANALYTICS
 * ------------------
 * Los SDKs de Google Analytics (gtag), Meta Pixel (fbq) y TikTok Pixel
 * (ttq) todavía no están instalados: para activarlos, agregá sus scripts
 * en app/layout.tsx (por ejemplo con next/script) y estas funciones van a
 * empezar a disparar los eventos automáticamente, sin tocar el resto del
 * código de la tienda.
 *
 * Eventos ya integrados en la UI: view_item, add_to_cart, begin_checkout
 * y purchase.
 */

import type { Product } from "@/types/product";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    ttq?: { track: (event: string, data?: Record<string, unknown>) => void };
  }
}

type AnalyticsEvent =
  | "view_item"
  | "add_to_cart"
  | "begin_checkout"
  | "purchase";

function track(event: AnalyticsEvent, payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, payload);
  window.fbq?.("track", mapToMetaEvent(event), payload);
  window.ttq?.track(mapToTikTokEvent(event), payload);
}

function mapToMetaEvent(event: AnalyticsEvent) {
  const map: Record<AnalyticsEvent, string> = {
    view_item: "ViewContent",
    add_to_cart: "AddToCart",
    begin_checkout: "InitiateCheckout",
    purchase: "Purchase",
  };
  return map[event];
}

function mapToTikTokEvent(event: AnalyticsEvent) {
  const map: Record<AnalyticsEvent, string> = {
    view_item: "ViewContent",
    add_to_cart: "AddToCart",
    begin_checkout: "InitiateCheckout",
    purchase: "CompletePayment",
  };
  return map[event];
}

export function trackViewItem(product: Product) {
  track("view_item", {
    currency: "ARS",
    value: product.price,
    items: [{ item_id: product.id, item_name: product.name, price: product.price }],
  });
}

export function trackAddToCart(product: Product, quantity: number) {
  track("add_to_cart", {
    currency: "ARS",
    value: product.price * quantity,
    items: [
      {
        item_id: product.id,
        item_name: product.name,
        price: product.price,
        quantity,
      },
    ],
  });
}

export function trackBeginCheckout(value: number, itemCount: number) {
  track("begin_checkout", { currency: "ARS", value, num_items: itemCount });
}

export function trackPurchase(value: number, orderId: string) {
  track("purchase", { currency: "ARS", value, transaction_id: orderId });
}
