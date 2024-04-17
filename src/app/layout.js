import "../assets/css/style.css";
import "antd-css-utilities/utility.min.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
