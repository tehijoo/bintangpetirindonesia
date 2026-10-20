import type { StaticImageData } from "next/image";

// Diimpor (bukan dirujuk lewat path) supaya ukuran foto dan blur placeholder
// tersedia otomatis, dan URL-nya ikut berubah saat file ditimpa foto baru.
import g1 from "@/public/images/galeri/galeri-1.jpg";
import g2 from "@/public/images/galeri/galeri-2.jpg";
import g3 from "@/public/images/galeri/galeri-3.jpg";
import g4 from "@/public/images/galeri/galeri-4.jpg";
import g5 from "@/public/images/galeri/galeri-5.jpg";
import g6 from "@/public/images/galeri/galeri-6.jpg";
import g7 from "@/public/images/galeri/galeri-7.jpg";
import g8 from "@/public/images/galeri/galeri-8.jpg";
import g9 from "@/public/images/galeri/galeri-9.jpg";
import g10 from "@/public/images/galeri/galeri-10.jpg";
import g11 from "@/public/images/galeri/galeri-11.jpg";
import g12 from "@/public/images/galeri/galeri-12.jpg";

export type PhotoCategory = "pemasangan" | "terminal" | "grounding";

export type Photo = {
  id: string;
  src: StaticImageData;
  label: string;
  alt: string;
  category: PhotoCategory;
};

export const photoCategories: { id: PhotoCategory; label: string }[] = [
  { id: "pemasangan", label: "Pemasangan" },
  { id: "terminal", label: "Terminal Terpasang" },
  { id: "grounding", label: "Grounding & Pengujian" },
];

/*
 * Dokumentasi diambil dari situs Tema Grounding Petir.
 * TODO: tambahkan atau ganti dengan dokumentasi proyek Bintang Petir sendiri.
 */
export const photos: Photo[] = [
  { id: "6", src: g6, label: "Pemasangan Terminal", category: "pemasangan", alt: "Teknisi memasang head terminal penangkal petir di puncak tiang" },
  { id: "11", src: g11, label: "Terminal di Atap", category: "terminal", alt: "Penangkal petir terpasang di atap rumah dengan latar permukiman" },
  { id: "2", src: g2, label: "Tes Grounding", category: "grounding", alt: "Earth tester menunjukkan hasil pengukuran tahanan grounding" },
  { id: "7", src: g7, label: "Pemasangan di Tower", category: "pemasangan", alt: "Teknisi naik tower rangka besi untuk memasang penangkal petir" },
  { id: "10", src: g10, label: "Terminal di Atap", category: "terminal", alt: "Terminal penangkal petir berujung tembaga di atap bangunan" },
  { id: "5", src: g5, label: "Pembumian", category: "grounding", alt: "Pekerja memasang batang grounding (pembumian) di tanah" },
  { id: "12", src: g12, label: "Tiang Bertali Penyangga", category: "terminal", alt: "Head terminal elektrostatis di atas tiang dengan tali penyangga" },
  { id: "3", src: g3, label: "Tiang di Area Proyek", category: "pemasangan", alt: "Tiang penangkal petir berdiri di samping bangunan yang sedang dibangun" },
  { id: "9", src: g9, label: "Box Kontrol", category: "grounding", alt: "Pengukuran tahanan grounding di box kontrol penangkal petir" },
  { id: "1", src: g1, label: "Head Terminal", category: "terminal", alt: "Head terminal penangkal petir dengan latar langit berawan" },
  { id: "8", src: g8, label: "Tower Penangkal", category: "pemasangan", alt: "Tower rangka besi untuk penangkal petir" },
  { id: "4", src: g4, label: "Tiang & Terminal", category: "terminal", alt: "Tiang penangkal petir dengan terminal di ujungnya" },
];

export function getPhoto(id: string) {
  const photo = photos.find((p) => p.id === id);
  if (!photo) throw new Error(`Foto "${id}" tidak ada di lib/photos.ts`);
  return photo;
}
