import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "eTech Vidyamandir | Empowering the Innovators of Tomorrow",
    template: "%s | eTech Vidyamandir"
  },
  description: "A premier CBSE-affiliated institution empowering students from grades 8 to 12 to achieve academic excellence and holistic growth.",
  keywords: ["CBSE", "School", "eTech Vidyamandir", "Education", "India", "Academics", "Holistic Growth"],
  authors: [{ name: "eTech Vidyamandir" }],
  creator: "eTech Vidyamandir",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://etech.edu.in",
    title: "eTech Vidyamandir | Excellence in Education",
    description: "A premier CBSE-affiliated institution empowering students to achieve academic excellence and holistic growth.",
    siteName: "eTech Vidyamandir",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "eTech Vidyamandir Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eTech Vidyamandir",
    description: "Empowering the Innovators of Tomorrow. A premier CBSE-affiliated institution.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
