import {
  Car,
  Hammer,
  Paintbrush,
  Wrench,
  Sparkles,
  FileText,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  icon: LucideIcon;
  hero: string;
  process: { step: string; detail: string }[];
  benefits: string[];
  expertise: string;
  keywords: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "collision-repair",
    title: "Collision Repair",
    shortDescription:
      "Full-service collision repair to restore your vehicle to pre-accident condition.",
    icon: Car,
    hero: "After an accident, every panel, sensor, and structural component needs to come back to manufacturer spec. Our shop handles minor fender-benders to major collision damage on cars, trucks, and SUVs of every make.",
    process: [
      {
        step: "Inspection & Damage Assessment",
        detail:
          "We document every panel, including hidden structural and mechanical damage, and review with you before any work starts.",
      },
      {
        step: "Insurance Coordination",
        detail:
          "We work directly with your insurance adjuster so the approved repair plan matches what your vehicle actually needs.",
      },
      {
        step: "Disassembly & Frame Verification",
        detail:
          "Damaged panels are removed and the frame is measured against factory tolerances before any straightening or welding begins.",
      },
      {
        step: "Body Repair & Refinishing",
        detail:
          "Panels are repaired or replaced with OEM-quality parts and refinished with computer-matched paint to blend seamlessly.",
      },
      {
        step: "Reassembly & Quality Check",
        detail:
          "Every system — lighting, sensors, alignment — is tested before delivery so you drive off in a vehicle that's right.",
      },
    ],
    benefits: [
      "Restored to factory specifications",
      "Direct insurance coordination",
      "OEM-quality parts when available",
      "Lifetime warranty on workmanship",
    ],
    expertise:
      "Our technicians have decades of combined experience on collision repair across domestic and import vehicles, and the shop is equipped with computerized frame-measuring and modern paint-mixing systems.",
    keywords: [
      "collision repair Westford MA",
      "auto body shop Westford",
      "accident repair near me",
    ],
  },
  {
    slug: "dent-repair",
    title: "Dent Repair",
    shortDescription:
      "Precise dent removal that preserves your factory paint whenever possible.",
    icon: Hammer,
    hero: "From parking-lot door dings to hail damage, we restore the contour of your vehicle while preserving the original factory finish wherever paintless dent repair (PDR) is appropriate.",
    process: [
      {
        step: "Damage Evaluation",
        detail:
          "We inspect each dent to determine if PDR will work or if traditional bodywork and refinishing is needed.",
      },
      {
        step: "Paintless Dent Repair (when possible)",
        detail:
          "Specialized tools massage the metal back into shape from behind the panel, with no painting required.",
      },
      {
        step: "Conventional Repair (when needed)",
        detail:
          "Larger or creased dents are filled, sanded, and refinished with computer-matched paint for an invisible repair.",
      },
    ],
    benefits: [
      "Preserves factory paint when possible",
      "Faster turnaround than full repaint",
      "Lower cost than panel replacement",
    ],
    expertise:
      "We use both PDR and conventional bodywork techniques and recommend whichever delivers the best result for your specific vehicle.",
    keywords: [
      "dent repair Westford",
      "paintless dent removal Westford MA",
      "door ding repair near me",
    ],
  },
  {
    slug: "paint-matching",
    title: "Paint Matching",
    shortDescription:
      "Computerized paint matching for a seamless, factory-quality finish.",
    icon: Paintbrush,
    hero: "A repaired panel should be invisible. We use computerized paint-mixing systems and color spectrometers to match your vehicle's exact factory color — including aged or weathered finishes.",
    process: [
      {
        step: "Color Reading",
        detail:
          "A spectrometer measures the actual color of your vehicle to account for fading and variant codes.",
      },
      {
        step: "Computerized Paint Mixing",
        detail:
          "Paint is mixed in-house to the precise formula required, using premium automotive-grade base coats and clear coats.",
      },
      {
        step: "Application & Blending",
        detail:
          "Refinishing is blended into adjacent panels in our downdraft spray booth for a finish that matches end-to-end.",
      },
    ],
    benefits: [
      "Exact match to your vehicle's true color",
      "Premium automotive-grade paints",
      "Clear coat protection and gloss",
    ],
    expertise:
      "Our paint booth and mixing system are calibrated regularly so every job leaves with the same factory-quality finish.",
    keywords: [
      "car paint repair Westford",
      "paint matching Westford MA",
      "auto paint shop near me",
    ],
  },
  {
    slug: "frame-repair",
    title: "Frame Repair",
    shortDescription:
      "Computer-measured frame straightening to manufacturer specifications.",
    icon: Wrench,
    hero: "Frame and structural damage isn't always visible from the outside. After a serious collision, the frame must be measured and restored to factory tolerances or the vehicle won't drive, brake, or protect occupants the way it was designed to.",
    process: [
      {
        step: "Computerized Measuring",
        detail:
          "Multi-point measurements are compared against factory specifications to identify any deviation.",
      },
      {
        step: "Frame Straightening",
        detail:
          "Hydraulic frame equipment pulls the structure back into spec under continuous measurement.",
      },
      {
        step: "Verification",
        detail:
          "After straightening we re-measure to confirm the frame meets manufacturer tolerances before reassembly.",
      },
    ],
    benefits: [
      "Restores structural integrity and safety",
      "Documented measurements before and after",
      "Ensures airbag and crash systems function properly",
    ],
    expertise:
      "Computerized frame-measuring is a non-negotiable for any modern unibody vehicle, and we won't release a car that hasn't been verified back to spec.",
    keywords: [
      "frame repair Westford",
      "unibody repair near me",
      "structural repair MA",
    ],
  },
  {
    slug: "scratch-removal",
    title: "Scratch Removal",
    shortDescription:
      "Buff out scuffs and scratches and restore the original shine of your finish.",
    icon: Sparkles,
    hero: "Most surface scratches and scuffs can be polished out without repainting. For deeper scratches that have cut through the clear coat, we spot-refinish to restore the panel.",
    process: [
      {
        step: "Surface Assessment",
        detail:
          "We determine whether the scratch is in clear coat, base coat, or primer to choose the right repair.",
      },
      {
        step: "Polish & Compound (clear-coat scratches)",
        detail:
          "Multi-stage polishing removes the scratch and restores gloss without disturbing the original color.",
      },
      {
        step: "Spot Refinish (deeper scratches)",
        detail:
          "Deeper damage is sanded, primed, and refinished with paint that matches your vehicle exactly.",
      },
    ],
    benefits: [
      "Often completed same day",
      "Preserves original finish when possible",
      "Restores resale value",
    ],
    expertise:
      "We tell you up front whether a scratch is polishable or whether refinishing is the right call — no upselling.",
    keywords: [
      "scratch removal Westford",
      "car scratch repair near me",
      "paint scuff repair MA",
    ],
  },
  {
    slug: "insurance-claims",
    title: "Insurance Claims Assistance",
    shortDescription:
      "We work directly with your insurance company to make the process easy.",
    icon: FileText,
    hero: "Filing a claim shouldn't add to the stress of an accident. We coordinate directly with your insurance company — handling estimates, supplements, and parts approvals — so you can focus on getting back on the road.",
    process: [
      {
        step: "Claim Setup",
        detail:
          "Bring us your claim number and we'll handle the rest. We work with all major insurance carriers.",
      },
      {
        step: "Estimate & Supplement Coordination",
        detail:
          "We document every needed repair and submit supplements to your adjuster as additional damage is uncovered.",
      },
      {
        step: "Parts & Approval",
        detail:
          "We track parts approvals and order replacements as soon as your insurer signs off so the repair stays on schedule.",
      },
    ],
    benefits: [
      "Direct billing with most insurance carriers",
      "Supplements handled on your behalf",
      "Less paperwork for you",
    ],
    expertise:
      "We've built relationships with local adjusters from every major carrier and know how to keep your claim moving.",
    keywords: [
      "insurance claims auto body Westford",
      "direct repair shop MA",
      "insurance approved body shop",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
