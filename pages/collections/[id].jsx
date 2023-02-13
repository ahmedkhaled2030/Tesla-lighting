import styles from "../../styles/Collections.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

import {
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  Check,
} from "@mui/icons-material";
import Head from "next/head";
import ProductsList from "@/components/ProductsList";
import { FilterAltOutlined } from "@mui/icons-material";
import axios from "axios";
import { useRouter } from "next/router";

const Collections = (props) => {
  // console.log(props)
  const { asPath } = useRouter();
  // console.log(asPath);
  const router = useRouter();

  const [sortBy, setSortBy] = useState(props.initialSortBy);
  const [sortOrder, setSortOrder] = useState(props.initialSortOrder);
  useEffect(() => {
console.log(sortBy , sortOrder)
    const url = {
      pathname: asPath,
      query: {sortBy: sortBy, sortOrder: sortOrder },
    };
    // router.replace(url, undefined, { shallow: true });
   router.push(`${asPath.split('?')[0]}?sortBy=${sortBy}&sortOrder=${sortOrder}`)
  }, [sortBy , sortOrder])
  
  const handleFilters = (e) => {
    if (e.target.value == 'Price, low to high') {
      setSortBy('price');
      setSortOrder('asc')
    }
    if (e.target.value == 'Price, high to low') {
      setSortBy('price');
      setSortOrder('desc')
    }
    if (e.target.value == 'Alphabetically, A-Z') {
      setSortBy('title');
      setSortOrder('asc')
    }
    if (e.target.value == 'Alphabetically, Z-A') {
      setSortBy('title');
      setSortOrder('desc')
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Collections</title>
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
      <div className={styles.imgContainer}>
        <h1 className={`primaryText ${styles.title}`}>Flush MOUNT</h1>
      </div>
      <div className={`innerWidth  yPaddings  ${styles.wrapper}`}>
        <div className={styles.filterContainer}>
          <button className={styles.filter}>
            <FilterAltOutlined />
            <span className={styles.filterText}>Filter</span>
          </button>
          <div className={` secondaryText ${styles.number}`}>
            {props.products.count} products
          </div>
          <div className={styles.sorting}>
            <select name="sort" onChange={handleFilters}>
              {/* <option value="sort">Sort</option> */}
              <option>Featured</option>
              <option>Best selling</option>
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
              <option>Price, low to high</option>
              <option>Price, high to low</option>
              <option>Date, old to new</option>
              <option selected>Date, new to old</option>
            </select>
          </div>
        </div>
        <ProductsList products={props.products.products} type="collections" />
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params ,query }) => {
  console.log(query ,"query")
  const res = await axios.post(
    `https://tesla-lightning.herokuapp.com/product/search`,
    {
      // "minPrice": 15,
      // "maxPrice": 20,
      sortBy: query?.sortBy,
      sortOrder : query?.sortOrder,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
      },
    }
  );
  return {
    props: {
      products: res.data.data,
      initialSortBy: "title",
      initialSortOrder: "asc",
    },
  };
};

export default Collections;
