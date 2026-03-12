import React from "react";
import SectionDots from "@/components/ui/sectionDots";

function ProvenResults() {
  return (
    <section
      className="lg:py-20 xl:py-24 w-full"
      aria-labelledby="results-heading"
    >
      <div className="container bg-background text-foreground">
        <div className="font-xs md:font-sm lg:font-base flex gap-1 sm:gap-1.5 lg:gap-2 items-center">
          <SectionDots active={1} variant="normal" />
          <span>The JMC Results</span>
        </div>
        <div className="flex">
          <div className="lg:max-w-145">
            <h2 className="py-4" id="results-heading">
              Proven results for <br />
              intentional brands.
            </h2>
            <p className="text-foreground/80">
              Across our portfolio, brands see an average of 100%+ growth in
              reach, engagement, and visibility within the first 60 days of
              strategic media management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProvenResults;
