import { cn } from "@/lib/utils";

/**
 * Emblema de globo terraqueo con orbita (recurso grafico de AGS).
 * Lineas limpias, estetica editorial. Hereda el color via `currentColor`.
 */
export function GlobeLine({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 260"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn("h-auto w-full", className)}
    >
      {/* Esfera */}
      <circle cx="130" cy="130" r="92" strokeWidth="1.6" />
      {/* Meridianos */}
      <ellipse cx="130" cy="130" rx="36" ry="92" strokeWidth="1" opacity="0.85" />
      <ellipse cx="130" cy="130" rx="70" ry="92" strokeWidth="1" opacity="0.65" />
      {/* Eje + ecuador + paralelos */}
      <line x1="130" y1="38" x2="130" y2="222" strokeWidth="1" opacity="0.85" />
      <line x1="38" y1="130" x2="222" y2="130" strokeWidth="1.2" />
      <path d="M52 92 H208 M52 168 H208" strokeWidth="1" opacity="0.5" />
      {/* Orbita inclinada + planeta */}
      <g transform="rotate(-24 130 130)">
        <ellipse cx="130" cy="130" rx="120" ry="40" strokeWidth="1.4" opacity="0.9" />
        <circle cx="250" cy="130" r="4.5" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
