import AboutUsScreen from "@/screen/About/AboutUsScreen";
import Head from "next/head";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <meta name="author" content="Jaya Teknik" />
        <meta name="publisher" content="Jaya Teknik" />
      </Head>
      <AboutUsScreen />;
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
