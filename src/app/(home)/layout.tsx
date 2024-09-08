import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alvaigan",
  description: "Code To Creations",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
