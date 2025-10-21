import ProductListScreen from "@/screen/Products/ProductListScreen";
import Head from "next/head";

export default function ProductPage() {
  return (
    <>
      <Head>
        <meta name="author" content="Jaya Teknik" />
        <meta name="publisher" content="Jaya Teknik" />
      </Head>
      <ProductListScreen />;
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
