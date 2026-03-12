import Image from "next/image";
import Hero from "@/app/home/hero";
import ProvenResults from "@/app/home/provenResults";
import About from "@/app/home/about";
import Services from "@/app/home/services";
import FAQSection from "@/app/home/faqs";

export default function Home() {
  return (
    <>
      <main className="font-sans">
        <Hero />
        <ProvenResults />
        <About />
        <Services />
        <FAQSection />
      </main>
    </>
  );
}
