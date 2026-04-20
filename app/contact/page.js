import React from "react";
import Contact from "./contact";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Jade Media Consult to elevate your brand through strategic media and digital execution.",
  openGraph: {
    title: "Contact Jade Media Consult",
    description: "Reach out and let's build your brand together.",
    url: "https://jademediaconsult.com/contact",
  },
};

function ContactPage() {
  return (
    <main>
      <Contact />
    </main>
  );
}

export default ContactPage;
