const { NextResponse } = require("next/server");

export function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    // Web Site
    path === "/" ||
    // AUTHENTICATION
    path === "/authentication" ||
    path === "/authentication/login" ||
    path === "/authentication/signup" ||
    path === "/authentication/signup" ||
    path === "/authentication/signup" ||
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
    // AUTHENTICATION
    "/authentication",
    "/authentication/login",
    "/authentication/signup",
    "/authentication/verifyemail",
    // ADMIN
    "/admin/",
    "/admin/add-doctor",
    "/admin/patients-list",
    "/admin/add-patients",
    "/admin/staff-list",
    "/admin/add-staff",
    "/admin/add-staff",
    "/admin/holidays",
    "/admin/attendance-sheet",
    "/admin/doctor-schedule",
    "/admin/add-schedule",
    "/admin/appointment-list",
    "/admin/department-list",
    "/admin/add-department",
    "/admin/employee-salary",
    "/admin/invoice-list",
    "/admin/add-invoice",
    "/admin/blog-add",
    // STYLESHEETS
    "/stylesheets/",
    "/stylesheets/typography",
    "/stylesheets/basic-color",
    "/stylesheets/button",
    "/stylesheets/avatar",
    "/stylesheets/progress-bar",
    "/stylesheets/modal",
    "/stylesheets/alert",
    "/stylesheets/popover",
    "/stylesheets/tooltip",
    "/stylesheets/badge",
    "/stylesheets/accordion",
    "/stylesheets/calendar",
    "/stylesheets/dropzone",
    "/stylesheets/breadcrumb",
    "/stylesheets/pagination",
    "/stylesheets/creative-card",
    "/stylesheets/offcanvas",
    "/stylesheets/toast",
    "/stylesheets/input",
    "/stylesheets/rating",
    "/stylesheets/radio,-checkbox",
    "/stylesheets/switch",
    "/stylesheets/text-editor",
    "/stylesheets/date-picker",
    "/stylesheets/dropdown",
    "/stylesheets/select",
    "/stylesheets/counter",
    "/stylesheets/clip-board",
    "/stylesheets/range-slider",
  ],
};
