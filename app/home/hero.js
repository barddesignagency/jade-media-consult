import React from "react";
import Button from "@/components/ui/button";
import SectionDots from "@/components/ui/sectionDots";

function Hero() {
  return (
    <section
      className="bg-[url('/images/bg-pattern-full.jpg')] bg-cover bg-center  w-full"
      aria-labelledby="hero-heading"
    >
      <div className="container flex flex-col lg:min-h-172 items-center justify-center xl:h-[calc(100dvh-128px)] lg:gap-6 py-6">
        <SectionDots active={0} variant="light" />
        <h1 className="lg:text-center text-left text-white" id="hero-heading">
          Great brands don’t
          <br /> grow by chance. They <br />
          grow through <span className="text-brand">strategy</span>.
        </h1>
        <p className="lg:text-xl lg:max-w-160 lg:text-center text-white">
          Jade Media Consult builds brand authority through strategic media,
          storytelling, and execution so you’re not just visible, but
          unforgettable.
        </p>
        <div className="flex lg:flex-row flex-col lg:space-x-8 items-center justify-center">
          <Button variant="primary" size="md" href="/">
            Book a Consultation
          </Button>

          <Button variant="secondary" size="md" href="/services">
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
