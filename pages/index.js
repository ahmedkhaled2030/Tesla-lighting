import Featured from "@/components/Featured";
import Head from "next/head";
import Image from "next/image";
import CategoryList from "@/components/CategoryList";
import styles from '../styles/Home.module.scss'
import NewArrivalList from "@/components/NewArrivalList";
import OnSaleList from "@/components/OnSaleList";
import ReviewList from "@/components/ReviewList";

export default function Home() {
  return (
    <div >
      <Head> 
        <title>Tesla Lighting</title>
        <meta name="description" content="Tesla Lighting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Tenor+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
   {/* <Featured /> */}

      <CategoryList />
      <NewArrivalList />
      <OnSaleList />
      <ReviewList />
    </div>
  );
}
