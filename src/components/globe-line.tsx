import { cn } from "@/lib/utils";

/**
 * Globo terraqueo en wireframe (meridianos + paralelos), monolinea.
 * Recurso grafico distintivo de AGS (deriva de la G-globo del logo).
 * Hereda el color via `currentColor` (usar text-gold / text-navy).
 */
export function GlobeLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      <circle cx="120" cy="120" r="104" />
      <line x1="16" y1="120" x2="224" y2="120" />
      <path d="M120 16v208" />
      <ellipse cx="120" cy="120" rx="42" ry="104" />
      <ellipse cx="120" cy="120" rx="80" ry="104" />
      <path d="M40 68H200M27 96H213M27 144H213M40 172H200" />
    </svg>
  );
}
