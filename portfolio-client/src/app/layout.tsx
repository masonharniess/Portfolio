import type { Metadata } from "next";
import "./styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
