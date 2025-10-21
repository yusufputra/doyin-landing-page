import ProductDetailScreen from "@/screen/Products/ProductDetailScreen";
import Head from "next/head";

export default function ProductDetail() {
  return (
    <>
      <Head>
        <meta name="author" content="Jaya Teknik" />
        <meta name="publisher" content="Jaya Teknik" />
      </Head>
      <ProductDetailScreen />;
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
