const { NextResponse } = require("next/server");

const unAuthRoutes = [
  "/",
  "/faq",
  "/reviews",
  "/blog",
  "/blog/[]",
  "/contactus",
];

const authAdminRoutes = [
  "/admin",
  "/admin/signup",
  "/admin/doctor-list",
  "/admin/add-doctor",
  "/admin/patients-list",
  "/admin/add-patients",
];

const unAuthAdminRoutes = ["/admin/login"];

const authDoctorRoutes = [
  "/doctor",
  "/doctor/login",
  "/doctor/signup",
  "/doctor/patients-list",
  "/doctor/add-patients",
];

const authPatientRoutes = ["/patient"];

export const middleware = async (request) => {
  const { pathname } = request.nextUrl;

  // <h2>{accessToken.role}</h2>

  // console.log(accessToken);

  // console.log("Token Cookie:", tokenCookie);

  // Check if the path is in unauthenticated admin routes
  if (unAuthRoutes.includes(pathname)) {
    return;
  }

  // Check if the path requires admin authentication
  if (authAdminRoutes.includes(pathname)) {
    // if (tokenCookie) {
    //   return;
    // } else {
    //   return NextResponse.rewrite(new URL(unAuthAdminRoutes));
    // }
  }

  // Check if the path requires doctor authentication
  if (authDoctorRoutes.includes(pathname)) {
  }

  // Check if the path requires patient authentication
  if (authPatientRoutes.includes(pathname)) {
  }
};

export const config = {
  matcher: [
    "/",
    "/aboutus",
    "/blog",
    "/contactus",
    "/admin",
    "/admin/signup",
    "/doctor",
    "/doctor/login",
    "/patient",
    "/patient/login",
    "/patient/signup",
    "/reception/login",
  ],
};
