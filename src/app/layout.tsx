import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Fira_Code } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "247 Digital Pro — Growth, Automation & Technology Solutions",
    template: "%s | 247 Digital Pro",
  },
  description:
    "Digital growth, AI automation, SaaS & technology solutions unified into one powerful business ecosystem. Helping startups, SMEs, contractors, and enterprises scale.",
  icons: {
    icon: "/icon-247.png",
    apple: "/icon-247.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
