"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { brandVoice } from "@/config/brand";
import { BrandCTA } from "@/components/ui/BrandCTA";
import { cn } from "@/lib/cn";
import { Container } from "@/components/layout/Container";

interface PortfolioProject {
  title: string;
  client: string;
  category: string;
  description: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  gradient: string;
  accent: string;
}

const projects: PortfolioProject[] = [
  {
    title: "BuildRight CRM Platform",
    client: "@BUILDRIGHT",
    category: "SaaS Development",
    description:
      "Custom CRM for construction companies with estimation, scheduling, and proposal modules that transformed operations.",
    metric: "+280%",
    metricLabel: "Lead Conversion",
    tags: ["CRM", "SaaS", "Automation"],
    gradient: "from-primary via-[#2d6db5] to-primary-light",
    accent: "#1e5a98",
  },
  {
    title: "ShopVerse Ecommerce",
    client: "@SHOPVERSE",
    category: "Ecommerce Platform",
    description:
      "Full-stack ecommerce platform with AI-powered recommendations and multi-vendor support for 500+ retailers.",
    metric: "3x",
    metricLabel: "Revenue Growth",
    tags: ["Ecommerce", "AI", "Multi-vendor"],
    gradient: "from-deep-mint via-mid-mint to-brand-mint",
    accent: "#1a9e80",
  },
  {
    title: "GreenLeaf Brand Identity",
    client: "@GREENLEAF",
    category: "Branding & Design",
    description:
      "Complete brand identity redesign including logo, visual system, and packaging for a leading eco brand.",
    metric: "+450%",
    metricLabel: "Brand Recall",
    tags: ["Branding", "Identity", "Packaging"],
    gradient: "from-mid-mint via-brand-mint to-pale-blue",
    accent: "#1a3a5f",
  },
  {
    title: "AutoFlow Marketing Suite",
    client: "@AUTOFLOW",
    category: "AI & Automation",
    description:
      "AI-powered marketing automation platform with email, SMS, and WhatsApp campaign management at scale.",
    metric: "10M+",
    metricLabel: "Leads Generated",
    tags: ["AI", "Marketing", "Automation"],
    gradient: "from-primary via-primary-light to-deep-navy",
    accent: "#1e5a98",
  },
  {
    title: "FinTrack Dashboard",
    client: "@FINTRACK",
    category: "FinTech Solution",
    description:
      "Real-time financial analytics dashboard with predictive forecasting and automated compliance reporting.",
    metric: "98%",
    metricLabel: "Accuracy Rate",
    tags: ["FinTech", "Analytics", "Dashboard"],
    gradient: "from-wordmark via-primary to-deep-navy",
    accent: "#1a3a5f",
  },
  {
    title: "MediConnect Portal",
    client: "@MEDICONNECT",
    category: "HealthTech",
    description:
      "Patient management portal with telemedicine integration, appointment scheduling, and HIPAA-compliant records.",
    metric: "+320%",
    metricLabel: "Patient Engagement",
    tags: ["HealthTech", "Portal", "Telemedicine"],
    gradient: "from-deep-mint to-primary-dark",
    accent: "#1a9e80",
  },
  {
    title: "LogiFlow Supply Chain",
    client: "@LOGIFLOW",
    category: "Enterprise SaaS",
    description:
      "End-to-end supply chain management with IoT tracking, predictive analytics, and warehouse automation.",
    metric: "-40%",
    metricLabel: "Operating Costs",
    tags: ["Supply Chain", "IoT", "Enterprise"],
    gradient: "from-primary-light to-primary",
    accent: "#2d6ab5",
  },
  {
    title: "EduSpark LMS",
    client: "@EDUSPARK",
    category: "EdTech Platform",
    description:
      "Interactive learning management system with gamification, live classrooms, and AI-driven course recommendations.",
    metric: "50K+",
    metricLabel: "Active Learners",
    tags: ["EdTech", "LMS", "Gamification"],
    gradient: "from-brand-mint to-primary-light",
    accent: "#1e5a98",
  },
];

const DESKTOP_PER_SLIDE = 2;
const MOBILE_PER_SLIDE = 4;

