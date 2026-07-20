import type { ServiceItem } from "@/types";

/** Storing global service inclusions displayed across the site */
export const services: ServiceItem[] = [
  {
    id: "visa",
    title: "Visa Processing",
    description:
      "Complete visa arrangements handled on your behalf for Iraq, Iran, and Saudi Arabia.",
    icon: "file-check",
  },
  {
    id: "tickets",
    title: "Air Tickets",
    description: "Return airfare booked and confirmed as part of your package.",
    icon: "plane",
  },
  {
    id: "hotels",
    title: "Hotel Accommodation",
    description:
      "Comfortable hotels near shrine areas and Haram in all destinations.",
    icon: "hotel",
  },
  {
    id: "meals",
    title: "Meals",
    description: "Daily meals provided in Ziyaraat packages (where specified).",
    icon: "utensils",
  },
  {
    id: "transport",
    title: "Complete Transport",
    description:
      "Air-conditioned transport for all inter-city and local travel.",
    icon: "bus",
  },
  {
    id: "ziyarat",
    title: "Guided Ziyarat",
    description:
      "Complete guided tours of all holy shrines with historical context.",
    icon: "map-pin",
  },
  {
    id: "guidance",
    title: "Religious Guidance",
    description:
      "Accompanied by renowned scholars providing spiritual lectures and guidance.",
    icon: "book-open",
  },
  {
    id: "insurance",
    title: "Travel Insurance",
    description:
      "Medical and travel insurance included in applicable packages.",
    icon: "shield",
  },
];
