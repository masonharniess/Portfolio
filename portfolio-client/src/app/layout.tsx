import type { Metadata } from "next";
import "./styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleAnalytics } from "@next/third-parties/google"

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
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-89H21W1X98"/>
    </html>
  );
}
