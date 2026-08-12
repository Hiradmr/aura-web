export const contact = {
  brand: "Aura Estetik ve Güzellik Merkezi",
  phone: "0546 611 56 66",
  phoneHref: "tel:+905466115666",
  whatsapp: "https://wa.me/905466115666",
  email: "atikoklnc47@gmail.com",
  emailHref: "mailto:atikoklnc47@gmail.com",
  addressLines: [
    "Konfor Apartmanı Altı",
    "Yeni Halk Bankası Çaprazı",
    "Aura Estetik ve Güzellik Merkezi",
    "Tepebaşı Mahallesi",
    "699 Sokak",
    "47400 Kızıltepe / Mardin"
  ],
  mapsEmbed:
    "https://www.google.com/maps?q=Tepeba%C5%9F%C4%B1%20Mahallesi%20699%20Sokak%2047400%20K%C4%B1z%C4%B1ltepe%20Mardin&output=embed"
};

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.auraestetikguzellik.com",
  locale: "tr_TR"
};

export const services = [
  "Dudak Dolgusu",
  "Çene Dolgusu",
  "Jawline Dolgusu",
  "Burun Dolgusu",
  "Botoks",
  "Gençlik Aşısı",
  "Cilt Bakımı",
  "Lazer Epilasyon",
  "Mezoterapi",
  "PRP",
  "Altın İğne",
  "Kaş Tasarımı",
  "Kirpik Lifting",
  "Medikal Estetik İşlemleri",
  "Diğer tüm estetik ve güzellik uygulamaları"
];

export const navItems = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Aura", href: "#neden-aura" },
  { label: "Galeri", href: "#galeri" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "İletişim", href: "#iletisim" }
];

export const images = {
  hero: "/images/aura-hero.jpg",
  about: "/images/aura-about.jpg",
  gallery: [
    {
      src: "/images/before-after-lips-01.jpg",
      alt: "Dudak dolgusu öncesi sonrası",
      width: 1290,
      height: 1263
    },
    {
      src: "/images/before-after-jawline.jpg",
      alt: "Jawline dolgusu öncesi sonrası",
      width: 1290,
      height: 1291
    },
    {
      src: "/images/before-after-nose.jpg",
      alt: "Burun dolgusu öncesi sonrası",
      width: 1290,
      height: 1171
    },
    {
      src: "/images/before-after-botox.jpg",
      alt: "Botoks öncesi sonrası",
      width: 1290,
      height: 1548
    },
    {
      src: "/images/before-after-hair.jpg",
      alt: "Saç uygulaması öncesi sonrası",
      width: 1290,
      height: 1621
    },
    {
      src: "/images/before-after-lips-02.jpg",
      alt: "Dudak ve çene uygulaması öncesi sonrası",
      width: 1290,
      height: 1184
    }
  ]
};
