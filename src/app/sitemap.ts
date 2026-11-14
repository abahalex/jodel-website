import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/terms", "/resources", "/resources/client-handbook", "/resources/cleaner-handbook", "/resources/client-instruction-checklist", "/resources/client-product-checklist", "/resources/attendance-payments", "/resources/calculator", "/resources/cleaning-jobs"];
  return [
    {url:site.siteUrl,lastModified:new Date(),changeFrequency:"monthly",priority:1},
    {url:site.siteUrl+"/privacy",lastModified:new Date(),changeFrequency:"yearly",priority:0.2},
    ...paths.map(path=>({url:site.siteUrl+path,lastModified:new Date(),changeFrequency:"yearly" as const,priority:0.4}))
  ];
}
