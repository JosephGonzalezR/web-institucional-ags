/** @type {import('next').NextConfig} */
// basePath: vacio en produccion (dominio propio en la raiz).
// En modo PREVIEW (GitHub Pages sin dominio) se pasa NEXT_PUBLIC_BASE_PATH=/web-institucional-ags.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export", // sitio 100% estatico -> GitHub Pages
  images: { unoptimized: true }, // next/image sin servidor de optimizacion
  trailingSlash: true, // rutas como /pagina/ para hosting estatico
  basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
