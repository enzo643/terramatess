"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  ReactNode,
} from "react";
import type { CartItem, Product } from "@/types/product";
import { getAllProducts } from "@/lib/products";
import { siteConfig } from "@/lib/config";
import { trackAddToCart } from "@/lib/analytics";

const STORAGE_KEY = "terramates_cart_v1";

interface CartLine extends CartItem {
  product: Product;
}

interface CartContextValue {
  items: CartLine[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Cargar carrito guardado al montar.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setCartItems(JSON.parse(raw));
    } catch {
      // localStorage no disponible o dato corrupto: arrancamos vacío.
    } finally {
      setHydrated(true);
    }
  }, []);

  // Persistir cada cambio.
  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems, hydrated]);

  const allProducts = useMemo(() => getAllProducts(), []);

  const items: CartLine[] = useMemo(() => {
    return cartItems
      .map((item) => {
        const product = allProducts.find((p) => p.id === item.productId);
        if (!product) return null;
        return { ...item, product };
      })
      .filter((line): line is CartLine => line !== null);
  }, [cartItems, allProducts]);

  const itemCount = items.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = items.reduce((sum, line) => sum + line.product.price * line.quantity, 0);
  const shipping =
    subtotal === 0 || subtotal >= siteConfig.shipping.freeShippingThreshold
      ? 0
      : siteConfig.shipping.flatRate;
  const total = subtotal + shipping;

  const addItem = useCallback((product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.productId === product.id);
      if (existing) {
        return prev.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        );
      }
      return [...prev, { productId: product.id, quantity: Math.min(quantity, product.stock) }];
    });
    trackAddToCart(product, quantity);
    setDrawerOpen(true);
  }, []);

  const removeItem = useCallback((productId: number) => {
    setCartItems((prev) => prev.filter((item) => item.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCartItems((prev) => {
      if (quantity <= 0) return prev.filter((item) => item.productId !== productId);
      return prev.map((item) => (item.productId === productId ? { ...item, quantity } : item));
    });
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const value: CartContextValue = {
    items,
    itemCount,
    subtotal,
    shipping,
    total,
    isDrawerOpen,
    openDrawer: () => setDrawerOpen(true),
    closeDrawer: () => setDrawerOpen(false),
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de un CartProvider");
  return ctx;
}
