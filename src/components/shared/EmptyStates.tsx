import { ImageIcon } from "lucide-react";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";

interface EmptyStateProps {
  title: string;
  description: string;
  showWhatsApp?: boolean;
}

/** Rendering reusable empty state component */
export function EmptyState({
  title,
  description,
  showWhatsApp = false,
}: EmptyStateProps) {
  return (
    <div className="glass-panel flex flex-col items-center justify-center p-12 text-center">
      <ImageIcon className="h-12 w-12 text-warm-500 opacity-50" />
      <h3 className="mt-4 font-serif text-heading-md text-warm-100">{title}</h3>
      <p className="mt-2 max-w-md text-body-md text-warm-400">{description}</p>
      {showWhatsApp && <WhatsAppButton className="mt-6" />}
    </div>
  );
}

/** Rendering empty gallery state */
export function EmptyGallery() {
  return (
    <EmptyState
      title="Gallery Coming Soon"
      description="Photos from our pilgrimage journeys will be added here. Check back soon or contact us for updates."
      showWhatsApp
    />
  );
}

/** Rendering no packages available state */
export function NoPackagesState() {
  return (
    <EmptyState
      title="No Packages Available"
      description="There are currently no packages available. Please contact us via WhatsApp for upcoming pilgrimage schedules."
      showWhatsApp
    />
  );
}
