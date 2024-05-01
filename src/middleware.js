const { NextResponse } = require("next/server");

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/authentication" ||
    path === "/authentication/login" ||
    path === "/authentication/signup" ||
    path === "/authentication/verifyemail";

  const auth = request.cookies.get("auth")?.value || "";

  if (isPublicPath && auth) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !auth) {
    return NextResponse.redirect(new URL("/authentication/", request.nextUrl));
  }
}

export const config = {
  matcher: [
    "/",
    "/authentication",
    "/authentication/login",
    "/authentication/signup",
    "/authentication/verifyemail",
  ],
};
