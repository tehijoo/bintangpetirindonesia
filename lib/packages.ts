import type { StaticImageData } from "next/image";
import { getPhoto } from "./photos";

// Foto produk dipotong dari flyer promosi Tema Grounding Petir (tanpa harga
// dan tulisan promosi), lihat README.
import arrester from "@/public/images/produk/arrester-obo-dehn.jpg";
import blueCurrent from "@/public/images/produk/blue-current-r35.jpg";
import kurnR85 from "@/public/images/produk/kurn-r85.jpg";
import kurnR150 from "@/public/images/produk/kurn-r150.jpg";
import thomas from "@/public/images/produk/thomas-r125.jpg";
import viking from "@/public/images/produk/viking-v4-r100.jpg";
import stormaster from "@/public/images/produk/stormaster-ss-r100.jpg";
import konv3 from "@/public/images/produk/konvensional-3-aip.jpg";
import konv4 from "@/public/images/produk/konvensional-4-aip.jpg";
import skemaKonvensional from "@/public/images/produk/skema-konvensional.png";
import skemaElektrostatis from "@/public/images/produk/skema-elektrostatis.png";

export type SystemId = "konvensional" | "elektrostatis" | "arrester";

export type Package = {
  id: string;
  system: SystemId;
  name: string;
  /** Rupiah. Hanya ditampilkan bila site.showPrices = true. */
  price: number;
  image: StaticImageData;
  /** Contoh: "Radius ±85 m". Tampil sebagai label kecil di kartu. */
  highlight?: string;
  items: string[];
};

export type ProtectionSystem = {
  id: SystemId;
  title: string;
  short: string;
  summary: string;
  bestFor: string[];
  image: StaticImageData;
};

export const systems: ProtectionSystem[] = [
  {
    id: "konvensional",
    title: "Penangkal Petir Konvensional",
    short: "Konvensional",
    summary:
      "Tombak (split) di atap yang dihubungkan kabel tembaga ke grounding. Pilihan paling ekonomis untuk rumah dan bangunan bertingkat rendah.",
    bestFor: ["Rumah tinggal", "Ruko", "Bangunan kecil"],
    image: getPhoto("11").src,
  },
  {
    id: "elektrostatis",
    title: "Penangkal Petir Elektrostatis",
    short: "Elektrostatis",
    summary:
      "Satu head terminal untuk melindungi radius tertentu, dari R-35 hingga R-150. Lebih efisien dan rapi untuk gedung serta area yang luas.",
    bestFor: ["Gedung & kantor", "Pabrik & gudang", "Sekolah & masjid"],
    image: getPhoto("12").src,
  },
  {
    id: "arrester",
    title: "Surge Arrester",
    short: "Surge Arrester",
    summary:
      "Melindungi panel dan peralatan listrik dari lonjakan tegangan akibat sambaran petir yang masuk lewat jaringan listrik.",
    bestFor: ["Panel listrik 3 phase", "Ruang server", "Mesin industri"],
    image: arrester,
  },
];

const konvensionalItems = (splits: number) => [
  `${splits} buah split (tombak) atas`,
  "1 buah split (as grounding) bawah",
  "15 meter kabel BC 25",
  "Grounding (pembumian) maks. 8 meter",
  "3 buah pipa PVC ½",
  "Jasa instalasi",
  "Garansi",
];

const elektrostatisItems = (head: string, rod: string, box: string) => [
  `Head terminal ${head}`,
  "Connecting sleeve",
  "15 meter kabel BC 50",
  "Tiang penyangga galvanis 3 meter",
  `As grounding 5/8" ${rod}`,
  "Grounding (pembumian) maks. 8 meter",
  "3 buah pipa PVC ½",
  `Box kontrol ${box}`,
  "Aksesori pemasangan",
  "Tes grounding",
  "Jasa instalasi",
  "Garansi",
];

/*
 * TODO: isi dan harga paket mengikuti situs Tema Grounding Petir. Konfirmasi
 * ke klien (termasuk "Jasa instalasi", "Tes grounding", dan "Garansi"),
 * lalu nyalakan site.showPrices.
 */
