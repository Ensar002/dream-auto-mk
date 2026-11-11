
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream Auto MK | Premium Car Dealership",
  description:
    "Discover premium vehicles at Dream Auto MK in North Macedonia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
