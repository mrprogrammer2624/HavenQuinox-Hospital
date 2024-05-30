"use client";

import { DashboardLayout, HQBasicLoader } from "@/components";
import { AdminMenuItems } from "@/utility";
import { Suspense } from "react";

export default function AdminLayout({ children }) {
  return (
    <Suspense fallback={<HQBasicLoader />}>
      <DashboardLayout sidebarData={AdminMenuItems}>{children}</DashboardLayout>
    </Suspense>
  );
}
