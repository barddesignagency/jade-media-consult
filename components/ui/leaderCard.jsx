import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils/cn";

const cardVariants = cva("flex flex-col", {
  variants: {
    variant: {
      featured: "gap-4",
      compact: "gap-3",
    },
  },

  defaultVariants: {
    variant: "featured",
  },
});

const imageVariants = cva("relative overflow-hidden rounded-2xl", {
  variants: {
    variant: {
      featured: "h-[630px]",
      compact: "h-[300px]",
    },
  },

  defaultVariants: {
    variant: "featured",
  },
});

function LeaderCard({ name, role, image, variant, className }) {
  return (
    <div className={cn(cardVariants({ variant }), className)}>
      <div className={cn(imageVariants({ variant }))}>
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div>
        <h3>{name}</h3>
        <p className="text-foreground">{role}</p>
      </div>
    </div>
  );
}

export default LeaderCard;
