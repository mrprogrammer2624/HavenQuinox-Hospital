import ThemeProvider from "@/contexts/ThemeProvider";
import "../assets/css/style.css";
import "antd-css-utilities/utility.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
