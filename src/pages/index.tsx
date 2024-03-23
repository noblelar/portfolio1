import Homepage from "@/components/homepage";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Nobleman</title>
        <meta name="Nobleman" content="Nobleman's official Porfolio Website " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/AN.png" />
      </Head>
      <main>
        <Homepage />
      </main>
    </>
  );
}
