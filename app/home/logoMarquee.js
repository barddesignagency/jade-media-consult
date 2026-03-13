export default function LogoMarquee() {
  const brands = [
    "CargoAfrik",
    "Luxenurse",
    "Ofadaboy",
    "Aduke Ologuro",
    "Mausi Clothiers",
    "CargoAfrik",
    "Luxenurse",
    "Ofadaboy",
    "Aduke Ologuro",
    "Mausi Clothiers",
  ];

  return (
    <div className="relative overflow-hidden mt-6">
      <div className="flex animate-marquee whitespace-nowrap gap-16 text-5xl font-black text-foreground/50">
        {brands.map((brand, i) => (
          <span key={i}>{brand}</span>
        ))}
      </div>
    </div>
  );
}
