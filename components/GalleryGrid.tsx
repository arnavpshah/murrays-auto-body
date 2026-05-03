type GalleryItem = {
  label: string;
  variant: "before" | "after";
};

const ITEMS: GalleryItem[] = [
  { label: "Front bumper repair", variant: "before" },
  { label: "Front bumper repair", variant: "after" },
  { label: "Door dent repair", variant: "before" },
  { label: "Door dent repair", variant: "after" },
  { label: "Rear panel repaint", variant: "before" },
  { label: "Rear panel repaint", variant: "after" },
];

export default function GalleryGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {ITEMS.map((item, idx) => (
        <figure
          key={`${item.label}-${idx}`}
          className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100"
        >
          <div
            className={
              item.variant === "before"
                ? "absolute inset-0 bg-gradient-to-br from-neutral-700 to-neutral-900"
                : "absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-400"
            }
          />
          <figcaption
            className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-semibold uppercase tracking-wide ${
              item.variant === "before" ? "bg-red-600 text-white" : "bg-white text-neutral-900"
            }`}
          >
            {item.variant}
          </figcaption>
          <span className={`absolute bottom-3 left-3 text-sm font-medium ${item.variant === "before" ? "text-neutral-200" : "text-neutral-800"}`}>
            {item.label}
          </span>
        </figure>
      ))}
    </div>
  );
}
