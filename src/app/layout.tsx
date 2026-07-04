import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/config/site";
import { JsonLd } from "@/components/json-ld";
import { LanguageProvider } from "@/i18n/provider";

const sans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const display = localFont({
  src: "./fonts/Fraunces.woff2",
  variable: "--font-display",
  weight: "300 900",
  display: "swap",
});

const titulo = `${SITE.nombre} | Presencia academica en Peru, Chile y Argentina`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: titulo,
    template: `%s | ${SITE.sigla}`,
  },
  description: SITE.descripcion,
  applicationName: SITE.nombre,
  keywords: [
    "Academic Global Solutions",
    "AGS",
    "asesoria academica",
    "tesis",
    "Peru",
    "Chile",
    "Argentina",
    "EducaProject",
    "Tareapp",
    "Trabajos Helper",
  ],
  authors: [{ name: SITE.nombre }],
  creator: SITE.nombre,
  publisher: SITE.nombre,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.nombre,
    title: titulo,
    description: SITE.descripcion,
    images: [{ url: "/logo.png", width: 1200, height: 1200, alt: SITE.nombre }],
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: SITE.descripcion,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-touch-icon-180.png",
  },
};

export const viewport = {
  themeColor: "#F2EFE2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${sans.variable} ${mono.variable} ${display.variable}`}
    >
      <body className="font-sans antialiased">
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
