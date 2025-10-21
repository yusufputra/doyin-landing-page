import Contact from "@/product/Home/Contact";
import Catalog from "@/product/products/Catalog";
import Hero from "@/product/products/Hero";
import Layout from "@/uikit/Container/Layout";

export default function ProductListScreen() {
  return (
    <Layout navbarColorScheme={"teal"}>
      <Hero />
      <Catalog />
      <Contact />
    </Layout>
  );
}
