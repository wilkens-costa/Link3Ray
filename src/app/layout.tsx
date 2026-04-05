import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dra. Luzia Rayane | Odontologia",
  description:
    "Dra. Luzia Rayane — Cirurgiã-Dentista. Agende sua consulta e conheça nossos serviços de odontologia estética, clareamento, prótese e mais.",
  keywords: [
    "dentista",
    "odontologia",
    "clareamento dental",
    "lentes de contato dental",
    "prótese dentária",
    "Dra. Luzia Rayane",
  ],
  authors: [{ name: "Dra. Luzia Rayane" }],
  openGraph: {
    title: "Dra. Luzia Rayane | Odontologia",
    description:
      "Cirurgiã-Dentista — Agende sua consulta e transforme seu sorriso.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <body className="min-h-dvh bg-pattern font-sans text-text-primary">
        {children}
      </body>
    </html>
  );
}
