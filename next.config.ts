
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/terms-and-conditions",
        destination: "/legal/terms-policies",
        permanent: true,
      },
      {
        source: "/fee-refund-policy",
        destination: "/legal/fee-refund",
        permanent: true,
      },
      {
        source: "/child-protection-policy",
        destination: "/legal/child-protection",
        permanent: true,
      },
      {
        source: "/cookie-policy",
        destination: "/legal/cookie-policy",
        permanent: true,
      },
      {
        source: "/legal-disclaimer",
        destination: "/legal/legal-disclaimer",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
