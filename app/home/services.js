"use client";

import { motion } from "framer-motion";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";
import { slideRight, staggerContainer } from "@/lib/animations";

const ServiceCard = ({ title, info, href, delay }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-delay={delay}
      className="rounded-2xl bg-background text-foreground flex flex-col h-60 sm:h-64 md:h-72 lg:h-80 justify-between w-full lg:p-8 sm:p-6 p-4 hover:-translate-y-2 transition-all duration-300"
    >
      <div className="lg:space-y-3 space-y-2">
        <h4 className="whitespace-pre-line">{title}</h4>
        <p className="lg:leading-[140%] lg:whitespace-pre-line">{info}</p>
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
              <div className="hidden lg:block ">
                <Button variant="tertiary" size="md" href="/services">
                  View all our services
                </Button>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-2 lg:mt-12 "
        >
          <ServiceCard
            title={`Social media &\n Account management`}
            info="Turning pages into professional public images and credibility signals."
            href="/services/social-media-marketing"
            delay={100}
          />
          <ServiceCard
            title={`Full Marketing &\n SEO`}
            info={`Engineering brand authority and "moving the needle" with data-driven systems.`}
            href="/services/marketing"
            delay={300}
          />
          <div className="col-span-1 md:col-span-2 lg:col-span-1 items-center">
            <ServiceCard
              title={`Content creation\n via Jade’s Cam`}
              info={`The "heartbeat" of your brand.\n High-fidelity visuals and story-driven execution.`}
              href="/services/content-creation"
              delay={500}
            />
          </div>
        </motion.div>
        <div className="block lg:hidden mt-6">
          <Button variant="tertiary" size="md" href="/services">
            View all our services
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Services;
