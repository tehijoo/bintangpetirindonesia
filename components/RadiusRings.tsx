/*
 * Lingkaran konsentris yang menggambarkan radius proteksi penangkal petir
 * elektrostatis (R-35 sampai R-150). Dipakai sebagai latar hero, header
 * halaman, dan banner, sehingga motif visualnya berasal dari produk itu
 * sendiri, seperti garis membrane di situs kanopi.
 */
export default function RadiusRings({
  className = "",
  cx = 1260,
  cy = 40,
  rings = 7,
  fit = "xMaxYMin slice",
}: {
  className?: string;
  /** Titik pusat (posisi terminal) dalam koordinat viewBox 1440 × 640. */
  cx?: number;
  cy?: number;
  rings?: number;
  /** preserveAspectRatio. Pola di pojok perlu menempel ke pojoknya di layar sempit. */
  fit?: string;
}) {
  return (
    <svg viewBox="0 0 1440 640" preserveAspectRatio={fit} fill="none" aria-hidden className={className}>
      {Array.from({ length: rings }, (_, i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={80 + i * 92}
          stroke="currentColor"
          // Memudar ke luar, seperti perlindungan yang melemah menjauhi terminal.
          strokeOpacity={1 - (i / rings) * 0.8}
          strokeWidth={1}
          strokeDasharray={i % 2 === 1 ? "3 9" : undefined}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <circle cx={cx} cy={cy} r={5} fill="currentColor" />
    </svg>
  );
}
