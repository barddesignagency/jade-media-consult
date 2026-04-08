import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./animate.css";
import Header from "@/components/layout/header";
import Start from "@/components/layout/start";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://jademediaconsult.com"),

  title: {
    default: "Jade Media Consult | Strategic Media & Brand Growth",
    template: "%s | Jade Media Consult",
  },

  description:
    "Jade Media Consult helps brands grow through strategic media, storytelling, and digital execution.",

  openGraph: {
    title: "Jade Media Consult | Strategic Media & Brand Growth",
    description:
      "Build brand authority and visibility with Jade Media Consult.",
    url: "https://jademediaconsult.com",
    siteName: "Jade Media Consult",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jade Media Consult",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Jade Media Consult",
    url: "https://jademediaconsult.com",
    logo: "https://jademediaconsult.com/logo.png",
    sameAs: [
      "https://instagram.com/jademediaconsult",
      "https://linkedin.com/company/jademediaconsult",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Header />

        {children}

        <Start />
        <Footer />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
