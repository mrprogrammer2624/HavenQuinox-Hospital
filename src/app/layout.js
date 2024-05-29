import ThemeProvider from "@/contexts/ThemeProvider";
import "../assets/css/style.css";
import "antd-css-utilities/utility.min.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
