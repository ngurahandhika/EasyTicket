import type { Metadata } from "next";

import "./css/globals.css";

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
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
