import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request,
    },
  };
}
