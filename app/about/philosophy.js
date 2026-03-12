import React from "react";
import SectionDots from "@/components/ui/sectionDots";

function Philosphy() {
  return (
    <section
      className="lg:py-20 xl:py-24 w-full"
      aria-labelledby="philosophy-heading"
    >
      <div className="container bg-background text-foreground">
        <div className="font-xs md:font-sm lg:font-base flex gap-1 sm:gap-1.5 lg:gap-2 items-center">
          <SectionDots active={1} variant="normal" />
          <span>The JMC Philosophy</span>
        </div>
        <div className="flex justify-between">
          <div className="lg:max-w-147">
            <h3 className="py-4" id="philosophy-heading">
              Great brands don&apos;t grow by chance, <br />
              they grow through strategy.
            </h3>
            <p className="text-foreground/80">
              We saw too many great businesses showing up without a voice,
              without consistency, and without a clear path to conversion. Jade
              Media Consult was built to bridge that gap. We don&apos;t just
              manage accounts; we manage growth, turning market noise into brand
              authority.
            </p>
          </div>
          <div className="lg:space-y-6 xl:space-y-8 lg:max-w-120 ">
            <div>
              <h4>Strategy begins with structure.</h4>
              <p>
                We eliminate the &quot;scattered&quot; look. We build
                professional digital identities that command respect.
              </p>
            </div>
            <div>
              <h4>Positioning over popularity.</h4>
              <p>
                We don&apos;t chase vanity metrics or trends. We build systems
                rooted in positioning and precision.
              </p>
            </div>
            <div>
              <h4>Every platform. One clear voice.</h4>
              <p>
                Content is the heartbeat. We ensure your story is told with
                clarity across every platform, every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Philosphy;
