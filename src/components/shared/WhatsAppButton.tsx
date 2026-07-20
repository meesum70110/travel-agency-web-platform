"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/utils";
import { company } from "@/data/company";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  variant?: "default" | "whatsapp" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
  label?: string;
  children?: React.ReactNode;
}

/** Building reusable WhatsApp deep-link buttons from company data */
export function WhatsAppButton({
  message = navigation.ctaMessage,
  phone = company.whatsapp,
  variant = "whatsapp",
  size = "default",
  className,
  showIcon = true,
  label = navigation.ctaLabel,
  children,
}: WhatsAppButtonProps) {
  const url = buildWhatsAppUrl(phone, message);

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("gap-2", className)}
      asChild
    >
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {showIcon && <FaWhatsapp className="h-5 w-5" />}
        {children ?? label}
      </Link>
    </Button>
  );
}
