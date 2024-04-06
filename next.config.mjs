/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["www.ujacka.gr", "brunisapartments.com", "alexaphotos.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ujacka.gr",
      },
      {
        protocol: "https",
        hostname: "**.brunisapartments.com",
      },
      {
        hostname: "https",
        hostname: "**.alexaphotos.com",
      },
    ],
  },
};

// module.exports

// module.exports = {
//   images: {
//     domains: ["www.ujacka.gr"],
//   },
// };

export default nextConfig;
