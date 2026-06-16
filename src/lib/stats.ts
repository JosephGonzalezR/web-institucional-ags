import { PAISES, REDES_ORDEN, type RedKey } from "@/config/paises";

/**
 * Agregados de credibilidad calculados desde `config/paises.ts`.
 * Solo suma datos CONFIRMADOS (seguidores != null). Lo pendiente no se inventa.
 */

export interface PorRed {
  red: RedKey;
  seguidores: number;
  cuentasConfirmadas: number;
  cuentasPorConfirmar: number;
}

export interface Stats {
  seguidoresConfirmados: number;
  porRed: PorRed[];
  cuentasEnlazadas: number; // redes con URL conocida
  cuentasPorConfirmar: number; // redes sin URL aun
  seguidoresPorConfirmar: number; // redes con URL pero sin conteo
  paises: number;
  websActivas: number;
  whatsappActivos: number;
  baseline: string;
}

export function calcularStats(): Stats {
  let seguidoresConfirmados = 0;
  let cuentasEnlazadas = 0;
  let cuentasPorConfirmar = 0;
  let seguidoresPorConfirmar = 0;
  let websActivas = 0;
  let whatsappActivos = 0;
  let baseline = "";

  const acumPorRed: Record<RedKey, PorRed> = {
    instagram: { red: "instagram", seguidores: 0, cuentasConfirmadas: 0, cuentasPorConfirmar: 0 },
    facebook: { red: "facebook", seguidores: 0, cuentasConfirmadas: 0, cuentasPorConfirmar: 0 },
    tiktok: { red: "tiktok", seguidores: 0, cuentasConfirmadas: 0, cuentasPorConfirmar: 0 },
  };

  for (const p of PAISES) {
    if (p.web) websActivas += 1;
    if (p.whatsapp) whatsappActivos += 1;

    for (const red of REDES_ORDEN) {
      const r = p.redes[red];
      if (r.fecha && (!baseline || r.fecha < baseline)) baseline = r.fecha;

      if (r.url) {
        cuentasEnlazadas += 1;
      } else {
        cuentasPorConfirmar += 1;
      }

      if (r.seguidores != null) {
        seguidoresConfirmados += r.seguidores;
        acumPorRed[red].seguidores += r.seguidores;
        acumPorRed[red].cuentasConfirmadas += 1;
      } else {
        if (r.url) seguidoresPorConfirmar += 1;
        acumPorRed[red].cuentasPorConfirmar += 1;
      }
    }
  }

  return {
    seguidoresConfirmados,
    porRed: REDES_ORDEN.map((red) => acumPorRed[red]),
    cuentasEnlazadas,
    cuentasPorConfirmar,
    seguidoresPorConfirmar,
    paises: PAISES.length,
    websActivas,
    whatsappActivos,
    baseline: baseline || "2026-06-16",
  };
}

export const STATS = calcularStats();
