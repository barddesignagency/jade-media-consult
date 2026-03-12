import React from "react";
import Button from "@/components/ui/button";

function ServiceRow({ title, description, href }) {
  return (
    <article className="py-8 border-t border-border last:border-b">
      <div className="space-y-4 ">
        <h3>{title}</h3>

        <p className="leading-[140%] text-foreground/80">{description}</p>

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
  );
}

export default ServiceRow;
