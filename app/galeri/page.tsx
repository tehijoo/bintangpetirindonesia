import type { Metadata } from "next";
import CtaBanner from "@/components/CtaBanner";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/site";
import GalleryGrid from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Proyek Pemasangan Penangkal Petir",
  description: `Dokumentasi pemasangan penangkal petir ${site.name}: terminal, tiang dan tower, grounding, hingga pengukuran tahanannya.`,
};

export default function GaleriPage() {
  return (
    <>
      <PageHeader
        eyebrow="Proyek"
        title={
          <>
            Dokumentasi <span>hasil pemasangan</span>
          </>
        }
        description="Pilih kategori, lalu klik foto untuk melihatnya lebih besar."
      />

      <section className="px-6 pb-4 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <GalleryGrid />
        </div>
      </section>

      <CtaBanner
        title="Ingin bangunan Anda terlindungi juga?"
        description="Kirim foto bangunan Anda lewat WhatsApp. Kami bantu menentukan sistem penangkal petir yang paling sesuai."
      />
    </>
  );
}
