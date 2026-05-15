"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";
import { Navbar } from "@/components/layout/Navbar";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "top-4 mx-4 sm:mx-6 lg:mx-10 rounded-2xl bg-white/85 backdrop-blur-xl shadow-lg border border-white/50"
            : "top-0 mx-0 rounded-none bg-white border-b border-transparent"
        )}
      >
        <Container>
          <div className={cn(
            "flex items-center justify-between transition-all duration-500",
            scrolled ? "h-16 py-2" : "h-[72px] py-3"
          )}>
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image
                src="/icon-247.png"
                alt="247 Logo"
                width={44}
                height={44}
                className="w-11 h-11 rounded-xl object-contain"
                priority
              />
              <span className="font-heading font-bold text-xl text-ink hidden sm:inline">
                Digital <span className="text-primary">Pro</span>
              </span>
            </Link>

            <Navbar />

            <div className="hidden lg:flex items-center gap-3">
              <Button href="/contact" variant="outline" size="sm">
                Contact Us
              </Button>
              <Button href="/contact#consultation" variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate hover:text-ink hover:bg-surface transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
