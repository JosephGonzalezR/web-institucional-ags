"use client";

import { useState, type FormEvent } from "react";
import { CONTACTO_ENDPOINT } from "@/config/site";
import { useLang } from "@/i18n/provider";
import { cn } from "@/lib/utils";

type Estado = "listo" | "enviando" | "ok" | "error";

const campoClase =
  "w-full border border-line bg-marfil px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-muted-2/70 focus:border-gold";

/**
 * Formulario de contacto REAL (no un mailto). Manda los datos al Sistema
 * Central, que los guarda y los reenvia al correo institucional: este sitio es
 * estatico y por si solo no puede enviar correo.
 */
export function ContactForm() {
  const { t } = useLang();
  const f = t.formulario;
  const [estado, setEstado] = useState<Estado>("listo");
  const [detalle, setDetalle] = useState("");

  async function enviar(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (estado === "enviando") return;

    const form = ev.currentTarget;
    const datos = new FormData(form);
    const cuerpo = {
      nombre: String(datos.get("nombre") || "").trim(),
      correo: String(datos.get("correo") || "").trim(),
      telefono: String(datos.get("telefono") || "").trim(),
      mensaje: String(datos.get("mensaje") || "").trim(),
      web: String(datos.get("web") || ""), // trampa anti-robot
      pagina: typeof window !== "undefined" ? window.location.pathname : "",
    };

    if (!cuerpo.nombre || !cuerpo.correo || !cuerpo.mensaje) {
      setEstado("error");
      setDetalle(f.incompleto);
      return;
    }

    setEstado("enviando");
    setDetalle("");
    try {
      const r = await fetch(CONTACTO_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cuerpo),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok && j.ok) {
        setEstado("ok");
        form.reset();
      } else {
        setEstado("error");
        setDetalle(j.error === "datos_incompletos" ? f.incompleto : f.error);
      }
    } catch {
      setEstado("error");
      setDetalle(f.error);
    }
  }

  return (
    <form onSubmit={enviar} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="eyebrow">{f.nombre}</span>
          <input
            type="text"
            name="nombre"
            required
            maxLength={120}
            autoComplete="name"
            className={campoClase}
            placeholder={f.nombrePlaceholder}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="eyebrow">{f.correo}</span>
          <input
            type="email"
            name="correo"
            required
            maxLength={160}
            autoComplete="email"
            className={campoClase}
            placeholder={f.correoPlaceholder}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className="eyebrow">
          {f.telefono} <span className="normal-case tracking-normal text-muted-2">{f.opcional}</span>
        </span>
        <input
          type="tel"
          name="telefono"
          maxLength={40}
          autoComplete="tel"
          className={campoClase}
          placeholder={f.telefonoPlaceholder}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="eyebrow">{f.mensaje}</span>
        <textarea
          name="mensaje"
          required
          rows={5}
          maxLength={4000}
          className={cn(campoClase, "resize-y")}
          placeholder={f.mensajePlaceholder}
        />
      </label>

      {/* Campo trampa: invisible para las personas, lo llenan los robots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          {f.noLlenar}
          <input type="text" name="web" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="inline-flex items-center justify-center bg-navy px-8 py-3.5 text-[15px] font-medium text-marfil transition-colors hover:bg-navy-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {estado === "enviando" ? f.enviando : f.enviar}
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-muted-2">{f.nota}</p>
      </div>

      <p
        role="status"
        aria-live="polite"
        className={cn(
          "text-[15px]",
          estado === "ok" && "text-gold-dark",
          estado === "error" && "text-[#a13b3b]",
          estado !== "ok" && estado !== "error" && "sr-only",
        )}
      >
        {estado === "ok" ? f.ok : estado === "error" ? detalle || f.error : ""}
      </p>
    </form>
  );
}
