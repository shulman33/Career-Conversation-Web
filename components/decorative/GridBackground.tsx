"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface GridDot {
  id: string;
  x: number;
  y: number;
  delay: number;
}

export function GridBackground() {
  const [dots, setDots] = useState<GridDot[]>([]);

  useEffect(() => {
    const gridSize = 60;
    const dotsArray: GridDot[] = [];

    // Generate dots at grid intersections
    for (let i = 0; i < window.innerWidth; i += gridSize) {
      for (let j = 0; j < window.innerHeight; j += gridSize) {
        // Only add some dots randomly for performance
        if (Math.random() > 0.7) {
          dotsArray.push({
            id: `${i}-${j}`,
            x: i,
            y: j,
            delay: Math.random() * 2,
          });
        }
      }
    }

    setDots(dotsArray);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Cyan grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, oklch(0.78 0.15 195 / 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, oklch(0.78 0.15 195 / 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated dots at intersections */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute w-2 h-2 rounded-full bg-memphis-cyan"
          style={{
            left: dot.x - 4,
            top: dot.y - 4,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1.2, 1],
            opacity: [0, 0.8, 0.4],
          }}
          transition={{
            duration: 2,
            delay: dot.delay,
            repeat: Infinity,
            repeatDelay: 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
