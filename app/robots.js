export const dynamic = "force-static"
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cdn-cgi/"],
    },
    sitemap: "https://iranjanome.ir/sitemap.xml",
  };
}
