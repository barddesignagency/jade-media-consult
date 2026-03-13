import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";

function Start() {
  return (
    <section
      className="py-24 bg-brand "
      aria-label="Begin Consultations With JMC"
    >
      <div className="container flex flex-col md:items-center items-start gap-6 lg:gap-6">
        <SectionDots active={0} variant="dark" />
        <h1 className="md:text-center text-left text-black">
          Ready to move from <br />
          visibility to authority?
        </h1>
        <p className="md:text-xl text-left md:text-center text-black">
          Stop showing up randomly. Start leading your industry.
        </p>
        <Button variant="tertiary" size="sm" thickness="semibold">
          Start your growth journey
        </Button>
      </div>
    </section>
  );
}

export default Start;
