"use client";

import { DashboardLayout } from "@/components";
import { AdminMenuItems } from "@/utility";

export default function AdminLayout({ children }) {
  return (
    <DashboardLayout sidebarData={AdminMenuItems}>{children}</DashboardLayout>
  );
}
