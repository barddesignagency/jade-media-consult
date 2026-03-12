import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import WorksRow from "./worksRow";

const works = [
  {
    title: "Ofadaboy ",
    description:
      "Ofadaboy is a Lagos-based culinary brand that celebrates Nigerian heritage through food bringing traditional flavours, culture, and community together in memorable experiences.",
    href: "/works/ofada-boy",
  },
  {
    title: "CargoAfrik",
    description:
      "CargoAfrik is a UK-based freight and logistics company that specializes in shipping goods from the United Kingdom to Nigeria. The company provides air and sea cargo services, offering collection in the UK and delivery across Nigerian destinations for both personal and commercial shipments.",
    href: "/works/cargo-afrik",
  },
  {
    title: "Luxenurse",
    description:
      "Luxenurse is a wellness clinic dedicated to helping clients achieve optimal health through tailored treatments, including IV drips, vitamin therapy, weight loss injections, and other wellness solutions. Combining medical expertise with a focus on personalized care, Luxenurse empowers clients to improve vitality, wellness, and overall quality of life.",
    href: "/works/luxenurse",
  },
  {
    title: "Mausi Clothiers",
    description:
      "We create story driven visuals and content experiences that don’t just capture attention they strengthen identity, evoke emotion, and elevate your brand authority.",
    href: "/works/mausi-clothiers",
  },

  {
    title: "Aduke Ologuro",
    description:
      "Aduke Ologuro is a culturally rooted food brand dedicated to serving fresh palmwine and thoughtfully prepared garri combinations, complemented by traditional side dishes such as crayfish and fried fish. Blending authenticity with quality presentation, the brand celebrates local flavors while creating a warm, communal experience around simple yet beloved Nigerian staples.",
    href: "/works/aduke-ologuro",
  },
];

function Works() {
  return (
    <section
      className="py-20 bg-background"
      aria-labelledby="our-works-heading"
    >
      <div className="container grid lg:grid-cols-[460px_1fr] xl:grid-cols-[480px_1fr] lg:gap-10">
        {/* LEFT INTRO */}
        <div className="space-y-4">
          <div className="space-y-4">
            <SectionDots active={0} variant="normal" />
            <p>See case studies of our work</p>
          </div>

          <h2 id="our-works-heading">
            Over the years these companies and brands have trusted us
          </h2>
        </div>

        {/* RIGHT works */}
        <div>
          {works.map((work) => (
            <WorksRow
              key={work.title}
              title={work.title}
              description={work.description}
              href={work.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Works;
