"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const SERVICE_ICONS = [
  {
    label: "SEO",
    color: "#1e5a98",
    path: "M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z",
  },
  {
    label: "Web",
    color: "#18c499",
    path: "M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z",
  },
  {
    label: "Social",
    color: "#f4a726",
    path: "M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0",
  },
  {
    label: "Ads",
    color: "#e8544f",
    path: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    label: "Analytics",
    color: "#6c5ce7",
    path: "M18 20V10M12 20V4M6 20v-6",
  },
  {
    label: "Branding",
    color: "#3a80c8",
    path: "M12 19l7-7 3 3-7 7-3-3zM18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586M11 13a2 2 0 100-4 2 2 0 000 4z",
  },
  {
    label: "AI",
    color: "#0f6e56",
    path: "M12 8V4H8M2 12h2M20 12h2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    label: "Content",
    color: "#854f0b",
    path: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8",
  },
];

const ICON_RADIUS_DESKTOP = 180;
const ICON_RADIUS_MOBILE = 110;

function getCirclePosition(index: number, total: number, radius: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function getEntryDirection(index: number, total: number) {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
  const dist = 550;
  return {
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist,
  };
}

/*
  Timeline (4s total):
  0.0s–0.9s   Icons fly in from edges → lock into circular orbit
  0.8s–1.6s   Logo spins in and scales up at center
  1.6s        Logo fully visible
  1.8s–2.3s   Icons collapse into center (behind logo), fade + scale to 0
  2.3s–2.7s   "24/7 Digital Pro" text fades in
  3.4s        Exit begins (scale explosion + fade)
  4.0s        Done → homepage
*/

export function IntroAnimation({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<"intro" | "done">("intro");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 640);
    const timer = setTimeout(() => setPhase("done"), 4000);
    return () => clearTimeout(timer);
  }, []);

  const radius = isMobile ? ICON_RADIUS_MOBILE : ICON_RADIUS_DESKTOP;

  return (
    <>
      <AnimatePresence>
        {phase === "intro" && (
          <motion.div
            key="intro-overlay"
            className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: "#f7fbfe" }}
            exit={{
              scale: 3.5,
              opacity: 0,
              transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1] },
            }}
          >
            {/* Background pulse */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(30,90,152,0.04) 0%, transparent 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(30,90,152,0.10) 0%, transparent 70%)",
                  "radial-gradient(circle at 50% 50%, rgba(30,90,152,0.04) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Secondary glow */}
            <motion.div
              className="absolute w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(24,196,153,0.06) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Icon ring container */}
            <div className="relative flex items-center justify-center">
              {/* 8 service icons: fly in → orbit → collapse behind logo */}
              {SERVICE_ICONS.map((icon, i) => {
                const entry = getEntryDirection(i, SERVICE_ICONS.length);
                const target = getCirclePosition(i, SERVICE_ICONS.length, radius);

                return (
                  <motion.div
                    key={icon.label}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0.3 }}
                    animate={{
                      x: [entry.x, target.x, target.x, 0],
                      y: [entry.y, target.y, target.y, 0],
                      opacity: [0, 1, 1, 0],
                      scale: [0.3, 1, 1, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      times: [0, 0.35, 0.72, 1],
                      delay: i * 0.05,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
                        style={{
                          backgroundColor: `${icon.color}15`,
                          border: `1.5px solid ${icon.color}30`,
                        }}
                      >
                        <svg
                          width={isMobile ? 20 : 26}
                          height={isMobile ? 20 : 26}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={icon.color}
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={icon.path} />
                        </svg>
                      </div>
                      <span
                        className="text-[10px] sm:text-xs font-heading font-semibold tracking-wide uppercase"
                        style={{ color: icon.color }}
                      >
                        {icon.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}

              {/* Central logo */}
              <motion.div
                className="relative z-10 flex flex-col items-center"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Glow ring */}
                <motion.div
                  className="absolute -inset-5 sm:-inset-8 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(30,90,152,0.12) 0%, transparent 70%)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(30,90,152,0)",
                      "0 0 50px rgba(30,90,152,0.2)",
                      "0 0 0px rgba(30,90,152,0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                  }}
                />

                {/* Rotating ring */}
                <motion.div
                  className="absolute -inset-6 sm:-inset-9 rounded-full border border-[#1e5a98]/15"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ borderStyle: "dashed" }}
                />

                {/* Logo image */}
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Image
                    src="/icon-247.png"
                    alt="247 Digital Pro"
                    width={96}
                    height={96}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl shadow-xl"
                    priority
                  />
                </motion.div>
              </motion.div>

              {/* "24/7 Digital Pro" text — appears when icons collapse */}
              <motion.div
                className="absolute"
                style={{ top: isMobile ? 60 : 76 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: isMobile ? 50 : 60 }}
                transition={{ duration: 0.5, delay: 2.2, ease: "easeOut" }}
              >
                <p className="font-heading font-bold text-[#1c2b3a] text-base sm:text-xl tracking-tight whitespace-nowrap">
                  24/7{" "}
                  <span className="text-[#1e5a98]">Digital Pro</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual page content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "done" ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </>
  );
}
