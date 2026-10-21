import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'A blank field is missing',
  description: 'image made of spaces is missing. name is kept. Nothing is fetched.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
