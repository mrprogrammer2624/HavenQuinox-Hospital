import ThemeProvider from "@/contexts/ThemeProvider";
import "../assets/css/style.css";
import "antd-css-utilities/utility.min.css";
import Auth from "@/contexts/Auth";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Auth>
          <ThemeProvider>{children}</ThemeProvider>
        </Auth>
      </body>
    </html>
  );
}
