import type { CompanyInfo } from "@/types";

/** Storing all company information as single source of truth */
export const company: CompanyInfo = {
  name: "Karwan-e-Ahlebait",
  tagline: "Premier Ziyaraat & Umrah Travel Services",
  description:
    "Karwan-e-Ahlebait is a trusted spiritual travel agency dedicated to serving the global Shia Muslim community. We specialize in organizing guided Ziyaraat pilgrimages to the holy shrines of Iraq and Iran, as well as Umrah journeys to the sacred cities of Makkah and Madinah.",
  mission:
    "Our mission is to facilitate meaningful spiritual journeys, ensuring every pilgrim experiences the sacred sites with proper guidance, comfort, and devotion. We are committed to providing comprehensive travel services that allow pilgrims to focus entirely on their spiritual connection.",
  whatsapp: "+923127474936",
  iranPhone: "+989127474936",
  pakistanPhone: "+923127474936",
  email: "", // UPDATE HERE: Add official email address
  operations: [
    {
      title: "Global Operations",
      description:
        "Our operations are directly overseen by our founder based in Iran, who frequently travels to Pakistan, Germany, and globally to personally guide our Zaireen.",
    },
    {
      title: "Local Support",
      description:
        "We have a dedicated team of on-the-ground coordinators based in Pakistan ready to assist you with registration, visa processing, and travel logistics.",
    },
  ],
  contacts: [
    {
      name: "Syed Ali Naqi Naqvi",
      role: "Founder & Lead Coordinator",
      phone: "+923127474936",
      phoneLabel: "Pakistan / WhatsApp",
    },
    {
      name: "Syed Muhammad Taqi Naqvi",
      role: "Coordinator",
      phone: "0347-3101104",
    },
    {
      name: "Syed Muhammad Raza Naqvi",
      role: "Coordinator",
      phone: "0331-4041512",
    },
    {
      name: "Syed Mujtaba Jafri",
      role: "Coordinator",
      phone: "0321-5125120",
    },
    {
      name: "Syed Muntazir Mahdi Naqvi",
      role: "Coordinator",
      phone: "0300-4481081",
    },
    {
      name: "Waseem Abbas",
      role: "Iran Coordinator",
      phone: "+989027520875",
      phoneLabel: "Iran",
    },
  ],
};
