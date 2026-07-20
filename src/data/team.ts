import type { Founder, SpiritualGuide } from "@/types";

/** Storing founder profile as single source of truth */
export const founder: Founder = {
  id: "founder",
  name: "Syed Ali Naqi Naqvi",
  title: "Founder & Spiritual Guide",
  shortBiography:
    "Syed Ali Naqi Naqvi is the founder of Karwan-e-Ahlebait, leading pilgrimage groups to the holy shrines of Iraq, Iran, and the sacred cities of Makkah and Madinah for many years.",
  message:
    "Our purpose is to serve the pilgrims of Imam Hussain (A.S) and the Ahlul Bayt (A.S). Every journey we organize is guided by devotion, knowledge, and a deep respect for the sacred traditions of Ziyaraat.",
  imageUrl: "/assets/team/founder.png", // UPDATE HERE: or founder.jpg in public/assets/team/
};

/** Storing spiritual guides and scholars — the primary faces of every pilgrimage */
export const guides: SpiritualGuide[] = [
  {
    id: "guide-murtaza",
    name: "Allama Syed Murtaza Hussain Naqvi",
    nameUrdu: "علامہ سید مرتضیٰ حسین نقوی",
    title: "Renowned Scholar",
    shortBiography:
      "A distinguished scholar accompanying pilgrims with profound knowledge of the history, significance, and rituals of the holy shrines.",
    imageUrl: "/assets/team/guide-murtaza.png", // UPDATE HERE
  },
  {
    id: "guide-askari",
    name: "Allama Syed Hasan Askari Naqvi",
    nameUrdu: "علامہ سید حسن عسکری نقوی",
    title: "Renowned Scholar",
    shortBiography:
      "A revered scholar providing spiritual guidance, lectures, and deep insight throughout the pilgrimage journey.",
    imageUrl: "/assets/team/guide-askari.png", // UPDATE HERE
  },
  {
    id: "guide-raza",
    name: "Syed Raza Abbas Zaidi",
    nameUrdu: "سید رضا عباس زیدی",
    title: "Famous Noha Khwan",
    shortBiography:
      "A celebrated Noha Khwan whose soul-stirring recitations and spiritual presence inspire pilgrims throughout the sacred journey.",
    imageUrl: "/assets/team/guide-raza.png", // UPDATE HERE
  },
];

/** Retrieving the founder profile */
export function getFounder(): Founder {
  return founder;
}

/** Retrieving all spiritual guides */
export function getGuides(): SpiritualGuide[] {
  return guides;
}
