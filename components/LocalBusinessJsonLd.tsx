export default function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: "Murray's Auto Body",
    description:
      "Professional collision and auto body repair in Westford, Massachusetts. Collision repair, dent repair, paint matching, frame repair, scratch removal, and insurance claims assistance.",
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
    areaServed: [
      { "@type": "City", name: "Westford" },
      { "@type": "City", name: "Chelmsford" },
      { "@type": "City", name: "Littleton" },
      { "@type": "City", name: "Acton" },
      { "@type": "City", name: "Carlisle" },
      { "@type": "City", name: "Tyngsborough" },
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Auto Body Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Collision Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dent Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paint Matching" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Frame Repair" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scratch Removal" } },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Insurance Claims Assistance" },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
