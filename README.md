# bintang-petir-indonesia

Website Bintang Petir Indonesia (unit usaha PT Sinar Atap Mandiri): penjualan dan pemasangan penangkal petir konvensional, elektrostatis, dan surge arrester.
Next.js 16 (App Router) + Tailwind CSS v4, semua halaman statis. Struktur dan komponennya sama dengan situs membrane `sinar-atap-mandiri`; hanya warna, logo, isi, dan landing page-nya yang berbeda.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Sebelum dipublikasikan

Semua data yang masih contoh ditandai `TODO` di kode (`grep -rn TODO app components lib`).

| Apa | Di mana |
|---|---|
| Jam operasional, area layanan (nomor WA/telepon, email, dan alamat sudah asli) | `lib/site.ts` |
| **Harga paket**: masih disembunyikan (`showPrices: false`). Isi harga dan perangkat masih mengikuti Tema Grounding Petir | `lib/packages.ts`, `lib/site.ts` |
| Logo (masih logo sementara) | `components/Logo.tsx`, `app/icon.tsx` |
| Profil, nilai, visi & misi | `app/tentang-kami/page.tsx` |
| Foto dokumentasi | `public/images/galeri/` + daftar di `lib/photos.ts` |

## Asal foto

- `public/images/galeri/` disalin dari situs Tema Grounding Petir (folder `Hidayah-Canopy`).
- `public/images/produk/*.jpg` dipotong dari flyer promosi Tema Grounding Petir. Bagian harga, "ORDER NOW", judul flyer, dan stiker "AVAILABLE NOW" sudah dibuang, sehingga yang tersisa hanya foto perangkatnya.
- `skema-*.png` disalin apa adanya.

## Struktur

- `app/`: halaman (beranda, tentang-kami, layanan, galeri, artikel, kontak), plus sitemap, robots, dan favicon.
- `components/home/`: section-section beranda (statis, tanpa carousel).
- `components/`: komponen bersama (Navbar, Footer, PackageCard, Comparison, Process, CtaBanner, dan lainnya). Motif latarnya ada di `RadiusRings.tsx`, berupa lingkaran radius proteksi.
- `lib/`: data usaha, foto, paket, dan artikel.
