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
        <p className="eyebrow mb-5">
          {numero ? <span className="text-gold">{numero}</span> : null}
          {numero ? <span className="mx-2 text-gold/50">/</span> : null}
          {eyebrow}
        </p>
      ) : null}
      <h2 className="display-tight text-[clamp(30px,3.6vw,44px)] leading-[1.08] text-ink">
        {titulo}
      </h2>
      {descripcion ? (
        <p className="mt-5 max-w-prose text-[17px] leading-relaxed text-muted">
          {descripcion}
        </p>
      ) : null}
    </Reveal>
  );
}
