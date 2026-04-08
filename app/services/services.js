import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import ServiceRow from "./serviceRow";
import ServiceCTA from "./serviceCta";

const services = [
  {
    title: "Full Marketing services",
    description:
      "Marketing that moves the needle. Structured, results-driven marketing across social media, search, and email designed to turn visibility into authority and attention into revenue.",
    href: "/services/marketing",
    image: "/images/services/seo.jpg",
    width: "lg:col-span-2 ",
    position: "lg:object-[25%_50%]",
  },
  {
    title: "Social Media Marketing",
    description:
      "We transform your social media from a posting routine into a structured authority system managed daily, positioned intentionally, and optimized for measurable growth.",
    href: "/services/social-media",
    image: "/images/services/social-media.jpg",
    width: "lg:col-span-3 ",
    position: "lg:object-bottom-left",
  },
  {
    title: "Content Creation & Creative Execution",
    description:
      "We create story-driven visuals and content experiences that captures attention, strengthens identity, evokes emotion, and elevates your brand authority.",
    href: "/services/content-creation",
    image: "/images/services/content-creation.jpg",
    width: "lg:col-span-3",
    position: "lg:object-left",
  },
  {
    title: "Digital Marketing Service",
    description:
      "An integrated digital growth system combining social, search, and email built to turn visibility into authority and engagement into revenue.",
    href: "/services/digital-marketing",
    image: "/images/services/digital-marketing.jpg",
    width: "lg:col-span-2",
    position: "lg:object-left object-left",
  },
  {
    title: "Email Marketing",
    description:
      "We turn your email list into a revenue-driving relationship system crafting personalized messages and automated journeys that nurture trust and convert consistently.",
    href: "/services/email-marketing",
    image: "/images/services/email.jpg",
    width: "lg:col-span-2",
    position: "lg:object-center",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We position your brand where it matters most at the top of search results through structured long-term SEO designed to attract high-intent traffic and build lasting authority.",
    href: "/services/seo",
    image: "/images/services/searchengine.jpg",
    width: "lg:col-span-3",
    position: "lg:object-[75%_50%]",
  },

  {
    title: "Billboard Placement & Outdoor Advertising",
    description:
      "We position your brand in high-impact physical spaces combining strategic location, bold creative, and campaign precision to turn real-world visibility into lasting brand authority.",
    href: "/services/outdoor-advertising",
    image: "/images/services/billboard.jpg",
    width: "lg:col-span-3 ",
    position: "lg:object-left",
  },
];

function Services() {
  return (
    <section
      className="py-20 bg-neutral-300 "
      aria-labelledby="our-services-heading"
    >
      <div className="container grid ">
        {/* LEFT INTRO */}
        <div className="space-y-4">
          <div className="space-y-4">
            <SectionDots active={0} variant="normal" />
            <p>How we achieve results</p>
          </div>

          <h2 id="our-services-heading">
            Strategic services,
            <br />
            measurable impact.
          </h2>
        </div>

        {/* RIGHT SERVICES */}
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-x-4 gap-y-6 lg:gap-6 w-full mt-10 lg:mt-16 ">
          {services.map((service) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
              image={service.image}
              width={service.width}
              position={service.position}
              isCTA={service.isCTA}
            />
          ))}
          <ServiceCTA />
        </div>
      </div>
    </section>
  );
}

export default Services;
