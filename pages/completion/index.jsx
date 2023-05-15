import styled from "@emotion/styled";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

import { useRouter } from "next/router";


const Container = styled.div`
  width: 475px;
  margin: 30px auto 0 auto;
  text-align: center;
  color: #fff;
`;

const Title = styled.div`
  font-size: 58px;
`;

const Message = styled.div`
  margin-top: 40px;
`;


function Completion(props) {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const router = useRouter();
  
    useEffect(() => {
      setTimeout(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, 100);
      setTimeout(() => {
        router.push("/"); 
      }, 3000);
    });
     
    return (
        
      <div style={{  height:"100vh",width: '100wv',margin: '30px auto 0 auto',textAlign: 'center',color: '#fff'}}>
        <Confetti width={width} height={height} numberOfPieces={450} />
        <div style={{fontSize:"58px",color:"#000"}}>congrats!</div>
        <div style={{marginTop: '40px',color:"#000"}}>Your Order has successfully completed !</div>
      </div>
  
    ); 
  }
  
export default Completion;
 