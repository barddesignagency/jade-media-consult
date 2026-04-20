import React from "react";
import SectionDots from "@/components/ui/sectionDots";
import ContactForm from "./contact-form";

function Contact() {
  return (
    <section className="py-20 bg-brand" aria-labelledby="our-Contact-heading">
      <div className="container grid lg:grid-cols-[460px_1fr] xl:grid-cols-[480px_1fr] gap-8 lg:gap-10">
        {/* LEFT INTRO */}
        <div className="space-y-4">
          <div className="space-y-4">
            <SectionDots active={0} variant="normal" />
            <h2 id="our-Contact-heading">
              Ready to position your brand for growth?
            </h2>
            <p className="whitespace-pre-line">
              Visibility is easy. Authority is intentional. <br />
              If you’re ready to move from scattered marketing to structured
              growth, let’s start the conversation.
            </p>
          </div>
        </div>

        {/* RIGHT Contact */}
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
