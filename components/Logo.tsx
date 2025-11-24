"use client";

import { motion } from "motion/react";
import Link from "next/link";

interface LogoProps {
  name?: string;
  className?: string;
}

export function Logo({ name = "Sam Shulman", className = "" }: LogoProps) {
  // Extract initials from the name
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link href="#home" onClick={handleScrollToTop} className={className}>
      <motion.div
        className="flex items-center gap-2 sm:gap-3 group cursor-pointer overflow-visible"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {/* Geometric Logo Box with Initials */}
        <div className="relative overflow-visible">
          <motion.div
            className="relative bg-linear-to-br from-cyan via-purple to-pink p-[3px] rounded-xl"
            whileHover={{ rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-memphis-bg rounded-xl px-3 py-2 sm:px-4 sm:py-2.5">
              <span className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-linear-to-r from-cyan via-purple to-pink">
                {initials}
              </span>
            </div>
          </motion.div>

          {/* Memphis-style corner accent */}
          <motion.div
            className="absolute -top-1 -right-1 w-3 h-3 bg-yellow rounded-full border-2 border-memphis-black"
            whileHover={{ scale: 1.2, rotate: 90 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </div>

        {/* Text Logo - Hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block">
          <motion.span
            className="text-lg sm:text-xl font-bold tracking-tight"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="text-memphis-black">{name.split(" ")[0]}</span>
            {name.split(" ")[1] && (
              <>
                {" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan to-purple">
                  {name.split(" ")[1]}
                </span>
              </>
            )}
          </motion.span>
        </div>

        {/* Animated underline on hover */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-cyan via-purple to-pink"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  );
}
