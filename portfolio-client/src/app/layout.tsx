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
  description: "IT Support Technician. First-Class Honours Graduate of Computer Science. Enthusiastic about computer systems, networks, and programming. ",
  openGraph: {
    title: "Mason Harniess",
    url: "https://masonharniess.com",
    siteName: "Mason Harniess",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4E03AQFQslrc5wBBEQ/profile-displayphoto-shrink_800_800/B4EZbz8Vw5HYAk-/0/1747849404321?e=1753920000&v=beta&t=nDFrDw5qSTb7GxsroVRXbuX3A4JFoRHRDhu05dAGDqI",
        width: 400,
        height: 400,
      }
    ]
  }
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
