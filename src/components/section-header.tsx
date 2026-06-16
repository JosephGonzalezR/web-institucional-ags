import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

interface Props {
  eyebrow?: string;
  titulo: string;
  descripcion?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  eyebrow,
  titulo,
  descripcion,
  className,
  align = "center",
}: Props) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-300">
          <span aria-hidden="true" className="h-px w-6 bg-brand-400/60" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-[2.6rem] sm:leading-[1.1]">
        {titulo}
      </h2>
      {descripcion ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {descripcion}
        </p>
      ) : null}
    </Reveal>
  );
}
