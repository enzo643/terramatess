import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProducts, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { formatPrice } from "@/lib/format";

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const title = `${product.name} — ${formatPrice(product.price)}`;
  return {
    title,
    description: product.description,
    alternates: { canonical: `/producto/${product.slug}` },
    openGraph: {
      title,
      description: product.description,
      images: product.images.length > 0 ? product.images : undefined,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return <ProductDetailClient product={product} related={related} />;
}
