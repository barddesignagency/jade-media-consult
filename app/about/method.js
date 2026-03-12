import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import Button from "@/components/ui/button";
import Image from "next/image";
import team from "@/public/images/team-meeting.jpg";

function Method() {
  return (
    <section
      className="bg-brand text-black lg:py-20 xl:py-24"
      aria-labelledby="method-heading"
    >
      <div className="container  ">
        <div className="font-xs md:font-sm lg:font-base flex gap-1 sm:gap-1.5 lg:gap-2 items-center mb-4">
          <SectionDots active={3} variant="dark" />
          <span>The JMC Methodology</span>
        </div>

        <div className="grid lg:grid-cols-2">
          <div className="">
            <div className="lg:space-y-6 xl:space-y-8 lg:max-w-120 ">
              <h3>Our core offerings</h3>
              <div>
                <h4>Phase 1: Brand Positioning.</h4>
                <p>
                  Identifying exactly who you attract and why they should choose
                  you.
                </p>
              </div>
              <div>
                <h4>Phase 2: Strategic Consistency.</h4>
                <p>
                  Building the content heartbeat and managing daily account
                  operations.
                </p>
              </div>
              <div>
                <h4>Phase 3: Digital Mastery.</h4>
                <p>
                  Optimizing search visibility and email sequences to nurture
                  loyalty.
                </p>
              </div>
              <div>
                <h4>Phase 4: Measurable Growth.</h4>
                <p>
                  Documenting performance through data-driven brand reports and
                  case studies.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-full w-full lg:min-h-80 rounded-2xl overflow-hidden">
            <Image
              src={team}
              alt="A team meeting at a board meeting"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Method;
