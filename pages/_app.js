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

export default function App({ Component, pageProps }) {
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [closeWishList, setCloseWishList] = useState(true);
  // const [searchValue, setSearchValue] = useState("");
  // const [searchText, setSearchText] = useState(pageProps.searchText);
  // const debouncedSearchValue = useDebounce(searchText, 1000);



// console.log(pageProps)
//   const { asPath } = useRouter();

//   const router = useRouter();
  // useEffect(() => {
  //   console.log(searchText);
  //   const url = {
  //     pathname: asPath,
  //     query: { searchText: searchText },
  //   };
  //   // router.replace(url, undefined, { shallow: true });
  //   if (searchText == null ) {
  //    return
  //   } else {
  //     router.push(`${asPath.split("?")[0]}?searchText=${searchText}`);
  //  } 
  // }, [searchText]);

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
          // searchValue={searchText}
          // setSearchText={setSearchText}
          // searchTerm={debouncedSearchValue}
        />
        <Component
          {...pageProps}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
        />
      </Layout>
    </Provider>
  );
}

// export const getServerSideProps = async ({ params ,query}) => {
//   console.log(query, "query");
//   const res = await axios.post(
//     `https://tesla-lightning.herokuapp.com/product/search`,
//     {
//       text: query?.searchText
//     },
//     {

//       headers: {
//         Authorization:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RlNjBhZDdiOWZiNDZkZjI4MzZkNzkiLCJpYXQiOjE2NzU1MTg2MDQsImV4cCI6MjI4MDMxODYwNH0.n-_K3QKqNB612L6wD9cCTFNp76DycxFlrJVQMlZE9C0",
//       },
//     }
//   );
//   return {
//     props: {
//       value: res,
//       searchText: null,
//     },
//   };
// };
