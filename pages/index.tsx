import Head from "next/head";
import { FC } from "react";

import { HomePage as Home } from "../src/components/HomePage";

const HomePage: FC = () => (
  <>
    <Head>
      <title>Tom Fischer</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Home />
  </>
);

export default HomePage;
