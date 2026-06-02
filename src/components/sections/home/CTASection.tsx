"use client";

import { motion } from "framer-motion";
import { ArrowRight, LineChart, Search } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { brandVoice } from "@/config/brand";
import { Button } from "@/components/ui/Button";

const leadMagnets = [
  { icon: Search, label: brandVoice.ctaAudit, href: "/contact#consultation" },
  {
    icon: LineChart,
    label: "Growth Strategy Session",
    href: "/contact#consultation",
  },
];

export function CTASection() {
  return (
    <>
      <section className="py-16 md:py-20 bg-brand-mint/30">
        <Container>
          <div className="text-center mb-10">
            <p className="text-overline mb-3">Get Started</p>
            <h2 className="font-heading font-bold text-wordmark text-2xl md:text-3xl">
              Replace guesswork with measurable growth
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {leadMagnets.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <div className="flex flex-col items-center text-center gap-3 p-5 bg-white rounded-xl border border-border hover:border-deep-mint/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-brand-mint flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-deep-navy" />
                  </div>
                  <span className="text-sm font-semibold text-ink leading-tight">
                    {item.label}
                  </span>
                  <Button
                    href={item.href}
                    variant={i === 0 ? "emphasis" : "outline"}
                    size="sm"
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {item.label}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="surface-dark rounded-2xl px-8 py-16 sm:px-16 sm:py-20 text-center bg-deep-navy"
          >
            <h2 className="font-heading font-bold text-white mb-4 leading-tight">
              {brandVoice.ctaDarkTitle}
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lead text-white/80">
              {brandVoice.ctaDarkDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
              <Button href="/contact#consultation" variant="mint" size="lg">
                {brandVoice.ctaPrimary}
              </Button>
              <Button href="/portfolio" variant="outlineDark" size="lg">
                {brandVoice.ctaCaseStudies}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
