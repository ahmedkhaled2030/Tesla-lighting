import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function middleware(req) {
  console.log("req", req);
  let verify = req.cookies["token"];


  let url = req.url;

  if (!verify && url.includes("/account")) {
    console.log("!verify");
    return NextResponse.redirect(`/404`);
  }
 
}



//${process.env.NEXT_PUBLIC_GAID}