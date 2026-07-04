import type { CodigoPais } from "@/config/paises";

/**
 * Registro legal por pais (credibilidad institucional).
 * PENDIENTE: completar con los numeros REALES. Mientras esten vacios, el bloque
 * de registro NO se muestra en el sitio (no se inventan datos legales).
 *
 * PE => RUC (11 digitos)   ·   CL => RUT   ·   AR => CUIT
 */
export interface Registro {
  tipo: "RUC" | "RUT" | "CUIT";
  numero: string;
  razonSocial: string;
}

export const REGISTROS: Partial<Record<CodigoPais, Registro>> = {
  // PE: { tipo: "RUC", numero: "20XXXXXXXXX", razonSocial: "..." },
  // CL: { tipo: "RUT", numero: "XX.XXX.XXX-X", razonSocial: "..." },
};

export const REGISTROS_LIST = (Object.entries(REGISTROS) as [
  CodigoPais,
  Registro,
][]).filter(([, r]) => r && r.numero);
