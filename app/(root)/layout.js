import NavigationBar from "@/app/components/NavigationBar";
import NextUIProvider from "@/lib/Provider";
import Footer from "../components/sections/Footer";
export const metadata = {
  title: "Home",
};
export default function RootLayout({ children }) {
  return (
    <NextUIProvider>
      <NavigationBar />
      {children}
      {/* <Footer /> */}
    </NextUIProvider>
  );
}
