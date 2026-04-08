import Button from "@/components/ui/button";
import Image from "next/image";

export default function ServiceCTA() {
  return (
    <div className="relative xl:h-152 col-span-2 rounded-2xl overflow-hidden bg-brand text-white p-8 flex flex-col justify-between">
      {/* decorative image */}
      <div className="absolute top-0 right-0 opacity-20">
        <Image
          src="/images/graphics/marketing-abstract.png"
          width={300}
          height={300}
          alt=""
        />
      </div>

      <div className="space-y-4 max-w-xs relative z-10">
        <h3 className="text-white">Ready to grow your brand?</h3>

        <p className="text-white/80">
          Let’s build a strategy that turns visibility into authority and
          engagement into revenue.
        </p>
      </div>

      <Button
        size="sm"
        variant="secondary"
        thickness="regular"
        href="/contact"
        className="w-max"
      >
        Begin With Us
      </Button>
    </div>
  );
}
