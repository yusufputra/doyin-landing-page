import HomeScreen from "@/screen/Home/HomeScreen";

export default function HomePage() {
  return <HomeScreen />;
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
