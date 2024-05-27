export const metadata = {
  title: "Authentication",
};
export default function RootLayout({ children }) {
  return (
    <main className="min-h-screen w-full flex justify-center py-5">
      {children}
    </main>
  );
}
