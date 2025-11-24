"use client";

import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

const SPARKLE_COLORS = [
  "oklch(0.78 0.15 195)", // cyan
  "oklch(0.70 0.25 330)", // pink
  "oklch(0.85 0.18 95)",  // yellow
  "oklch(0.60 0.22 290)", // purple
  "oklch(0.70 0.20 45)",  // orange
];

export function FloatingSparkles({ count = 15 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isInView, setIsInView] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const newSparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
      id: `sparkle-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 15,
      color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2,
    }));

    setSparkles(newSparkles);
  }, [count]);

  // Viewport-aware optimization: pause animations when not visible
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: "100px", // Start observing 100px before entering viewport
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            willChange: "transform, opacity",
            transform: "translateZ(0)",
          }}
          initial={{ opacity: 0, y: 0, rotate: 0 }}
          animate={
            isInView
              ? {
                  opacity: [0, 1, 1, 0],
                  y: [-20, -40, -60, -80],
                  rotate: [0, 90, 180, 270],
                }
              : {
                  opacity: 0,
                  y: 0,
                  rotate: 0,
                }
          }
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: isInView ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <FourPointStar size={sparkle.size} color={sparkle.color} />
        </motion.div>
      ))}
    </div>
  );
}

function FourPointStar({ size, color }: { size: number; color: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill={color}
        stroke="oklch(0.10 0 0)"
        strokeWidth="1"
        strokeLinejoin="miter"
      />
      <path
        d="M12 6L12.75 9.25L16 10L12.75 10.75L12 14L11.25 10.75L8 10L11.25 9.25L12 6Z"
        fill={color}
        opacity="0.6"
      />
    </svg>
  );
}
