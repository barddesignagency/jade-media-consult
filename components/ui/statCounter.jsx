"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import useCountUp from "@/lib/utils/useCountUp";

export default function StatCounter({ value, label, icon: Icon }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const count = useCountUp(value, 1800, isInView);

  return (
    <li
      ref={ref}
      className="space-y-2 bg-white lg:px-6 lg:py-7 px-3 py-3 lg:rounded-2xl"
    >
      {Icon && <Icon size={44} className=" text-brand" />}
      <span className="text-4xl font-bold">+{count}%</span>
      <p className="text-foreground/70">{label}</p>
    </li>
  );
}
