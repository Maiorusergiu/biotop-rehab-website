import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: "../public/fonts/archivo-variable.ttf",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});
const plusJakartaSans = localFont({
  src: "../public/fonts/plus-jakarta-sans-variable.ttf",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Biotop Rehab — Înapoi la mișcare. Înapoi la tine.",
  description:
    "Descoperă Biotop Rehab: aplicația mobilă cu exerciții video pentru spate, umăr, genunchi și gleznă, cu expertiza Dr. Marian Oliviu.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ro"
      className={`${archivo.variable} ${plusJakartaSans.variable}`}
    >
      <head></head>
      <body>{children}</body>
    </html>
  );
}
