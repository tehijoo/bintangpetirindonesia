import RadiusRings from "./RadiusRings";

/**
 * Latar bersama hero dan header halaman: cahaya kuning di kanan atas dengan
 * lingkaran radius proteksi di sekitarnya, pantulan biru di kiri, dan bagian
 * bawah yang memudar ke warna kanvas supaya section berikutnya menyambung
 * tanpa garis batas.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-56 right-[-12%] h-[720px] w-[720px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(247,194,42,0.40), rgba(247,194,42,0))" }}
      />
      <div
        className="absolute -left-48 top-24 h-[620px] w-[620px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(29,59,143,0.14), rgba(29,59,143,0))" }}
      />
      <RadiusRings className="absolute inset-x-0 top-0 h-[640px] w-full text-brand/25" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas" />
    </div>
  );
}
