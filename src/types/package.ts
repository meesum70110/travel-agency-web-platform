export interface PackageHighlight {
  title: string;
  description: string;
  icon?: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  location?: string;
}

export interface PackageFAQ {
  question: string;
  answer: string;
}

export interface TravelPackage {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  poster: string;
  duration: string;
  countries: string[];
  price: number;
  currency: string;
  priceLabel: string;
  departureDates: string[];
  documentDeadline?: string;
  advancePayment?: string;
  overview: string;
  highlights: PackageHighlight[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  hotelInfo: string;
  transportInfo: string;
  requirements: string[];
  pricingNotes: string[];
  gallery: string[];
  faq: PackageFAQ[];
  registerMessage: string;
  isAvailable: boolean;
  route?: string;
  groupName?: string;
}
