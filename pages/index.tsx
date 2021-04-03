import Head from "next/head";
import { FC } from "react";

import { HomePage as Home } from "../src/components/HomePage";

const HomePage: FC = () => {
  return (
    <>
      <Head>
        <title>Tom Fischer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
