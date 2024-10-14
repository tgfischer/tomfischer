import clsx from "clsx";
import { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import { PropsWithChildren } from "react";

import "@/styles/app.css";

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif-4",
});

export const metadata: Metadata = {
  title: "Tom Fischer",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en" className={clsx("dark", sourceSerif4.variable)}>
    <head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </head>
    <body className="dark:bg-zinc-900 dark:text-white">{children}</body>
  </html>
);

export default RootLayout;
