import type { Metadata } from "next";
import "./globals.css";
import { LiveChat } from "@/components/live-chat";

export const metadata: Metadata = {
  title: "Sea Pearl Biotech | Algae-Based Ingredients and Spirulina Manufacturing",
  description: "Sea Pearl Biotech cultivates and manufactures algae-based ingredients for modern product development.",
  icons: {
    icon: "/original/cropped-sea-pearl-3-06-192x192.png",
    shortcut: "/original/cropped-sea-pearl-3-06-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<LiveChat/></body>
    </html>
  );
}
