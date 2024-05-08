"use client";

import { DashboardLayout } from "@/components";
import { AdminMenuItems } from "@/utility";

export default function RootLayout({ children }) {
  return (
    <DashboardLayout sidebarData={AdminMenuItems}>{children}</DashboardLayout>
  );
}
