import type { Metadata } from "next";

import "./css/globals.css";

import Navbar from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";

export const metadata: Metadata = {
  title: "Clone TokoEvent",
  description: "Clone TokoEvent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
