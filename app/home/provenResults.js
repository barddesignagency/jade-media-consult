"use client";

import SectionDots from "@/components/ui/sectionDots";
import StatCounter from "@/components/ui/statCounter";
import LogoMarquee from "./logoMarquee";
import { motion } from "framer-motion";
import office from "@/public/images/office.jpg";
import Image from "next/image";
import { FaArrowTrendUp } from "react-icons/fa6";
import { PiEyeFill } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";

function ProvenResults() {
  return (
    <>
      <section className="py-12 xl:py-16 w-full ">
        <h4 className="text-center font-medium mb-4">
          Trusted by growing brands
        </h4>
        <LogoMarquee />
      </section>
      <section
        className="py-20 xl:py-24 w-full bg-neutral-300"
        aria-labelledby="results-heading"
      >
        <div className="container">
          <header className="flex gap-2 items-center">
            <SectionDots active={1} variant="normal" />
            <span>The JMC Results</span>
          </header>

          <div className="lg:grid flex   flex-col-reverse lg:grid-cols-2 gap-12 mt-6 items-start ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:max-w-145"
            >
              <h2 className="py-4" id="results-heading">
                Proven results for <br />
                intentional brands.
              </h2>

              <p className="text-foreground/80">
                Across our portfolio, brands see an average of 100%+ growth in
                reach, engagement, and visibility within the first 60 days of
                strategic media management.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full w-full min-h-96 rounded-2xl overflow-hidden "
            >
              <Image
                src={office}
                alt="Two Ladies in a board meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
          <div>
            <motion.ul
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-3 w-full mt-12 gap-6"
            >
              <StatCounter
                value={98}
                label="Expanded Digital Presence"
                icon={FaArrowTrendUp}
              />

              <StatCounter
                value={128}
                label="Increased Brand Visibility"
                icon={PiEyeFill}
              />

              <StatCounter
                value={144}
                label="Audience Engagement Peak"
                icon={HiMiniUserGroup}
              />
            </motion.ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProvenResults;
