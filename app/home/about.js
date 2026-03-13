"use client";

import { motion } from "framer-motion";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";
import Image from "next/image";
import ladies from "@/public/images/ladies.jpg";
import { fadeUp } from "@/lib/animations";

function About() {
  return (
    <section
      className="bg-brand text-black py-20 xl:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container grid md:grid-cols-2 gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="flex gap-2 items-center">
            <SectionDots active={2} variant="dark" />
            <span>What JMC solves</span>
          </div>

          <h2 className="py-4" id="about-heading">
            Invisibility is the silent threat to your growth.
          </h2>

          <p className="text-black/80 mb-6">
            We don&apos;t just sell &quot;activity&quot;, we solve the
            frustration of running campaigns that don&apos;t convert and being
            present everywhere but profitable nowhere.
          </p>

          <Button variant="tertiary" size="md" href="/about">
            Read more about us
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative h-full w-full md:min-h-80 rounded-2xl overflow-hidden"
        >
          <Image
            src={ladies}
            alt="Two Ladies Looking at a laptop"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
