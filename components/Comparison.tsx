import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { comparison } from "@/lib/packages";

export default function Comparison() {
  return (
    <section id="perbandingan" className="scroll-mt-28 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            title={
              <>
                Konvensional atau <strong>elektrostatis?</strong>
              </>
            }
            description="Keduanya menyalurkan petir ke grounding. Bedanya ada pada cara menangkap sambaran, luas area yang terlindungi, dan biayanya."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {comparison.map((option, i) => {
            const dark = i === 1;

            return (
              <Reveal key={option.id} delay={i * 90}>
                <article
                  className={`h-full rounded-[32px] p-4 sm:p-6 ${
                    dark ? "bg-brand text-white shadow-xl shadow-brand/25" : "bg-paper text-ink ring-1 ring-line/80"
                  }`}
                >
                  <div className="overflow-hidden rounded-3xl bg-white">
                    <Image
                      src={option.image}
                      alt={`Skema instalasi penangkal petir ${option.title.toLowerCase()}`}
                      sizes="(min-width: 1024px) 520px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <div className="px-2 pt-6 pb-2">
                    <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-sun" : "text-brand"}`}>
                      {option.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em]">{option.title}</h3>
                    <ul className="mt-5 space-y-3">
                      {option.points.map((point) => (
                        <li key={point} className={`flex gap-2.5 text-[15px] leading-6 ${dark ? "text-white/85" : "text-ink-soft"}`}>
                          <Check size={18} className={`mt-0.5 shrink-0 ${dark ? "text-sun" : "text-brand"}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
