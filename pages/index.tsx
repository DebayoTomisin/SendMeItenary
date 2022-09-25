import type { NextPage } from "next";
import Head from "next/head";
import Overview from "src/components/Overview";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Send Me Itenary</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Overview />
    </div>
  );
};

export default Home;
