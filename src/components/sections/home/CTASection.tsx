"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Bot,
  Gauge,
  LineChart,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

const leadMagnets = [
  { icon: Search, label: "Free SEO Audit", href: "/tools/seo-audit" },
  { icon: Bot, label: "Automation Consultation", href: "/contact#consultation" },
  { icon: Gauge, label: "Website Performance Audit", href: "/tools" },
  { icon: LineChart, label: "Growth Strategy Session", href: "/contact#consultation" },
];

export function CTASection() {
  return (
    <>
      {/* Lead Magnet Cards */}
      <section className="py-16 md:py-20 bg-[#eaf9f5]/40">
        <Container>
          <div className="text-center mb-10">
            <p className="text-xs font-semibold tracking-[0.08em] uppercase text-[#18c499] font-heading mb-3">
              Free Resources
            </p>
            <h2 className="font-heading font-bold text-[#1c2b3a] text-2xl md:text-3xl">
              Get Started Today
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {leadMagnets.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <Link
                  href={item.href}
                  className="group flex flex-col items-center text-center gap-3 p-5 bg-white rounded-2xl border border-[#e8f0fb] hover:border-[#18c499]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d1f5ee] flex items-center justify-center group-hover:bg-[#18c499] transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-[#0f6e56] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-[#1c2b3a] leading-tight">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottom CTA */}
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
