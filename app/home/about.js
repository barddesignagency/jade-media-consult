import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";
import Image from "next/image";
import ladies from "@/public/images/ladies.jpg";

function About() {
  return (
    <section
      className="bg-brand text-black py-20 xl:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container grid md:grid-cols-2 gap-6">
        <div>
          <div className="font-xs md:font-sm lg:font-base flex gap-1 sm:gap-1.5 lg:gap-2 items-center">
            <SectionDots active={2} variant="dark" />
            <span>What JMC solves</span>
          </div>
          <div className="">
            <div className="lg:max-w-145">
              <h2 className="py-4" id="about-heading">
                Invisibility is the silent <br />
                threat to your growth.
              </h2>
              <p className="text-black/80 mb-6">
                We don&apos;t just sell &quot;activity&quot;, we solve the
                frustration of running campaigns that don&apos;t convert and
                being present everywhere but profitable nowhere. We bridge the
                gap between simple visibility and true market dominance.
              </p>
              <Button variant="tertiary" size="md" href="/about">
                Read more about us
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full md:min-h-80 rounded-2xl overflow-hidden">
          <Image
            src={ladies}
            alt="Two Ladies Looking at a laptop"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
