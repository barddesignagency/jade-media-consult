import Image from "next/image";

export default function LogoMarquee() {
  const brands = [
    "/logos/cargoafrik.png",
    "/logos/luxenurse.png",
    "/logos/ofadaboy.svg",
    "/logos/aduke2.png",
    "/logos/cargoafrik.png",
    "/logos/luxenurse.png",
    "/logos/ofadaboy.svg",
    "/logos/aduke2.png",
    "/logos/ofadaboy.svg",
    "/logos/aduke2.png",
  ];

  return (
    <div className="relative overflow-hidden mt-6">
      <div className="flex animate-marquee whitespace-nowrap items-center gap-16">
        {brands.map((logo, i) => (
          <div key={i} className="  relative h-20 w-60 shrink-0 ">
            <Image
              src={logo}
              alt="brand logo"
              fill
              className=" object-contain "
            />
          </div>
        ))}
      </div>
    </div>
  );
}
