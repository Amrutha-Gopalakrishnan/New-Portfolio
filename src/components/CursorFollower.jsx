import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorFollower() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, {
    stiffness: 220,
    damping: 25,
    mass: 0.4,
  });

  const springY = useSpring(mouseY, {
    stiffness: 220,
    damping: 25,
    mass: 0.4,
  });

  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    setEnabled(media.matches);

    if (!media.matches) return undefined;

    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const updateHoverState = (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (target.closest("[data-cursor='hover']")) {
        setHovering(event.type === "pointerover");
      }
    };

    window.addEventListener("pointermove", moveCursor);
    document.addEventListener("pointerover", updateHoverState);
    document.addEventListener("pointerout", updateHoverState);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("pointerover", updateHoverState);
      document.removeEventListener("pointerout", updateHoverState);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      animate={{
        width: hovering ? 56 : 26,
        height: hovering ? 56 : 26,
        opacity: 1,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 22,
      }}
      className="fixed left-0 top-0 z-[999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,0.35)]"
    >
      <motion.div
        animate={{
          opacity: hovering ? 1 : 0.9,
          scale: hovering ? 1 : 0.75,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
      />
    </motion.div>
  );
}