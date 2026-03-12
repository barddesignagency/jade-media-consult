import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import LeaderCard from "@/components/ui/leaderCard";

function Leaders() {
  return (
    <section
      className="lg:py-20 xl:py-24 w-full"
      aria-labelledby="leader-heading"
    >
      <div className="container bg-background text-foreground">
        <div className="font-xs md:font-sm lg:font-base flex gap-1 sm:gap-1.5 lg:gap-2 items-center">
          <SectionDots active={4} variant="normal" />
          <span>The JMC Leadership</span>
        </div>
        <div className="flex">
          <div className="lg:max-w-145">
            <h3 className="py-4 lg:max-w-64" id="leader-heading">
              The leaders behind the work
            </h3>
            <p className="text-foreground/80">
              Behind every result is focused leadership. Jade Media Consult is
              led by professionals who bring clarity, precision, and strategic
              direction to every brand we work with.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <LeaderCard
            variant="featured"
            name="Ibukunoluwa K. Ademola"
            role="Chief Executive Officer"
            image="/images/ibukun.jpg"
          />

          <LeaderCard
            variant="featured"
            name="Peace Ogu"
            role="Operations Manager"
            image="/images/peace.jpg"
          />
        </div>
      </div>
    </section>
  );
}

export default Leaders;
