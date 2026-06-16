import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

/* ----------------------------- Iconos de UI ----------------------------- */

function Stroke({ className, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export const Globe = (p: IconProps) => (
  <Stroke {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" />
  </Stroke>
);

export const Check = (p: IconProps) => (
  <Stroke {...p}>
    <path d="m20 6-11 11-5-5" />
  </Stroke>
);

export const MapPin = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Stroke>
);

export const ArrowUpRight = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
);

export const ExternalLink = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </Stroke>
);

export const ShieldCheck = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Stroke>
);

export const Building = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01" />
  </Stroke>
);

export const Mail = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </Stroke>
);

export const TrendingUp = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M3 17 9 11l4 4 8-8" />
    <path d="M16 7h5v5" />
  </Stroke>
);

export const Users = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
  </Stroke>
);

export const Menu = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Stroke>
);

export const Close = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Stroke>
);

export const GraduationCap = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5M22 10v6" />
  </Stroke>
);

export const FileText = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
    <path d="M14 2v6h6M9 13h6M9 17h6" />
  </Stroke>
);

export const Presentation = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M2 3h20M3 3v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3" />
    <path d="m12 16-3 5M12 16l3 5M9 9l2 2 4-4" />
  </Stroke>
);

export const BarChart = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M3 3v18h18" />
    <path d="M8 17v-5M13 17V7M18 17v-9" />
  </Stroke>
);

export const PenLine = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </Stroke>
);

export const Sparkles = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6Z" />
    <path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8Z" />
  </Stroke>
);

export const HeartHandshake = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 6.5C10.5 4.7 8 4.2 6.2 5.7 4.3 7.3 4.2 10 6 11.8l6 6 6-6c1.8-1.8 1.7-4.5-.2-6.1C16 4.2 13.5 4.7 12 6.5Z" />
    <path d="m12 9-2 2 2 2 2-2" />
  </Stroke>
);

export const Network = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="9" y="2" width="6" height="6" rx="1" />
    <rect x="2" y="16" width="6" height="6" rx="1" />
    <rect x="16" y="16" width="6" height="6" rx="1" />
    <path d="M12 8v4M12 12H5v4M12 12h7v4" />
  </Stroke>
);

/* --------------------------- Iconos de marca ---------------------------- */

export const Instagram = ({ className, ...p }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={cn("h-5 w-5", className)} {...p}>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
  </svg>
);

export const Facebook = ({ className, ...p }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-5 w-5", className)} {...p}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073Z" />
  </svg>
);

export const TikTok = ({ className, ...p }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-5 w-5", className)} {...p}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

export const WhatsApp = ({ className, ...p }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-5 w-5", className)} {...p}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export const LinkedIn = ({ className, ...p }: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-5 w-5", className)} {...p}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ------------------------- Mapeo para servicios ------------------------- */

export const SERVICIO_ICONS = {
  tesis: GraduationCap,
  redaccion: FileText,
  presentacion: Presentation,
  datos: BarChart,
  correccion: Sparkles,
  acompanamiento: HeartHandshake,
} as const;

export const RED_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTok,
} as const;
