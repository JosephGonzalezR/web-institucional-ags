/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // sitio 100% estatico -> GitHub Pages
  images: { unoptimized: true }, // next/image sin servidor de optimizacion
  trailingSlash: true, // rutas como /pagina/ para hosting estatico
};

export default nextConfig;
