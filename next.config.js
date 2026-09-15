/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cuando reemplaces los placeholders por fotos reales alojadas en un
    // dominio externo (CDN, Mercado Shops, Cloudinary, etc.) agregá ese
    // dominio acá para poder usar <Image> con next/image.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
