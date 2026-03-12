import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import team from "@/public/images/our-team.jpg";
import Image from "next/image";

function AboutHero() {
  return (
    <section
      className="bg-[url('/images/bg-pattern-full.jpg')] bg-cover bg-center  w-full"
      aria-labelledby="about-hero-heading"
    >
      <div className="container flex flex-col lg:min-h-200 items-center justify-center xl:h-[calc(100dvh-128px)] lg:gap-6 text-white pt-20">
        <SectionDots active={0} variant="light" />
        <p>About the Jade Media Consult</p>
        <h1
          className="lg:text-center text-left text-white"
          id="about-hero-heading"
        >
          Strategists of authority.
          <br /> Partners in growth.
        </h1>

        <div className="rounded-4xl overflow-hidden bg-red-300 relative lg:w-4xl xl:w-[996px] lg:h-[500px] xl:h-[544px]">
          <Image
            src={team}
            alt="JMC's CEO, COO and other parts of the team"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;
