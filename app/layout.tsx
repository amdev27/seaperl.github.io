import { sitePath } from "@/lib/site-path";
import type { Metadata } from "next";
import "./globals.css";
import { LiveChat } from "@/components/live-chat";
import { SiteMotion } from "@/components/site-motion";

export const metadata: Metadata = {
  title: "Sea Pearl Biotech | Algae-Based Ingredients and Spirulina Manufacturing",
  description: "Sea Pearl Biotech cultivates and manufactures algae-based ingredients for modern product development.",
  icons: {
    icon: sitePath("/original/cropped-sea-pearl-3-06-192x192.png"),
    shortcut: sitePath("/original/cropped-sea-pearl-3-06-192x192.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}<SiteMotion/><LiveChat/></body>
    </html>
  );
}
