import type { TravelPackage } from "@/types";
import { buildPackageGalleryPaths } from "@/lib/gallery-images";

/** Storing all travel package data — update pricing, dates, and details here */
export const packages: TravelPackage[] = [
  {
    slug: "umrah",
    title: "Umrah Package",
    subtitle: "Sacred Journey to Makkah & Madinah",
    heroImage: "/assets/packages/umrah/hero.png",
    poster: "/assets/packages/umrah/poster.jpeg",
    duration: "12 Days",
    countries: ["Saudi Arabia"],
    price: 850,
    currency: "USD",
    priceLabel: "Per Person (Quad Sharing)",
    departureDates: ["2nd Week of September 2026"], // TODO: Confirm exact dates
    documentDeadline: "10 July 2026", // TODO: Confirm deadline
    advancePayment: "$500 + Passport Scan & Photo",
    overview:
      "Embark on a spiritually enriching Umrah journey to the holy cities of Makkah and Madinah. This package includes complete arrangements for a comfortable and focused pilgrimage experience.",
    highlights: [
      {
        title: "Return Air Ticket",
        description: "Round-trip airfare included",
        icon: "plane",
      },
      {
        title: "Hotel Accommodation",
        description: "Comfortable hotels near Haram",
        icon: "hotel",
      },
      {
        title: "Medical Insurance",
        description: "Travel medical coverage included",
        icon: "shield",
      },
      {
        title: "Complete Transport",
        description: "Bus transport in Jeddah, Makkah & Madinah",
        icon: "bus",
      },
    ],
    inclusions: [
      "Return air ticket",
      "Hotel accommodation (quad sharing)",
      "Medical insurance",
      "Complete transport via bus (Jeddah, Makkah, Madinah)",
    ],
    exclusions: [
      "Meals (food not included)",
      "Personal expenses",
      "Additional visa fees if applicable",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure",
        description: "Depart from home country to Jeddah.",
        location: "Jeddah",
      },
      {
        day: 2,
        title: "Arrival in Makkah",
        description: "Transfer to hotel and prepare for Umrah.",
        location: "Makkah",
      },
      {
        day: 3,
        title: "Umrah & Ziyarat",
        description: "Perform Umrah and visit holy sites in Makkah.",
        location: "Makkah",
      },
      {
        day: 4,
        title: "Makkah Stay",
        description: "Continue worship and Ziyarat in Makkah.",
        location: "Makkah",
      },
      {
        day: 5,
        title: "Makkah Stay",
        description: "Free day for personal worship.",
        location: "Makkah",
      },
      {
        day: 6,
        title: "Transfer to Madinah",
        description: "Travel to the city of the Prophet (S.A.W).",
        location: "Madinah",
      },
      {
        day: 7,
        title: "Madinah Ziyarat",
        description: "Visit Masjid an-Nabawi and surrounding sites.",
        location: "Madinah",
      },
      {
        day: 8,
        title: "Madinah Stay",
        description: "Continue Ziyarat and worship in Madinah.",
        location: "Madinah",
      },
      {
        day: 9,
        title: "Madinah Stay",
        description: "Free day for personal worship.",
        location: "Madinah",
      },
      {
        day: 10,
        title: "Return Journey",
        description: "Depart from Madinah/Jeddah.",
        location: "Jeddah",
      },
      {
        day: 11,
        title: "Transit",
        description: "In transit.",
        location: "In Transit",
      },
      {
        day: 12,
        title: "Arrival Home",
        description: "Return to home country.",
        location: "Home",
      },
    ],
    hotelInfo:
      "Hotels arranged near the Haram in Makkah and Masjid an-Nabawi in Madinah. Quad sharing basis.",
    transportInfo:
      "Complete bus transport provided between Jeddah, Makkah, and Madinah.",
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Passport-size photographs",
      "Advance payment of $500",
      "Umrah visa processing documents",
    ],
    pricingNotes: [
      "Price is per person on quad sharing basis",
      "Meals are not included in this package",
      "Visa charges are non-refundable after processing",
    ],
    gallery: buildPackageGalleryPaths("umrah"),
    faq: [
      {
        question: "Is food included in the Umrah package?",
        answer:
          "No, meals are not included in this package. Pilgrims can arrange their own meals or purchase meal plans separately.",
      },
      {
        question: "What is the advance payment requirement?",
        answer:
          "An advance payment of $500 along with passport scan and photograph is required to confirm your booking.",
      },
    ],
    registerMessage:
      "Assalam-o-Alaikum, I am interested in registering for the Umrah Package. Please share details.",
    isAvailable: true,
    groupName: "Umrah 2026",
  },
  {
    slug: "iraq-ziyarat",
    title: "Iraq Ziyarat",
    subtitle: "Journey to the Holy Shrines of Iraq",
    heroImage: "/assets/packages/iraq-ziyarat/hero.jpeg",
    poster: "/assets/packages/iraq-ziyarat/poster.jpeg",
    duration: "10 Days",
    countries: ["Iraq"],
    price: 1100,
    currency: "USD",
    priceLabel: "Starting from",
    departureDates: ["2nd Week of November 2026"], // TODO: Confirm exact dates
    documentDeadline: "05 October 2026", // TODO: Confirm deadline
    advancePayment: "$600 + Passport + Photo",
    route: "By Air",
    overview:
      "Visit the sacred shrines of the Ahlul Bayt (A.S) in Iraq, including Najaf, Karbala, Kazmain, and Samarra. Experience guided Ziyaraat with renowned scholars.",
    highlights: [
      {
        title: "Visa & Ticket",
        description: "Complete visa and airfare arrangements",
        icon: "file-check",
      },
      {
        title: "Hotel Stay",
        description: "Comfortable accommodation near shrines",
        icon: "hotel",
      },
      {
        title: "Meals Included",
        description: "Daily meals provided",
        icon: "utensils",
      },
      {
        title: "Complete Ziyarat",
        description: "Guided tours of all major shrines",
        icon: "map-pin",
      },
      {
        title: "Transport",
        description: "Air-conditioned transport throughout",
        icon: "bus",
      },
      {
        title: "Religious Guidance",
        description: "Scholar-led spiritual guidance",
        icon: "book-open",
      },
    ],
    inclusions: [
      "Visa processing and air ticket",
      "Hotel accommodation with meals",
      "Complete guided Ziyarat of all shrines",
      "Air-conditioned transport",
      "Religious guidance by scholars",
    ],
    exclusions: [
      "Personal shopping expenses",
      "Optional tipping",
      "Travel insurance (recommended)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure",
        description: "Depart for Iraq.",
        location: "In Transit",
      },
      {
        day: 2,
        title: "Arrival in Najaf",
        description: "Arrive and visit Hazrat Ali (A.S) shrine.",
        location: "Najaf",
      },
      {
        day: 3,
        title: "Najaf Ziyarat",
        description: "Continue Ziyarat in Najaf and Wadi-us-Salaam.",
        location: "Najaf",
      },
      {
        day: 4,
        title: "Karbala",
        description:
          "Travel to Karbala, visit Imam Hussain (A.S) and Hazrat Abbas (A.S).",
        location: "Karbala",
      },
      {
        day: 5,
        title: "Karbala Stay",
        description: "Continue worship and Ziyarat in Karbala.",
        location: "Karbala",
      },
      {
        day: 6,
        title: "Kazmain",
        description:
          "Visit Imam Musa Kazim (A.S) and Imam Muhammad Taqi (A.S).",
        location: "Kazmain",
      },
      {
        day: 7,
        title: "Baghdad & Samarra",
        description: "Visit shrines in Baghdad and Samarra.",
        location: "Baghdad",
      },
      {
        day: 8,
        title: "Return to Najaf",
        description: "Return journey preparation.",
        location: "Najaf",
      },
      {
        day: 9,
        title: "Departure",
        description: "Depart from Iraq.",
        location: "In Transit",
      },
      {
        day: 10,
        title: "Arrival Home",
        description: "Return to home country.",
        location: "Home",
      },
    ],
    hotelInfo:
      "Hotels arranged near shrine areas in Najaf, Karbala, and other cities.",
    transportInfo:
      "Air-conditioned buses provided for all inter-city and local transport.",
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Passport-size photographs",
      "Advance payment of $600",
      "Iraq visa processing documents",
    ],
    pricingNotes: [
      "Visa charges are non-refundable after processing",
      "Relief may be provided if airfare prices decrease",
      "Price subject to change based on group size",
    ],
    gallery: buildPackageGalleryPaths("iraq-ziyarat"),
    faq: [
      {
        question: "Which shrines are included in the Iraq Ziyarat?",
        answer:
          "The package includes Ziyarat of Najaf (Imam Ali A.S), Karbala (Imam Hussain A.S & Hazrat Abbas A.S), Kazmain, Baghdad, and Samarra.",
      },
      {
        question: "Are meals included?",
        answer: "Yes, daily meals are included in the Iraq Ziyarat package.",
      },
    ],
    registerMessage:
      "Assalam-o-Alaikum, I am interested in the Iraq Ziyarat package. Please share details.",
    isAvailable: true,
    groupName: "November Group 2026",
  },
  {
    slug: "iran-ziyarat",
    title: "Iran Ziyarat",
    subtitle: "Pilgrimage to the Shrines of Iran",
    heroImage: "/assets/packages/iran-ziyarat/hero.png",
    poster: "/assets/packages/iran-ziyarat/poster.jpeg",
    duration: "7 Days",
    countries: ["Iran"],
    price: 850,
    currency: "USD",
    priceLabel: "Starting from",
    departureDates: ["2nd Week of November 2026"], // TODO: Confirm exact dates
    documentDeadline: "05 October 2026", // TODO: Confirm deadline
    advancePayment: "$600 + Passport + Photo",
    route: "By Air",
    overview:
      "Journey to the blessed shrines of Iran including Mashhad (Imam Reza A.S), Qom (Masooma-e-Qom), and other sacred sites with complete guided Ziyaraat.",
    highlights: [
      {
        title: "Visa & Ticket",
        description: "Complete visa and airfare arrangements",
        icon: "file-check",
      },
      {
        title: "Hotel Stay",
        description: "Hotels near shrine complexes",
        icon: "hotel",
      },
      {
        title: "Meals Included",
        description: "Daily meals provided",
        icon: "utensils",
      },
      {
        title: "Complete Ziyarat",
        description: "All major shrines covered",
        icon: "map-pin",
      },
      {
        title: "Transport",
        description: "Comfortable transport throughout",
        icon: "bus",
      },
      {
        title: "Religious Guidance",
        description: "Expert scholar guidance",
        icon: "book-open",
      },
    ],
    inclusions: [
      "Visa processing and air ticket",
      "Hotel accommodation with meals",
      "Complete guided Ziyarat",
      "Inter-city transport",
      "Religious guidance",
    ],
    exclusions: ["Personal expenses", "Optional shopping", "Travel insurance"],
    itinerary: [
      {
        day: 1,
        title: "Departure",
        description: "Depart for Iran.",
        location: "In Transit",
      },
      {
        day: 2,
        title: "Arrival in Mashhad",
        description: "Visit Imam Reza (A.S) shrine.",
        location: "Mashhad",
      },
      {
        day: 3,
        title: "Mashhad Ziyarat",
        description: "Continue Ziyarat in Mashhad.",
        location: "Mashhad",
      },
      {
        day: 4,
        title: "Travel to Qom",
        description: "Journey to Qom, visit Masooma-e-Qom (S.A).",
        location: "Qom",
      },
      {
        day: 5,
        title: "Qom & Tehran",
        description: "Ziyarat in Qom and visit Tehran shrines.",
        location: "Tehran",
      },
      {
        day: 6,
        title: "Return to Mashhad",
        description: "Return journey preparation.",
        location: "Mashhad",
      },
      {
        day: 7,
        title: "Departure",
        description: "Depart from Iran and return home.",
        location: "Home",
      },
    ],
    hotelInfo: "Hotels arranged near shrine areas in Mashhad and Qom.",
    transportInfo: "Comfortable air-conditioned transport for all journeys.",
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Passport-size photographs",
      "Advance payment of $600",
      "Iran visa processing documents",
    ],
    pricingNotes: [
      "Visa charges are non-refundable after processing",
      "Price may vary based on departure city",
    ],
    gallery: buildPackageGalleryPaths("iran-ziyarat"),
    faq: [
      {
        question: "Which cities are covered in Iran Ziyarat?",
        answer:
          "The package covers Mashhad, Qom, and Tehran, including all major shrine visits.",
      },
    ],
    registerMessage:
      "Assalam-o-Alaikum, I am interested in the Iran Ziyarat package. Please share details.",
    isAvailable: true,
    groupName: "November Group 2026",
  },
  {
    slug: "arbaeen",
    title: "Arbaeen Walk",
    subtitle: "The Sacred Journey from Najaf to Karbala",
    heroImage: "/assets/packages/arbaeen/hero.png",
    poster: "/assets/packages/arbaeen/poster.jpeg",
    duration: "17 Days",
    countries: ["Iraq", "Iran"],
    price: 1350,
    currency: "USD",
    priceLabel: "Iran & Iraq Combined",
    departureDates: ["Arbaeen 2026"], // TODO: Confirm exact dates
    documentDeadline: "05 October 2026", // TODO: Confirm deadline
    advancePayment: "$600 + Passport + Photo",
    route: "By Air",
    overview:
      "Experience the spiritually transformative Arbaeen walk from Najaf to Karbala, combined with Ziyaraat in both Iran and Iraq. This is the ultimate pilgrimage for devotees of Imam Hussain (A.S).",
    highlights: [
      {
        title: "Arbaeen Walk",
        description: "Participate in the sacred walk to Karbala",
        icon: "footprints",
      },
      {
        title: "Iran & Iraq",
        description: "Combined pilgrimage to both countries",
        icon: "globe",
      },
      {
        title: "Complete Services",
        description: "Visa, ticket, hotel, meals, transport",
        icon: "check-circle",
      },
      {
        title: "Scholar Guidance",
        description: "Led by renowned religious scholars",
        icon: "book-open",
      },
    ],
    inclusions: [
      "Visa processing for Iran and Iraq",
      "Return air tickets",
      "Hotel accommodation with meals",
      "Complete guided Ziyarat in both countries",
      "Arbaeen walk arrangements (mekaal/mawkeel)",
      "Air-conditioned transport",
      "Religious guidance throughout",
    ],
    exclusions: [
      "Personal walking gear",
      "Personal shopping",
      "Optional services during walk",
    ],
    itinerary: [
      {
        day: 1,
        title: "Departure",
        description: "Depart for Iran.",
        location: "In Transit",
      },
      {
        day: 2,
        title: "Arrival in Mashhad",
        description: "Begin with Ziyarat of Imam Reza (A.S).",
        location: "Mashhad",
      },
      {
        day: 3,
        title: "Mashhad",
        description: "Continue Ziyarat in Mashhad.",
        location: "Mashhad",
      },
      {
        day: 4,
        title: "Qom",
        description: "Travel to Qom for Ziyarat.",
        location: "Qom",
      },
      {
        day: 5,
        title: "Travel to Iraq",
        description: "Cross into Iraq.",
        location: "Najaf",
      },
      {
        day: 6,
        title: "Najaf",
        description: "Ziyarat of Imam Ali (A.S).",
        location: "Najaf",
      },
      {
        day: 7,
        title: "Pre-Walk Preparation",
        description: "Prepare for the Arbaeen walk.",
        location: "Najaf",
      },
      {
        day: 8,
        title: "Arbaeen Walk Begins",
        description: "Begin the sacred walk toward Karbala.",
        location: "Walk Route",
      },
      {
        day: 9,
        title: "Arbaeen Walk",
        description: "Continue the walk with fellow pilgrims.",
        location: "Walk Route",
      },
      {
        day: 10,
        title: "Arrival in Karbala",
        description: "Reach Karbala for Arbaeen.",
        location: "Karbala",
      },
      {
        day: 11,
        title: "Arbaeen Day",
        description: "Commemorate Arbaeen at Imam Hussain (A.S) shrine.",
        location: "Karbala",
      },
      {
        day: 12,
        title: "Karbala Stay",
        description: "Continue worship in Karbala.",
        location: "Karbala",
      },
      {
        day: 13,
        title: "Kazmain & Baghdad",
        description: "Visit additional shrines.",
        location: "Baghdad",
      },
      {
        day: 14,
        title: "Samarra",
        description: "Visit Samarra shrines.",
        location: "Samarra",
      },
      {
        day: 15,
        title: "Return to Najaf",
        description: "Final Ziyarat in Najaf.",
        location: "Najaf",
      },
      {
        day: 16,
        title: "Departure",
        description: "Depart from Iraq.",
        location: "In Transit",
      },
      {
        day: 17,
        title: "Arrival Home",
        description: "Return to home country.",
        location: "Home",
      },
    ],
    hotelInfo:
      "Hotels in Iran and Iraq near shrine areas. Special mawkeel (rest stop) arrangements during the Arbaeen walk.",
    transportInfo:
      "Complete transport including special arrangements for the walk route.",
    requirements: [
      "Valid passport (minimum 6 months validity)",
      "Good physical health for walking",
      "Passport-size photographs",
      "Advance payment of $600",
      "Visa documents for Iran and Iraq",
    ],
    pricingNotes: [
      "This is a combined Iran & Iraq package",
      "Arbaeen walk requires moderate physical fitness",
      "Visa charges are non-refundable after processing",
    ],
    gallery: buildPackageGalleryPaths("arbaeen"),
    faq: [
      {
        question: "Do I need to be physically fit for the Arbaeen walk?",
        answer:
          "Yes, the walk from Najaf to Karbala covers approximately 80km. Moderate physical fitness is recommended. Rest stops (mawkeel) are arranged along the route.",
      },
      {
        question: "Is this a combined Iran and Iraq package?",
        answer:
          "Yes, this package includes Ziyaraat in both Iran and Iraq, culminating in the Arbaeen walk to Karbala.",
      },
    ],
    registerMessage:
      "Assalam-o-Alaikum, I am interested in the Arbaeen Walk package. Please share details.",
    isAvailable: true,
    groupName: "Arbaeen 2026",
  },
];

/** Retrieving a package by its slug */
export function getPackageBySlug(slug: string): TravelPackage | undefined {
  return packages.find((pkg) => pkg.slug === slug);
}

/** Retrieving all available packages */
export function getAvailablePackages(): TravelPackage[] {
  return packages.filter((pkg) => pkg.isAvailable);
}

/** Retrieving related packages excluding the current one */
export function getRelatedPackages(
  currentSlug: string,
  limit = 3
): TravelPackage[] {
  return packages
    .filter((pkg) => pkg.slug !== currentSlug && pkg.isAvailable)
    .slice(0, limit);
}

/** Generating static params for package pages */
export function getAllPackageSlugs(): string[] {
  return packages.map((pkg) => pkg.slug);
}
