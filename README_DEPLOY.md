# Aura Estetik ve Güzellik Merkezi - Yayın Rehberi

## Google'da yayınlama mantığı

Google bir web sitesini doğrudan barındırmaz. Önce siteyi internette bir hosting sağlayıcısına yüklersiniz, sonra Google Search Console üzerinden Google'a bildirirsiniz.

## En kolay önerilen yol: Vercel

1. Bir alan adı alın: örnek `auraestetik.com`.
2. Projeyi GitHub'a yükleyin.
3. https://vercel.com üzerinde yeni proje oluşturun.
4. Framework olarak Next.js otomatik algılanır.
5. Environment Variables bölümüne şunu ekleyin:
   `NEXT_PUBLIC_SITE_URL=https://www.alanadiniz.com`
6. Deploy edin.
7. Domain ayarından alan adınızı Vercel'e bağlayın.

## Google'a bildirme

1. https://search.google.com/search-console adresine girin.
2. Alan adınızı ekleyin.
3. Doğrulama için verilen DNS kaydını alan adı panelinize ekleyin.
4. Sitemap olarak şunu gönderin:
   `https://www.alanadiniz.com/sitemap.xml`

## Komutlar

Geliştirme:

```bash
pnpm install
pnpm dev
```

Yayın build kontrolü:

```bash
pnpm build
```

## Önemli

Yayına almadan önce `.env.example` dosyasındaki örnek değeri gerçek alan adınızla değiştirip hosting panelinde `NEXT_PUBLIC_SITE_URL` olarak ekleyin.
