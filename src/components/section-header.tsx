import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {titulo}
      </h2>
      {descripcion ? (
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          {descripcion}
        </p>
      ) : null}
    </div>
  );
}
