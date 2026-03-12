import { ServicePages } from "@/lib/data/services";
import ServiceTemplate from "@/components/ui/serviceTemplate";
import { notFound } from "next/navigation";

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = ServicePages[slug];
  console.log(slug);

  if (!service) return notFound();
  return <ServiceTemplate {...service} />;
}
