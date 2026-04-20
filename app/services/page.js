import React from "react";
import Services from "./services";

export const metadata = {
  title: "Our Services",
  description:
    "Explore our services including branding, content strategy, media production, and digital growth solutions.",
  openGraph: {
    title: "Jade Media Consult Services",
    description: "Strategic media and branding services tailored for growth.",
    url: "https://jademediaconsult.com/services",
  },
};

function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <Services />
    </main>
  );
}

export default ServicesPage;
