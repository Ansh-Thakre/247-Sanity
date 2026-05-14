"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import {
  Search,
  Lightbulb,
  PenTool,
  Code2,
  Cpu,
  BarChart3,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "Understanding your goals, challenges, and audience through in-depth research and analysis.",
    color: "#df37a7",
    bg: "#df37a7",
    borderColor: "rgba(223,55,167,0.4)",
    sphereFrom: "#df37a7",
    sphereTo: "#b82a88",
  },
  {
    icon: Lightbulb,
    title: "Strategy",
    description:
      "Crafting a data-driven roadmap for growth with clear milestones and measurable KPIs.",
    color: "#ffcc11",
    bg: "#ffcc11",
    borderColor: "rgba(255,204,17,0.4)",
    sphereFrom: "#ffcc11",
    sphereTo: "#e6b800",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Creating user-centric interfaces and brand experiences that convert visitors into customers.",
    color: "#3898ec",
    bg: "#3898ec",
    borderColor: "rgba(56,152,236,0.4)",
    sphereFrom: "#3898ec",
    sphereTo: "#2078c4",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building scalable, high-performance solutions with clean architecture and modern tech.",
    color: "#635bff",
    bg: "#635bff",
    borderColor: "rgba(99,91,255,0.4)",
    sphereFrom: "#635bff",
    sphereTo: "#4a42d4",
  },
  {
    icon: Cpu,
    title: "Automation",
    description:
      "Integrating intelligent workflows and AI-powered systems at every level of your business.",
    color: "#ef4444",
    bg: "#ef4444",
    borderColor: "rgba(239,68,68,0.4)",
    sphereFrom: "#ef4444",
    sphereTo: "#c43030",
  },
  {
    icon: BarChart3,
    title: "Optimization",
    description:
      "Refining performance through continuous analytics, A/B testing, and iterative improvements.",
    color: "#bbf7d0",
    bg: "#bbf7d0",
    borderColor: "rgba(187,247,208,0.4)",
    sphereFrom: "#bbf7d0",
    sphereTo: "#86efac",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Scaling your reach and systems with sustained strategies for long-term, compounding results.",
    color: "#df37a7",
    bg: "#df37a7",
    borderColor: "rgba(223,55,167,0.35)",
    sphereFrom: "#df37a7",
    sphereTo: "#b82a88",
  },
];

const CARD_WIDTH = 500;
const CARD_GAP = 56;
const TOTAL_SCROLL_WIDTH =
  steps.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP;

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const Icon = step.icon;
  const isLight = ["#ffcc11", "#bbf7d0"].includes(step.bg);
  const textColor = isLight ? "#1c2b3a" : "#ffffff";
  const subColor = isLight ? "rgba(28,43,58,0.75)" : "rgba(255,255,255,0.92)";
  const numColor = isLight ? "rgba(28,43,58,0.4)" : "rgba(255,255,255,0.6)";
  const iconBg = isLight ? "rgba(0,0,0,0.08)" : `${step.color}30`;

  return (
    <div
      className="shrink-0 relative"
      style={{
        width: "clamp(380px, 40vw, 500px)",
        scrollSnapAlign: "start",
        transform: "rotate(2deg)",
      }}
    >
      <div
        className="relative rounded-2xl h-full"
        style={{
          backgroundColor: step.bg,
          borderColor: step.borderColor,
          borderWidth: 1,
          borderStyle: "solid",
          padding: "clamp(2.5rem, 3vw, 3rem)",
        }}
      >
        {/* Decorative sphere */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
          className="absolute -top-4 right-10"
        >
          <div
            className="w-8 h-8 rounded-full shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${step.sphereFrom}, ${step.sphereTo})`,
              opacity: 0.9,
            }}
          />
        </motion.div>

        {/* Step number */}
        <span
          className="block mb-5 font-mono"
          style={{ fontSize: "1rem", color: numColor }}
        >
          0{index + 1}
        </span>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
          style={{ backgroundColor: iconBg }}
        >
          <Icon className="w-7 h-7" style={{ color: textColor }} />
        </div>

        {/* Content */}
        <h3
          className="font-heading font-bold mb-4"
          style={{ color: textColor, fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)" }}
        >
          {step.title}
        </h3>
        <p
          className="leading-relaxed"
          style={{ color: subColor, fontSize: "1rem" }}
        >
          {step.description}
        </p>
      </div>
    </div>
  );
}

function ScrollIndicator({ progress }: { progress: number }) {
  return (
    <div className="flex flex-col items-center gap-3 mt-8">
      {/* Progress bar */}
      <div
        className="w-48 h-1 rounded-full overflow-hidden"
        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
      >
        <motion.div
          className="h-full rounded-full"
          style={{
            backgroundColor: "#18c499",
            width: `${Math.min(progress * 100, 100)}%`,
          }}
        />
      </div>

      {/* Step counter */}
      <p className="font-mono" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>
        {Math.min(Math.floor(progress * steps.length) + 1, steps.length)} / {steps.length}
      </p>

      {/* Scroll hint */}
      {progress < 0.95 && (
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.05em", color: "rgba(255,255,255,0.4)" }}
          >
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4" style={{ color: "rgba(255,255,255,0.4)" }} />
        </motion.div>
      )}
    </div>
  );
}

export function WorkflowProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progressValue, setProgressValue] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgressValue(v);
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `-${TOTAL_SCROLL_WIDTH - (typeof window !== "undefined" ? Math.min(window.innerWidth * 0.75, 900) : 900)}px`]
  );

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "#1c2b3a", height: `${steps.length * 60 + 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12 px-4">
          <p
            className="font-semibold uppercase font-heading mb-3"
            style={{ fontSize: "0.875rem", letterSpacing: "0.08em", color: "#2ee8b7" }}
          >
            How We Work
          </p>
          <h2
            className="font-heading font-bold"
            style={{ color: "#ffffff", fontSize: "clamp(2.25rem, 5vw, 3.25rem)", lineHeight: 1.12 }}
          >
            Our <em className="italic" style={{ color: "#6aaceb" }}>Process</em>
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.92)" }}
          >
            A proven 7-step methodology that transforms ideas into scalable
            digital ecosystems.
          </p>
        </div>

        {/* Horizontal scroll track */}
        <div className="relative">
          <motion.div
            className="flex gap-14 pl-6 sm:pl-10 lg:pl-20"
            style={{ x }}
          >
            {steps.map((step, i) => (
              <StepCard key={step.title} step={step} index={i} />
            ))}
            {/* End spacer */}
            <div className="shrink-0 w-10" />
          </motion.div>
        </div>

        {/* Progress indicator */}
        <div className="px-4">
          <ScrollIndicator progress={progressValue} />
        </div>
      </div>
    </section>
  );
}
