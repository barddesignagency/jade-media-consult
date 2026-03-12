import { cn } from "@/lib/utils/cn";

function SectionDots({
  total = 4,
  active = 0,

  variant = "dark",
}) {
  return (
    <div className="flex " aria-hidden="true">
      {Array.from({ length: total }).map((_, i) => {
        const isActive = i + 1 === active;
        const fill = active === 0;

        return (
          <span
            key={i}
            className={cn(
              "lg:w-3 w-2 h-2 lg:h-3 rounded-full border transition-all",

              isActive && variant === "dark" && "bg-black border-black",
              isActive && variant === "light" && "bg-white border-white",
              isActive &&
                variant === "normal" &&
                "bg-foreground border-foreground",

              !isActive && variant === "dark" && "border-black",
              !isActive && variant === "light" && "border-white",
              !isActive && variant === "normal" && " border-foreground",

              fill && variant === "normal" && "bg-foreground border-foreground",
              fill && variant === "dark" && "bg-black border-black",
              fill && variant === "light" && "bg-white border-white"
            )}
          />
        );
      })}
    </div>
  );
}

export default SectionDots;
