// JODEL's transparent, provisional regular-clean planning model.
// These minutes are assumptions, NOT survey-backed or verified against actual visits.
// Preserve published behaviour until real JODEL cleaning records can calibrate it.
export const rooms = Object.freeze([
  { key: "bedrooms", label: "Bedrooms", minutes: 25 },
  { key: "bathrooms", label: "Bathrooms", minutes: 35 },
  { key: "living", label: "Living & dining rooms", minutes: 25 },
  { key: "kitchens", label: "Kitchens", minutes: 40 },
  { key: "utility", label: "Study / utility rooms", minutes: 15 },
  { key: "hallways", label: "Hallways", minutes: 12 },
  { key: "stairs", label: "Staircases", minutes: 12 },
]);

export const extras = Object.freeze([
  { key: "ironing", label: "Ironing", minutes: 30 },
  { key: "laundry", label: "Folding laundry", minutes: 20 },
  { key: "windows", label: "Internal windows", minutes: 25 },
  { key: "fridge", label: "Inside fridge", minutes: 20 },
  { key: "dishes", label: "Washing dishes / loading dishwasher", minutes: 15 },
  { key: "bedding", label: "Changing bed sheets", minutes: 15 },
]);

export const MAX_ROOM_COUNT = 10;
export const ROUNDING_MINUTES = 30;

function boundedCount(value) {
  return Number.isInteger(value) ? Math.max(0, Math.min(MAX_ROOM_COUNT, value)) : 0;
}

export function calculateCleaningEstimate(counts, selected) {
  const roomCount = rooms.reduce((total, room) => total + boundedCount(counts?.[room.key]), 0);
  // No results for an empty property, even if extra tasks are selected.
  if (roomCount === 0) return { roomCount: 0, rawMinutes: 0, estimatedMinutes: 0, estimatedHours: 0 };
  const roomMinutes = rooms.reduce((total, room) => total + boundedCount(counts?.[room.key]) * room.minutes, 0);
  const extraMinutes = extras.reduce((total, task) => total + (selected?.[task.key] === true ? task.minutes : 0), 0);
  const rawMinutes = roomMinutes + extraMinutes;
  const estimatedMinutes = Math.ceil(rawMinutes / ROUNDING_MINUTES) * ROUNDING_MINUTES;
  return { roomCount, rawMinutes, estimatedMinutes, estimatedHours: estimatedMinutes / 60 };
}
