import { NextResponse } from "next/server";

export const middleware = (request) => {
  console.log(request);
  return NextResponse.next();
};

export const config = {
  matcher: "/news",
};
