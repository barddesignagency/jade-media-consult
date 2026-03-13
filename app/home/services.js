import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";

const ServiceCard = ({ title, info, href }) => {
  return (
    <div className="rounded-2xl bg-background text-foreground flex flex-col lg:h-80 justify-between w-full lg:p-8 sm:p-6 p-4">
      <div className="space-y-3">
        <h4 className="whitespace-pre-line">{title}</h4>
        <p className="leading-[140%] whitespace-pre-line">{info}</p>
      </div>
      <Button
        size="sm"
        variant="outline"
        href={href}
        thickness="regular"
        className="w-max"
      >
        Learn More
      </Button>
    </div>
  );
};
function Services() {
  return (
    <section
      className="bg-brand text-black pb-20 xl:pb-24 pt-16 "
      aria-labelledby="services-heading"
    >
      <div className="container  ">
        <div>
          <div className="font-xs md:font-sm lg:font-base flex gap-1 sm:gap-1.5 lg:gap-2 items-center">
            <SectionDots active={3} variant="dark" />
            <span>How JMC achieves results</span>
          </div>
          <div className="">
            <div className="lg:max-w-145">
              <h2 className="py-4" id="services-heading">
                Strategic services, <br />
                measurable impact.
              </h2>

              <Button variant="tertiary" size="md" href="/Ssrvices">
                View all our services
              </Button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          <ServiceCard
            title={`Social media &\n Account management`}
            info="Turning pages into professional public images and credibility signals."
            href="/services/social-media-marketing"
          />
          <ServiceCard
            title={`Full Marketing &\n SEO`}
            info={`Engineering brand authority and "moving the needle" with data-driven systems.`}
            href="/services/marketing"
          />

          <ServiceCard
            title={`Content creation\n via Jade’s Cam`}
            info={`The "heartbeat" of your brand.\n High-fidelity visuals and story-driven execution..`}
            href="/services/content-creation"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
