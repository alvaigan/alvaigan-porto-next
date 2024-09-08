import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetBrainsMono = localFont({
  src: "./fonts/JetBrainsMonoNerdFontMono-Regular.ttf",
  variable: "--font-jetbrains-mono",
  weight: "100 900",
});

const jetBrainsMonoExtraBold = localFont({
  src: "./fonts/JetBrainsMonoNerdFontMono-ExtraBold.ttf",
  variable: "--font-jetbrains-mono-extrabold",
  // weight: "100 900",
});

const jetBrainsMonoBold = localFont({
  src: "./fonts/JetBrainsMonoNerdFontMono-Bold.ttf",
  variable: "--font-jetbrains-mono-bold",
  // weight: "100 900",
});

export const metadata: Metadata = {
  title: "Alvaigan",
  description: "Code To Creations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${jetBrainsMonoExtraBold.variable} ${jetBrainsMonoBold.variable} antialiased`}
      >
        <div className="font-[family-name:var(--font-jetbrains-mono)]">
          {children}
        </div>
      </body>
    </html>
  );
}
