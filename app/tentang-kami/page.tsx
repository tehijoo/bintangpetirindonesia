import type { Metadata } from "next";
import Image from "next/image";
import { Eye, Gauge, ShieldCheck, Target } from "lucide-react";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { getPhoto } from "@/lib/photos";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: `Kenali ${site.name}, unit usaha ${site.company} yang melayani penjualan dan pemasangan penangkal petir.`,
};

/*
 * TODO: profil, nilai, serta visi & misi di halaman ini masih teks contoh.
 * Sesuaikan dengan profil resmi usaha (tahun berdiri, pengalaman proyek,
 * dan sebagainya).
 */
const values = [
  {
    icon: ShieldCheck,
    title: "Aman",
    body: "Keselamatan penghuni bangunan dan teknisi kami menjadi pertimbangan pertama di setiap pemasangan.",
  },
  {
    icon: Gauge,
    title: "Terukur",
    body: "Rekomendasi dibuat dari hasil survei, dan hasil pemasangan dibuktikan dengan pengukuran grounding.",
  },
  {
    icon: Target,
    title: "Jujur",
    body: "Spesifikasi perangkat, jadwal, dan harga disampaikan terbuka sejak penawaran.",
  },
];

const missions = [
  "Menyediakan perangkat penangkal petir yang sesuai standar dan bergaransi.",
  "Memasang sistem proteksi petir dengan memperhatikan keselamatan kerja.",
  "Memberi rekomendasi yang jujur sesuai kebutuhan dan anggaran pelanggan.",
];

export default function TentangKamiPage() {
  const photo = getPhoto("7");

  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title={
          <>
            Melindungi bangunan dari <span>sambaran petir</span>
          </>
        }
        description={`${site.name} adalah unit usaha ${site.company} yang khusus menangani penangkal petir.`}
      />

      <section className="pb-20 lg:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              title={
                <>
                  Siapa <strong>kami</strong>
                </>
              }
            />
            <div className="mt-6 space-y-4 text-base leading-7 text-muted">
              <p>
                <strong className="font-semibold text-ink">{site.name}</strong> melayani penjualan dan pemasangan
                penangkal petir konvensional, elektrostatis, dan surge arrester. Kami menangani pekerjaan dari survei,
                pemilihan sistem, pemasangan terminal dan grounding, hingga pengukuran tahanan pembumian.
              </p>
              <p>
                Kami bagian dari {site.company}, perusahaan yang juga mengerjakan kanopi membrane. Pelanggan kami mulai
                dari pemilik rumah hingga pengelola gedung, pabrik, dan fasilitas publik.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {["Survei", "Konvensional", "Elektrostatis", "Surge arrester", "Tes grounding"].map((item) => (
                <li key={item} className="rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink-soft ring-1 ring-line">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-xl shadow-ink/10">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-paper/90 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Dari survei sampai tes grounding</p>
                <p className="mt-2 text-sm font-semibold text-ink">Survei → Penawaran → Pemasangan → Pengukuran</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pt-4 pb-20 lg:pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              title={
                <>
                  Nilai yang kami <strong>pegang</strong>
                </>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {values.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="h-full rounded-3xl bg-paper p-8 ring-1 ring-line/80">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-sun">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold tracking-[-0.02em] text-ink">{title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted">{body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="mx-auto grid max-w-6xl gap-4 px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="h-full">
            <article className="flex h-full flex-col rounded-[32px] bg-ink p-10 text-white">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun text-ink">
                <Eye size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em]">Visi</h2>
              <p className="mt-3 text-base leading-7 text-white/65">
                Menjadi penyedia sistem penangkal petir yang dipercaya untuk melindungi rumah, gedung, dan fasilitas di
                seluruh Indonesia.
              </p>
            </article>
          </Reveal>
          <Reveal delay={90} className="h-full">
            <article className="flex h-full flex-col rounded-[32px] bg-paper p-10 ring-1 ring-line/80">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                <Target size={24} />
              </span>
              <h2 className="mt-6 text-2xl font-bold tracking-[-0.03em] text-ink">Misi</h2>
              <ol className="mt-4 space-y-3">
                {missions.map((mission, i) => (
                  <li key={mission} className="flex gap-3 text-[15px] leading-7 text-muted">
                    <span className="font-bold text-brand">{String(i + 1).padStart(2, "0")}</span>
                    {mission}
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
