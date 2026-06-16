/**
 * FASE 2 (estructura lista, automatizacion pendiente).
 *
 * El conteo de seguidores hoy es un BASELINE manual editable en
 * `config/paises.ts`. Para automatizarlo (Vercel Cron + Apify/API) se completa
 * la funcion `obtenerSeguidores` con el token de Apify y se persiste el
 * historico en un almacen (Vercel KV / Postgres / commit-back al repo).
 *
 * Falta para activarlo:
 *  1. Handles oficiales confirmados de cada red (ver pendientes en el reporte).
 *  2. APIFY_TOKEN en variables de entorno de Vercel.
 *  3. Un almacen para el historico (KV/DB) si se quiere graficar crecimiento.
 *
 * Mientras tanto, esta firma documenta el punto de integracion. No se invoca.
 */

import type { RedKey } from "@/config/paises";

export interface SnapshotSeguidores {
  codigoPais: "PE" | "CL" | "AR";
  red: RedKey;
  url: string;
  seguidores: number;
  fecha: string; // ISO YYYY-MM-DD
}

export interface ProveedorScraping {
  /** Devuelve el conteo de seguidores de un perfil dado su URL. */
  obtenerSeguidores(red: RedKey, url: string): Promise<number>;
}

/**
 * Implementacion de ejemplo con Apify. Requiere APIFY_TOKEN.
 * (Stub: lanza si se invoca sin token o sin actor configurado.)
 */
export function crearProveedorApify(token = process.env.APIFY_TOKEN): ProveedorScraping {
  return {
    async obtenerSeguidores(red, url) {
      if (!token) {
        throw new Error(
          "APIFY_TOKEN no configurado. Conteo automatico deshabilitado.",
        );
      }
      // TODO: ejecutar el actor de Apify correspondiente a `red`,
      // parsear el resultado y devolver el numero de seguidores de `url`.
      throw new Error(`Automatizacion pendiente para ${red}: ${url}`);
    },
  };
}
