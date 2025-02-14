import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "./Cart";
import { useState } from "react";
import PromoSlider from "./PromoSlider";
import { useRouter } from "next/router";
const Layout = ({
  children,
  cartOpen,
  setCartOpen,
  setCloseWishList,
  searchOpen,
  setSearchOpen,
  FilterOpen,
  setFilterOpen,
  setHideNavbar,
  req

}) => {
  const router = useRouter();

  const { asPath, pathname } = useRouter();

  const certainRoute = pathname.split("/")[1];
  return (    
    <>
      {/* {certainRoute == "/dashboard" && ( */}
      {!pathname.includes('/dashboard') && (
      <PromoSlider  />
      )} 
        <Navbar
          cartOpen={cartOpen}
          setCartOpen={setCartOpen} 
          setCloseWishList={setCloseWishList}
          searchOpen={searchOpen}
          setSearchOpen={setSearchOpen}
        />
      {/* )} */}
      

      {children}
      {!pathname.includes('/dashboard') && (
        <Footer />
      )}
        
    </>
  );
};



export default Layout;
