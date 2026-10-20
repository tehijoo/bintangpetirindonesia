import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon digambar dari ikon logo yang sama dengan LogoMark.
// TODO: ganti dengan logo resmi bila sudah ada.
export default function Icon() {
  return new ImageResponse(
    (
      <svg width="64" height="64" viewBox="0 0 40 40">
        <rect width="40" height="40" rx="11" fill="#1d3b8f" />
        <path d="M10.5 6.5 11.6 9.4 14.5 10.5 11.6 11.6 10.5 14.5 9.4 11.6 6.5 10.5 9.4 9.4Z" fill="#ffffff" />
        <path d="M24 6 13.5 22.2h7.1L17.2 34 28.6 17.4h-7.2L24 6Z" fill="#f7c22a" />
      </svg>
    ),
    { ...size },
  );
}
