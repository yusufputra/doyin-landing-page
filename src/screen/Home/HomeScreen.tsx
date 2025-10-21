import About from "@/product/Home/About";
import Contact from "@/product/Home/Contact";
import Hero from "@/product/Home/Hero";
import Products from "@/product/Home/Products";
import Layout from "@/uikit/Container/Layout";
import { Text } from "@chakra-ui/react";

export default function HomeScreen() {
  return (
    <Layout>
      <Hero />
      <Products />
      <About />
      <Contact />
    </Layout>
  );
}
