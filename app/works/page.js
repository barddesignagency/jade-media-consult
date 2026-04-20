import React from "react";
import Works from "./works";

export const metadata = {
  title: "Our Works",
  description:
    "See how Jade Media Consult has helped brands grow through impactful storytelling and media campaigns.",
  openGraph: {
    title: "Our Portfolio | Jade Media Consult",
    description: "Explore our past projects and success stories.",
    url: "https://jademediaconsult.com/works",
  },
};

function WorksPage() {
  return (
    <main>
      <Works />
    </main>
  );
}

export default WorksPage;
