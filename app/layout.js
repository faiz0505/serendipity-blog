import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import NextTopLoader from "nextjs-toploader";

export const metadata = {
  title: "Serendipty",
  description:
    "Discover a world of inspiration with our blog platform. Engage with diverse content, connect with like-minded readers, and share your stories. Explore topics ranging from lifestyle and tech to travel and wellness. Join our community today and start your journey of endless inspiration and insightful conversations",
};
export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <NextTopLoader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
