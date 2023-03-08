import Layout from "@/components/Layout";
import "../styles/globals.scss";
import "../styles/index.css";

import { Provider } from "react-redux";
import { useEffect, useState } from "react";
import Cart from "@/components/Cart";
import Wishlist from "@/components/WishList";
import SearchBar from "@/components/SearchBar";
import useDebounce from "../hooks/useDebounce";
import axios from "axios";
import { useRouter } from "next/router";
import FilterBar from "@/components/FilterBar";
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "../redux/store"; 
export default function App({ Component, pageProps  }) {

  const [cartOpen, setCartOpen] = useState(false);
  const [FilterOpen, setFilterOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [closeWishList, setCloseWishList] = useState(true);
  const [hideNavbar, setHideNavbar] = useState(true);

  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <Layout
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        setCloseWishList={setCloseWishList}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
     
      >
        {!closeWishList && <Wishlist setCloseWishList={setCloseWishList} />}
        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
 
        <Component
          {...pageProps}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          FilterOpen={FilterOpen}
          setFilterOpen={setFilterOpen}
        />
        </Layout>
        </PersistGate>
    </Provider>
  );
}


