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

const Container = styled.div`
  display: flex;
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
`;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
`;
const ImageWrapper = styled.div`
  position: relative;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  width: 60%;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const Title = styled.span`
  font-size: 20px;
`;
const Specs = styled.span``;
const Amount = styled.span`
  font-size: 20px;
  font-weight: 700;
  width: 100px;
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
`;
const Shipping = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 20px;
`;
const Total = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 30px;
`;

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const subtotal = cart.products.map((x) => x.price * x.quantity);
  const order = useSelector((state) => state.order);
  console.log(order);

  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    // const order = { user, ...inputs, cart, products: [...cart.products] };
    // console.log(order, "order");
    // addOrder(order, dispatch);
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
        </Left>
        <Right>
          {cart.products.map((item) => (
            <Product key={item.createdAt + item.size + item.color}>
              <ProductInfo>
                <ImageWrapper>
                  <Image src={item.img} width="200" height="200" />
                  <Qunatity>{item.quantity}</Qunatity>
                </ImageWrapper>
                <InfoWrapper>
                  <Title>{item.title}</Title>
                  <Specs>
                    {item.size} cm / {item.color}
                  </Specs>
                </InfoWrapper>
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
              <span>{order.tax} $</span>
            </Shipping>
          </AmountInfo>

          <Hr />
          <Total>
            <span>Total</span>
            <span>{order.price} $</span>
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
              // onClick={handleClick}
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
