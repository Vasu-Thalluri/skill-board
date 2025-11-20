import { cn } from "@/lib/utils";

export function Card({ className, children }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
