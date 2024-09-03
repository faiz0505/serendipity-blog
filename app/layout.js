import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
export const metadata = {
  metadataBase: new URL("https://serendipityblog.vercel.app"),
  title: "Serendipty Blog",
  description:
    "Discover a world of inspiration with our blog platform. Engage with diverse content, connect with like-minded readers, and share your stories. Explore topics ranging from lifestyle and tech to travel and wellness. Join our community today and start your journey of endless inspiration and insightful conversations",
  keywords: [
    "serendipity blog, blogs, technology, tech insights, tech articles, lifestyle blogs",
  ],
  verification: {
    google: "r1wALZ2zHe3rrnLtmtrUOyLQqITUJH9wWCCSYeIuiAE",
  },
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
