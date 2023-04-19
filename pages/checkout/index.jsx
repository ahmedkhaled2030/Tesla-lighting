import React from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { Box } from "@mui/system";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { Check } from "@mui/icons-material";
import { Alert, Snackbar } from "@mui/material";
const CssTextFieldOrdinary = styled(TextField)({
  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "black",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
  },
});
const CssTextFieldSuccess = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "green",
    },
    "&:hover fieldset": {
      borderColor: "green",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});
const CssTextFieldError = styled(TextField)({
  "& label.Mui-focused": {
    color: "red",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "red",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "red",
    },
    "&.Mui-focused fieldset": {
      borderColor: "red",
    },
  },
});

const Container = styled.div`
  display: flex;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 40px;
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    padding: 20px;
    width: 80%;
  }
`;
const Heading = styled.h2`
  margin-bottom: 20px;
`;

const SubHeading = styled.span`
  margin: 20px 0px;
  color: grey;
  font-weight: 500;
`;

const Right = styled.div`
  flex: 1;

  padding: 40px;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const Product = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

const ProductInfo = styled.div`
  display: flex;

  align-items: center;
  align-items: flex-start;
  font-family: "Poppins", sans-serif;
`;
const ImageWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: flex-start;
`;
const InfoWrapper = styled.div``;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const Title = styled.span`
  font-size: 20px;
  display: flex;

  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 30px;
  width: 60%;
  font-family: "Poppins", sans-serif;
`;
const Specs = styled.span``;
const Amount = styled.span`
  font-size: 20px;
  font-weight: 700;
  width: 100px;
  font-family: "Poppins", sans-serif;
`;
const Qunatity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #737373;
  position: absolute;
  top: -5px;
  right: -5px;

  font-size: 14px;
  font-weight: 600;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const AmountInfo = styled.div`
  padding: 20px;
`;
const Subtotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;
const Shipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
`;
const Discount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  color: green;
`;
const Total = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 30px;
  font-family: "Poppins", sans-serif;
`;
const ButtonCoupon = styled.button`
  padding: 10px 0px;
  font-weight: 500;
  font-size: 14px;
  background-color: #111111;
  letter-spacing: 5px;
  color: white;
  width: 20%;
  border: none;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  border-radius: 5px;
  @media (max-width: 640px) {
    width: 30%;
  }
`;

const CouponAdded = styled.span`
  font-size: 20px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 10px;
  width: 60%;
  color: green;
