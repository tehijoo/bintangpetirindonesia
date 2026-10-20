import { getPhoto, type Photo } from "./photos";

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: { title: string; text: string }[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date (YYYY-MM-DD), dipakai juga untuk lastModified di sitemap. */
  date: string;
  readMinutes: number;
  cover: Photo;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "perbedaan-penangkal-petir-konvensional-elektrostatis",
    title: "Perbedaan Penangkal Petir Konvensional dan Elektrostatis",
    excerpt:
      "Dua sistem ini sama-sama menyalurkan petir ke tanah, tetapi cara kerja, biaya, dan bangunan yang cocok berbeda. Ini cara memilihnya.",
    date: "2026-10-12",
    readMinutes: 4,
    cover: getPhoto("10"),
    body: [
      {
        type: "p",
        text: "Setiap penangkal petir punya tugas yang sama: menangkap sambaran di titik yang aman, lalu menyalurkannya lewat kabel penghantar ke grounding (pembumian) agar arusnya hilang ke tanah, bukan lewat struktur bangunan atau instalasi listrik. Perbedaannya ada pada cara menangkap sambaran itu.",
      },
      { type: "h2", text: "Sistem konvensional" },
      {
        type: "p",
        text: "Sistem konvensional memakai beberapa tombak (split) logam runcing yang dipasang di titik tertinggi atap. Tombak-tombak ini dihubungkan kabel tembaga ke satu atau beberapa titik grounding.",
      },
      {
        type: "list",
        items: [
          { title: "Kelebihan", text: "Biaya awal terjangkau dan komponennya sederhana, sehingga cocok untuk rumah tinggal, ruko, dan bangunan bertingkat rendah." },
          { title: "Batasan", text: "Area yang terlindungi hanya di sekitar tombak, jadi bangunan yang luas membutuhkan banyak tombak dan kabel yang panjang." },
        ],
      },
      { type: "h2", text: "Sistem elektrostatis" },
      {
        type: "p",
        text: "Sistem elektrostatis memakai satu head terminal yang dirancang menangkap sambaran lebih awal sehingga melindungi radius tertentu. Radius ini biasanya tercantum pada nama produk, misalnya R-35, R-85, atau R-150.",
      },
      {
        type: "list",
        items: [
          { title: "Kelebihan", text: "Satu terminal bisa melindungi area yang luas, kabel dan titik grounding lebih sedikit, dan tampilan atap tetap rapi." },
          { title: "Batasan", text: "Harga perangkatnya lebih tinggi, sehingga untuk rumah kecil sistem konvensional sering kali sudah cukup." },
        ],
      },
      { type: "h2", text: "Jadi, pilih yang mana?" },
      {
        type: "p",
        text: "Untuk rumah dan bangunan kecil, sistem konvensional biasanya paling ekonomis. Untuk gedung bertingkat, pabrik, gudang, sekolah, atau kompleks dengan beberapa bangunan, sistem elektrostatis umumnya lebih efisien. Pilihan akhirnya sebaiknya diputuskan setelah survei, karena tinggi bangunan, luas area, dan kondisi tanah ikut menentukan.",
      },
      {
        type: "quote",
        text: "Sistem apa pun yang dipilih, grounding adalah bagian terpenting. Terminal yang bagus tidak akan bekerja maksimal kalau tahanan grounding-nya tinggi.",
      },
    ],
  },
  {
    slug: "tips-memilih-jasa-pasang-penangkal-petir",
    title: "5 Tips Memilih Jasa Pasang Penangkal Petir",
    excerpt:
      "Penangkal petir yang dipasang asal-asalan bisa lebih berbahaya daripada tidak memasang sama sekali. Lima hal ini membantu Anda memilih penyedia jasa yang tepat.",
    date: "2026-09-28",
    readMinutes: 3,
    cover: getPhoto("6"),
    body: [
      {
        type: "p",
        text: "Penangkal petir bekerja saat kondisi paling ekstrem. Karena itu kualitas pemasangan sama pentingnya dengan kualitas produk. Sebelum memilih penyedia jasa, perhatikan lima hal berikut.",
      },
      {
        type: "list",
        items: [
          { title: "1. Ada survei sebelum penawaran", text: "Penyedia yang baik mengecek tinggi bangunan, luas area yang perlu dilindungi, dan lokasi grounding sebelum merekomendasikan sistem dan tipe terminal." },
          { title: "2. Spesifikasi perangkat jelas", text: "Minta rincian tipe head terminal, ukuran kabel penghantar (misalnya BC 50), panjang tiang, dan kedalaman grounding di penawaran." },
          { title: "3. Grounding diukur, bukan dikira-kira", text: "Pastikan ada pengukuran tahanan grounding dengan earth tester setelah pemasangan, dan Anda diperlihatkan hasilnya." },
          { title: "4. Teknisi terbiasa bekerja di ketinggian", text: "Pemasangan di atap dan tower berisiko. Tanyakan pengalaman tim dan perlengkapan keselamatan yang dipakai." },
          { title: "5. Garansi tertulis", text: "Pastikan cakupan dan lama garansi untuk perangkat maupun pemasangan tercantum di penawaran atau nota." },
        ],
      },
      {
        type: "p",
        text: "Dengan lima hal ini Anda bisa membandingkan penawaran secara adil, karena yang dibandingkan bukan hanya harga akhirnya, tetapi juga apa saja yang Anda dapatkan.",
      },
    ],
  },
  {
    slug: "pentingnya-tes-grounding",
    title: "Pentingnya Tes Grounding: Berapa Nilai Tahanan yang Aman?",
    excerpt:
      "Grounding adalah jalur terakhir arus petir menuju tanah. Tanpa pengukuran, Anda tidak tahu apakah jalur itu benar-benar bekerja.",
    date: "2026-09-14",
    readMinutes: 3,
    cover: getPhoto("2"),
    body: [
      {
        type: "p",
        text: "Grounding atau pembumian adalah batang dan kabel yang ditanam di tanah untuk membuang arus petir. Semakin kecil tahanannya, semakin mudah arus mengalir ke tanah dan semakin kecil risiko arus berbelok ke bangunan atau instalasi listrik.",
      },
      { type: "h2", text: "Berapa nilai yang dianggap aman?" },
      {
        type: "p",
        text: "Di Indonesia, nilai yang umum dijadikan acuan untuk instalasi penangkal petir adalah tahanan grounding tidak lebih dari 5 Ohm. Nilai ini diukur dengan earth tester setelah grounding terpasang.",
      },
      { type: "h2", text: "Apa yang memengaruhi nilai tahanan?" },
      {
        type: "list",
        items: [
          { title: "Jenis dan kelembapan tanah", text: "Tanah liat yang lembap umumnya menghasilkan tahanan lebih rendah daripada tanah berpasir atau berbatu yang kering." },
          { title: "Kedalaman batang grounding", text: "Bila hasil ukur masih tinggi, batang grounding bisa diperdalam atau ditambah titiknya." },
          { title: "Kualitas sambungan", text: "Sambungan kabel yang longgar atau berkarat menaikkan tahanan. Box kontrol memudahkan pemeriksaan sambungan ini." },
        ],
      },
      { type: "h2", text: "Kapan perlu diukur ulang?" },
      {
        type: "p",
        text: "Selain saat serah terima, sebaiknya grounding diukur ulang secara berkala, misalnya setahun sekali menjelang musim hujan, dan setiap kali ada renovasi di sekitar jalur kabel atau titik grounding.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

const dateFormat = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

export function formatDate(iso: string) {
  return dateFormat.format(new Date(`${iso}T00:00:00+07:00`));
}
