"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Stars,
  Sun,
  Syringe,
  X,
  Zap
} from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { contact, images, navItems, services } from "@/lib/config";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const reasons = [
  { title: "Uzman Kadro", icon: ShieldCheck },
  { title: "Hijyenik ve Steril Ortam", icon: Sparkles },
  { title: "Son Teknoloji Cihazlar", icon: Zap },
  { title: "Kişiye Özel Uygulamalar", icon: Stars }
];

export function AuraSite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
    setTimeout(() => setSent(false), 3500);
  }

  const selected = selectedImage === null ? null : images.gallery[selectedImage]?.src;

  return (
    <main className="overflow-hidden">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        dark={dark}
        setDark={setDark}
      />
      <Hero />
      <Services />
      <WhyAura />
      <Gallery selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      <About />
      <Contact handleSubmit={handleSubmit} sent={sent} />
      <Footer />
      <FloatingWhatsApp />
      <AnimatePresence>
        {selected && (
          <Lightbox
            src={selected}
            index={selectedImage}
            onClose={() => setSelectedImage(null)}
            onMove={(direction) =>
              setSelectedImage((current) => {
                const safeCurrent = current ?? 0;
                return (safeCurrent + direction + images.gallery.length) % images.gallery.length;
              })
            }
          />
        )}
      </AnimatePresence>
    </main>
  );
}

