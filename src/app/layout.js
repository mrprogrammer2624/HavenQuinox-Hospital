import ThemeProvider from "@/contexts/ThemeProvider";
import "../assets/css/style.css";
import "antd-css-utilities/utility.min.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import UserContextProvider from "@/contexts/Data/UserContextProvider";
import { Suspense } from "react";
import { HQBasicLoader } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<HQBasicLoader />}>
          <ThemeProvider>
            <UserContextProvider>
              {children}
              <SpeedInsights />
            </UserContextProvider>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
