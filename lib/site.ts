/*
 * Semua data usaha ada di sini, supaya nomor WA, alamat, dan lainnya cukup
 * diganti di satu tempat. Nilai bertanda TODO masih contoh.
 *
 * Bintang Petir Indonesia adalah merek layanan penangkal petir milik
 * PT Sinar Atap Mandiri (perusahaan yang sama dengan situs kanopi membrane).
 */
export const site = {
  name: "Bintang Petir Indonesia",
  company: "PT Sinar Atap Mandiri",
  tagline: "Spesialis Penangkal Petir",
  description:
    "Bintang Petir Indonesia melayani penjualan dan pemasangan penangkal petir konvensional, elektrostatis, dan surge arrester untuk rumah, gedung, hingga area industri.",
  url: "https://www.bintangpetirindonesia.com",
  // Dipakai untuk WhatsApp dan telepon. Format internasional tanpa "+" atau spasi.
  whatsapp: "6282110160333",
  phoneDisplay: "0821-1016-0333",
  email: "mandirisinaratap@gmail.com",
  address: ["Jl. Dr. Semeru Raya No. 6", "Grogol, Jakarta Barat"],
  // TODO
  hours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  // TODO
  serviceArea: "Jabodetabek dan sekitarnya",
  /*
   * TODO: harga paket di lib/packages.ts diambil dari situs Tema Grounding
   * Petir sebagai contoh. Biarkan false sampai harganya dikonfirmasi klien;
   * selama false, kartu paket menampilkan "Tanya harga" alih-alih angka.
   */
  showPrices: false,
  /*
   * Google Ads (akun 377-061-4221). Label konversi diambil dari Google Ads →
   * Sasaran → Konversi → (nama tindakan) → Penyiapan tag; bentuknya bagian
   * setelah garis miring di send_to: 'AW-18534957943/<label>'. Selama label
   * kosong, klik tidak dilaporkan sebagai konversi.
   */
  googleAds: {
    id: "AW-18534957943",
    conversions: {
      // Tindakan konversi "Klik WhatsApp" (kategori Kontak)
      whatsapp: "-RPjCIu2pagdEPeGlIZF",
      // Tindakan konversi "Klik Telepon" (kategori Kontak)
      phone: "UQjgCI62pagdEPeGlIZF",
    },
  },
} as const;

export function waLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address.join(", "),
)}`;

export const telLink = `tel:+${site.whatsapp}`;

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang-kami" },
  { label: "Layanan & Paket", href: "/layanan" },
  { label: "Proyek", href: "/galeri" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];
