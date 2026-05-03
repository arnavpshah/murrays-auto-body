import { Phone } from "lucide-react";

export default function StickyCallButton() {
  return (
    <a
      href="tel:+19786922471"
      aria-label="Call Murray's Auto Body"
      className="md:hidden fixed bottom-4 left-4 right-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-red-600/30 hover:bg-red-700 transition-colors"
    >
      <Phone className="h-5 w-5" aria-hidden />
      Call (978) 692-2471
    </a>
  );
}
