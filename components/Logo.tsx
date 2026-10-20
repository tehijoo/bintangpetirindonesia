/*
 * Logo sementara: petir kuning dan bintang di dalam kotak biru, plus
 * wordmark teks. TODO: ganti dengan logo resmi Bintang Petir Indonesia
 * bila sudah ada.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect width="40" height="40" rx="11" fill="#1d3b8f" />
      <path d="M10.5 6.5 11.6 9.4 14.5 10.5 11.6 11.6 10.5 14.5 9.4 11.6 6.5 10.5 9.4 9.4Z" fill="#ffffff" />
      <path d="M24 6 13.5 22.2h7.1L17.2 34 28.6 17.4h-7.2L24 6Z" fill="#f7c22a" />
    </svg>
  );
}

export default function Logo({
  variant = "dark",
  className = "",
}: {
  /** "dark" = teks gelap untuk latar terang; "light" = teks putih untuk latar gelap. */
  variant?: "dark" | "light";
  className?: string;
}) {
  const light = variant === "light";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`text-[17px] font-extrabold tracking-[-0.03em] ${light ? "text-white" : "text-ink"}`}>
          Bintang Petir
        </span>
        <span className={`mt-1 text-[9.5px] font-bold uppercase tracking-[0.3em] ${light ? "text-sun" : "text-brand"}`}>
          Indonesia
        </span>
      </span>
    </span>
  );
}