export const packages: Package[] = [
  {
    id: "konvensional-2-aip",
    system: "konvensional",
    name: "Konvensional 2 AIP",
    price: 2_000_000,
    image: getPhoto("11").src,
    highlight: "1 tombak atas",
    items: konvensionalItems(1),
  },
  {
    id: "konvensional-3-aip",
    system: "konvensional",
    name: "Konvensional 3 AIP",
    price: 2_500_000,
    image: konv3,
    highlight: "2 tombak atas",
    items: konvensionalItems(2),
  },
  {
    id: "konvensional-4-aip",
    system: "konvensional",
    name: "Konvensional 4 AIP",
    price: 3_000_000,
    image: konv4,
    highlight: "3 tombak atas",
    items: konvensionalItems(3),
  },
  {
    id: "blue-current-r35",
    system: "elektrostatis",
    name: "Elektrostatis Blue Current R-35",
    price: 7_500_000,
    image: blueCurrent,
    highlight: "Radius ±35 m",
    items: elektrostatisItems("Blue Current R-35", "1 meter", "20 × 40"),
  },
  {
    id: "kurn-r85",
    system: "elektrostatis",
    name: "Elektrostatis Kurn R-85",
    price: 8_500_000,
    image: kurnR85,
    highlight: "Radius ±85 m",
    items: elektrostatisItems("Kurn R-85", "1 meter", "20 × 40"),
  },
  {
    id: "kurn-r150",
    system: "elektrostatis",
    name: "Elektrostatis Kurn R-150",
    price: 9_300_000,
    image: kurnR150,
    highlight: "Radius ±150 m",
    items: elektrostatisItems("Kurn R-150", "1 meter", "20 × 40"),
  },
  {
    id: "thomas-r125",
    system: "elektrostatis",
    name: "Elektrostatis Thomas R-125",
    price: 15_950_000,
    image: thomas,
    highlight: "Radius ±125 m",
    items: elektrostatisItems("Thomas R-125", "1,5 meter", "20 × 30"),
  },
  {
    id: "viking-v4-r100",
    system: "elektrostatis",
    name: "Elektrostatis Viking V4 R-100",
    price: 17_750_000,
    image: viking,
    highlight: "Radius ±100 m",
    items: elektrostatisItems("Viking V4 R-100", "1,5 meter", "20 × 30"),
  },
  {
    id: "stormaster-ss-r100",
    system: "elektrostatis",
    name: "Elektrostatis Stormaster SS R-100",
    price: 27_550_000,
    image: stormaster,
    highlight: "Radius ±100 m",
    items: elektrostatisItems("Stormaster SS R-100", "1,5 meter", "20 × 30"),
  },
  {
    id: "arrester-60ka",
    system: "arrester",
    name: "Surge Arrester 60 kA 3 Phase (OBO/DEHN)",
    price: 9_500_000,
    image: arrester,
    highlight: "Panel 3 phase",
    items: [
      "Arrester 60 kA / 3 phase",
      "3 meter kabel jembo 4 × 16",
      "3 meter kabel NYA 1 × 16",
      'As grounding 5/8" 1,5 meter',
      "Grounding (pembumian) maks. 8 meter",
      "Box kontrol 20 × 30",
      "Aksesori pemasangan",
      "Tes grounding",
      "Jasa instalasi",
      "Garansi",
    ],
  },
];

/*
 * Perbandingan dua sistem, ditulis seimbang (kelebihan dan batasan
 * masing-masing) supaya pengunjung bisa memilih sendiri.
 */
export const comparison = [
  {
    id: "konvensional" as const,
    title: "Konvensional",
    subtitle: "Untuk rumah & bangunan kecil",
    image: skemaKonvensional,
    points: [
      "Biaya awal paling terjangkau",
      "Komponen sederhana dan mudah dirawat",
      "Butuh beberapa tombak di atap dan kabel lebih panjang",
      "Area perlindungan terbatas di sekitar tombak",
    ],
  },
  {
    id: "elektrostatis" as const,
    title: "Elektrostatis",
    subtitle: "Untuk gedung & area luas",
    image: skemaElektrostatis,
    points: [
      "Satu head terminal untuk radius tertentu (R-35 hingga R-150)",
      "Lebih efisien untuk bangunan tinggi dan area yang luas",
      "Kabel penghantar dan titik grounding lebih sedikit",
      "Tampilan atap lebih rapi",
    ],
  },
];

const rupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });

export function formatPrice(price: number) {
  return rupiah.format(price);
}

export function packagesFor(system: SystemId) {
  return packages.filter((p) => p.system === system);
}
