import { Check } from "lucide-react";
import ArrowButton from "./ArrowButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site, waLink } from "@/lib/site";

const checklist = [
  "Survei bangunan dan lokasi grounding",
  "Rekomendasi sistem sesuai kebutuhan",
  "Rincian perangkat yang jelas di penawaran",
  "Pengukuran tahanan grounding",
];

const steps = [
  {
    title: "Konsultasi & Survei",
    body: "Ceritakan jenis, tinggi, dan luas bangunan Anda. Tim kami mengecek titik tertinggi atap, jalur kabel, dan lokasi grounding di lapangan.",
  },
  {
    title: "Rekomendasi & Penawaran",
    body: "Kami menyarankan sistem konvensional atau elektrostatis beserta tipe terminalnya, lengkap dengan rincian perangkat dan harga.",
  },
  {
    title: "Pemasangan",
    body: "Head terminal atau tombak, tiang, kabel penghantar, box kontrol, dan grounding dipasang rapi sesuai jalur yang sudah disepakati.",
  },
  {
    title: "Tes Grounding & Serah Terima",
    body: "Tahanan grounding diukur dengan earth tester. Bila belum sesuai acuan, grounding diperdalam atau ditambah sebelum diserahterimakan.",
  },
];

export default function Process() {
  return (
    <section id="proses" className="py-20 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
        <Reveal>
          <SectionHeading
            align="left"
            title={
              <>
                4 Langkah Pasang
                <br />
                <strong>Penangkal Petir</strong>
              </>
            }
            description="Dari konsultasi pertama sampai hasil tes grounding, Anda tahu apa yang dipasang dan berapa biayanya."
          />

          <ul className="mt-8 space-y-3.5">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sun text-ink">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className="text-[15px] text-ink-soft">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <ArrowButton
              href={waLink(`Halo ${site.name}, saya ingin menjadwalkan survei untuk pemasangan penangkal petir.`)}
              external
              bg="var(--color-ink)"
              accent="var(--color-brand)"
              className="shadow-lg shadow-ink/25"
            >
              Jadwalkan Survei
            </ArrowButton>
          </div>
        </Reveal>

        <ol className="relative">
          {/* Satu garis putus-putus di belakang badge angka, menyambung semua langkah. */}
          <div className="absolute bottom-0 left-7 top-0 border-l-2 border-dashed border-line" aria-hidden />

          {steps.map((step, i) => (
            <li key={step.title} className={`relative ${i === steps.length - 1 ? "" : "pb-11"}`}>
              <Reveal delay={i * 90} className="flex gap-6">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand text-lg font-extrabold tracking-[-0.02em] text-white shadow-lg shadow-brand/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="pt-3">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-ink lg:text-xl">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted">{step.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
