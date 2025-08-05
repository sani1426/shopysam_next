import HeroCarousel from "@/components/main/HeroCarousel";
import ProductByCategory from "@/components/main/ProductByCategory";
import ShowCategory from "@/components/main/ShowCategory";


export default function Home() {
  
  return (
<>
<HeroCarousel />
    <ShowCategory />
    <ProductByCategory />
</>
  );
}
