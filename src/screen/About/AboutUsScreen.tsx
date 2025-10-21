import Features from "@/product/About/Features";
import Hero from "@/product/About/Hero";
import Strategy from "@/product/About/Strategy";
import About from "@/product/About/About";
import Contact from "@/product/Home/Contact";
import Layout from "@/uikit/Container/Layout";

export default function AboutUsScreen() {
  return (
    <Layout navbarColorScheme="teal">
      <Hero />
      <About />
      <Features />
      <Strategy />
      <Contact />
    </Layout>
  );
}
