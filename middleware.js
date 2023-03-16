// import { NextResponse } from "next/server";

// export default function middleware(req) {
//   console.log(NextResponse, "NextResponse");
//   // let verify = req.cookies.get("loggedin");
//   // let url = req.url

//   // if(!verify && url.includes('/dashboard')){
//   //     return NextResponse.redirect("http://localhost:3000/");
//   // }

//   // if (verify && url === "http://localhost:3000/") {
//   //   return NextResponse.redirect("http://localhost:3000/dashboard");
//   // }
// }
 
import { NextRequest, NextResponse, userAgent } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  console.log(url,'url')
  const { device } = userAgent(request)
  console.log(device,'device')
  const viewport = device.type === 'mobile' ? 'mobile' : 'desktop'
  console.log(viewport,'viewport')
  url.searchParams.set('viewport', viewport)
  return NextResponse.rewrite(url)
}