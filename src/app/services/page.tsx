"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Globe,
  Palette,
  Search,
  BarChart3,
  FileText,
} from "lucide-react";
import { brandVoice } from "@/config/brand";
import { BrandCTA } from "@/components/ui/BrandCTA";
import { serviceHeroImages } from "@/data/service-images";

const services = [
  {
    title: "Brand Strategy",
    subtitle: "Positioning & Identity",
    description:
      "Positioning, identity, and messaging systems that differentiate you and build lasting authority.",
    icon: Palette,
    image: serviceHeroImages.branding,
    href: "/services/branding",
    bg: "#1e5a98",
    iconColor: "#ffffff",
  },
  {
    title: "Website Design",
    subtitle: "Conversion-Focused",
    description:
      "Websites designed for qualified lead generation, authority, and seamless user experience.",
    icon: Globe,
    image: serviceHeroImages["web-development"],
    href: "/services/web-development",
    bg: "#ffffff",
    iconColor: "#1e5a98",
  },
  {
    title: "SEO Optimization",
    subtitle: "Organic Growth",
    description:
      "Technical SEO, on-page strategy, and authority content that drives organic traffic.",
    icon: Search,
    image: serviceHeroImages.seo,
    href: "/services/seo",
    bg: "#0d1f3c",
    iconColor: "#ffffff",
  },
  {
    title: "Meta Ads",
    subtitle: "Paid Social",
    description:
      "Facebook and Instagram campaigns with precise targeting, creative, and optimization.",
    icon: Megaphone,
    image: serviceHeroImages["social-media"],
    href: "/services/social-media",
    bg: "#2d6ab5",
    iconColor: "#ffffff",
  },
  {
    title: "Google Ads",
    subtitle: "High-Intent Demand",
    description:
      "Search, display, and Performance Max campaigns that maximize ad spend ROI.",
    icon: BarChart3,
    image: serviceHeroImages["digital-marketing"],
    href: "/services/digital-marketing",
    bg: "#1a9e80",
    iconColor: "#ffffff",
  },
  {
    title: "Content & AEO",
    subtitle: "AI Search Visibility",
    description:
      "Content that builds authority plus AEO/GEO for AI-generated answers and results.",
    icon: FileText,
    image: serviceHeroImages["content-marketing"],
    href: "/services/content-marketing",
    bg: "#d1f5ee",
    iconColor: "#0d1f3c",
  },
];

