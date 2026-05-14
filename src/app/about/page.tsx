"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Sparkles,
  Shield,
  BarChart3,
  Users,
  Target,
  Eye,
} from "lucide-react";
import Link from "next/link";

const values = [
  { icon: Sparkles, title: "Innovation", description: "Pushing boundaries with cutting-edge solutions and forward-thinking strategies." },
  { icon: Shield, title: "Transparency", description: "Open, honest communication at every stage of the partnership." },
  { icon: Target, title: "Accountability", description: "Owning results and delivering on every commitment we make." },
  { icon: Rocket, title: "Scalability", description: "Building systems designed to grow seamlessly with your business." },
  { icon: BarChart3, title: "Performance", description: "Data-driven decisions that maximize ROI and measurable outcomes." },
  { icon: Users, title: "Customer Success", description: "Your growth is our metric — we succeed when you succeed." },
];

function StoryCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const centerY = useTransform(scrollYProgress, [0, 0.35, 0.6], [160, 0, -20]);
  const centerRotate = useTransform(scrollYProgress, [0, 0.35, 0.55], [4, 1, 0]);
  const centerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const leftX = useTransform(scrollYProgress, [0.1, 0.45], [-100, 0]);
  const leftY = useTransform(scrollYProgress, [0.1, 0.45], [60, 0]);
  const leftRotate = useTransform(scrollYProgress, [0.1, 0.45, 0.6], [-10, -3, 0]);
  const leftOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  const rightX = useTransform(scrollYProgress, [0.15, 0.5], [100, 0]);
  const rightY = useTransform(scrollYProgress, [0.15, 0.5], [60, 0]);
  const rightRotate = useTransform(scrollYProgress, [0.15, 0.5, 0.65], [10, 3, 0]);
  const rightOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative pt-8 pb-20 md:pt-12 md:pb-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #d0e4f7 0%, #c5d8ee 30%, #d8cfe6 60%, #e8d5d0 100%)",
      }}
    >
      {/* Desktop layout — center card with side cards below */}
      <div className="hidden md:flex flex-col items-center mx-auto max-w-6xl px-4">
        {/* Company Story card — center */}
        <motion.div
          className="relative z-10"
          style={{
            y: centerY,
            rotate: centerRotate,
            opacity: centerOpacity,
            width: "100%",
            maxWidth: 580,
          }}
        >
          <div
            className="rounded-3xl p-10 md:p-12 shadow-2xl"
            style={{ backgroundColor: "#ffffff", border: "1px solid #e8f0fb" }}
          >
            <h2
              className="font-heading font-bold mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                color: "#1c2b3a",
                fontStyle: "italic",
                letterSpacing: "-0.02em",
              }}
            >
              We are builders.
            </h2>

            <div className="space-y-5">
              <p
                className="leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#4a6075" }}
              >
                We&apos;re a technology-first digital transformation company helping
                businesses modernize operations, automate workflows, and
                accelerate growth.
              </p>
              <p
                className="leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#4a6075" }}
              >
                We build for impact, not vanity. Every line of code, every
                campaign, every automation is designed to move the needle for
                real businesses with real challenges.
              </p>
              <p
                className="leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#4a6075" }}
              >
                We believe in tools that last. No lock-ins, no bloated
                dashboards. Just clean, scalable systems that grow with you —
                from first sale to global operations.
              </p>
              <p
                className="leading-relaxed"
                style={{ fontSize: "1.0625rem", color: "#4a6075" }}
              >
                We&apos;re small on purpose. A focused team that moves fast,
                ships quality, and treats every client like a partner, not a
                ticket number.
              </p>
            </div>

            <div
              className="mt-8 pt-6"
              style={{ borderTop: "1px solid #e8f0fb" }}
            >
              <p
                className="font-heading font-semibold"
                style={{ fontSize: "0.875rem", color: "#1e5a98" }}
              >
                247 Digital
              </p>
              <p style={{ fontSize: "0.8125rem", color: "#4a6075" }}>
                Digital Growth &bull; AI Automation &bull; Technology Solutions
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission + Vision cards — side by side below the center card */}
        <div className="flex justify-between w-full mt-10" style={{ maxWidth: 780 }}>
          {/* Mission card — bottom-left */}
          <motion.div
            style={{
              x: leftX,
              y: leftY,
              rotate: leftRotate,
              opacity: leftOpacity,
              width: 300,
            }}
          >
            <div
              className="rounded-2xl p-7 shadow-xl"
              style={{ backgroundColor: "#1e5a98" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <Lightbulb className="w-6 h-6" style={{ color: "#ffffff" }} />
              </div>
              <h3
                className="font-heading font-bold mb-3"
                style={{ fontSize: "1.375rem", color: "#ffffff" }}
              >
                Our Mission
              </h3>
              <p
                className="leading-relaxed italic"
                style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.85)" }}
              >
                &ldquo;To empower businesses through scalable digital ecosystems,
                intelligent automation, and measurable growth strategies.&rdquo;
              </p>
            </div>
          </motion.div>

          {/* Vision card — bottom-right */}
          <motion.div
            style={{
              x: rightX,
              y: rightY,
              rotate: rightRotate,
              opacity: rightOpacity,
              width: 300,
            }}
          >
            <div
              className="rounded-2xl p-7 shadow-xl"
              style={{ backgroundColor: "#18c499" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
              >
                <Eye className="w-6 h-6" style={{ color: "#ffffff" }} />
              </div>
              <h3
                className="font-heading font-bold mb-3"
                style={{ fontSize: "1.375rem", color: "#ffffff" }}
              >
                Our Vision
              </h3>
              <p
                className="leading-relaxed italic"
                style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.88)" }}
              >
                &ldquo;To become a globally recognized digital transformation and
                automation partner.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile layout — simple stacked cards */}
      <div className="md:hidden mx-auto max-w-md px-4 space-y-6">
        {/* Story card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="rounded-3xl p-8 shadow-xl"
            style={{ backgroundColor: "#ffffff", border: "1px solid #e8f0fb" }}
          >
            <h2
              className="font-heading font-bold mb-5"
              style={{ fontSize: "1.75rem", color: "#1c2b3a", fontStyle: "italic" }}
            >
              We are builders.
            </h2>
            <div className="space-y-4">
              <p className="leading-relaxed" style={{ fontSize: "1rem", color: "#4a6075" }}>
                We&apos;re a technology-first digital transformation company helping
                businesses modernize operations, automate workflows, and accelerate growth.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "1rem", color: "#4a6075" }}>
                We build for impact, not vanity. Every line of code, every
                campaign, every automation is designed to move the needle for real businesses.
              </p>
              <p className="leading-relaxed" style={{ fontSize: "1rem", color: "#4a6075" }}>
                We&apos;re small on purpose. A focused team that moves fast,
                ships quality, and treats every client like a partner.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Mission card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="rounded-2xl p-6 shadow-lg"
            style={{ backgroundColor: "#1e5a98" }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <Lightbulb className="w-5 h-5" style={{ color: "#ffffff" }} />
            </div>
            <h3 className="font-heading font-bold mb-2" style={{ fontSize: "1.25rem", color: "#ffffff" }}>
              Our Mission
            </h3>
            <p className="leading-relaxed italic" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)" }}>
              &ldquo;To empower businesses through scalable digital ecosystems,
              intelligent automation, and measurable growth strategies.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Vision card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div
            className="rounded-2xl p-6 shadow-lg"
            style={{ backgroundColor: "#18c499" }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
              style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
            >
              <Eye className="w-5 h-5" style={{ color: "#ffffff" }} />
            </div>
            <h3 className="font-heading font-bold mb-2" style={{ fontSize: "1.25rem", color: "#ffffff" }}>
              Our Vision
            </h3>
            <p className="leading-relaxed italic" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.88)" }}>
              &ldquo;To become a globally recognized digital transformation and
              automation partner.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="relative">
      {/* ========== HERO ========== */}
      <section
        className="relative pt-36 pb-8 sm:pt-44 sm:pb-10 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #e8f0fb 0%, #d0e4f7 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading font-semibold uppercase mb-4"
            style={{ fontSize: "0.8125rem", letterSpacing: "0.1em", color: "#1e5a98" }}
          >
            About Us
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
            The team behind{" "}
            <span style={{ color: "#1e5a98" }}>247</span>{" "}
            <span style={{ color: "#18c499" }}>Digital</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 mx-auto leading-relaxed"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.1875rem)",
              color: "#4a6075",
              maxWidth: "44ch",
            }}
          >
            A technology-first digital transformation company helping businesses
            modernize operations, automate workflows, and accelerate growth.
          </motion.p>
        </div>

        {/* Subtle decorative circles */}
        <div
          className="absolute rounded-full"
          style={{
            width: 400, height: 400, top: "-15%", right: "-8%",
            backgroundColor: "rgba(58,128,200,0.06)",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: 300, height: 300, bottom: "-10%", left: "-5%",
            backgroundColor: "rgba(24,196,153,0.06)",
          }}
        />
      </section>

      {/* ========== STORY + MISSION + VISION CARDS ========== */}
      <StoryCards />

      {/* ========== VALUES ========== */}
      <section className="py-20 md:py-28" style={{ backgroundColor: "#f7fbfe" }}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p
              className="font-heading font-semibold uppercase mb-3"
              style={{ fontSize: "0.8125rem", letterSpacing: "0.1em", color: "#1e5a98" }}
            >
              What Drives Us
            </p>
            <h2
              className="font-heading font-bold"
              style={{ color: "#1c2b3a", fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="rounded-2xl p-5 sm:p-7 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ backgroundColor: "#ffffff", border: "1px solid #e8f0fb" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "#e8f0fb" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#1e5a98" }} />
                  </div>
                  <h3
                    className="font-heading font-bold mb-2"
                    style={{ fontSize: "1.125rem", color: "#1c2b3a" }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ fontSize: "0.9375rem", color: "#4a6075" }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="relative py-20 md:py-24">
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
              Ready to work with us?
            </h2>
            <p
              className="max-w-xl mx-auto mb-8 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.0625rem" }}
            >
              Let&apos;s discuss how 247 Digital can help transform your business
              with the right technology and strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-heading font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: "#18c499", color: "#ffffff" }}
              >
                Get in Touch
                <span>→</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 font-heading font-semibold text-sm transition-all duration-300"
                style={{ color: "rgba(255,255,255,0.9)", border: "1.5px solid rgba(255,255,255,0.2)" }}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
