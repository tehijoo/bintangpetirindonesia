import type { Metadata } from "next";
import { Building2, House, PlugZap } from "lucide-react";
import Comparison from "@/components/Comparison";
import CtaBanner from "@/components/CtaBanner";
import PackageCard from "@/components/PackageCard";
import PageHeader from "@/components/PageHeader";
import Process from "@/components/Process";
import Reveal from "@/components/Reveal";
import { packagesFor, systems, type SystemId } from "@/lib/packages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan & Paket Penangkal Petir",
  description: `Paket penangkal petir konvensional, elektrostatis (R-35 hingga R-150), dan surge arrester dari ${site.name}, lengkap dengan pemasangan dan tes grounding.`,
};

const icons: Record<SystemId, typeof House> = {
  konvensional: House,
  elektrostatis: Building2,
  arrester: PlugZap,
};

export default function LayananPage() {
  return (
    <>
      <PageHeader
        eyebrow="Layanan & Paket"
        title={
          <>
            Paket penangkal petir <span>sesuai bangunan Anda</span>
          </>
        }
        description="Setiap paket sudah berisi perangkat dan pemasangan. Belum yakin pilih yang mana? Lihat perbandingannya di bawah, atau tanyakan langsung lewat WhatsApp."
      />

      <div className="space-y-20 pb-4 lg:space-y-24">
        {systems.map((system, i) => {
          const Icon = icons[system.id];

          return (
            // scroll-mt memberi ruang untuk navbar saat dibuka lewat tautan #id.
            <section key={system.id} id={system.id} className="scroll-mt-28 px-6 lg:px-8">
              <div className="mx-auto max-w-6xl">
                <Reveal className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-sun">
                    <Icon size={26} />
                  </span>
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                      {String(i + 1).padStart(2, "0")} · {system.bestFor.join(" · ")}
                    </p>
                    <h2 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-ink lg:text-4xl">{system.title}</h2>
                    <p className="mt-3 text-base leading-7 text-muted">{system.summary}</p>
                  </div>
                </Reveal>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {packagesFor(system.id).map((pkg, j) => (
                    <Reveal key={pkg.id} delay={j * 80}>
                      <PackageCard pkg={pkg} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <Comparison />
      <Process />
      <CtaBanner
        title="Butuh bantuan memilih paket?"
        description="Kirim foto bangunan dan perkiraan tingginya lewat WhatsApp. Kami bantu menentukan sistem dan tipe terminal yang paling sesuai."
      />
    </>
  );
}