function Header({
  menuOpen,
  setMenuOpen,
  dark,
  setDark
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-6 sm:py-4">
      <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-[18px] px-3 py-2.5 shadow-glass sm:rounded-[20px] sm:px-4 sm:py-3">
        <a href="#anasayfa" className="flex items-center gap-3" aria-label="Aura ana sayfa">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-aura-gradient text-base font-black text-white shadow-aura sm:h-11 sm:w-11 sm:text-lg">
            A
          </span>
          <span className="leading-tight">
            <span className="block font-display text-xs font-bold uppercase tracking-[0.16em] text-aura-purple dark:text-aura-orchid sm:text-sm sm:tracking-[0.18em]">
              Aura
            </span>
            <span className="block max-w-[9.5rem] truncate text-[11px] font-semibold text-aura-ink/70 dark:text-white/70 sm:max-w-none sm:text-xs">
              Estetik ve Güzellik
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-aura-ink/70 transition hover:text-aura-purple dark:text-white/70 dark:hover:text-aura-orchid"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-aura-purple/10 bg-white/70 text-aura-purple transition hover:bg-aura-purple hover:text-white sm:h-11 sm:w-11 dark:border-white/10 dark:bg-white/10 dark:text-aura-orchid"
            aria-label="Tema değiştir"
          >
            {dark ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a
            href={contact.phoneHref}
            className="hidden items-center gap-2 rounded-2xl bg-aura-purple px-5 py-3 text-sm font-bold text-white shadow-aura transition hover:-translate-y-0.5 hover:bg-aura-violet sm:flex"
          >
            <Phone size={17} />
            Ara
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-2xl border border-aura-purple/10 bg-white/70 text-aura-purple sm:h-11 sm:w-11 lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-aura-orchid"
            aria-label="Menüyü aç"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-auto mt-3 grid max-w-7xl gap-2 rounded-[20px] p-4 shadow-glass lg:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-aura-ink/75 hover:bg-aura-purple/10 dark:text-white/75"
              >
                {item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="anasayfa" className="relative min-h-[720px] overflow-hidden pt-24 text-white sm:min-h-[92vh] sm:pt-28">
      <Image
        src={images.hero}
        alt="Modern güzellik merkezi uygulama odası"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-[66%_center] sm:object-center"
      />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(24,10,35,0.88)_0%,rgba(106,13,173,0.66)_48%,rgba(24,10,35,0.62)_100%)] sm:bg-[linear-gradient(110deg,rgba(24,10,35,0.86)_0%,rgba(106,13,173,0.58)_48%,rgba(255,255,255,0.12)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-44 bg-gradient-to-t from-[#fbf9fd] to-transparent dark:from-[#100b16]" />
      <div className="relative z-20 mx-auto flex min-h-[620px] max-w-7xl items-center px-4 pb-12 sm:min-h-[78vh] sm:px-6 sm:pb-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-2 text-xs font-semibold backdrop-blur-xl sm:mb-6 sm:px-4 sm:text-sm">
            <Sparkles size={17} />
            Premium medikal estetik deneyimi
          </div>
          <h1 className="max-w-[22rem] font-display text-[2.35rem] font-extrabold leading-[1.08] sm:max-w-none sm:text-6xl lg:text-7xl">
            Güzelliğinizi Profesyonel Dokunuşlarla Ortaya Çıkarıyoruz
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/84 sm:mt-7 sm:max-w-2xl sm:text-lg sm:leading-8">
            Aura Estetik ve Güzellik Merkezi olarak son teknoloji cihazlarımız ve uzman
            ekibimizle doğal, güvenilir ve profesyonel estetik hizmetleri sunuyoruz.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <a
              href="#iletisim"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-extrabold text-aura-purple shadow-aura transition hover:-translate-y-1 hover:bg-aura-mist sm:w-auto"
            >
              Hemen Randevu Al
              <ArrowRight size={18} />
            </a>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/12 px-6 py-4 text-sm font-extrabold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp'tan Yaz
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-9 max-w-3xl text-center sm:mb-14"
    >
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-aura-purple dark:text-aura-orchid sm:text-sm sm:tracking-[0.22em]">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-tight text-aura-ink sm:mt-4 sm:text-5xl dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-aura-ink/62 sm:mt-5 sm:text-base sm:leading-8 dark:text-white/64">{text}</p>
    </motion.div>
  );
}

function Services() {
  return (
    <section id="hizmetler" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          eyebrow="Hizmetlerimiz"
          title="Doğal sonuçlara odaklanan estetik uygulamalar"
          text="Yüz, cilt ve güzellik ihtiyaçlarınız için modern cihazlar ve kişiye özel planlama ile profesyonel hizmet sunuyoruz."
        />
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 0.45, delay: Math.min(index * 0.035, 0.22) }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass group rounded-[18px] p-5 shadow-glass sm:min-h-32 sm:rounded-[20px] sm:p-6"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-2xl bg-aura-purple/10 text-aura-purple transition group-hover:bg-aura-purple group-hover:text-white sm:mb-5 sm:h-12 sm:w-12 dark:bg-white/10 dark:text-aura-orchid">
                <Syringe size={20} />
              </div>
              <h3 className="font-display text-base font-bold text-aura-ink sm:text-lg dark:text-white">
                {service}
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-aura-ink/58 sm:mt-3 sm:text-sm dark:text-white/58">
                Aura'nın uzman yaklaşımıyla güvenli, zarif ve ihtiyaca özel uygulama planı.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyAura() {
  return (
    <section id="neden-aura" className="section-pad bg-white/60 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          eyebrow="Neden Aura?"
          title="Güven veren, rafine ve profesyonel yaklaşım"
          text="Her işlemde hijyen, teknoloji ve uzmanlığı aynı hassas çizgide buluşturuyoruz."
        />
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {reasons.map(({ title, icon: Icon }) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="rounded-[18px] border border-aura-purple/10 bg-white p-5 shadow-glass sm:rounded-[20px] sm:p-7 dark:border-white/10 dark:bg-white/5"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-aura-gradient text-white shadow-aura sm:mb-6 sm:h-14 sm:w-14">
                <Icon size={22} />
              </div>
              <h3 className="flex items-center gap-2 font-display text-base font-extrabold text-aura-ink sm:text-lg dark:text-white">
                <Check size={18} className="text-aura-purple dark:text-aura-orchid" />
                {title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery({
  selectedImage,
  setSelectedImage
}: {
  selectedImage: number | null;
  setSelectedImage: (index: number | null) => void;
}) {
  return (
    <section id="galeri" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          eyebrow="Galeri"
          title="Before & After ilhamı taşıyan zarif görünüm"
          text="Modern estetik dokunuşları, doğal güzelliği öne çıkaran seçilmiş görsellerle keşfedin."
        />
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {images.gallery.map((image, index) => (
            <motion.button
              key={image.src}
              type="button"
              onClick={() => setSelectedImage(index)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              whileHover={{ y: -7, scale: 1.01 }}
              className="group relative block aspect-[3/4] w-full overflow-hidden rounded-[16px] border border-aura-purple/10 bg-white p-1.5 shadow-glass sm:aspect-[4/5] sm:rounded-[20px] sm:p-3 dark:border-white/10 dark:bg-white/[0.08]"
              aria-label={`${index + 1}. galeri görselini büyüt`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                loading="eager"
                unoptimized
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="rounded-[14px] object-cover transition duration-700 group-hover:scale-[1.035] sm:rounded-2xl"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-aura-ink/28 via-transparent to-transparent opacity-80" />
              <span className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/92 px-2 py-1.5 text-center text-[10px] font-extrabold leading-4 text-aura-purple backdrop-blur-xl sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:px-4 sm:py-2 sm:text-xs sm:leading-5">
                {image.alt}
              </span>
            </motion.button>
          ))}
        </div>
        <span className="sr-only">{selectedImage}</span>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="hakkimizda" className="section-pad bg-white/70 dark:bg-white/[0.03]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-8 max-w-4xl text-center sm:mb-10"
        >
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-aura-purple dark:text-aura-orchid sm:text-sm sm:tracking-[0.22em]">
            Hakkımızda
          </p>
          <h2 className="mt-3 font-display text-[2rem] font-extrabold leading-tight text-aura-ink sm:mt-4 sm:text-5xl dark:text-white">
            Doğallığı esas alan premium güzellik deneyimi
          </h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="relative mb-6 overflow-hidden rounded-[18px] bg-aura-ink shadow-aura sm:mb-12 sm:rounded-[20px]"
        >
          <Image
            src={images.about}
            alt="Aura Estetik modern bakım atmosferi"
            width={1290}
            height={546}
            loading="eager"
            unoptimized
            sizes="100vw"
            className="h-[220px] w-full object-cover object-center sm:h-auto"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-aura-ink/35 via-transparent to-aura-purple/10" />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mx-auto grid max-w-6xl gap-4 rounded-[18px] border border-aura-purple/10 bg-white/72 p-5 text-sm leading-7 text-aura-ink/68 shadow-glass sm:gap-5 sm:rounded-[20px] sm:p-6 sm:text-base sm:leading-8 md:grid-cols-3 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/68"
        >
          <p>
            Aura Estetik ve Güzellik Merkezi olarak güzelliğinizi doğal ve profesyonel
            dokunuşlarla ortaya çıkarmayı hedefliyoruz.
          </p>
          <p>
            Uzman ekibimiz, hijyenik çalışma ortamımız ve son teknoloji cihazlarımız ile
            danışanlarımıza güvenilir ve kaliteli hizmet sunuyoruz.
          </p>
          <p>
            Müşteri memnuniyetini ön planda tutarak her uygulamayı kişiye özel planlıyor ve
            estetikte doğallığı esas alıyoruz.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Contact({
  handleSubmit,
  sent
}: {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  sent: boolean;
}) {
  return (
    <section id="iletisim" className="section-pad">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionTitle
          eyebrow="İletişim"
          title="Randevu ve danışma için bize ulaşın"
          text="Telefon, WhatsApp veya iletişim formu üzerinden Aura ekibiyle hızlıca iletişime geçebilirsiniz."
        />
        <div className="grid gap-5 sm:gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <ContactItem icon={Phone} label="Telefon / WhatsApp" value={contact.phone} href={contact.phoneHref} />
            <ContactItem icon={MessageCircle} label="WhatsApp" value="WhatsApp'tan Yaz" href={contact.whatsapp} />
            <ContactItem icon={Mail} label="E-posta" value={contact.email} href={contact.emailHref} />
            <div className="glass rounded-[20px] p-6 shadow-glass">
              <div className="mb-4 flex items-center gap-3 text-aura-purple dark:text-aura-orchid">
                <MapPin size={21} />
                <span className="font-bold">Adres</span>
              </div>
              <p className="text-sm leading-7 text-aura-ink/68 dark:text-white/68">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <iframe
              title="Aura Estetik ve Güzellik Merkezi harita"
              src={contact.mapsEmbed}
              loading="lazy"
              className="h-64 w-full rounded-[18px] border-0 shadow-glass sm:h-72 sm:rounded-[20px]"
            />
          </div>
          <form onSubmit={handleSubmit} className="glass rounded-[18px] p-5 shadow-glass sm:rounded-[20px] sm:p-8">
            <div className="grid gap-5">
              <label className="grid gap-2 text-sm font-bold text-aura-ink dark:text-white">
                Ad Soyad
                <input
                  required
                  name="name"
                  className="min-w-0 rounded-2xl border border-aura-purple/10 bg-white/80 px-4 py-4 font-medium outline-none transition focus:border-aura-purple focus:ring-4 focus:ring-aura-purple/10 dark:border-white/10 dark:bg-white/10"
                  placeholder="Adınız ve soyadınız"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-aura-ink dark:text-white">
                Telefon
                <input
                  required
                  name="phone"
                  inputMode="tel"
                  className="min-w-0 rounded-2xl border border-aura-purple/10 bg-white/80 px-4 py-4 font-medium outline-none transition focus:border-aura-purple focus:ring-4 focus:ring-aura-purple/10 dark:border-white/10 dark:bg-white/10"
                  placeholder="05xx xxx xx xx"
                />
              </label>
              <label className="grid gap-2 text-sm font-bold text-aura-ink dark:text-white">
                Mesaj
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="min-w-0 resize-none rounded-2xl border border-aura-purple/10 bg-white/80 px-4 py-4 font-medium outline-none transition focus:border-aura-purple focus:ring-4 focus:ring-aura-purple/10 dark:border-white/10 dark:bg-white/10"
                  placeholder="Almak istediğiniz hizmeti yazabilirsiniz"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-aura-purple px-6 py-4 text-sm font-extrabold text-white shadow-aura transition hover:-translate-y-1 hover:bg-aura-violet"
              >
                <Send size={18} />
                Gönder
              </button>
              {sent && (
                <p className="rounded-2xl bg-aura-purple/10 px-4 py-3 text-sm font-bold text-aura-purple dark:text-aura-orchid">
                  Mesajınız alındı. En kısa sürede dönüş yapılacaktır.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="glass flex min-w-0 items-center gap-3 rounded-[18px] p-4 shadow-glass transition hover:-translate-y-1 sm:gap-4 sm:rounded-[20px] sm:p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-aura-purple/10 text-aura-purple dark:bg-white/10 dark:text-aura-orchid">
        <Icon size={21} />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-extrabold uppercase tracking-[0.16em] text-aura-ink/42 dark:text-white/42">
          {label}
        </span>
        <span className="mt-1 block break-words font-display text-base font-extrabold text-aura-ink sm:text-lg dark:text-white">
          {value}
        </span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-aura-ink px-5 pb-24 pt-12 text-white sm:px-6 sm:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1.1fr] lg:gap-10">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-aura-gradient text-lg font-black shadow-aura">
              A
            </span>
            <span className="font-display text-lg font-extrabold sm:text-xl">Aura Estetik</span>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/62">
            Doğal güzelliği profesyonel dokunuşlarla ortaya çıkaran, güven veren ve premium
            estetik deneyimi sunan güzellik merkezi.
          </p>
        </div>
        <FooterColumn title="Hizmetler" links={services.slice(0, 6)} />
        <FooterColumn title="Hızlı Menü" links={navItems.map((item) => item.label)} hrefs={navItems.map((item) => item.href)} />
        <div>
          <h3 className="mb-5 font-display text-lg font-extrabold">İletişim</h3>
          <div className="space-y-3 break-words text-sm leading-7 text-white/70">
            <p>Telefon: {contact.phone}</p>
            <p>WhatsApp: {contact.phone}</p>
            <p>E-posta: {contact.email}</p>
            <p>{contact.addressLines.join(", ")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links, hrefs }: { title: string; links: string[]; hrefs?: string[] }) {
  return (
    <div>
      <h3 className="mb-5 font-display text-lg font-extrabold">{title}</h3>
      <div className="grid gap-3">
        {links.map((link, index) => (
          <a key={link} href={hrefs?.[index] ?? "#hizmetler"} className="text-sm text-white/62 transition hover:text-white">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.35)] transition hover:-translate-y-1 sm:bottom-5 sm:right-5 sm:h-14 sm:w-14"
      aria-label="WhatsApp'tan yaz"
    >
      <MessageCircle size={26} />
    </a>
  );
}

function Lightbox({
  src,
  index,
  onClose,
  onMove
}: {
  src: string;
  index: number | null;
  onClose: () => void;
  onMove: (direction: number) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] grid place-items-center bg-aura-ink/86 p-3 backdrop-blur-xl sm:p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-2xl bg-white/12 text-white backdrop-blur-xl sm:right-5 sm:top-5 sm:h-12 sm:w-12"
        aria-label="Galeriyi kapat"
      >
        <X size={22} />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onMove(-1);
        }}
        className="absolute bottom-4 left-4 z-10 grid h-11 w-11 place-items-center rounded-2xl bg-white/12 text-white backdrop-blur-xl sm:left-5 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
        aria-label="Önceki görsel"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onMove(1);
        }}
        className="absolute bottom-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-2xl bg-white/12 text-white backdrop-blur-xl sm:right-5 sm:top-1/2 sm:h-12 sm:w-12 sm:-translate-y-1/2"
        aria-label="Sonraki görsel"
      >
        <ChevronRight size={24} />
      </button>
      <motion.div
        initial={{ scale: 0.94, y: 18 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.94, y: 18 }}
        onClick={(event) => event.stopPropagation()}
        className="relative aspect-[4/5] max-h-[82vh] w-full max-w-4xl overflow-hidden rounded-[18px] bg-white shadow-aura sm:max-h-[86vh] sm:rounded-[20px]"
      >
        <Image
          src={src}
          alt={`Büyütülmüş galeri görseli ${(index ?? 0) + 1}`}
          fill
          loading="eager"
          unoptimized
          sizes="90vw"
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}

