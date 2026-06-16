/** Formatea numeros con separador de miles (1.069, 6.038). Deterministico. */
export function fmt(n: number): string {
  return n.toLocaleString("de-DE");
}

/** Formato compacto para titulares grandes (7.1k). */
export function fmtCompacto(n: number): string {
  if (n < 1000) return String(n);
  const miles = n / 1000;
  const txt = miles >= 10 ? Math.round(miles).toString() : miles.toFixed(1);
  return `${txt.replace(".", ",")}k`;
}

/** Fecha YYYY-MM-DD a texto legible en espanol (16 jun 2026). */
export function fmtFecha(iso: string): string {
  const meses = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
  ];
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return `${d} ${meses[m - 1]} ${y}`;
}

/** Convierte un numero de WhatsApp legible a un enlace wa.me. */
export function waLink(whatsapp: string): string {
  const soloDigitos = whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${soloDigitos}`;
}
