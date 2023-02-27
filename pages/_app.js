import Layout from "@/components/Layout";
import "../styles/globals.scss";
import "../styles/index.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import Cart from "@/components/Cart";
import Wishlist from "@/components/WishList";
import SearchBar from "@/components/SearchBar";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import { useRouter } from "next/router";
import FilterBar from "@/components/FilterBar";
export default function App({ Component, pageProps }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [FilterOpen, setFilterOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [closeWishList, setCloseWishList] = useState(true);
  const [hideNavbar ,setHideNavbar] = useState(true)
 
  return (
    <Provider store={store}>
      <Layout
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        setCloseWishList={setCloseWishList}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
 
      >
        {!closeWishList && <Wishlist setCloseWishList={setCloseWishList} />}
        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        <SearchBar
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}

        />
            <FilterBar FilterOpen={FilterOpen} setFilterOpen={setFilterOpen}   />
        <Component
          {...pageProps}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          FilterOpen={FilterOpen} setFilterOpen={setFilterOpen}
        />
      </Layout>
    </Provider>
  );
}

export const getServerSideProps = async ({ params }) => {
  console.log(params ,"params")
  const token = localStorage.getItem("token");
  console.log(token ,"token")
  const HomeRes = await axios.get(
    `https://tesla-lightning.herokuapp.com/dashboard/section`,

    {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
      },
    }
  );


  return {
    props: {
      HomeProps: HomeRes.data.data,
    
    },
  };
};
