export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "Murray's Auto Body",
    image: "https://www.murraysautobody.com/og.jpg",
    "@id": "https://www.murraysautobody.com",
    url: "https://www.murraysautobody.com",
    telephone: "+1-978-692-2471",
    address: {
      "@type": "PostalAddress",
      streetAddress: "147 Concord Rd",
      addressLocality: "Westford",
      addressRegion: "MA",
      postalCode: "01886",
      addressCountry: "US",
    },
    areaServed: ["Westford", "Chelmsford", "Littleton", "Acton", "Carlisle"],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
