"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, Bot, Zap, TrendingUp } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

function useCountUp(target: number, duration = 2000, delay = 400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now() + delay;
          const step = (now: number) => {
            const elapsed = Math.max(0, now - start);
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, delay]);

  return { count, ref };
}

export function HeroSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-heading font-bold text-ink leading-[1.12] tracking-tight">
              Digital Growth, AI Automation, SaaS &amp; Technology Solutions
              <span className="text-primary">
                {" "}
                — Unified Into One Powerful Business Ecosystem.
              </span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-slate max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Helping startups, SMEs, contractors, and enterprises scale through
              intelligent digital transformation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                href="/contact#consultation"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Book Free Consultation
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Start Your Project
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative w-full max-w-lg lg:max-w-none"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function HeroVisual() {
  const revenue = useCountUp(124, 2000, 400);
  const leads = useCountUp(2847, 2200, 600);

  return (
    <div className="relative lg:scale-110 lg:origin-center xl:scale-[1.15]">
      <div className="absolute -inset-6 lg:-inset-10 bg-linear-to-br from-[#e8f0fb] via-[#edf4fc] to-[#eaf9f5] rounded-4xl -z-10" />

      <div className="relative bg-white rounded-2xl lg:rounded-3xl shadow-lg border border-[#b5d4f4] overflow-hidden">
        <div className="bg-[#1c2b3a] px-4 py-3 lg:px-6 lg:py-4 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f4a726]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#18c499]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#3a80c8]" />
          </div>
          <span className="font-mono text-xs text-white/60 tracking-wide">
            247 Growth Dashboard
          </span>
        </div>

        <div className="p-5 lg:p-8 space-y-4 lg:space-y-6">
          <div className="grid grid-cols-2 gap-3 lg:gap-5">
            <div className="bg-[#e8f0fb] rounded-xl p-4 lg:p-6">
              <div className="flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#18c499]" />
                <span className="text-xs text-[#18c499] font-medium">+47%</span>
              </div>
              <p className="font-mono text-xl lg:text-2xl font-medium text-[#1c2b3a]">
                <span ref={revenue.ref}>${revenue.count}K</span>
              </p>
              <p className="text-xs text-[#4a6075] mt-0.5">Revenue Growth</p>
            </div>
            <div className="bg-[#eaf9f5] rounded-xl p-4 lg:p-6">
              <div className="flex items-center gap-1.5 mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-[#1e5a98]" />
                <span className="text-xs text-[#1e5a98] font-medium">+32%</span>
              </div>
              <p className="font-mono text-xl lg:text-2xl font-medium text-[#1c2b3a]">
                <span ref={leads.ref}>{leads.count.toLocaleString()}</span>
              </p>
              <p className="text-xs text-[#4a6075] mt-0.5">Leads This Month</p>
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4">
            <ProgressBar label="SEO Performance" value={78} color="#1e5a98" />
            <ProgressBar label="Conversion Rate" value={64} color="#18c499" />
            <ProgressBar label="Ad Spend ROI" value={91} color="#f4a726" />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-3 -right-2 sm:-right-6 lg:-top-5 lg:-right-10 bg-white rounded-full px-3 py-1.5 shadow-md border border-[#d1f5ee] flex items-center gap-1.5 z-10"
      >
        <Search className="w-3.5 h-3.5 text-[#18c499]" />
        <span className="text-xs font-medium text-[#1c2b3a]">
          SEO Optimized
        </span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 7, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="absolute -bottom-3 -left-2 sm:-left-6 lg:-bottom-5 lg:-left-10 bg-white rounded-full px-3 py-1.5 shadow-md border border-[#e8f0fb] flex items-center gap-1.5 z-10"
      >
        <Bot className="w-3.5 h-3.5 text-[#1e5a98]" />
        <span className="text-xs font-medium text-[#1c2b3a]">AI Powered</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
        className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-10 lg:-right-14 bg-[#faeeda] rounded-full px-3 py-1.5 shadow-md border border-[#f4a726]/20 flex items-center gap-1.5 z-10"
      >
        <Zap className="w-3.5 h-3.5 text-[#854f0b]" />
        <span className="text-xs font-medium text-[#1c2b3a]">Automated</span>
      </motion.div>
    </div>
  );
}

function ProgressBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-[#4a6075]">{label}</span>
        <span className="font-mono text-[#1c2b3a]">{value}%</span>
      </div>
      <div className="h-2 bg-[#e8f0fb] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}
