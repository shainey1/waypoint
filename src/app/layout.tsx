import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waypoint — Find Your Activity in Your New City",
  description:
    "City-specific guides for outdoor activities. Local spots, communities, and insider knowledge for recent movers.",
  openGraph: {
    title: "Waypoint — Find Your Activity in Your New City",
    description:
      "City-specific guides for outdoor activities. Local spots, communities, and insider knowledge for recent movers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="noise-bg min-h-screen">
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
