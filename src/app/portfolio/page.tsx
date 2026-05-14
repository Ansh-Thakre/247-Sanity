"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
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
    gradient: "from-[#1e5a98] via-[#2d6db5] to-[#3a80c8]",
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
    gradient: "from-[#18c499] via-[#1fd4a5] to-[#25e0b0]",
    accent: "#0f6e56",
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
    gradient: "from-[#f4a726] via-[#f5b94d] to-[#f6cb74]",
    accent: "#854f0b",
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
    gradient: "from-[#e8544f] via-[#ec6e6a] to-[#f08885]",
    accent: "#c0392b",
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
    gradient: "from-[#6c5ce7] via-[#7f70ea] to-[#9284ed]",
    accent: "#5a4bd1",
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
    gradient: "from-[#00b894] via-[#1dc9a6] to-[#3adab8]",
    accent: "#0f6e56",
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
    gradient: "from-[#0984e3] via-[#2d9aeb] to-[#51b0f3]",
    accent: "#0f3d6e",
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
    gradient: "from-[#fd79a8] via-[#fd94b8] to-[#feafc8]",
    accent: "#c0392b",
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
      className="group relative rounded-3xl overflow-hidden bg-white border border-[#e8f0fb] shadow-[0_2px_20px_rgba(30,90,152,0.06)] hover:shadow-[0_8px_40px_rgba(30,90,152,0.12)] hover:border-[#b5d4f4] transition-all duration-500"
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
        <h3 className="text-lg font-heading font-bold text-[#1c2b3a] mb-2 group-hover:text-[#1e5a98] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-[#4a6075] leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-[#e8f0fb] text-[11px] font-medium text-[#1e5a98]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metric */}
        <div className="flex items-baseline gap-2 pt-4 border-t border-[#e8f0fb]">
          <span
            className="font-mono text-2xl font-bold"
            style={{ color: project.accent }}
          >
            {project.metric}
          </span>
          <span className="text-xs text-[#4a6075]">{project.metricLabel}</span>
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
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-[#f7fbfe]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,90,152,0.06),transparent_70%)]" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-[#18c499] font-heading mb-4">
              Our Portfolio
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-heading font-bold text-[#1c2b3a] leading-[1.12] tracking-tight">
              Projects That Speak{" "}
              <span className="text-[#1e5a98]">Results</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#4a6075] max-w-xl mx-auto leading-relaxed">
              From startups to enterprises, we&rsquo;ve delivered transformative
              digital solutions that drive measurable business growth.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* ── Portfolio Grid Section ── */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-[#f0f6fd]">
        {/* Soft background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#18c499]/5 blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#3a80c8]/5 blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#f4a726]/5 blur-[150px]" />
        </div>

        <Container className="relative z-10">
          {/* Section header: title left, nav right */}
          <div className="flex items-start sm:items-center justify-between mb-12">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-[#18c499] font-heading mb-2">
                Featured Work
              </p>
              <h2 className="font-heading font-bold text-[#1c2b3a] text-2xl sm:text-3xl md:text-4xl">
                Our Projects
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-[#e8f0fb] bg-white flex items-center justify-center text-[#1c2b3a] hover:bg-[#e8f0fb] transition-all duration-300 shadow-sm"
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
                        ? "bg-[#1e5a98] w-6"
                        : "bg-[#e8f0fb] w-2 hover:bg-[#3a80c8]/30"
                    )}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-[#e8f0fb] bg-white flex items-center justify-center text-[#1c2b3a] hover:bg-[#e8f0fb] transition-all duration-300 shadow-sm"
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
              className="w-11 h-11 rounded-full border border-[#e8f0fb] bg-white flex items-center justify-center text-[#1c2b3a] hover:bg-[#e8f0fb] transition-all duration-300 shadow-sm"
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
                      ? "bg-[#1e5a98] w-6"
                      : "bg-[#e8f0fb] w-2 hover:bg-[#3a80c8]/30"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-[#e8f0fb] bg-white flex items-center justify-center text-[#1c2b3a] hover:bg-[#e8f0fb] transition-all duration-300 shadow-sm"
              aria-label="Next projects"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </Container>
      </section>

      {/* ── Bottom CTA ── */}
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
    </>
  );
}
