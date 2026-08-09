import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Travel X Adventure",
    template: "%s | Travel X Adventure",
  },
  description: "吏?꾩뿉??諛쒓껄?섍퀬, ?④퍡 ?먯젙???좊굹???덈줈???ы뻾 而ㅻ??덊떚",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#007aff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
