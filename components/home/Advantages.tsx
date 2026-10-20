import { ClipboardCheck, Gauge, HardHat, ShieldCheck } from "lucide-react";
import Reveal from "../Reveal";
import SectionHeading from "../SectionHeading";

const advantages = [
  {
    icon: ClipboardCheck,
    title: "Survei Dulu",
    body: "Rekomendasi sistem dan tipe terminal dibuat setelah bangunan dan lokasi grounding dicek.",
  },
  {
    icon: HardHat,
    title: "Teknisi Lapangan",
    body: "Pemasangan di atap dan tower dikerjakan tim yang terbiasa bekerja di ketinggian.",
  },
  {
    icon: Gauge,
    title: "Grounding Terukur",
    body: "Tahanan pembumian diukur dengan earth tester, bukan dikira-kira.",
  },
  {
    icon: ShieldCheck,
    title: "Bergaransi",
    body: "Perangkat dan pemasangan disertai garansi yang tercantum di penawaran.",
  },
];

export default function Advantages() {
  return (
    <section className="bg-ink py-20 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            tone="dark"
            title={
              <>
                Kenapa memilih <strong className="text-sun">Bintang Petir</strong>
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="h-full rounded-3xl bg-white/[0.04] p-7 ring-1 ring-inset ring-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sun text-ink">
                  <Icon size={22} />
                </span>
                <h3 className="mt-6 text-lg font-bold tracking-[-0.02em]">{title}</h3>
                <p className="mt-2 text-[15px] leading-7 text-white/60">{body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
