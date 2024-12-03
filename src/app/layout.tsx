import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google'
import "./globals.css";


export const metadata: Metadata = {
  title: "Tinybird Labs",
  description: "Tinybird Labs builds experimental projects around Tinybird.",
};

const jbm = JetBrains_Mono({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jbm.className} antialiased bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
