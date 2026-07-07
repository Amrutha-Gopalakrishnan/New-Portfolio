import React from "react";
import { motion } from "framer-motion";

const blobs = [
  {
    top: "5%",
    left: "-10%",
    color: "#000000ff",
    size: 420,
    duration: 14,
  },
  {
    top: "25%",
    right: "-8%",
    color: "#000308ff",
    size: 350,
    duration: 16,
  },
  {
    bottom: "-10%",
    left: "30%",
    color: "#000000ff",
    size: 450,
    duration: 18,
  },
];

export default function BackgroundEffects() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 50, -40, 0],
            y: [0, -40, 40, 0],
            scale: [1, 1.08, 0.94, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-[160px] opacity-20"
          style={{
            ...blob,
            width: blob.size,
            height: blob.size,
            background: blob.color,
          }}
        />
      ))}

      {/* subtle grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.05]
        bg-[linear-gradient(#000000ff_1px,transparent_1px),linear-gradient(90deg,#000000ff_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* vignette */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
    </div>
  );
}