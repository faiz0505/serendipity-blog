import NavigationBar from "@/app/components/NavigationBar";
import NextUIProvider from "@/lib/Provider";
import { Toaster } from "react-hot-toast";
export const metadata = {
  title: "Home",
};
export default function RootLayout({ children }) {
  return (
    <NextUIProvider>
      <NavigationBar />
      {children}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
    </NextUIProvider>
  );
}
