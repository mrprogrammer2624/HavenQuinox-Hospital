const { NextResponse } = require("next/server");

export const middleware = async (request) => {};

const unAuthAdminRoutes = ["/", "/faq", "/reviews", "/blog","/blog/[]", "/contactus"];

const authAdminRoutes = [
  "/admin",
  "/admin/login",
  "/admin/signup",
  "admin/doctor-list",
  "admin/add-doctor",
  "admin/patients-list",
  "admin/add-patients",
];

const authDoctorRoutes = [
  "/doctor",
  "/doctor/login",
  "/doctor/signup",
  "doctor/patients-list",
  "doctor/add-patients",
];

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
