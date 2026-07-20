export interface Founder {
  id: string;
  name: string;
  title: string;
  shortBiography: string;
  message: string;
  imageUrl: string;
}

export interface SpiritualGuide {
  id: string;
  name: string;
  nameUrdu?: string;
  title: string;
  shortBiography: string;
  imageUrl: string;
}

/** @deprecated Use Founder or SpiritualGuide instead */
export interface TeamMember {
  id: string;
  name: string;
  nameUrdu?: string;
  title: string;
  shortBiography: string;
  message: string;
  photo: string;
  isFounder?: boolean;
}
