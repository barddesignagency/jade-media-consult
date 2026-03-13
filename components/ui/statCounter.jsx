"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import useCountUp from "@/lib/utils/useCountUp";

export default function StatCounter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useCountUp(value, 1800, isInView);

  return (
    <li ref={ref} className="space-y-1">
      <p className="text-4xl font-semibold">+{count}%</p>
      <p className="text-foreground/70">{label}</p>
    </li>
  );
}
