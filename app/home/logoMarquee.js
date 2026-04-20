import Image from "next/image";
import cargo from "@/public/logos/cargoafrik.png";

export default function LogoMarquee() {
  const brands = [
    "/logos/cargoafrik.png",
    "/logos/luxenurse.png",
    "/logos/ofadaboy.svg",
    "/logos/aduke2.png",
    "/logos/luxenurse.png",
    "/logos/ofadaboy.svg",
  ];

  return (
    <div className="carousel ">
      <div className="grouped  ">
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
      <div className="grouped  ">
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
