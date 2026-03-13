import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/login/", "/test/"],
    },
    sitemap: "https://www.gramihotel.co.kr/sitemap.xml",
  };
}
