import React from "react";
import AboutHero from "./aboutHero";
import Philosophy from "./philosophy";
import Blueprint from "./blueprint";
import Method from "./method";
import Leaders from "./leaders";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Jade Media Consult, our vision, and how we help brands grow through strategic storytelling and media.",
  openGraph: {
    title: "About Jade Media Consult",
    description: "Discover the story and mission behind Jade Media Consult.",
    url: "https://jademediaconsult.com/about",
  },
};

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <Philosophy />
      <Blueprint />
      <Method />
      <Leaders />
    </div>
  );
}

export default AboutPage;
