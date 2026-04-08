import React from "react";
import Button from "@/components/ui/button";
import Image from "next/image";

function ServiceRow({ title, description, href, image, width, position }) {
  return (
    <div
      className={`relative lg:h-144 xl:h-152 h-136 rounded-2xl overflow-hidden border-neutral-300 border ${width} `}
      data-aos="fade-up"
    >
      <Image
        src={image}
        fill
        alt={title}
        className={`object-cover rounded-2xl ${position}`}
      />
      <article
        className={`xl:py-4 xl:px-8 px-4 py-3 absolute  bg-white/90 bottom-0 xl:h-64 sm:h-54 h-64 md:h-68`}
      >
        <div className=" flex justify-between flex-col h-full">
          <div className="space-y-2">
            <h4>{title}</h4>

            <p className="leading-[140%] text-foreground/80">{description}</p>
          </div>

          <Button
            size="sm"
            variant="outline"
            thickness="regular"
            href={href}
            className="w-max"
          >
            Learn more
          </Button>
        </div>
      </article>
    </div>
  );
}

export default ServiceRow;
