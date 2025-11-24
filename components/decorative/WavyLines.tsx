"use client";

import { motion } from "motion/react";

type ColorVariant = "cyan" | "pink" | "yellow" | "orange" | "purple";
type Orientation = "horizontal" | "vertical";

interface WavyLinesProps {
  color?: ColorVariant;
  orientation?: Orientation;
  width?: number;
  strokeWidth?: number;
  className?: string;
}

const COLOR_MAP: Record<ColorVariant, string> = {
  cyan: "oklch(0.78 0.15 195)",
  pink: "oklch(0.70 0.25 330)",
  yellow: "oklch(0.85 0.18 95)",
  orange: "oklch(0.70 0.20 45)",
  purple: "oklch(0.60 0.22 290)",
};

export function WavyLines({
  color = "pink",
  orientation = "horizontal",
  width = 300,
  strokeWidth = 4,
  className = "",
}: WavyLinesProps) {
  const strokeColor = COLOR_MAP[color];

  if (orientation === "vertical") {
    return (
      <motion.svg
        width={strokeWidth * 3}
        height={width}
        viewBox={`0 0 ${strokeWidth * 3} ${width}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <motion.path
          d={`M ${strokeWidth * 1.5} 0 Q ${strokeWidth * 2.5} ${width * 0.25}, ${strokeWidth * 1.5} ${width * 0.5} T ${strokeWidth * 1.5} ${width}`}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              `M ${strokeWidth * 1.5} 0 Q ${strokeWidth * 2.5} ${width * 0.25}, ${strokeWidth * 1.5} ${width * 0.5} T ${strokeWidth * 1.5} ${width}`,
              `M ${strokeWidth * 1.5} 0 Q ${strokeWidth * 0.5} ${width * 0.25}, ${strokeWidth * 1.5} ${width * 0.5} T ${strokeWidth * 1.5} ${width}`,
              `M ${strokeWidth * 1.5} 0 Q ${strokeWidth * 2.5} ${width * 0.25}, ${strokeWidth * 1.5} ${width * 0.5} T ${strokeWidth * 1.5} ${width}`,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      width={width}
      height={strokeWidth * 3}
      viewBox={`0 0 ${width} ${strokeWidth * 3}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <motion.path
        d={`M 0 ${strokeWidth * 1.5} Q ${width * 0.25} ${strokeWidth * 0.5}, ${width * 0.5} ${strokeWidth * 1.5} T ${width} ${strokeWidth * 1.5}`}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        fill="none"
        animate={{
          d: [
            `M 0 ${strokeWidth * 1.5} Q ${width * 0.25} ${strokeWidth * 0.5}, ${width * 0.5} ${strokeWidth * 1.5} T ${width} ${strokeWidth * 1.5}`,
            `M 0 ${strokeWidth * 1.5} Q ${width * 0.25} ${strokeWidth * 2.5}, ${width * 0.5} ${strokeWidth * 1.5} T ${width} ${strokeWidth * 1.5}`,
            `M 0 ${strokeWidth * 1.5} Q ${width * 0.25} ${strokeWidth * 0.5}, ${width * 0.5} ${strokeWidth * 1.5} T ${width} ${strokeWidth * 1.5}`,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}
