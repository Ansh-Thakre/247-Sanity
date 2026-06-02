"use client";

import { motion } from "framer-motion";
import { brandVoice } from "@/config/brand";
import { Button } from "@/components/ui/Button";

interface BrandCTAProps {
  title?: string;
  description?: string;
  className?: string;
}

/** §08 / §09 — Dark navy CTA block with mint + outline actions */
export function BrandCTA({
  title = brandVoice.ctaDarkTitle,
  description = brandVoice.ctaConsultation,
  className = "pb-24",
}: BrandCTAProps) {
  return (
    <section className={`relative ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="surface-dark rounded-2xl px-8 py-16 sm:px-16 sm:py-20 text-center bg-deep-navy"
        >
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.75rem)] mb-4 leading-tight">
            {title}
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lead text-white/80">
            {description}
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
  );
}