function ServiceIcon({
  service,
  index,
  hoveredIndex,
  onHover,
  onLeave,
}: {
  service: (typeof services)[number];
  index: number;
  hoveredIndex: number | null;
  onHover: (i: number) => void;
  onLeave: () => void;
}) {
  const Icon = service.icon;
  const isHovered = hoveredIndex === index;
  const isSibling =
    hoveredIndex !== null && Math.abs(hoveredIndex - index) === 1;

  const rotations = [-3, 2, -1.5, 3, -2, 1.5];
  const baseRotate = rotations[index % rotations.length];

  return (
    <Link
      href={service.href}
      className="relative flex flex-col items-center outline-none"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      style={{
        zIndex: isHovered ? 20 : 6 - index,
        marginLeft: index === 0 ? 0 : "clamp(-14px, -2vw, -8px)",
      }}
    >
      <motion.div
        animate={{
          y: isHovered ? -32 : 0,
          scale: isHovered ? 1.15 : isSibling ? 0.97 : 1,
          rotate: isHovered ? 0 : baseRotate,
        }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        className="relative cursor-pointer"
      >
        <div
          className="rounded-3xl sm:rounded-[2rem] flex items-center justify-center transition-shadow duration-300"
          style={{
            width: "clamp(56px, 14.5vw, 170px)",
            height: "clamp(56px, 14.5vw, 170px)",
            backgroundColor: service.bg,
            boxShadow: isHovered
              ? "0 24px 50px rgba(0,0,0,0.22), 0 8px 20px rgba(0,0,0,0.1)"
              : "0 6px 20px rgba(0,0,0,0.12)",
            border:
              service.bg === "#ffffff" || service.bg === "#d1f5ee"
                ? "1px solid var(--border)"
                : "none",
          }}
        >
          <Icon
            style={{
              width: "clamp(22px, 5.5vw, 56px)",
              height: "clamp(22px, 5.5vw, 56px)",
              color: service.iconColor,
            }}
            strokeWidth={1.5}
          />
        </div>
      </motion.div>

      {/* Info tooltip — appears on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute flex flex-col items-center text-center"
            style={{
              top: "calc(100% + 12px)",
              left: "50%",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            <div
              className="rounded-2xl px-5 py-3"
              style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(12px)" }}
            >
              <p
                className="font-heading font-bold"
                style={{ color: "#ffffff", fontSize: "0.9375rem" }}
              >
                {service.title}
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.8125rem" }}>
                {service.subtitle}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
}

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* ========== GRADIENT BACKGROUND ========== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "var(--gradient-services-page)",
        }}
      >
        {/* Soft radial overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,158,128,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 30% 80%, rgba(30,90,152,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 80% 60%, rgba(30,90,152,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ========== HERO SECTION ========== */}
      <section className="relative pt-36 pb-8 sm:pt-44 sm:pb-12">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-overline mb-4"
          >
            What We Do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-heading font-bold"
            style={{
              color: "var(--wordmark)",
              fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
            }}
          >
            These are our services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              color: "var(--text-secondary)",
              maxWidth: "42ch",
            }}
          >
            {brandVoice.servicesIntro}
          </motion.p>
        </div>
      </section>

      {/* ========== SERVICE ICONS GRID ========== */}
      <section className="relative pt-12 pb-44 sm:pt-16 sm:pb-56">
        <div className="mx-auto px-4 overflow-visible">
          {/* Single row of 6 icons — tightly packed, slightly rotated */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex items-center justify-center"
          >
            {services.map((service, i) => (
              <ServiceIcon
                key={service.title}
                service={service}
                index={i}
                hoveredIndex={hoveredIndex}
                onHover={setHoveredIndex}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES DETAIL SECTION ========== */}
      <section className="relative pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="font-heading font-bold"
              style={{ color: "var(--wordmark)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Everything you need to{" "}
              <span className="text-deep-mint">grow</span>
            </h2>
            <p
              className="mt-4 mx-auto leading-relaxed"
              style={{ fontSize: "1.0625rem", color: "var(--text-secondary)", maxWidth: "48ch" }}
            >
              Each service is designed to work independently or together as a
              unified growth engine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
              >
                {(() => {
                  const isLight =
                    service.bg === "#ffffff" || service.bg === "#d1f5ee";
                  const textColor = isLight
                    ? "var(--wordmark)"
                    : "var(--text-on-dark)";
                  const subColor = isLight
                    ? "var(--text-secondary)"
                    : "rgba(255,255,255,0.8)";
                  const linkColor = isLight
                    ? "var(--primary)"
                    : "rgba(255,255,255,0.9)";

                  return (
                    <Link
                      href={service.href}
                      className="group flex flex-col rounded-2xl overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                      style={{
                        backgroundColor: service.bg,
                        border: isLight ? "1px solid var(--border)" : "none",
                      }}
                    >
                      <div className="relative w-full aspect-[16/10] sm:aspect-[5/3] shrink-0 bg-white/95">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover object-center"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          unoptimized
                        />
                      </div>
                      <div className="flex flex-col flex-1 p-6 sm:p-8">
                        <h3
                          className="font-heading font-bold mb-2"
                          style={{ fontSize: "1.25rem", color: textColor }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="leading-relaxed mb-4 flex-1"
                          style={{ fontSize: "0.9375rem", color: subColor }}
                        >
                          {service.description}
                        </p>
                        <span
                          className="inline-flex items-center gap-1.5 font-heading font-semibold text-sm group-hover:gap-2.5 mt-auto"
                          style={{ color: linkColor }}
                        >
                          Explore
                          <span className="transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </Link>
                  );
                })()}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BrandCTA
        title="Not sure where to start?"
        description="We'll identify your highest-impact growth channels and build a 90-day roadmap — strategy driven by real data, not guesswork."
      />
    </main>
  );
}
