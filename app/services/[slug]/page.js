import { ServicePages } from "@/lib/data/services";
import ServiceTemplate from "@/components/ui/serviceTemplate";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = ServicePages[slug];

  if (!service) {
    return {
      title: "Service Not Found ",
    };
  }

  return {
    title: service.title,
    description: service.description,

    keywords: service.keywords || [
      "media agency",
      "branding",
      "digital marketing",
      "Advertising agency in Lagos",
      "Nigeria",
      "Lagos",
    ],

    alternates: {
      canonical: `/services/${slug}`,
    },

    openGraph: {
      title: service.title,
      description: service.description,
      url: `/services/${slug}`,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = ServicePages[slug];
  console.log(slug);

  if (!service) return notFound();
  return <ServiceTemplate {...service} />;
}
