import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple Firebase CRUD API",
  description: "🔥 Firebase & Next.js | Blazing-fast and serverless CRUD API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
