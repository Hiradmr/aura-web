import type { Metadata } from "next";
import "./globals.css";
import { contact, images, site } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${contact.brand} | Premium Estetik ve Güzellik Merkezi`,
  description:
    "Aura Estetik ve Güzellik Merkezi, Kızıltepe/Mardin'de uzman kadro, hijyenik ortam ve son teknoloji cihazlarla profesyonel estetik hizmetleri sunar.",
  keywords: [
    "Aura Estetik",
    "Kızıltepe estetik merkezi",
    "Mardin güzellik merkezi",
    "dudak dolgusu",
    "botoks",
    "lazer epilasyon",
    "cilt bakımı"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: contact.brand,
    description:
      "Doğal, güvenilir ve profesyonel estetik hizmetleri için Aura Estetik ve Güzellik Merkezi.",
    type: "website",
    locale: site.locale,
    url: site.url,
    images: [
      {
        url: images.hero,
        width: 1290,
        height: 647,
        alt: contact.brand
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
