"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Hammer,
  Heart,
  Store,
  BookOpen,
  Building2,
  Rocket,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  hammer: Hammer,
  heart: Heart,
  store: Store,
  "book-open": BookOpen,
  "building-2": Building2,
  rocket: Rocket,
};

const brandCard = {
  bg: "#f3f7fc",
  text: "#0f1e30",
  sub: "#4e6580",
  iconBg: "#d6e8f8",
  iconColor: "#1e5a98",
};

const iconAccents: Record<string, string> = {
  hammer: "#1a9e80",
  heart: "#1e5a98",
  store: "#2d6ab5",
  "book-open": "#1a3a5f",
  "building-2": "#7dd4c0",
  rocket: "#1a9e80",
};

export function IndustrySolutions() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          overline="Industries"
          title="Solutions Built for Your Sector"
          subtitle="Marketing systems tailored to how your industry finds, converts, and retains customers."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((item, index) => (
            <IndustryCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function IndustryCard({
  item,
  index,
}: {
  item: (typeof industries)[number];
  index: number;
}) {
  const Icon = iconMap[item.icon];
  const card = brandCard;
  const iconColor = iconAccents[item.icon] ?? brandCard.iconColor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        href={item.href}
        className="group block rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:border-primary/20"
        style={{ backgroundColor: card.bg }}
      >
        <div
          className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
          style={{ backgroundColor: card.iconBg, color: iconColor }}
        >
          {Icon && <Icon className="w-5 h-5" />}
        </div>
        <h3
          className="font-heading font-semibold text-lg mb-2"
          style={{ color: card.text }}
        >
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: card.sub }}>
          {item.description}
        </p>
      </Link>
    </motion.div>
  );
}
