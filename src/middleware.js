const { NextResponse } = require("next/server");

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/" || path === "/admin";
  const auth = request.cookies.get("auth")?.value || "";

  if (isPublicPath && auth) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !auth) {
    return NextResponse.redirect(new URL("/authentication/", request.nextUrl));
  }
}

export const config = {
  matcher: ["/", "/admin"],
};
