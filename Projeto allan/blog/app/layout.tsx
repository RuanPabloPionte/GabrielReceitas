import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Receitas",
  description: "Site do Gabriel Receitas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          storageKey="theme"
          themes={["light", "Protanopia", "Deuteranopia", "Tritanopia"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
