import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sendaflare.app/"),
  title: "Flare — Send the signal. See who's down.",
  description:
    "Flare lets you broadcast a spontaneous hangout signal to nearby people. Pick an activity, set a timeframe, fire it off. No planning, no event pages, no commitment until someone bites.",
  keywords: [
    "flare",
    "spontaneous hangout",
    "meetup app",
    "nearby friends",
    "social app",
    "location-based social",
  ],
  openGraph: {
    title: "Flare — Send the signal. See who's down.",
    description:
      "Broadcast a spontaneous hangout signal to nearby people. No planning, no commitment until someone bites.",
    url: "https://sendaflare.app/",
    siteName: "Flare",
    images: [
      {
        url: "/og-image.png",
        width: 1120,
        height: 630,
        alt: "Flare — Send the signal. See who's down.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flare — Send the signal. See who's down.",
    description:
      "Broadcast a spontaneous hangout signal to nearby people. No planning, no commitment until someone bites.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
