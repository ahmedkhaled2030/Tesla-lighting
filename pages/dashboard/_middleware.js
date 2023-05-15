import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
export default function middleware(req) {
  console.log('11111111111')
  // const auth = useSelector((state) => state.auth);
  let token = req.cookies["token"];
  if (token) {
    const role = JSON.parse(atob(token.split('.')[1])).role
 

  let url = req.url;
  if ( role !== 'admin') {        
   
    return NextResponse.redirect(`/404`);
  }
  } else {
    return NextResponse.redirect(`/404`);
  }



     
  
  

 
}

