type GalleryItem = {
  label: string;
  description: string;
  variant: "before" | "after";
};

const ITEMS: GalleryItem[] = [
  {
    label: "Front bumper repair",
    description: "Cracked front bumper after a low-speed collision in a Westford parking lot.",
    variant: "before",
  },
  {
    label: "Front bumper repair",
    description: "Bumper repaired, refinished, and color-matched at Murray's Auto Body.",
    variant: "after",
  },
  {
    label: "Door dent repair",
    description: "Large door dent before paintless dent repair at our Westford, MA shop.",
    variant: "before",
  },
  {
    label: "Door dent repair",
    description: "Same door panel restored to factory contour with no repaint required.",
    variant: "after",
  },
  {
    label: "Rear panel repaint",
    description: "Rear quarter panel showing scuffs and clear-coat damage before refinishing.",
    variant: "before",
  },
  {
    label: "Rear panel repaint",
    description: "Quarter panel after computerized paint matching and clear-coat application.",
    variant: "after",
  },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {ITEMS.map((item, idx) => (
        <figure
          key={`${item.label}-${idx}`}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100"
          aria-label={item.description}
        >
          <div
            className={
              item.variant === "before"
                ? "absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900"
                : "absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-400"
            }
            role="img"
            aria-label={item.description}
          />
          <figcaption
            className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide ${
              item.variant === "before" ? "bg-red-600 text-white" : "bg-white text-neutral-900"
            }`}
          >
            {item.variant}
          </figcaption>
          <span
            className={`absolute bottom-3 left-3 right-3 text-sm font-medium ${
              item.variant === "before" ? "text-neutral-200" : "text-neutral-800"
            }`}
          >
            {item.label}
          </span>
        </figure>
      ))}
    </div>
  );
}
