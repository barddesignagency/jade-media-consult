"use client";

import SectionDots from "@/components/ui/sectionDots";
import StatCounter from "@/components/ui/statCounter";
import LogoMarquee from "./logoMarquee";
import { motion } from "framer-motion";

function ProvenResults() {
  return (
    <section
      className="py-20 xl:py-24 w-full"
      aria-labelledby="results-heading"
    >
      <div className="container">
        <header className="flex gap-2 items-center">
          <SectionDots active={1} variant="normal" />
          <span>The JMC Results</span>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mt-6 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:max-w-145"
          >
            <h2 className="py-4" id="results-heading">
              Proven results for <br />
              intentional brands.
            </h2>

            <p className="text-foreground/80">
              Across our portfolio, brands see an average of 100%+ growth in
              reach, engagement, and visibility within the first 60 days of
              strategic media management.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <StatCounter value={98} label="Expanded Digital Presence" />

            <StatCounter value={128} label="Increased Brand Visibility" />

            <StatCounter value={144} label="Audience Engagement Peak" />
          </motion.ul>
        </div>
      </div>
      <h4 className="text-center mt-16 font-medium">
        Trusted by growing brands
      </h4>
      <LogoMarquee />
    </section>
  );
}

export default ProvenResults;
