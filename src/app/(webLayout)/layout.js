import { Footer, Header } from "@/components";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="pa-0">{children}</main>
      <Footer />
    </>
  );
}
