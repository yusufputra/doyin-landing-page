import ContactSection from "@/product/Contact/ContactSection";
import FAQSection from "@/product/Contact/Faq";
import Layout from "@/uikit/Container/Layout";

export default function ContactScreen() {
  return (
    <Layout navbarColorScheme="white" navbarBgColor="primary.50">
      <ContactSection />
      <FAQSection />
    </Layout>
  );
}
