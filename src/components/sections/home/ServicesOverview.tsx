"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  Globe,
  Cloud,
  Palette,
  Bot,
  Users,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesOverview } from "@/data/services";
import type { ServiceOverviewItem } from "@/types/service";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  megaphone: Megaphone,
  globe: Globe,
  cloud: Cloud,
  palette: Palette,
  bot: Bot,
  users: Users,
  "shopping-cart": ShoppingCart,
  "bar-chart": BarChart3,
};

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-[#e8f0fb]/30">
      <Container>
        <SectionHeading
          overline="What We Do"
          title="Our Services"
          subtitle="Comprehensive digital solutions to boost your brand visibility, drive growth, and deliver impactful results."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {servicesOverview.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.12, boxShadow: "0 12px 40px rgba(30,90,152,0.18)", transition: { duration: 0.25, ease: "easeOut" } }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
    >
      <Link
        href={service.href}
        className="group flex flex-col h-full bg-white rounded-2xl p-6 border border-[#e8f0fb] hover:border-[#3a80c8]/30 transition-all duration-300"
      >
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-base font-heading font-semibold text-[#1c2b3a] group-hover:text-[#1e5a98] transition-colors leading-snug pr-3">
            {service.title}
          </h3>
          {Icon && (
            <div className="w-10 h-10 rounded-xl bg-[#1e5a98] flex items-center justify-center shrink-0">
              <Icon className="w-5 h-5 text-white" />
            </div>
          )}
        </div>
        <p className="text-sm text-[#4a6075] leading-relaxed">
          {service.description}
        </p>
      </Link>
    </motion.div>
  );
}
