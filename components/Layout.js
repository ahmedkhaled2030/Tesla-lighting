import Navbar from "./Navbar";
 import Footer from "./Footer";
import Cart from "./Cart";

const Layout = ({children ,cartOpen , setCartOpen ,setCloseWishList}) => {
  // console.log(setCloseWishList)
  return (
      <>
      <Navbar cartOpen ={cartOpen}  setCartOpen={setCartOpen}  setCloseWishList ={setCloseWishList} />
          {children }
          <Footer /> 
    </>
  )
}

export default Layout