import NavigationBar from "@/app/components/NavigationBar";
import NextUIProvider from "@/lib/Provider";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextUIProvider>
          <NavigationBar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
