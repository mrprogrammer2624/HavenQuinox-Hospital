import { AuthLayout } from "@/components";
import { Suspense } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<p>Loading feed...</p>}>
          <AuthLayout>{children}</AuthLayout>
        </Suspense>
      </body>
    </html>
  );
}
