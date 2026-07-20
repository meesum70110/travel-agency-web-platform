import type { FAQItem } from "@/types";

/** Storing frequently asked questions for the home page */
export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "How do I register for a pilgrimage package?",
    answer:
      "Contact us via WhatsApp or phone to express your interest. Submit the required advance payment along with your passport scan and photograph. Our team will guide you through the complete registration process.",
    category: "registration",
  },
  {
    id: "faq-2",
    question: "What documents are required for registration?",
    answer:
      "You will need a valid passport (minimum 6 months validity), passport-size photographs, and the advance payment as specified for each package. Additional visa documents may be required depending on the destination.",
    category: "registration",
  },
  {
    id: "faq-3",
    question: "Are visa charges refundable?",
    answer:
      "Visa processing charges are non-refundable once the application has been submitted. However, if airfare prices decrease after booking, relief may be provided to pilgrims as per our policy.",
    category: "pricing",
  },
  {
    id: "faq-4",
    question: "What is included in the package price?",
    answer:
      "Package inclusions vary by destination. Generally, they include visa processing, air tickets, hotel accommodation, meals (where specified), complete transport, guided Ziyarat, and religious guidance. Please check individual package details for specific inclusions.",
    category: "packages",
  },
  {
    id: "faq-5",
    question: "Do you provide religious guidance during the journey?",
    answer:
      "Yes, all our Ziyaraat groups are accompanied by renowned religious scholars who provide spiritual guidance, lectures, and lead Ziyarat rituals at each shrine.",
    category: "services",
  },
  {
    id: "faq-6",
    question: "Can I customize my travel dates?",
    answer:
      "Our packages are organized as group departures on fixed dates. For custom arrangements, please contact us directly to discuss your requirements.",
    category: "packages",
  },
  {
    id: "faq-7",
    question: "What is the advance payment amount?",
    answer:
      "Advance payment varies by package: $500 for Umrah, and $600 for Ziyaraat packages. This is required along with passport scan and photograph to confirm your booking.",
    category: "pricing",
  },
  {
    id: "faq-8",
    question: "How can I contact Karwan-e-Ahlebait?",
    answer:
      "You can reach us via WhatsApp at +923127474936 (Pakistan) or +989127474936 (Iran). You can also call any of our coordinator numbers listed in the Contact section.",
    category: "contact",
  },
];
