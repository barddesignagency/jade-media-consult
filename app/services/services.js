import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import ServiceRow from "./serviceRow";

const services = [
  {
    title: "Full Marketing services",
    description:
      "Marketing that moves the needle. Structured, results-driven marketing across social media, search, and email designed to turn visibility into authority and attention into revenue.",
    href: "/services/marketing",
  },
  {
    title: "Social Media Marketing",
    description:
      "We transform your social media from a posting routine into a structured authority system managed daily, positioned intentionally, and optimized for measurable growth.",
    href: "/services/social-media",
  },
  {
    title: "Digital Marketing Service",
    description:
      "An integrated digital growth system combining social, search, and email built to turn visibility into authority and engagement into revenue.",
    href: "/services/digital-marketing",
  },
  {
    title: "Content Creation & Creative Execution",
    description:
      "We create story-driven visuals and content experiences that don’t just capture attention—they strengthen identity, evoke emotion, and elevate your brand authority.",
    href: "/services/content-creation",
  },
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We position your brand where it matters most at the top of search results through structured long-term SEO designed to attract high-intent traffic and build lasting authority.",
    href: "/services/seo",
  },
  {
    title: "Email Marketing",
    description:
      "We turn your email list into a revenue-driving relationship system crafting personalized messages and automated journeys that nurture trust and convert consistently.",
    href: "/services/email-marketing",
  },
  {
    title: "Billboard Placement & Outdoor Advertising",
    description:
      "We position your brand in high-impact physical spaces combining strategic location, bold creative, and campaign precision to turn real-world visibility into lasting brand authority.",
    href: "/services/outdoor-advertising",
  },
];

function Services() {
  return (
    <section
      className="py-20 bg-background"
      aria-labelledby="our-services-heading"
    >
      <div className="container grid lg:grid-cols-[460px_1fr] xl:grid-cols-[486px_1fr] gap-6">
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
        <div>
          {services.map((service) => (
            <ServiceRow
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
