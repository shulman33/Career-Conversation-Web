"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

type ShapeType = "circle" | "rectangle";
type ColorVariant = "cyan" | "pink" | "yellow" | "orange" | "purple";

interface Shape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  size: number;
  color: ColorVariant;
  rotation: number;
  duration: number;
  delay: number;
}

const COLOR_MAP: Record<ColorVariant, string> = {
  cyan: "oklch(0.78 0.15 195 / 0.3)",
  pink: "oklch(0.70 0.25 330 / 0.3)",
  yellow: "oklch(0.85 0.18 95 / 0.3)",
  orange: "oklch(0.70 0.20 45 / 0.3)",
  purple: "oklch(0.60 0.22 290 / 0.3)",
};

const COLORS: ColorVariant[] = ["cyan", "pink", "yellow", "orange", "purple"];
const SHAPES: ShapeType[] = ["circle", "rectangle"];

export function GeometricShapes({ count = 8, animated = true }: { count?: number; animated?: boolean }) {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const newShapes: Shape[] = Array.from({ length: count }, (_, i) => ({
      id: `shape-${i}`,
      type: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 80 + 40,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      rotation: Math.random() * 45,
      duration: Math.random() * 4 + 6,
      delay: Math.random() * 2,
    }));

    setShapes(newShapes);
  }, [count]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ scale: 0, rotate: 0 }}
          animate={
            animated
              ? {
                  scale: [1, 1.1, 1],
                  rotate: [shape.rotation, shape.rotation + 10, shape.rotation],
                }
              : { scale: 1, rotate: shape.rotation }
          }
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: animated ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          {shape.type === "circle" ? (
            <div
              className="w-full h-full rounded-full border-4 border-memphis-black"
              style={{
                backgroundColor: COLOR_MAP[shape.color],
              }}
            />
          ) : (
            <div
              className="w-full h-full rounded-2xl border-4 border-memphis-black"
              style={{
                backgroundColor: COLOR_MAP[shape.color],
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
