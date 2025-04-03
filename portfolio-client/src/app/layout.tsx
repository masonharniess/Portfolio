import type { Metadata } from "next";
import "./styles/globals.css";

import type { Viewport } from 'next'

export const viewport: Viewport = {
  themeColor: 'black', //54595B
  width: '100%',
  viewportFit: `cover`
}

export const metadata: Metadata = {
  title: "Mason Harniess",
  description: "A portfolio of work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
