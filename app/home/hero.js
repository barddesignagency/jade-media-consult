"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import SectionDots from "@/components/ui/sectionDots";
import { fadeUp, staggerContainer } from "@/lib/animations";

function Hero() {
  return (
    <section
      className="bg-[url('/images/bg-pattern-full.jpg')] bg-cover bg-center w-full"
      aria-labelledby="hero-heading"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container flex flex-col lg:min-h-172 sm:items-center justify-center h-[calc(100dvh-72px)] md:h-[calc(100dvh-96px)] xl:h-[calc(100dvh-128px)] gap-4 lg:gap-6 py-6"
      >
        <motion.div variants={fadeUp}>
          <SectionDots active={0} variant="light" />
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="sm:text-center text-left text-white"
          id="hero-heading"
        >
          Great brands don’t
          <br /> grow by chance. They <br />
          grow through <span className="text-brand">strategy</span>.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl sm:max-w-160 sm:text-center text-white"
        >
          Jade Media Consult builds brand authority through strategic media,
          storytelling, and execution so you’re not just visible, but
          unforgettable.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex sm:flex-row flex-col sm:space-x-6 lg:space-x-8 items-center justify-center space-y-3 sm:space-y-0"
        >
          <Button variant="primary" size="md" href="/">
            Book a Consultation
          </Button>

          <Button variant="secondary" size="md" href="/services">
            View Our Services
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
