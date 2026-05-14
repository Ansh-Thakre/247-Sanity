"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Globe,
  Cloud,
  Palette,
  Bot,
  Users,
} from "lucide-react";

const services = [
  {
    title: "Digital Marketing",
    subtitle: "Growth Campaigns",
    description:
      "Strategic campaigns across search, social, and content to drive measurable growth and qualified leads.",
    icon: Megaphone,
    href: "/services/digital-marketing",
    bg: "#1e5a98",
    iconColor: "#ffffff",
  },
  {
    title: "Web Development",
    subtitle: "Sites & Apps",
    description:
      "Custom websites, landing pages, and web applications built for performance, SEO, and conversion.",
    icon: Globe,
    href: "/services/web-development",
    bg: "#ffffff",
    iconColor: "#1e5a98",
  },
  {
    title: "SaaS Solutions",
    subtitle: "Product Engineering",
    description:
      "End-to-end SaaS product development from ideation to launch — CRM, ERP, and custom platforms.",
    icon: Cloud,
    href: "/services/saas-solutions",
    bg: "#0f3d6e",
    iconColor: "#ffffff",
  },
  {
    title: "Branding",
    subtitle: "Identity & Creative",
    description:
      "Complete brand identity systems including logo design, visual language, and corporate branding.",
    icon: Palette,
    href: "/services/branding",
    bg: "#f4a726",
    iconColor: "#1c2b3a",
  },
  {
    title: "AI & Automation",
    subtitle: "Intelligent Workflows",
    description:
      "Intelligent workflow automation, chatbots, WhatsApp integration, and AI-powered business tools.",
    icon: Bot,
    href: "/services/ai-automation",
    bg: "#18c499",
    iconColor: "#ffffff",
  },
  {
    title: "CRM Systems",
    subtitle: "Client Management",
    description:
      "Custom CRM solutions to streamline sales pipelines, client management, and team collaboration.",
    icon: Users,
    href: "/services/saas-solutions",
    bg: "#3a80c8",
    iconColor: "#ffffff",
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
              service.bg === "#ffffff" ? "1px solid #e8f0fb" : "none",
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
            "linear-gradient(180deg, #d4f5eb 0%, #b8e8d8 25%, #c9edd8 50%, #e8f5ee 75%, #f0f9f4 100%)",
        }}
      >
        {/* Soft radial overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(24,196,153,0.18) 0%, transparent 70%)",
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
              "radial-gradient(ellipse 50% 40% at 80% 60%, rgba(244,167,38,0.06) 0%, transparent 70%)",
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
            className="font-heading font-semibold uppercase mb-4"
            style={{ fontSize: "0.8125rem", letterSpacing: "0.1em", color: "#0f6e56" }}
          >
            What We Do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="font-heading font-bold"
            style={{
              color: "#1c2b3a",
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
              color: "#4a6075",
              maxWidth: "42ch",
            }}
          >
            These are the services we&apos;ve crafted for businesses like yours — tools and
            strategies we use every day to grow, automate, and scale.
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
              style={{ color: "#1c2b3a", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Everything you need to{" "}
              <span style={{ color: "#18c499" }}>grow</span>
            </h2>
            <p
              className="mt-4 mx-auto leading-relaxed"
              style={{ fontSize: "1.0625rem", color: "#4a6075", maxWidth: "48ch" }}
            >
              Each service is designed to work independently or together as a
              unified growth engine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  {(() => {
                    const isLight = service.bg === "#ffffff" || service.bg === "#f4a726";
                    const textColor = isLight ? "#1c2b3a" : "#ffffff";
                    const subColor = isLight ? "#4a6075" : "rgba(255,255,255,0.8)";
                    const iconBg = isLight ? "rgba(0,0,0,0.08)" : "rgba(255,255,255,0.15)";
                    const linkColor = isLight ? "#1e5a98" : "rgba(255,255,255,0.9)";

                    return (
                      <Link
                        href={service.href}
                        className="group block rounded-2xl p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        style={{
                          backgroundColor: service.bg,
                          border: isLight ? "1px solid #e8f0fb" : "none",
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                          style={{ backgroundColor: iconBg }}
                        >
                          <Icon
                            className="w-6 h-6"
                            style={{ color: textColor }}
                            strokeWidth={1.8}
                          />
                        </div>
                        <h3
                          className="font-heading font-bold mb-2"
                          style={{ fontSize: "1.25rem", color: textColor }}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="leading-relaxed mb-4"
                          style={{ fontSize: "0.9375rem", color: subColor }}
                        >
                          {service.description}
                        </p>
                        <span
                          className="inline-flex items-center gap-1.5 font-heading font-semibold text-sm group-hover:gap-2.5"
                          style={{ color: linkColor }}
                        >
                          Explore
                          <span className="transition-transform group-hover:translate-x-1">→</span>
                        </span>
                      </Link>
                    );
                  })()}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center"
            style={{ backgroundColor: "#1c2b3a" }}
          >
            <h2
              className="font-heading font-bold mb-4"
              style={{ color: "#ffffff", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Not sure where to start?
            </h2>
            <p
              className="max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem" }}
            >
              Book a free consultation and we&apos;ll map out the perfect strategy
              for your business goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-heading font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#18c499", color: "#ffffff" }}
              >
                Book a Call
                <span>→</span>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-heading font-semibold text-sm transition-all duration-300"
                style={{ color: "rgba(255,255,255,0.9)", border: "1.5px solid rgba(255,255,255,0.2)" }}
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