`;
const Checkout = () => {
  const [token, setToken] = useState(Cookies.get("token"));
  const cart = useSelector((state) => state.cart);
  const subtotal = cart.products.map((x) => x.price * x.quantity);
  const order = useSelector((state) => state.order);
  console.log(order.orderId);
  const router = useRouter();
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");
  const [addressId, setAddressId] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeStatus, setCouponCodeStatus] = useState("");
  const [discount, setDiscount] = useState(0);
  const [discountTax, setDiscountTax] = useState(0);
  const [discountTotal, setDiscountTotal] = useState(0);



  console.log("addressId", addressId);
  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_GAID}/user/address`,
        {
          address: address,
          city: city,
          state: state,
          postCode: zipCode,
          country: "CANADA",
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data.data._id, "res");
      setAddressId(res.data.data._id);
      console.log(addressId, "addressId");
    } catch (err) {
      console.log(err);
    }

    console.log(addressId);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_GAID}/order/${order.orderId}`,
        {
          address: addressId,
          phone: phone,
          coupon: couponCode
        },   
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data, "resUpdateOrder");

      router.push("/payment");
    } catch (err) {
      console.log(err);
    }

    // const order = { user, ...inputs, cart, products: [...cart.products] };
    // //console.log(order, "order");
    // addOrder(order, dispatch);
  };

  const handleCoupon = async (e) => {
    console.log("coupon");
    e.preventDefault();

    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_GAID}/order/${order.orderId}/coupon`,
        {
          coupon: couponCode,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(res.data.data, "coupon");
      setCouponCodeStatus(res.data.message);
      setDiscount(res.data.data.discount);
      setDiscountTax(res.data.data.tax)
      setDiscountTotal(res.data.data.price)
      // console.log(addressId, 'addressId')
    } catch (err) {
      console.log(err.message);
      setCouponCodeStatus(err);
    }
  };
  const handleCouponCode = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setCouponCode(e.target.value);
  };
  return (
    <div>
      <Container>
        <Left>
          <Heading>Checkout</Heading>

          <SubHeading>Shipping address</SubHeading>

          <TextField
            id="outlined-basic"
            label="Address"
            name="address"
            variant="outlined"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setAddress(e.target.value)}
          />

          <TextField
            id="outlined-basic"
            label="City"
            name="city"
            variant="outlined"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setCity(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="State"
            name="state"
            variant="outlined"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setState(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Zip Code"
            name="postCode"
            variant="outlined"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Phone"
            name="phone"
            variant="outlined"
            style={{ marginBottom: "10px" }}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Left>
        <Right>
          {cart.products.map((item) => (
            <Product key={item.createdAt + item.size + item.color}>
              <ProductInfo>
                <ImageWrapper>
                  <Image src={item.img} width="150" height="150" />
                  <Qunatity>{item.quantity}</Qunatity>
                </ImageWrapper>
                <Title>{item.title}</Title>
              </ProductInfo>
              <Amount>{item.price * item.quantity} $ </Amount>
            </Product>
          ))}
          <Hr />
          <AmountInfo>
            <Subtotal>
              <span>Subtotal</span>
              <span>{cart.total} $</span>
            </Subtotal>
            <Shipping>
              <span>Estimated Shipping</span>
              <span>{order.shippingCost} $</span>
            </Shipping>
            <Shipping>
              
              <span>Tax</span>
              {couponCodeStatus == "Coupon added!" ? (     <span>{discountTax} $</span>): (     <span>{order.tax} $</span>)}
         
            </Shipping>
            {couponCodeStatus == "Coupon added!" && (
              <Discount>
                <span>Discount</span>
                <span>- {discount} $</span>
              </Discount>
            )}
          </AmountInfo>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              my: 2,
            }}
          >
            {couponCodeStatus == "Coupon added!" && (
              <CssTextFieldSuccess
                id="outlined-basic"
                label="Coupon added!"
                variant="outlined"
                value={couponCode}
                sx={{ marginRight: "20px", borderColor: "#000  !important" }}
              />
            )}

            {couponCodeStatus == "" && (
              <CssTextFieldOrdinary
                id="outlined-basic"
                label="Enter a coupon code"
                variant="outlined"
                defaultValue={couponCode}
                sx={{ marginRight: "20px", borderColor: "#000  !important" }}
                onChange={handleCouponCode}
              />
            )}
            {couponCodeStatus !== "Coupon added!" &&
              couponCodeStatus !== "" && (
                <CssTextFieldError
                  id="outlined-basic"
                  label="Coupon Failed!"
                  variant="outlined"
                  defaultValue={couponCode}
                  sx={{ marginRight: "20px", borderColor: "#000  !important" }}
                  onChange={handleCouponCode}
                />
              )}

            {couponCodeStatus == "Coupon added!" ? (
              <>
                {" "}
                <Check sx={{ color: "green" }} />
                <CouponAdded>Coupon applied!</CouponAdded>
              </>
            ) : (
              <ButtonCoupon onClick={handleCoupon}>Apply</ButtonCoupon>
            )}
          </Box>

          <Hr />
          <Total>
            <span>Total</span>
            {couponCodeStatus == "Coupon added!" ? (
              <span>
                {discountTotal} $
              </span>
            ):(  <span>{order.price} $</span>)}  

          
          </Total>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              color="success"
              style={{
                width: "150px",
                marginTop: "30px",
                margin: "auto",
                textAlign: "center",
              }}
              onClick={handleClick}
              disabled={!address || !city || !state || !zipCode}
            >
              Place Order
            </Button>
          </Box>
        </Right>
      </Container>
    </div>
  );
};

export default Checkout;
