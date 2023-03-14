import Featured from "@/components/Featured";
import Head from "next/head";
import Image from "next/image";
import CategoryList from "@/components/CategoryList";
import styles from "../styles/Home.module.scss";
import NewArrivalList from "@/components/ProductsList";
import OnSaleList from "@/components/OnSaleList";
import ReviewList from "@/components/ReviewList";
import Help from "@/components/Help";
import Times from "@/components/Times";
import CustomerReview from "@/components/CustomerReview";
import ProductsList from "@/components/ProductsList";
import StoreInfo from "@/components/StoreInfo";
import { useEffect, useState } from "react";
import Cart from "@/components/Cart";
import PromoSlider from "@/components/PromoSlider";
import CompanySlider from "@/components/CompanySlider";
import Wishlist from "@/components/WishList";
import Navbar from "@/components/Navbar";
import FilterBar from "@/components/FilterBar";
import VideoHome from "@/components/VideoHome";
import axios from "axios";

export default function Home({
  HomeProps,
  partnersProps,
  StoreInfoProps,
  VideoResProps,
  HeaderSliderProps,
  categoryResProps,
}) {
  //console.log(categoryResProps, "categoryResProps");

  const products = [
    {
      id: 1,
      img: "/img/product1.png",
      title: "Aged Brass Frame with Etched Glass Shade Linear Pendant",
      price: "3,767.00",
    },
    {
      id: 2,
      img: "/img/arrival2.jpg",
      title:
        "LED Steel Frame Wrapped with Clear Crystal Double Layer Chandelier",
      price: "3,767.00",
    },
    {
      id: 3,
      img: "/img/arrival3.png",
      title: "Aged Brass and Black Rod with Adjustable Arch Arm Chandelier",
      price: "3,767.00",
    },
    {
      id: 4,
      img: "/img/arrival4.png",
      title: "Gold Leaf Leafy Bohemian Shade Wall Sconce",
      price: "3,767.00",
    },
    {
      id: 5,
      img: "/img/arrival5.png",
      title:
        "Handcrafted Wallflower Frame with Opal Matte Glass Globe Pendant / Chandelier",
      price: "3,767.00",
    },
  ];
  const categories = [
    {
      img: "/img/3.jpg",
      title: "Chandelier",
    },
    {
      img: "/img/1.jpg",
      title: "TRACK LIGHT",
    },
    {
      img: "/img/2.jpg",
      title: "MISC",
    },

    {
      img: "/img/4.jpg",
      title: "LIGHTBULB",
    },
    {
      img: "/img/5.jpg",
      title: "CEILING FAN",
    },
    {
      img: "/img/6.jpg",
      title: "TRACK LIGHT",
    },
    {
      img: "/img/7.jpg",
      title: "LAMPS",
    },
    {
      img: "/img/8.jpg",
      title: "CONTEMPORARY VANITY LIGHT",
    },
    {
      img: "/img/9.jpg",
      title: "SCONE",
    },
    {
      img: "/img/10.jpg",
      title: "FLUSH MOUNT",
    },
  ];

  return (
    <div className={styles.container}>
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

      <Featured HeaderSliderProps={HeaderSliderProps} />

      <CategoryList
        categories={categories}
        title="shop by category"
        categoryResProps={categoryResProps}
      />
      {/* 
      <ProductsList title="New ARRIVAL" products={products} />
      <OnSaleList />
      <ReviewList />  */}
      {/* <Help /> */}
      <CompanySlider partnersProps={partnersProps} />
      <VideoHome VideoResProps={VideoResProps} />
      <StoreInfo StoreInfo={StoreInfoProps} />
      <Times
        timeProps={HomeProps.filter((item) => item.name == "retail-store")}
      />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  //console.log(process.env.PRIVATE_URL);

  const token = ctx.req?.cookies.token || "";

  const HomeRes = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/section`,

    {
      headers: {
        Authorization: token,
      },
    }
  );
  const HeaderSliderRes = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/section/header`
  );

  const categoryRes = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/category`
  );

  const partners = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/partner`,

    {
      headers: {
        Authorization: token,
      },
    }
  );
  const StoreInfoRes = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/section/featured-posts`,

    {
      headers: {
        Authorization: token,
      },
    }
  );
  const VideoRes = await axios.get(
    `${process.env.PRIVATE_URL}/dashboard/section/video`,

    {
      headers: {
        Authorization: token,
      },
    }
  );

  return {
    props: {
      HomeProps: HomeRes.data.data,
      categoryResProps: categoryRes.data.data,
      HeaderSliderProps: HeaderSliderRes.data.data,
      partnersProps: partners.data.data,
      StoreInfoProps: StoreInfoRes.data.data,
      VideoResProps: VideoRes.data.data,
    },
  };
};
