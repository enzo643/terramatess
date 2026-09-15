import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { ValueProps } from "@/components/ValueProps";
import { BrandSection } from "@/components/BrandSection";
import { InstagramSection } from "@/components/InstagramSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <ValueProps />
      <BrandSection />
      <InstagramSection />
    </>
  );
}
