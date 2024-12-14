import type { Metadata } from "next";
import {inknut_antiqua_light} from "@/app/fonts/fonts";
import "./styles/globals.css";

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
      <body className={inknut_antiqua_light.className}>
        {children}
      </body>
    </html>
  );
}
