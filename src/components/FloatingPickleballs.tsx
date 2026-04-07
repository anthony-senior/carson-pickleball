"use client";

import { motion } from "framer-motion";

interface Ball {
  size: number;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  duration: number;
  delay: number;
  yRange: number;
  rotate: number;
  opacity: number;
  holes?: boolean;
}

const presets: Record<string, Ball[]> = {
  about: [
    { size: 64, top: "15%", right: "12%", duration: 6, delay: 0, yRange: 8, rotate: 5, opacity: 0.22, holes: true },
    { size: 40, bottom: "20%", left: "8%", duration: 5, delay: 1, yRange: 6, rotate: -3, opacity: 0.16 },
    { size: 28, top: "40%", right: "5%", duration: 7, delay: 2, yRange: 10, rotate: 4, opacity: 0.14, holes: true },
    { size: 52, bottom: "35%", right: "20%", duration: 5.5, delay: 0.5, yRange: 7, rotate: -6, opacity: 0.18 },
    { size: 20, top: "25%", left: "15%", duration: 4.5, delay: 1.5, yRange: 5, rotate: 8, opacity: 0.13 },
  ],
  courts: [
    { size: 48, top: "10%", left: "6%", duration: 5.5, delay: 0, yRange: 7, rotate: -4, opacity: 0.18, holes: true },
    { size: 32, top: "30%", right: "8%", duration: 6.5, delay: 0.8, yRange: 9, rotate: 6, opacity: 0.15 },
    { size: 56, bottom: "15%", right: "15%", duration: 5, delay: 1.2, yRange: 6, rotate: -5, opacity: 0.22, holes: true },
    { size: 24, bottom: "40%", left: "12%", duration: 7, delay: 0.3, yRange: 8, rotate: 3, opacity: 0.14 },
  ],
  gallery: [
    { size: 44, top: "12%", right: "10%", duration: 6, delay: 0.5, yRange: 7, rotate: 5, opacity: 0.18, holes: true },
    { size: 36, bottom: "25%", left: "5%", duration: 5, delay: 0, yRange: 6, rotate: -4, opacity: 0.15 },
    { size: 60, top: "35%", left: "18%", duration: 7, delay: 1, yRange: 9, rotate: 7, opacity: 0.13, holes: true },
    { size: 22, top: "20%", right: "25%", duration: 4.5, delay: 1.8, yRange: 5, rotate: -8, opacity: 0.16 },
    { size: 50, bottom: "10%", right: "8%", duration: 5.5, delay: 0.7, yRange: 8, rotate: 3, opacity: 0.18 },
  ],
  forum: [
    { size: 52, top: "18%", right: "7%", duration: 5.5, delay: 0, yRange: 8, rotate: -6, opacity: 0.22, holes: true },
    { size: 28, bottom: "30%", left: "10%", duration: 6, delay: 1.5, yRange: 6, rotate: 4, opacity: 0.14 },
    { size: 40, top: "45%", left: "5%", duration: 7, delay: 0.4, yRange: 10, rotate: -3, opacity: 0.16, holes: true },
    { size: 34, bottom: "15%", right: "18%", duration: 5, delay: 0.9, yRange: 7, rotate: 5, opacity: 0.18 },
  ],
};

export function FloatingPickleballs({ variant }: { variant: keyof typeof presets }) {
  const balls = presets[variant] || presets.about;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
      {balls.map((ball, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-ball.yRange, ball.yRange, -ball.yRange],
            rotate: [0, ball.rotate, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: ball.duration,
            ease: "easeInOut",
            delay: ball.delay,
          }}
          className="absolute rounded-full bg-brand-green"
          style={{
            width: ball.size,
            height: ball.size,
            top: ball.top,
            bottom: ball.bottom,
            left: ball.left,
            right: ball.right,
            opacity: ball.opacity,
          }}
        >
          <div
            className="absolute inset-[15%] grid grid-cols-3 grid-rows-3 gap-[2px]"
          >
            {[...Array(9)].map((_, j) => (
              <div key={j} className="rounded-full bg-background" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
