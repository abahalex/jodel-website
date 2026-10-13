export const site = {
  name: "JODEL Cleaning",
  tag: "SPOTLESS SPACES. EXPERT CLEANERS.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://jodelcleaning.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "020 8936 7708",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@jodelcleaning.com",
  whatsapp: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, ""),
  coverage: "London and surrounding areas, subject to postcode availability",
};

export function whatsappHref() {
  if (!site.whatsapp) return "#quote";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi JODEL, I'd like a cleaning quote. My postcode is ")}`;
}
