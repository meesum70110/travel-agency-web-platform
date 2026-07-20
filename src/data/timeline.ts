import type { TimelineStep } from "@/types";

/** Storing the pilgrimage journey timeline steps */
export const timeline: TimelineStep[] = [
  {
    step: 1,
    title: "Inquiry & Registration",
    description:
      "Contact us via WhatsApp or phone. Share your preferred package and travel dates. Submit advance payment and required documents.",
    icon: "message-circle",
  },
  {
    step: 2,
    title: "Document Processing",
    description:
      "We handle visa applications, ticket bookings, and all travel documentation on your behalf.",
    icon: "file-text",
  },
  {
    step: 3,
    title: "Pre-Departure Briefing",
    description:
      "Attend our orientation session covering travel itinerary, Ziyaraat protocols, and packing guidelines.",
    icon: "users",
  },
  {
    step: 4,
    title: "Sacred Journey",
    description:
      "Embark on your pilgrimage with complete arrangements — transport, accommodation, meals, and scholar guidance.",
    icon: "plane",
  },
  {
    step: 5,
    title: "Return & Follow-up",
    description:
      "Safe return journey with continued support. Share your experience and join our community of pilgrims.",
    icon: "heart",
  },
];
