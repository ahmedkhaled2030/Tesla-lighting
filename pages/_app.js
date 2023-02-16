import Layout from "@/components/Layout";
import "../styles/globals.scss";
import "../styles/index.css";
import store from "../redux/store";
import { Provider } from "react-redux";
import { useState } from "react";
import Cart from "@/components/Cart";
import Wishlist from "@/components/WishList";
export default function App({ Component, pageProps }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [closeWishList, setCloseWishList] = useState(true);
  // console.log( closeWishList , 'closeWishList')
     
  {
    /* <button onClick={() => setCartOpen(!cartOpen)}>cart</button> */
  }
  {
    /* <Navbar setCloseWishList={setCloseWishList} /> */
  }
  {
    /* {!closeWishList && <Wishlist setCloseWishList={setCloseWishList} />} */
  }
  return (
    <Provider store={store}>
      <Layout cartOpen={cartOpen} setCartOpen={setCartOpen} setCloseWishList={setCloseWishList} >
        {!closeWishList && <Wishlist setCloseWishList={setCloseWishList} />}
        <Cart cartOpen={cartOpen} setCartOpen={setCartOpen} />
        <Component {...pageProps} cartOpen={cartOpen} setCartOpen={setCartOpen}  />
      </Layout>
    </Provider>
  );
}
