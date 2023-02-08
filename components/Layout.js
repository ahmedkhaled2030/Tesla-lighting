import Navbar from "./Navbar";
 import Footer from "./Footer";
import Cart from "./Cart";

const Layout = ({children}) => {
  return (
      <>
      {/* <Navbar /> */}
      <Cart  />
          {children}
          <Footer /> 
    </>
  )
}

export default Layout