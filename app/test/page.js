"use client";
import React from "react";
import Image from "next/image";
import seo from "@/public/images/services/seo.jpg";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";
import { motion } from "framer-motion";

function TestPage() {
  return (
    <section className="py-20 bg-neutral-300 ">
      <div className="container">
        <div className="flex justify-between h-full">
          <div className="space-y-6 max-w-1/2">
            <div className="flex gap-2 items-center ">
              <SectionDots active={0} variant="dark" />
              <span>JMC Services</span>
            </div>
            <h1>
              Full Marketing <br />
              Services
            </h1>
            <p>
              Marketing That Moves the Needle. Structured, results-driven
              marketing across social media, search, and email designed to turn
              visibility into authority and attention into revenue.
            </p>
            <Button
              variant="tertiary"
              size="md"
              href="/contact"
              className="mt-8"
            >
              Request Consultation
            </Button>
          </div>

          <div className=" w-full flex justify-end ">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-full w-full  min-h-80 rounded-2xl overflow-hidden "
            >
              <Image
                src={seo}
                alt="Two Ladies Looking at a laptop"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-8">
          <p>
            Marketing That Moves the Needle Every business faces a silent threat
            that drains growth without mercy, which is Invisibility. Not the
            absence of effort, but the absence of effective marketing. It’s the
            frustration of running campaigns that don’t convert, posting content
            that doesn’t sell, and being present everywhere but profitable
            nowhere. That’s where Jade Media Consult (JMC) steps in. We don’t do
            random marketing or chase empty visibility. We build structured,
            results-focused marketing systems that turn attention into interest,
            interest into trust, and trust into paying customers. Because
            marketing shouldn’t just make you seen; it should make you valuable.
            At JMC, we focus on business impact, not noise. While many agencies
            are busy creating buzz, we craft strategies rooted in positioning,
            persuasion, and precision. We identify exactly who your brand should
            attract, why they should choose you, and how to move them from
            awareness to action. Then we build marketing systems around those
            answers eliminating guesswork, wasted reach, and scattered
            messaging. The result is clear direction, stronger brand perception,
            and marketing that works with purpose.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TestPage;
