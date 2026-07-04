import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface Props {
  eyebrow?: string;
  numero?: string; // "01", "02"... ancla editorial
  titulo: string;
  descripcion?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  numero,
  titulo,
  descripcion,
  className,
  align = "left",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="eyebrow mb-6 flex items-center gap-3">
          {numero ? (
            <span className="font-display text-xl not-italic text-gold">
              {numero}
            </span>
          ) : null}
          {numero ? (
            <span aria-hidden="true" className="h-px w-8 bg-gold/50" />
          ) : null}
          <span>{eyebrow}</span>
        </p>
      ) : null}
      <h2 className="display-tight text-[clamp(34px,4.4vw,54px)] leading-[1.06] text-ink">
        {titulo}
      </h2>
      {descripcion ? (
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-muted">
          {descripcion}
        </p>
      ) : null}
    </Reveal>
  );
}
