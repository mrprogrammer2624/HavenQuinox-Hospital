// middleware.js
import { NextResponse } from "next/server";

const unAuthRoutes = [
  "/",
  "/faq",
  "/reviews",
  "/blog",
  "/blog/:id",
  "/contactus",
];

const unAuthAdminRoutes = ["/admin/login"];
const unAuthDoctorRoutes = ["/doctor/login"];
const unAuthPatientRoutes = ["/patient/login", "/patient/signup"];

const authAdminRoutes = [
  "/admin",
  "/admin/signup",
  "/admin/doctor-list",
  "/admin/add-doctor",
  "/admin/patients-list",
  "/admin/add-patients",
];

const authDoctorRoutes = [
  "/doctor",
  "/doctor/signup",
  "/doctor/patients-list",
  "/doctor/add-patients",
];

const authPatientRoutes = ["/patient"];

export const middleware = async (request) => {
  const adminToken = request.cookies.get("adminToken")?.value;
  const doctorToken = request.cookies.get("doctorToken")?.value;
  const patientToken = request.cookies.get("patientToken")?.value;
  const receptionistToken = request.cookies.get("receptionistToken")?.value;
  const token = adminToken || doctorToken || patientToken || receptionistToken;
  const isUserAuthenticated = !!token;

  let userDetails = {};

  if (token) {
    try {
      userDetails = jwtDecode(token);
      console.log("Decoded Token:", userDetails);
    } catch (error) {
      console.log("Error decoding token:", error);
    }
  }

  const activePath = request.nextUrl.pathname;

  // Redirect authenticated admin trying to access the admin login page
  if (
    isUserAuthenticated &&
    unAuthAdminRoutes.includes(activePath) &&
    userDetails?.role === "admin"
  ) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  // Redirect unauthenticated users trying to access authenticated admin routes
  if (!isUserAuthenticated && authAdminRoutes.includes(activePath)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Redirect authenticated doctor trying to access the doctor login page
  if (
    isUserAuthenticated &&
    unAuthDoctorRoutes.includes(activePath) &&
    userDetails?.role === "doctor"
  ) {
    return NextResponse.redirect(new URL("/doctor", request.url));
  }

  // Redirect unauthenticated users trying to access authenticated doctor routes
  if (!isUserAuthenticated && authDoctorRoutes.includes(activePath)) {
    return NextResponse.redirect(new URL("/doctor/login", request.url));
  }

  // Redirect authenticated patient trying to access the patient login/signup pages
  if (
    isUserAuthenticated &&
    (unAuthPatientRoutes.includes(activePath) ||
      activePath === "/patient/signup") &&
    userDetails?.role === "patient"
  ) {
    return NextResponse.redirect(new URL("/patient", request.url));
  }

  // Redirect unauthenticated users trying to access authenticated patient routes
  if (!isUserAuthenticated && authPatientRoutes.includes(activePath)) {
    return NextResponse.redirect(new URL("/patient/login", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/",
    "/faq",
    "/reviews",
    "/blog",
    "/blog/:id",
    "/contactus",
    "/admin",
    "/admin/login",
    "/admin/signup",
    "/admin/doctor-list",
    "/admin/add-doctor",
    "/doctor",
    "/doctor/signup",
    "/doctor/patients-list",
    "/doctor/add-patients",
    "/patient",
    "/patient/login",
    "/patient/signup",
    "/reception/login",
  ],
};
