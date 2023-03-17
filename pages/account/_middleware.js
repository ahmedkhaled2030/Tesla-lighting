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
    return NextResponse.redirect(`http://18.214.112.247:3000/`);
  }
  //   if (verify && url.includes("/dashboard")) {
  //     console.log("verify");
  //     return NextResponse.redirect("http://localhost:3000/about");
  //   }
}
