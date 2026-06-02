"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Briefcase,
  CircleAlert,
  FileText,
  Globe,
  Megaphone,
  MessageSquare,
  Monitor,
  Search,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brandVoice } from "@/config/brand";
import { aeoGeoFeature, servicesOverview } from "@/data/services";
import type { ServiceOverviewItem } from "@/types/service";

const iconMap: Record<string, LucideIcon> = {
  "circle-alert": CircleAlert,
  monitor: Monitor,
  activity: Activity,
  megaphone: Megaphone,
  search: Search,
  "message-square": MessageSquare,
  globe: Globe,
  "file-text": FileText,
  briefcase: Briefcase,
};

function ServiceBadge({ badge }: { badge: "CORE" | "NEW" }) {
  const isNew = badge === "NEW";
  return (
    <span
      className={
        isNew
          ? "inline-block text-[0.6875rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-brand-mint text-deep-navy"
          : "inline-block text-[0.6875rem] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-pale-blue text-primary"
      }
    >
      {badge}
    </span>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: ServiceOverviewItem;
  index: number;
}) {
  const Icon = iconMap[service.icon];
  const badge = service.badge ?? "CORE";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="h-full"
    >
      <Link
        href={service.href}
        className="group relative flex flex-col h-full min-h-[220px] sm:min-h-[240px] rounded-xl p-5 sm:p-6 border border-cloud bg-surface hover:border-primary/30 hover:shadow-[0_8px_32px_rgba(30,90,152,0.1)] transition-all duration-300"
      >
        <div className="absolute top-5 right-5 sm:top-6 sm:right-6 z-10">
          <ServiceBadge badge={badge} />
        </div>

        <div className="w-11 h-11 rounded-lg bg-pale-blue flex items-center justify-center shrink-0 mb-4">
          {Icon && <Icon className="w-5 h-5 text-primary" strokeWidth={1.75} />}
        </div>

        <h3 className="font-heading font-semibold text-wordmark text-base sm:text-lg leading-snug mb-2 pr-16 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        <p className="text-sm text-slate leading-relaxed flex-1">
          {service.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all duration-200">
          Learn more
          <ArrowRight className="w-4 h-4 shrink-0" aria-hidden />
        </span>
      </Link>
    </motion.div>
  );
}

function AeoGeoFeatureCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="mt-5 md:mt-6"
    >
      <Link
        href={aeoGeoFeature.href}
        className="surface-dark group flex flex-col sm:flex-row gap-5 sm:gap-6 rounded-xl p-6 sm:p-8 bg-deep-navy border border-deep-navy hover:shadow-[0_12px_40px_rgba(13,31,60,0.25)] transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-lg bg-brand-mint flex items-center justify-center shrink-0">
          <Zap className="w-6 h-6 text-deep-navy" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading font-semibold text-lg sm:text-xl leading-snug mb-3 group-hover:text-brand-mint transition-colors">
            {aeoGeoFeature.title}
          </h3>
          <p className="text-sm sm:text-base text-on-dark/85 leading-relaxed">
            {aeoGeoFeature.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-surface/80">
      <Container>
        <SectionHeading
          overline="Our Services"
          title="Our Services Offering"
          subtitle={brandVoice.servicesIntro}
        />

        <div className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {servicesOverview.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <AeoGeoFeatureCard />
      </Container>
    </section>
  );
}
