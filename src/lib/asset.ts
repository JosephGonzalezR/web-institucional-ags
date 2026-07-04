/**
 * Prefijo de assets estaticos. En modo preview (GitHub Pages en subpath) vale
 * "/web-institucional-ags"; en produccion (dominio propio) queda vacio.
 * next/image con `unoptimized` NO aplica basePath, por eso lo anteponemos aqui.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
