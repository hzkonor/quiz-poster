import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expérience de stage",
  description: "Tentez l'expérience de l'évaluation des haies du Pilat !",
  openGraph: {
    title: 'Expérience de stage',
    description: "Tentez l'expérience de l'évaluation des haies du Pilat !",
    url: 'https://poster-haies-cvb.vercel.app/',
    siteName: 'Expérience de stage',
    images: [
      {
        url: 'https://poster-haies-cvb.vercel.app/images/background.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      }
    ],
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
