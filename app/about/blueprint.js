import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";

function Blueprint() {
  return (
    <section
      className="lg:py-20 xl:py-24 w-full bg-brand"
      aria-labelledby="philosophy-heading"
    >
      <div className="container  text-black">
        <div className="font-xs md:font-sm lg:font-base flex gap-1 sm:gap-1.5 lg:gap-2 items-center mb-4">
          <SectionDots active={2} variant="dark" />
          <span>The JMC Blueprint</span>
        </div>
        <div className="flex justify-between">
          <div className="lg:max-w-147 space-y-4">
            <h3 className="" id="philosophy-heading">
              Full-Spectrum digital & <br />
              traditional dominance.
            </h3>
            <p className="text-black ">
              From digital platforms to real-world presence, we position your
              brand to lead in every space. We take the pressure of growth off
              your shoulders by aligning your message across every touchpoint.
            </p>
            <Button variant="tertiary" size="md" href="/Ssrvices">
              View all our services
            </Button>
          </div>
          <div className="lg:space-y-6 xl:space-y-8 lg:max-w-120 ">
            <h3>Our core offerings</h3>
            <div>
              <h4>Digital Authority:</h4>
              <p>
                Social Media Management, SEO, and Email Marketing systems that
                convert trust into revenue.
              </p>
            </div>
            <div>
              <h4>Creative Powerhouse (Jade’s Cam):</h4>
              <p>
                High-fidelity content production, story-driven visuals, and
                event coverage.
              </p>
            </div>
            <div>
              <h4>Physical Presence:.</h4>
              <p>
                Strategic billboard placement and outdoor advertising in
                high-traffic intersections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blueprint;
