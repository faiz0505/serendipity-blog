import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export const metadata = {
  title: "Serendipty",
  description: "create blogs",
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
