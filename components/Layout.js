import Navbar from "./Navbar";
 import Footer from "./Footer";
import Cart from "./Cart";
import { useState } from "react"


const Layout = ({children ,cartOpen , setCartOpen ,setCloseWishList,searchOpen,setSearchOpen }) => {

  return (
      <>
      {/* <Navbar cartOpen ={cartOpen}  setCartOpen={setCartOpen}  setCloseWishList ={setCloseWishList} searchOpen={searchOpen}  setSearchOpen={setSearchOpen} /> */}
          {children }
          <Footer /> 
    </>
  )
}

export default Layout