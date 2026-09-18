import type { CodigoPais } from "@/config/paises";

/**
 * DATOS LEGALES DE LA ORGANIZACION.
 *
 * La operacion de AGS la respalda una sola persona juridica peruana. Estos
 * datos son los MISMOS que figuran en la ficha RUC de SUNAT y en las cuentas
 * de cobro (requisito de las pasarelas de pago: la razon social y el RUC
 * visibles en la web tienen que coincidir con los de la cuenta).
 */
export const EMPRESA = {
  razonSocial: "EDUCAPROJECT S.A.C.S",
  tipoDoc: "RUC",
  numeroDoc: "20611803436",
  pais: "Peru",
  domicilio: "Jiron Manuel del Pino 252, Lince, Lima, Peru",
  representante: "Joseph Anderson Gonzalez Rojas, Gerente General",
} as const;

/**
 * Registro legal por pais (credibilidad institucional).
 * Mientras un pais no tenga registro propio NO se muestra: no se inventan
 * datos legales.
 *
 * PE => RUC (11 digitos)   ·   CL => RUT   ·   AR => CUIT
 */
export interface Registro {
  tipo: "RUC" | "RUT" | "CUIT";
  numero: string;
  razonSocial: string;
}

export const REGISTROS: Partial<Record<CodigoPais, Registro>> = {
  PE: {
    tipo: EMPRESA.tipoDoc,
    numero: EMPRESA.numeroDoc,
    razonSocial: EMPRESA.razonSocial,
  },
  // CL: { tipo: "RUT", numero: "XX.XXX.XXX-X", razonSocial: "..." },
};

export const REGISTROS_LIST = (Object.entries(REGISTROS) as [
  CodigoPais,
  Registro,
][]).filter(([, r]) => r && r.numero);
