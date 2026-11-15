export type RoomKey = "bedrooms" | "bathrooms" | "living" | "kitchens" | "utility" | "hallways" | "stairs";
export type ExtraKey = "ironing" | "laundry" | "windows" | "fridge" | "dishes" | "bedding";
export declare const rooms: readonly { readonly key: RoomKey; readonly label: string; readonly minutes: number }[];
export declare const extras: readonly { readonly key: ExtraKey; readonly label: string; readonly minutes: number }[];
export declare const MAX_ROOM_COUNT: number;
export declare const ROUNDING_MINUTES: number;
export declare function calculateCleaningEstimate(
  counts: Readonly<Partial<Record<RoomKey, number>>>,
  selected: Readonly<Partial<Record<ExtraKey, boolean>>>
): { readonly roomCount: number; readonly rawMinutes: number; readonly estimatedMinutes: number; readonly estimatedHours: number };
