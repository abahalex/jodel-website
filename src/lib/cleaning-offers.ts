// All prices shown are guide illustrations, not a confirmed booking quotation.
// TODO(JODEL): Confirm the short-notice dispatch policy, minimum hours and rush fee
// against actual cleaner availability, journey times and operating costs.
export const RUSH_FEE_GUIDE = 20;
export const ARRIVAL_TARGET_HOURS = 4;
export const OFFER_SERVICES = ["Priority Clean", "Short-notice cleaning"] as const;
export const PRIORITY_TASKS = [
  "Kitchen",
  "Bathrooms",
  "Floors",
  "Dusting",
  "Bedrooms",
  "Other tasks",
] as const;
export const REQUESTED_HOURS = [2, 3, 4] as const;

export function isPlanningService(service: string): boolean {
  return OFFER_SERVICES.some(item => item === service);
}
export function isUrgentService(service: string): boolean {
  return service === "Short-notice cleaning";
}
export function indicativeTotal(hours: number, service: string, hourlyGuide = 21.5): number {
  return hours * hourlyGuide + (isUrgentService(service) ? RUSH_FEE_GUIDE : 0);
}
