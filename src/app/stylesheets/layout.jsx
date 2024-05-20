"use client";

import { DashboardLayout } from "@/components";
import { stylesheetsMenuItems } from "@/utility";

export default function RootLayout({ children }) {
  return (
    <DashboardLayout sidebarData={stylesheetsMenuItems}>
      {children}
    </DashboardLayout>
  );
}
