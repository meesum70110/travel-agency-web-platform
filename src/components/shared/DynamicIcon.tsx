"use client";

import {
  Plane,
  Hotel,
  Utensils,
  Bus,
  FileCheck,
  MapPin,
  BookOpen,
  Shield,
  GraduationCap,
  Award,
  CheckCircle,
  Headphones,
  MessageCircle,
  FileText,
  Users,
  Heart,
  Footprints,
  Globe,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  plane: Plane,
  hotel: Hotel,
  utensils: Utensils,
  bus: Bus,
  "file-check": FileCheck,
  "map-pin": MapPin,
  "book-open": BookOpen,
  shield: Shield,
  "graduation-cap": GraduationCap,
  award: Award,
  "check-circle": CheckCircle,
  headphones: Headphones,
  "message-circle": MessageCircle,
  "file-text": FileText,
  users: Users,
  heart: Heart,
  footprints: Footprints,
  globe: Globe,
};

interface DynamicIconProps {
  name: string;
  className?: string;
}

/** Mapping icon name strings to Lucide icon components */
export function DynamicIcon({ name, className = "h-6 w-6" }: DynamicIconProps) {
  const Icon = iconMap[name] ?? CheckCircle;
  return <Icon className={className} />;
}
