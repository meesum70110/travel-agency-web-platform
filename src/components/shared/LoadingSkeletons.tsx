import { Skeleton } from "@/components/ui/skeleton";

/** Rendering loading skeleton for home page sections */
export function HomePageSkeleton() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-screen w-full rounded-none" />
      <div className="container-main section-padding space-y-8">
        <Skeleton className="mx-auto h-10 w-64" />
        <div className="grid gap-6 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Rendering loading skeleton for package cards */
export function PackageCardSkeleton() {
  return (
    <div className="glass-panel overflow-hidden">
      <Skeleton className="aspect-[16/10] w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-8 w-1/3" />
      </div>
    </div>
  );
}

/** Rendering loading skeleton for gallery grid */
export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Skeleton key={i} className="aspect-square" />
      ))}
    </div>
  );
}
