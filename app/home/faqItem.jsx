"use client";

import { useState } from "react";
import { cn } from "@/lib/utils/cn";

function FAQItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-foreground lg:py-8 sm:py-6 py-4 last:border-b">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-start justify-between text-left gap-6 group cursor-pointer"
      >
        <h3 className="lg:max-w-105">{question}</h3>

        <span
          className={cn(
            "flex items-center justify-center w-10 h-10 rounded-full border border-neutral-500 transition-all duration-300",
            open && "rotate-180"
          )}
        >
          <span className="relative w-4 h-4">
            <span className="absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2" />
            <span
              className={cn(
                "absolute left-1/2 top-0 h-full w-0.5 bg-current -translate-x-1/2 transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
          </span>
        </span>
      </button>

      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-foreground/80 leading-[140%] lg:max-w-lg">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
