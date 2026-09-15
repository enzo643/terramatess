export type Category =
  | "Imperiales"
  | "Torpedos"
  | "Calabaza"
  | "Madera"
  | "Alpaca"
  | "Bombillas"
  | "Yerbas"
  | "Termos"
  | "Accesorios"
  | "Combos";

export type Badge = "Nuevo" | "Premium" | "Más vendido" | "Destacado" | "Últimas unidades";

export interface Product {
  id: number;
  slug: string;
  name: string;
  category: Category;
  price: number;
  oldPrice?: number | null;
  description: string;
  features: string[];
  /**
   * Rutas de imagen dentro de /public/images/products/.
   * Si el array está vacío, la UI muestra un placeholder de marca
   * automáticamente — no hace falta tocar ningún componente.
   */
  images: string[];
  stock: number;
  featured: boolean;
  badge?: Badge | null;
}

export interface CartItem {
  productId: number;
  quantity: number;
}
