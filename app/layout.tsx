import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Travel X Adventure",
    template: "%s | Travel X Adventure",
  },
  description: "지도에서 발견하고, 함께 원정을 떠나는 새로운 여행 커뮤니티",
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