function getSlide(index: number, perSlide: number) {
  const start = index * perSlide;
  const items = projects.slice(start, start + perSlide);
  while (items.length < perSlide) {
    items.push(projects[items.length % projects.length]);
  }
  return items;
}

function PortfolioCard({
  project,
  index,
}: {
  project: PortfolioProject;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative rounded-3xl overflow-hidden bg-white border border-border shadow-[0_2px_20px_rgba(30,90,152,0.06)] hover:shadow-[0_8px_40px_rgba(30,90,152,0.12)] hover:border-primary/30 transition-all duration-500"
    >
      {/* Card top gradient area */}
      <div
        className={`relative h-48 sm:h-52 bg-linear-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden`}
      >
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />
        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/8" />

        <div className="relative z-10 flex items-start justify-between">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/20 text-xs font-semibold text-white backdrop-blur-sm tracking-wide uppercase">
            {project.category}
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-white/70 text-xs font-bold tracking-[0.15em] uppercase font-heading">
            {project.client}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6">
        <h3 className="text-lg font-heading font-bold text-ink mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-pale-blue text-[11px] font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metric */}
        <div className="flex items-baseline gap-2 pt-4 border-t border-border">
          <span
            className="font-mono text-2xl font-bold"
            style={{ color: project.accent }}
          >
            {project.metric}
          </span>
          <span className="text-xs text-slate">{project.metricLabel}</span>
        </div>
      </div>
    </motion.div>
  );
}

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

export default function PortfolioPage() {
  const isMobile = useIsMobile();
  const perSlide = isMobile ? MOBILE_PER_SLIDE : DESKTOP_PER_SLIDE;
  const totalSlides = Math.ceil(projects.length / perSlide);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setSlide((s) => (s >= totalSlides ? 0 : s));
  }, [totalSlides]);

  const handlePrev = () =>
    setSlide((s) => (s === 0 ? totalSlides - 1 : s - 1));
  const handleNext = () =>
    setSlide((s) => (s + 1) % totalSlides);

  const currentItems = getSlide(slide, perSlide);

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-surface">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,90,152,0.06),transparent_70%)]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-overline mb-4">Case Studies & Portfolio</p>
            <h1 className="font-heading font-bold text-wordmark text-[clamp(2rem,5vw,3.25rem)] leading-[1.12] tracking-tight">
              Projects that drive{" "}
              <span className="text-primary">measurable growth</span>
            </h1>
            <p className="mt-6 text-lead text-slate max-w-xl mx-auto">
              Qualified leads, conversions, and revenue outcomes — strategy backed
              by real data across entrepreneurs and growth-stage businesses.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Portfolio Grid Section ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-surface">
        {/* Soft background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-deep-mint/5 blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-primary-light/5 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-mid-mint/5 blur-[150px]" />
        </div>

        <Container className="relative z-10">
          {/* Section header: title left, nav right */}
          <div className="flex items-start sm:items-center justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-deep-mint font-heading mb-2">
                Featured Work
              </p>
              <h2 className="font-heading font-bold text-ink text-2xl sm:text-3xl md:text-4xl">
                Our Projects
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-ink hover:bg-surface transition-all duration-300 shadow-sm"
                aria-label="Previous projects"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalSlides }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === slide
                        ? "bg-primary w-6"
                        : "bg-pale-blue w-2 hover:bg-primary-light/30"
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-ink hover:bg-surface transition-all duration-300 shadow-sm"
                aria-label="Next projects"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Card Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto"
            >
              {currentItems.map((project, i) => (
                <PortfolioCard
                  key={`${slide}-${project.title}-${i}`}
                  project={project}
                  index={i}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Mobile bottom nav */}
          <div className="flex sm:hidden items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-ink hover:bg-surface transition-all duration-300 shadow-sm"
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalSlides }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === slide
                      ? "bg-primary w-6"
                      : "bg-pale-blue w-2 hover:bg-primary-light/30"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center text-ink hover:bg-surface transition-all duration-300 shadow-sm"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      <BrandCTA
        title="Not sure where to start?"
        description={brandVoice.ctaConsultation}
      />
    </>
  );
}
