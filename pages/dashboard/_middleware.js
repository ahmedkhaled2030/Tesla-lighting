import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
export default function middleware(req) {
  let verify = req.cookies["token"];
  let role = req.cookies["role"];
  console.log('role' ,role == 'user') 
  // console.log(verify, "verify"); 
  let url = req.url;
  if (role == 'user' && url.includes("/dashboard")) {
   
    return NextResponse.redirect(`http://18.214.112.247:3000/`);
  }

 
}

