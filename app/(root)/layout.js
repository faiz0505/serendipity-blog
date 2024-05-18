import NavigationBar from "@/app/components/NavigationBar";
import NextUIProvider from "@/lib/Provider";
import Footer from "../components/sections/Footer";
export default function RootLayout({ children }) {
  return (
    <NextUIProvider>
      <NavigationBar />
      {children}
      {/* <Footer /> */}
    </NextUIProvider>
  );
}
