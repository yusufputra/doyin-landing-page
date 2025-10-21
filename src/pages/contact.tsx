import ContactScreen from "@/screen/Contact/ContactScreen";
import Head from "next/head";

export default function ContactPage() {
  return (
    <>
      <Head>
        <meta name="author" content="Jaya Teknik" />
        <meta name="publisher" content="Jaya Teknik" />
      </Head>
      <ContactScreen />;
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
