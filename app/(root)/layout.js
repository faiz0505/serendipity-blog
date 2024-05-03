import NavigationBar from "@/app/components/NavigationBar";
import NextUIProvider from "@/lib/Provider";
import Footer from "../components/sections/Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" scroll-smooth">
        <NextUIProvider>
          <NavigationBar />
          {children}
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
