import { NextResponse } from "next/server";

const fetchUserDetails = async (token) => {
  const userDetailsRes = await fetch(
    process.env.NEXT_PUBLIC_API_LOCAL + "/common/user/details",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return (await userDetailsRes.json()) || {};
};

const unAuthRoutes = [
  "/",
  "/faq",
  "/reviews",
  "/blog",
  "/blog/[]",
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
  const token = request.cookies.get("adminToken" || "doctorToken")?.value;
  const isUserAuthenticated = !!token;

  let userDetails = {};
  if (token) {
    try {
      const userDetailsRes = await fetchUserDetails(token);
      userDetails = userDetailsRes.data || {};
    } catch (error) {
      console.log({ error });
    }
  }

  const activePath = request.nextUrl.pathname;

  // Redirect unauthenticated users trying to access authenticated admin routes
  if (!isUserAuthenticated && authAdminRoutes.includes(activePath)) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  // Redirect unauthenticated users trying to access authenticated doctor routes
  if (!isUserAuthenticated && authDoctorRoutes.includes(activePath)) {
    return NextResponse.redirect(new URL("/doctor/login", request.url));
  }

  // Redirect unauthenticated users trying to access authenticated patient routes
  if (!isUserAuthenticated && authPatientRoutes.includes(activePath)) {
    return NextResponse.redirect(new URL("/patient/login", request.url));
  }

  // Redirect authenticated admin users away from unauthenticated routes
  if (isUserAuthenticated && userDetails.role === "admin") {
    if (unAuthRoutes.includes(activePath)) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
  }

  // Redirect authenticated doctor users away from unauthenticated routes
  if (isUserAuthenticated && userDetails.role === "doctor") {
    if (unAuthRoutes.includes(activePath)) {
      return NextResponse.redirect(new URL("/doctor", request.url));
    }
  }

  // Redirect authenticated patient users away from unauthenticated routes
  if (isUserAuthenticated && userDetails.role === "patient") {
    if (unAuthRoutes.includes(activePath)) {
      return NextResponse.redirect(new URL("/patient", request.url));
    }
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
    "/admin/signup",
    "/admin/doctor-list",
    "/admin/add-doctor",
    "/admin/patients-list",
    "/admin/add-patients",
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
