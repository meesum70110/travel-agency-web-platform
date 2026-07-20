export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  phoneLabel?: string;
}

export interface OperationalHighlight {
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  whatsapp: string;
  iranPhone: string;
  pakistanPhone: string;
  email: string;
  operations: OperationalHighlight[];
  contacts: ContactPerson[];
}
