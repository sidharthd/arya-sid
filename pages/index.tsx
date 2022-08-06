import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Arya and Sidharth</title>
      </Head>

      <main className="prose">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
