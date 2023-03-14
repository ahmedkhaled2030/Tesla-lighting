import styles from "../../styles/Product.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Search,
  PersonOutlineOutlined,
  FavoriteBorderOutlined,
  Check,
  Favorite,
} from "@mui/icons-material";
import CustomerReview from "@/components/CustomerReview";
import Head from "next/head";
import { Rating } from "@mui/material";
import ProductsList from "@/components/ProductsList";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
// Import Swiper styles

import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Alert, Box, Snackbar } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
// import Magnifier from "react-magnifier";
import SideBar from "@/components/FilterBar";
import Cookies from "js-cookie";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { ColorInversionProvider, TabPanel } from "@mui/joy";
import Link from "next/link";

const FilterColor = styled.div`
  background-color: ${(props) => props.color};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #ebebeb;
  display: block;
`;

const Product = ({
  productDetails,
  setCartOpen,
  ReviewProps,
  SimilarResProps,
  RecentlyResProps,
}) => {
  //console.log(process.env.NEXT_PUBLIC_OLDPATH, "AAA");
  console.log(productDetails, "productDetails");
  const [isFavorited, setIsFavorited] = useState(false);
  const [text, setText] = useState("");
  console.log(text, "text");
  useEffect(() => {
    setToken(Cookies.get("token"));
  }, [token]);
  console.log(isFavorited, "isFavorited");
  useEffect(() => {
    setIsFavorited(productDetails.isFavorited);
  }, []);

  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "left",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => {
    console.log("checked")          
    //console.log(newState, "newState");
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const [token, setToken] = useState(Cookies.get("token"));

  // ////console.log(productDetails ,"productDetails")
  // ////console.log(isFavourite,'isFavourite')
  //dummyData

  //console.log(productDetails.price ,'productDetails?.price')
  // const [price, setPrice] = useState(productDetails?.size[0]?.price);
  const [price, setPrice] = useState(productDetails?.price);
  const [itemSize, setSize] = useState(0);
  const [selectedSizeId, setSelectedSizeId] = useState("");
  const [color, setColor] = useState("");
  const [selectedImg, setSelectedImg] = useState(
    productDetails?.images[0]?.path
  );
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isFavourited, setIsFavourited] = useState(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    //console.log(sizeIndex, "sizeIndex");
    const difference = prices[sizeIndex]?.value - prices[itemSize]?.value;
    setSize(sizeIndex);

    changePrice(difference);
  };

  const selectedSizeHandler = (id) => {
    setSelectedSizeId(id);
  };
  const handleCart = () => {
    ////console.log("cart");
    setCartOpen(true);
    //console.log(price , 'price')
    dispatch(
      addProduct({
        ...productDetails,

        quantity,
      })
    );

    setPrice("");

    // dispatch(
    //   addProduct({
    //     ...productDetails,
    //     price,
    //     itemSize,
    //     color,
    //     quantity,
    //     selectedSizeId,
    //   })
    // );
  };

  const handleFavourite = async () => {
    console.log(token, "token");
    console.log(token, "token");

    if (token == undefined) {
      handleClick({
        vertical: "top",
        horizontal: "left",
      });
    } else {
      // console.log(id,'id')
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_GAID}/product/favorite/${productDetails._id}`,
          {},
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const data = await res.data.message;
        console.log(data);
        if (data == "Product added to favorites successfully") {
          setIsFavorited(true);
              
          setText(data);
          handleClick({
            vertical: "top",
            horizontal: "left",
          });
        }
        if (data == "Favorite removed successfully") {
          setIsFavorited(false);
        
          setText(data);
          handleClick({
            vertical: "top",
            horizontal: "left",
          });
        }
      } catch (err) {
        ////console.log(err);
      }
    }
  };

  const toggleShow = () => {
    setShow(!show);
  };

  var buttonText = show ? "Cancel review" : "Write a review";
  const [favList, setFavList] = useState([]);
  const [recent, setRecent] = useState([]);
  console.log(recent, "recent");
  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("Favourite")) == null) {
      const arr1 = [];
      setFavList(arr1);
      sessionStorage.setItem("Favourite", JSON.stringify(arr1));
    } else {
      const arr1 = JSON.parse(sessionStorage.getItem("Favourite"));
      arr1.push(productDetails);
      setFavList(arr1);
      setRecent(arr1.slice(-5));
      sessionStorage.setItem("Favourite", JSON.stringify(arr1));
    }
  }, [productDetails]);

  return (
    <div className={`yPaddings innerWidth ${styles.container}`}>
      <Head>
        <title> {productDetails?.title}</title>
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

      {token !== undefined ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }} 
          >
            {text}
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          key={vertical + horizontal}
        >
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            PLEASE
            <Link
              href={`/login`}
              passHref
              className={styles.link}
              styles={{ color: "inherit", textDecoration: "inherit" }}
            >
             
                      LOGIN
            </Link>  
            TO ADD THIS ITEM TO YOUR WISHLIST
          </Alert>
        </Snackbar>
      )}
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            300: {
              slidesPerView: 1.5,
              spaceBetween: 10,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 10,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 10,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className={styles.swiper}
        >
          {productDetails.images.length >= 1 ? (
            productDetails.images?.map((img, i) => (
              <SwiperSlide className={styles.swiperSlide} key={i}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_OLDPATH}/${img?.path} `}
                  alt={img?._id}
                  width="400px"
                  height="400px"
                  objectFit="contain"
                  className={styles.subImg}
                />
                {/* <Magnifier src={img} width={400}  />  */}
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className={styles.swiperSlide}>
              <Image
                src={`${process.env.NEXT_PUBLIC_OLDPATH}/${productDetails?.cover} `}
                alt={productDetails?._id}
                width="400px"
                height="400px"
                objectFit="contain"
                className={styles.subImg}
              />
              {/* <Magnifier src={img} width={400}  />  */}
            </SwiperSlide>
          )}
        </Swiper>
      </>

      <div className={styles.top}>
        <div className={styles.left}>
          <div className={styles.subImagesContainer}>
            {productDetails?.images.length >= 1 ? (
              productDetails.images.map((image, i) => (
                <div
                  key={i}
                  className={` ${
                    selectedImg === image ? `${styles.selected}` : ""
                  }  ${styles.image}`}
                  onClick={() => setSelectedImg(image?.path)}
                >
                  <Image
                    src={`${process.env.NEXT_PUBLIC_OLDPATH}/${image?.path} `}
                    alt={image._id}
                    width="100px"
                    height="100px"
                    objectFit="contain"
                    className={styles.subImg}
                  />
                </div>
              ))
            ) : (
              <div>
                <Image
                  src={`${process.env.NEXT_PUBLIC_OLDPATH}/${productDetails?.cover} `}
                  alt={productDetails._id}
                  width="100px"
                  height="100px"
                  objectFit="contain"
                  className={styles.subImg}
                />
              </div>
            )}
          </div>

          <div className={styles.mainImgContainer}>
            <Image
              src={
                productDetails?.images.length >= 1
                  ? `${process.env.NEXT_PUBLIC_OLDPATH}/${selectedImg}`
                  : `${process.env.NEXT_PUBLIC_OLDPATH}/${productDetails?.cover}`
              }
              alt=""
              width="450px"
              height="450px"
              objectFit="contain"
              className={styles.mainImg}
            />
            {/* <ImageMagnifier width={"450px"} src={selectedImg} /> */}
            {/* <Magnifier src={selectedImg} width={450} mgWidth={200} mgHeight={200} />  */}
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={`primaryText ${styles.title}`}>
            {productDetails?.title}
          </h1>
          <span className={styles.number}>
            <strong>{productDetails?.number?.toString()}</strong>
          </span>
          <div className={styles.prices}>
            {/* $ {!price && productDetails?.price} */}$ {productDetails?.price}
            {/* <span className={styles.price}>$3,265.00</span>
            <span className={styles.price}>$2,972.00</span>
            <span className={styles.price}>Save $293.00</span> */}
          </div>
          <p className={styles.shipping}>
            <span>Shipping</span> calculated at checkout.
          </p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4>Availability:</h4>{" "}
            <div>
              {productDetails?.stock >= 1 ? (
                <span
                  style={{
                    color: "#62bf77",
                    fontSize: "20px",
                    marginLeft: "10px",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  In Stock
                </span>
              ) : (
                <span
                  style={{
                    color: "#ff6c37",
                    fontSize: "20px",
                    marginLeft: "10px",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  Out Of Stock
                </span>
              )}
            </div>
          </Box>

          {isFavorited ? (
            <button className={styles.buttonWish} onClick={handleFavourite}>
              <Favorite />
              Added to Wishlist
            </button>
          ) : (
            <button className={styles.buttonWish} onClick={handleFavourite}>
              <FavoriteBorderOutlined />
              Add to Wishlist
            </button>
          )}
          {productDetails?.colors.length >= 1 && (
            <div className={styles.colors}>
              <span>COLOR</span>
              <div className={styles.colorWrapper}>
                {productDetails?.colors.map((c, i) => (
                  <div
                    className={` ${
                      color == c
                        ? ` ${styles.color} ${styles.colorSelected}`
                        : `${styles.color}`
                    }  `}
                    key={i}
                  >
                    <FilterColor
                      color={c}
                      key={c}
                      onClick={() => setColor(c)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
          {productDetails?.size >= 1 && (
            <div className={styles.sizes}>
              <span>SIZE</span>
              <div className={styles.sizeWrapper}>
                {productDetails?.size.map((size, i) => (
                  <span
                    onClick={() => {
                      handleSize(i);
                      selectedSizeHandler(size._id);
                    }}
                    className={` ${
                      itemSize == i ? `${styles.sizeSelected}` : ""
                    }  `}
                  >
                    {size.value}"
                  </span>
                ))}
              </div>
            </div>
          )}
          {productDetails?.stock >= 1 && (
            <button className={styles.buttonCart} onClick={handleCart}>
              ADD TO CART
            </button>
          )}

          <h3 className={`primaryText ${styles.descHeading}`}>DESCRIPTION</h3>
          {/* <span className={styles.desc}>{productDetails.description}</span> */}
          <span
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: productDetails.description }}
          ></span>
          {/* <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="DESCRIPTION"  />
          <Tab label="SPECIFICATION "  />
       
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <span
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: productDetails.description }}
          ></span>
      </TabPanel>
      <TabPanel value={value} index={1}>
              <span>{productDetails.specification}</span>
      </TabPanel>
  
    </Box> */}
        </div>
      </div>

      <div className={styles.bottom}>
        <h1 className={`primaryText ${styles.title}`}>Customer Reviews</h1>
        <div className={styles.reviewTop}>
          {ReviewProps?.length >= 1 ? (
            ""
          ) : (
            <div className={styles.reviewTopLeft}>
              <Rating
                name="disabled"
                value="0"
                disabled
                className={styles.rating}
              />
              <span className={styles.reviewText}>
                Be the first to write a review
              </span>
            </div>
          )}

          <div className={styles.reviewTopRight}>
            <button onClick={toggleShow} className={styles.switchButton}>
              {buttonText}
            </button>
          </div>
        </div>

        {show && (
          <div className={styles.review}>
            <div className={styles.reviewComponent}>
              <CustomerReview />
            </div>

            <div className={styles.reviewButtons}>
              <button className={styles.switchButton}>Submit Review</button>
              <button
                onClick={() => setShow(false)}
                className={styles.switchButton}
              >
                Cancel review
              </button>
            </div>
          </div>
        )}
        {ReviewProps && (
          <div className={styles.reviews}>
            {ReviewProps?.map((review, i) => (
              <div className={styles.review}>
                <Rating
                  name="readOnly"
                  value={review.rating}
                  readOnly
                  className={styles.rating}
                  key={i}
                />
                <div className={styles.personData}>
                  <div className={styles.personImg}>
                    <PersonOutlineOutlined />
                    {review.Verified ? (
                      <div className={styles.check}>
                        <Check className={styles.icon} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div
                    className={styles.personName}
                  >{`${review.user.firstName} ${review.user.lastName}`}</div>
                  {/* {review.Verified ? (
                    <div className={styles.verified}>Verified</div>
                  ) : (
                    ""
                  )} */}
                </div>
                <span className={styles.reviewTitle}>{review.title}</span>
                <span className={styles.reviewComment}>{review.text}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.hr}></div>

      <ProductsList
        title="You may also like"
        products={SimilarResProps.products}
        link={productDetails?.category?._id}
      />

      <div className={styles.hr}></div>
      {recent.length > 1 && (
        <ProductsList title="Recently Viewed" products={recent} />
      )}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const token = ctx.req?.cookies.token || "";

  const productRes = await axios.get(
    `${process.env.PRIVATE_URL}/product/${ctx.params.id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
  //console.log(productRes.data.data.product.category._id);
  const ReviewRes = await axios.get(
    `${process.env.PRIVATE_URL}/product/${ctx.params.id}/reviews`
  );

  const SimilarRes = await axios.post(
    `${process.env.PRIVATE_URL}/product/search?page=1&limit=5`,
    {
      category: productRes.data.data.product.category._id,
    }
  );

  const RecentlyRes = await axios.post(
    `${process.env.PRIVATE_URL}/product/search?page=1&limit=5`,
    {
      // category: productRes.data.data.product.category._id,
      category: "6408ef89be47ab1b5a1db458",
    }
  );
  //console.log('RecentlyRes',RecentlyRes.data.data,"RecentlyRes")

  return {
    props: {
      productDetails: productRes.data.data.product,
      ReviewProps: ReviewRes.data.data,
      SimilarResProps: SimilarRes.data.data,
      RecentlyResProps: RecentlyRes.data.data,
      // reqFavourite : reqFavourite
    },
  };
};
//
export default Product;
