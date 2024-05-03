import type { Metadata } from "next";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Simple Firebase REST API",
  description: "🔥 Firebase & Next.js | Blazing-fast and serverless REST API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
