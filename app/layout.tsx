import type { Metadata } from "next";
import { Climate_Crisis, Geist_Mono } from "next/font/google";
import "./globals.css";

const climatecrisis = Climate_Crisis({
  weight:['400'],
  subsets:["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hogvengers",
  description: "Join the Hogvengers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${climatecrisis.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
