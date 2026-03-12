import WorksTemplate from "@/components/ui/worksTemplate";
import { WorksPages } from "@/lib/data/works";
import { notFound } from "next/navigation";

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = WorksPages[slug];
  console.log(slug);

  if (!work) return notFound();
  return <WorksTemplate {...work} />;
}
