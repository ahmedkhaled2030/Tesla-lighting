import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";    
export default function middleware(req) {

    let verify = req.cookies["token"];

    console.log(verify , 'verify')
  let url = req.url; 
  if (!verify && url.includes("/dashboard")) {
    console.log("!verify");
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_GAID}:3000/`);
    }
    if (!verify && url.includes("/account")) {
        console.log("!verify");
        return NextResponse.redirect(`${process.env.NEXT_PUBLIC_GAID}:3000/`);
      }
//   if (verify && url.includes("/dashboard")) {
//     console.log("verify");
//     return NextResponse.redirect("http://localhost:3000/about");
//   }
}
     