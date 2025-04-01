import type { Metadata } from "next";
import {roboto_standard} from "@/app/fonts/fonts";
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
      <body className={roboto_standard.className}>
        {children}
      </body>
    </html>
  );
}
