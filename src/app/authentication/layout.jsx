import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <div>
      <Link href={"authentication/login"}>login</Link>
      {children}
    </div>
  );
}
