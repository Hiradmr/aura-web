import { AuraSite } from "@/components/aura-site";
import { contact, services, site } from "@/lib/config";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: contact.brand,
    url: site.url,
    telephone: "+905466115666",
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Tepebaşı Mahallesi 699 Sokak, Konfor Apartmanı Altı",
      addressLocality: "Kızıltepe",
      addressRegion: "Mardin",
      postalCode: "47400",
      addressCountry: "TR"
    },
    areaServed: ["Kızıltepe", "Mardin"],
    priceRange: "$$",
    image: `${site.url}/images/aura-hero.jpg`,
    sameAs: [contact.whatsapp],
    makesOffer: services.slice(0, 14).map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <AuraSite />
    </>
  );
}
