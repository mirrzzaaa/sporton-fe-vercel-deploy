
import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductSection from "./components/home/product";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

export default async function Home() {

  const [categories, product] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ]);


  return (
    <main style={{ paddingTop: "80px" }}>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductSection products={product} />
    </main>
  );
}
